// Mistral AI Service
const MISTRAL_API_KEY = "UyFZtjZY3r5aNe1th2qtx6IBLynCc0ai";
const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions";

// Model fallback chain (from best to acceptable)
const MODELS = ["mistral-medium", "mistral-small", "mistral-tiny"];

// Delay helper
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Fix common JSON issues from AI responses
function fixJSON(jsonString) {
    let fixed = jsonString;
    
    // Remove any content before the first {
    const firstBrace = fixed.indexOf('{');
    if (firstBrace > 0) {
        fixed = fixed.slice(firstBrace);
    }
    
    // Remove any content after the last }
    const lastBrace = fixed.lastIndexOf('}');
    if (lastBrace !== -1 && lastBrace < fixed.length - 1) {
        fixed = fixed.slice(0, lastBrace + 1);
    }
    
    // Fix trailing commas before } or ]
    fixed = fixed.replace(/,\s*}/g, '}');
    fixed = fixed.replace(/,\s*]/g, ']');
    
    // Fix missing quotes around property names
    fixed = fixed.replace(/([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)(\s*:)/g, '$1"$2"$3');
    
    // Fix single quotes to double quotes
    fixed = fixed.replace(/'/g, '"');
    
    // Remove control characters (but keep newlines for now)
    fixed = fixed.replace(/[\x00-\x09\x0B-\x1F\x7F-\x9F]/g, '');
    
    // Replace actual newlines with escaped newlines inside strings
    // This is a simplified approach - remove newlines that break JSON
    fixed = fixed.replace(/\n/g, ' ');
    
    return fixed;
}

// Validate question structure
function validateQuestion(question) {
    if (!question || typeof question !== 'object') {
        throw new Error("Question is not an object");
    }
    if (!question.sentence || typeof question.sentence !== 'string') {
        throw new Error("Missing or invalid 'sentence' field");
    }
    if (!Array.isArray(question.options) || question.options.length !== 5) {
        throw new Error("Missing or invalid 'options' array (need exactly 5)");
    }
    if (typeof question.correctIndex !== 'number' || question.correctIndex < 0 || question.correctIndex > 4) {
        throw new Error("Missing or invalid 'correctIndex' (must be 0-4)");
    }
    if (!question.explanation || typeof question.explanation !== 'string') {
        throw new Error("Missing or invalid 'explanation' field");
    }
    return true;
}

const mistralService = {

    async generateSingleQuestion(config, index, total, modelIndex = 0, attempt = 1) {
        const MAX_ATTEMPTS = 3;
        const model = MODELS[modelIndex] || MODELS[MODELS.length - 1];

        // Get blueprints
        const contentBlueprint = getContentBlueprint(config.contentBlueprint);
        const formatBlueprint = getFormatBlueprint(config.formatBlueprint);
        
        // Determine category for output
        const categoryFocus = contentBlueprint.id === 'mixed' 
            ? (Math.random() > 0.5 ? 'Vocabulary' : 'Grammar')
            : (contentBlueprint.id === 'vocabulary' ? 'Vocabulary' : 'Grammar');

        // Generate prompt using blueprints with random seed for variety
        const sessionSeed = Date.now() + Math.random();
        const varietySeed = Math.floor(sessionSeed % 10000);
        
        const basePrompt = generatePrompt(config.contentBlueprint, config.formatBlueprint, config);
        
        // Add variety instruction based on question index
        const varietyHints = [
            `Question #${index + 1} - Make this completely different from previous questions.`,
            `Focus on an unusual aspect of ${config.topic}.`,
            `Use a fresh scenario that hasn't been tested before.`,
            `Challenge the user with an unexpected context.`,
            `Create a question about a nuanced or subtle distinction.`
        ];
        const varietyHint = varietyHints[index % varietyHints.length];
        
        const outputFormat = `

CRITICAL OUTPUT RULES:
- Respond with ONLY a valid JSON object
- No markdown, no code blocks, no extra text before or after
- Keep explanation concise (under 150 characters)
- Ensure valid JSON syntax

JSON FORMAT:
{"blueprint":"${formatBlueprint.id}","category":"${categoryFocus}","sentence":"...","options":["a","b","c","d","e"],"correctIndex":0,"explanation":"brief explanation","academicContext":"${config.topic}"}

FORMAT SPECIFICS:
${formatBlueprint.id === 'cloze_test' ? '- Use _____ as the placeholder' : ''}
${formatBlueprint.id === 'error_correction' ? '- Mark errors with ***error***' : ''}
${formatBlueprint.id === 'word_formation' ? '- Use format: _____ (baseword)' : ''}
${formatBlueprint.id === 'collocation' ? '- Test word partnerships' : ''}
${formatBlueprint.id === 'register_shift' ? '- Use "Informal: ... Formal: ..." format' : ''}`;

        const prompt = varietyHint + '\n\n' + basePrompt + outputFormat + '\n\nVARIETY SEED: ' + varietySeed;

        try {
            const response = await fetch(MISTRAL_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${MISTRAL_API_KEY}`
                },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        {
                            role: "system",
                            content: "You are an expert academic English exam creator. CRITICAL: Respond with ONLY valid compact JSON. No markdown, no code blocks, no explanations, no line breaks in strings. Use escaped \\\" for quotes inside strings. Keep response concise."
                        },
                        {
                            role: "user",
                            content: prompt
                        }
                    ],
                    temperature: 0.85,  // Higher for more variety
                    max_tokens: 600,  // Reduced to force conciseness
                    response_format: { type: "json_object" }  // Request JSON mode if available
                })
            });

            // Handle capacity exceeded error
            if (response.status === 429 || response.status === 503) {
                const errorData = await response.json().catch(() => ({}));
                
                // Try next model if available
                if (modelIndex < MODELS.length - 1) {
                    console.warn(`Model ${model} at capacity, trying ${MODELS[modelIndex + 1]}...`);
                    await delay(1000);
                    return this.generateSingleQuestion(config, index, total, modelIndex + 1, attempt);
                }
                
                throw new Error("All Mistral AI models are at capacity. Please try again in a few moments.");
            }

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `Mistral API error: ${response.status}`);
            }

            const result = await response.json();
            let content = result.choices?.[0]?.message?.content;
            
            if (!content) {
                throw new Error("No content received from Mistral API");
            }

            console.log("Raw AI response:", content.substring(0, 200) + "...");

            // Try to parse with multiple strategies
            let question = null;
            let parseErrors = [];

            // Strategy 1: Direct parse
            try {
                question = JSON.parse(content);
            } catch (e) {
                parseErrors.push(`Direct parse: ${e.message}`);
            }

            // Strategy 2: Clean and parse
            if (!question) {
                try {
                    const cleaned = fixJSON(content);
                    console.log("Cleaned JSON:", cleaned.substring(0, 200) + "...");
                    question = JSON.parse(cleaned);
                } catch (e) {
                    parseErrors.push(`Cleaned parse: ${e.message}`);
                }
            }

            // Strategy 3: Extract JSON from text and parse
            if (!question) {
                try {
                    const jsonMatch = content.match(/\{[\s\S]*?\}(?=\s*$)/);
                    if (jsonMatch) {
                        const extracted = fixJSON(jsonMatch[0]);
                        question = JSON.parse(extracted);
                    }
                } catch (e) {
                    parseErrors.push(`Extracted parse: ${e.message}`);
                }
            }

            // Strategy 4: Try to reconstruct from partial JSON
            if (!question) {
                try {
                    // Find what looks like the start of our expected JSON
                    const startIdx = content.indexOf('{"blueprint"');
                    if (startIdx !== -1) {
                        let partial = content.slice(startIdx);
                        // Try to close it properly
                        if (!partial.endsWith('}')) {
                            partial += '}';
                        }
                        // Balance braces
                        const openBraces = (partial.match(/\{/g) || []).length;
                        const closeBraces = (partial.match(/\}/g) || []).length;
                        while (closeBraces < openBraces) {
                            partial += '}';
                        }
                        question = JSON.parse(fixJSON(partial));
                    }
                } catch (e) {
                    parseErrors.push(`Reconstructed parse: ${e.message}`);
                }
            }

            if (!question) {
                console.error("All parse strategies failed:", parseErrors);
                throw new Error(`JSON parse failed: ${parseErrors[0]}`);
            }

            // Validate structure
            try {
                validateQuestion(question);
            } catch (validationError) {
                throw new Error(`Invalid question structure: ${validationError.message}`);
            }

            // Ensure blueprint is set
            if (!question.blueprint) {
                question.blueprint = blueprint.id;
            }

            return {
                ...question,
                id: `q-${Date.now()}-${index}`
            };
            
        } catch (error) {
            // Retry on JSON errors
            if (attempt < MAX_ATTEMPTS && (
                error.message.includes('JSON') || 
                error.message.includes('parse') ||
                error.message.includes('Invalid')
            )) {
                console.warn(`Parse error (attempt ${attempt}), retrying...`, error.message);
                await delay(1000 * attempt);
                return this.generateSingleQuestion(config, index, total, modelIndex, attempt + 1);
            }

            // Network errors or capacity issues - try fallback model
            if ((error.message.includes('capacity') || error.message.includes('network') || error.name === 'TypeError') && modelIndex < MODELS.length - 1) {
                console.warn(`Error with ${model}, trying fallback...`, error.message);
                await delay(1000 * (modelIndex + 1));
                return this.generateSingleQuestion(config, index, total, modelIndex + 1, 1);
            }
            
            throw error;
        }
    },

    async generateQuestions(config) {
        const questions = [];
        
        for (let i = 0; i < config.count; i++) {
            try {
                const question = await this.generateSingleQuestion(config, i, config.count);
                questions.push(question);
            } catch (error) {
                console.error(`Error generating question ${i + 1}:`, error);
                // Retry once
                try {
                    await delay(2000);
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
