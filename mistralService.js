// Mistral AI Service
const MISTRAL_API_KEY = "UyFZtjZY3r5aNe1th2qtx6IBLynCc0ai";
const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions";

const mistralService = {
    async generateSingleQuestion(config, index, total) {
        const categoryFocus = config.category === 'Mixed' 
            ? (Math.random() > 0.5 ? 'Vocabulary' : 'Grammar')
            : config.category;

        const prompt = `Generate 1 high-level academic English ${categoryFocus} exam question for an ${config.difficulty} level learner.
Subject Matter: ${config.topic}.

${categoryFocus === 'Vocabulary' ? `
VOCABULARY QUESTION REQUIREMENTS:
- Test a "high-register" academic word (e.g., deterrent, exacerbate, mitigation, infrastructure, substantiate, elucidate, proliferate, ubiquitous)
- Remove a formal word where surrounding context provides specific logic clues
- Example: "The significant capital required for the project and the inherent risks involved served as a major _____ for potential investors." (Answer: deterrent)
- Provide 5 options total: 1 correct, 4 plausible distractors
` : `
GRAMMAR QUESTION REQUIREMENTS:
- Test tense accuracy, prepositions, or connectors based on explicit "markers"
- Include a specific time marker or verb-preposition combination
- Example: "Since the industrial revolution, carbon dioxide concentrations in the atmosphere _____ at an unprecedented rate." (Answer: have increased)
- Provide 5 options total: 1 correct, 4 plausible distractors
`}

GENERAL CONSTRAINTS:
- Use exactly 5 options (1 correct, 4 wrong)
- Ensure sentence is strictly academic (formal, impersonal, complex)
- Include detailed explanation of the clue or grammatical marker used
- Use "_____" (5 underscores) as the placeholder for the missing word

You must respond with ONLY a valid JSON object in this exact format (no markdown, no code blocks):
{"category":"${categoryFocus}","sentence":"... _____ ...","options":["option1","option2","option3","option4","option5"],"correctIndex":0,"explanation":"...","academicContext":"${config.topic}"}`;

        const response = await fetch(MISTRAL_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${MISTRAL_API_KEY}`
            },
            body: JSON.stringify({
                model: "mistral-medium",
                messages: [
                    {
                        role: "system",
                        content: "You are an expert academic English exam creator. Respond with valid JSON only. No markdown formatting, no code blocks, no explanatory text before or after the JSON."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 800
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Mistral API error: ${response.status}`);
        }

        const result = await response.json();
        let content = result.choices?.[0]?.message?.content;
        
        if (!content) {
            throw new Error("No content received from Mistral API");
        }

        // Clean the content - remove control characters and normalize
        content = content.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
        
        // Remove markdown code blocks if present
        content = content.trim();
        if (content.startsWith("```json")) {
            content = content.replace(/```json\s*/, "").replace(/```\s*$/, "");
        } else if (content.startsWith("```")) {
            content = content.replace(/```\s*/, "").replace(/```\s*$/, "");
        }
        
        // Trim again after removing code blocks
        content = content.trim();

        // Try to find JSON object if there's extra text
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            content = jsonMatch[0];
        }

        try {
            const question = JSON.parse(content);
            
            // Validate required fields
            if (!question.category || !question.sentence || !Array.isArray(question.options) || 
                question.options.length !== 5 || typeof question.correctIndex !== 'number' ||
                !question.explanation) {
                throw new Error("Invalid question structure received");
            }

            return {
                ...question,
                id: `q-${Date.now()}-${index}`
            };
        } catch (parseError) {
            console.error("JSON parse error:", parseError);
            console.error("Content received:", content);
            throw new Error(`Failed to parse question ${index + 1}: ${parseError.message}`);
        }
    },

    async generateQuestions(config) {
        const questions = [];
        
        // Generate questions one by one to avoid JSON parsing issues
        for (let i = 0; i < config.count; i++) {
            try {
                const question = await this.generateSingleQuestion(config, i, config.count);
                questions.push(question);
            } catch (error) {
                console.error(`Error generating question ${i + 1}:`, error);
                // Retry once
                try {
                    const question = await this.generateSingleQuestion(config, i, config.count);
                    questions.push(question);
                } catch (retryError) {
                    throw new Error(`Failed to generate question ${i + 1} after retry: ${retryError.message}`);
                }
            }
        }

        return questions;
    }
};
