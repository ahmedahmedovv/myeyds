// Academic English Master - Blueprint Definitions
// Blueprints define question generation templates with prompts, icons, and metadata

// ============================================
// VARIETY HELPERS (Prevent repetitive questions)
// ============================================

// Topic variations for each academic field to encourage variety
const TopicVariations = {
    'General Science': [
        'laboratory research methodology', 'experimental design', 'data analysis',
        'scientific collaboration', 'peer review processes', 'research ethics',
        'hypothesis formulation', 'statistical significance', 'control variables'
    ],
    'Economics': [
        'market analysis', 'fiscal policy', 'monetary systems', 'trade agreements',
        'economic indicators', 'supply chain dynamics', 'consumer behavior',
        'investment strategies', 'globalization effects'
    ],
    'History': [
        'primary source analysis', 'historiographical debates', 'archival research',
        'periodization concepts', 'causal relationships', 'historical methodology',
        'document preservation', 'oral history', 'material culture'
    ],
    'Technology': [
        'digital infrastructure', 'algorithmic processes', 'system architecture',
        'cybersecurity protocols', 'data privacy', 'machine learning applications',
        'technological convergence', 'innovation diffusion', 'digital transformation'
    ],
    'Medicine': [
        'clinical trials', 'diagnostic procedures', 'therapeutic interventions',
        'patient outcomes', 'epidemiological studies', 'pharmaceutical research',
        'medical ethics', 'healthcare systems', 'preventive medicine'
    ],
    'Literature': [
        'narrative structures', 'thematic analysis', 'literary criticism',
        'intertextual references', 'genre conventions', 'character development',
        'symbolic representation', 'rhetorical devices', 'canon formation'
    ],
    'Psychology': [
        'cognitive processes', 'behavioral patterns', 'experimental psychology',
        'developmental stages', 'neuropsychological research', 'social dynamics',
        'therapeutic approaches', 'statistical methods', 'research validity'
    ],
    'Sociology': [
        'social stratification', 'cultural norms', 'qualitative methods',
        'quantitative analysis', 'institutional structures', 'group dynamics',
        'social mobility', 'demographic trends', 'ethnographic research'
    ],
    'Environmental Science': [
        'climate systems', 'biodiversity conservation', 'sustainability practices',
        'ecological impacts', 'resource management', 'pollution control',
        'renewable energy', 'ecosystem services', 'environmental policy'
    ]
};

// Random academic vocabulary pools (rotate these in prompts)
const VocabPools = {
    formal: [
        'substantiate', 'exacerbate', 'mitigate', 'proliferate', 'ubiquitous',
        'inherent', 'comprehensive', 'empirical', 'theoretical', 'fundamental',
        'underlying', 'implications', 'constraints', 'framework', 'paradigm',
        'methodology', 'substantial', 'considerable', 'demonstrate', 'establish'
    ],
    grammar: [
        'subject-verb agreement', 'tense consistency', 'article usage', 'preposition',
        'nominalization', 'passive voice', 'relative clause', 'conditional',
        'modal verb', 'parallel structure'
    ],
    collocations: [
        'draw a conclusion', 'shed light on', 'conduct research', 'pose a challenge',
        'establish criteria', 'provide evidence', 'address the issue', 'adopt approach',
        'achieve objectives', 'maintain consistency'
    ]
};

// Get random subset from array
function getRandomSubset(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Get random variation for topic
function getTopicVariation(topic) {
    const variations = TopicVariations[topic] || ['general concepts'];
    return variations[Math.floor(Math.random() * variations.length)];
}

// Generate variety instruction for AI
function getVarietyInstruction() {
    const instructions = [
        'Create a completely original question unlike typical academic examples.',
        'Focus on an unusual or less common aspect of this topic.',
        'Use an unexpected context or scenario within this field.',
        'Test a nuanced distinction that advanced learners often miss.',
        'Create a question about a recent development or modern application.'
    ];
    return instructions[Math.floor(Math.random() * instructions.length)];
}

// ============================================
// CONTENT BLUEPRINTS (What to study)
// ============================================
const ContentBlueprints = [
    {
        id: 'mixed',
        name: 'Mixed Skills',
        shortName: 'Mixed',
        description: 'Both vocabulary and grammar combined',
        icon: '🎯',
        color: 'purple',
        prompt: (config) => {
            const specificFocus = getTopicVariation(config.topic);
            const varietyInstruction = getVarietyInstruction();
            const vocabExamples = getRandomSubset(VocabPools.formal, 5).join(', ');
            
            return `
CONTENT FOCUS: MIXED (Vocabulary + Grammar)
Specific context: ${specificFocus} within ${config.topic}.

${varietyInstruction}

RANDOMLY CHOOSE ONE:
Option A - VOCABULARY: Test words like: ${vocabExamples}
Option B - GRAMMAR: Test complex structures (perfect tenses, passive voice, prepositions, conditionals)

REQUIREMENTS:
- Make the question specifically about ${specificFocus}
- Avoid the most common or clichéd examples
- Context should be fresh and engaging
- Target ${config.difficulty} level precisely
`;
        }
    },
    {
        id: 'vocabulary',
        name: 'Academic Words',
        shortName: 'Words',
        description: 'Academic vocabulary and terminology',
        icon: '📚',
        color: 'amber',
        prompt: (config) => {
            const specificFocus = getTopicVariation(config.topic);
            const varietyInstruction = getVarietyInstruction();
            const vocabSample = getRandomSubset(VocabPools.formal, 8).join(', ');
            
            return `
CONTENT FOCUS: ACADEMIC VOCABULARY ONLY
Specific domain: ${specificFocus} within ${config.topic}.

${varietyInstruction}

WORD POOL (choose from or use similar): ${vocabSample}

ADDITIONAL OPTIONS:
- Discipline-specific terminology for ${config.topic}
- High-frequency academic collocations
- Words with subtle register differences

REQUIREMENTS:
- Test a word that C1-C2 learners need but often avoid
- Context must clearly indicate the correct choice
- Avoid testing the same words repeatedly (be creative)
- Focus on: ${specificFocus}
`;
        }
    },
    {
        id: 'grammar',
        name: 'Grammar & Structure',
        shortName: 'Grammar',
        description: 'Grammar rules and sentence structure',
        icon: '⚙️',
        color: 'emerald',
        prompt: (config) => {
            const specificFocus = getTopicVariation(config.topic);
            const varietyInstruction = getVarietyInstruction();
            const grammarTypes = getRandomSubset(VocabPools.grammar, 3).join(', ');
            
            return `
CONTENT FOCUS: GRAMMAR & STRUCTURE ONLY
Specific context: ${specificFocus} within ${config.topic}.

${varietyInstruction}

GRAMMAR ASPECTS (choose one): ${grammarTypes}

CONTEXT TO INCLUDE:
- Time markers or explicit context for tense questions
- Complex noun phrases for agreement questions
- Academic register markers for formality questions
- Source attribution for citation/integration questions

REQUIREMENTS:
- Create a sophisticated sentence about ${specificFocus}
- Make the grammar point essential to meaning, not arbitrary
- Avoid simplistic right/wrong - test nuanced understanding
- Level: ${config.difficulty}
`;
        }
    }
];

// ============================================
// FORMAT BLUEPRINTS (How to practice)
// ============================================
const FormatBlueprints = [
    {
        id: 'random',
        name: 'Surprise Me',
        shortName: 'Random',
        description: 'Mix of all question types for variety',
        icon: '🎲',
        color: 'slate',
        prompt: (contentPrompt, config) => `${contentPrompt}

FORMAT: RANDOM - Choose any engaging format, but make it fresh and unexpected.`
    },
    {
        id: 'cloze_test',
        name: 'Fill in the Blank',
        shortName: 'Fill Blank',
        description: 'Complete the sentence with the correct word',
        icon: '📝',
        color: 'blue',
        prompt: (contentPrompt, config) => {
            const clozeExamples = [
                'The preliminary findings failed to _____ the hypothesis, necessitating a revised approach.',
                'A _____ body of evidence now contradicts the earlier assumptions about this phenomenon.',
                'The researchers were compelled to _____ their methodology in light of new data.',
                'Such results would inevitably _____ further investigation into the underlying mechanisms.',
                'The study aims to _____ light on previously unexplored aspects of the theory.'
            ];
            const randomExample = clozeExamples[Math.floor(Math.random() * clozeExamples.length)];
            
            return `${contentPrompt}

FORMAT: FILL IN THE BLANK
Create a fill-in-the-blank with "_____" as placeholder.

EXAMPLE STYLE (but create your own): "${randomExample}"

REQUIREMENTS:
- One sentence only, academic and complex
- Context must strongly indicate the answer
- 5 options: 1 correct, 4 plausible but wrong
- Do NOT copy the example above - create original content
`;
        }
    },
    {
        id: 'error_correction',
        name: 'Spot the Error',
        shortName: 'Spot Error',
        description: 'Find and fix the mistake in the sentence',
        icon: '🔍',
        color: 'red',
        prompt: (contentPrompt, config) => {
            const errorExamples = [
                { sent: 'The data ***shows*** significant trends.', fix: 'show (data is plural)' },
                { sent: 'The study ***were*** conducted over five years.', fix: 'was' },
                { sent: 'The results were ***very*** significant.', fix: 'highly (register)' },
                { sent: 'The researcher ***did*** an experiment.', fix: 'conducted (formal)' },
                { sent: 'This ***imply*** that further research is needed.', fix: 'implies' }
            ];
            const randomExample = errorExamples[Math.floor(Math.random() * errorExamples.length)];
            
            return `${contentPrompt}

FORMAT: ERROR CORRECTION
One sentence with ONE error marked by ***error***.

EXAMPLE STYLE: "${randomExample.sent}" (Fix: ${randomExample.fix})

REQUIREMENTS:
- Create your own original sentence
- Mark the error clearly with ***word***
- Error should be common at ${config.difficulty} level
- 5 corrected versions as options
`;
        }
    },
    {
        id: 'word_formation',
        name: 'Word Forms',
        shortName: 'Word Forms',
        description: 'Transform the word to fit the context',
        icon: '🔄',
        color: 'cyan',
        prompt: (contentPrompt, config) => {
            const transformExamples = [
                { base: 'analyze', forms: ['analysis', 'analyzes', 'analytical', 'analyzing', 'analyzed'] },
                { base: 'significant', forms: ['significance', 'signify', 'significantly', 'signification', 'significant'] },
                { base: 'controversy', forms: ['controversial', 'controversially', 'controvert', 'controverted', 'controversies'] },
                { base: 'empirical', forms: ['empirically', 'empiricism', 'empiricist', 'empirics', 'empiric'] },
                { base: 'method', forms: ['methodology', 'methodological', 'methodically', 'methodologies', 'methodist'] }
            ];
            const randomExample = transformExamples[Math.floor(Math.random() * transformExamples.length)];
            
            return `${contentPrompt}

FORMAT: WORD FORMATION
Base word in parentheses, blank to fill with transformed form.

EXAMPLE: "The _____ (${randomExample.base}) of the data..." 
Options: [${randomExample.forms.join(', ')}]

REQUIREMENTS:
- Create original sentence with your own word choice
- Transform must change word class (noun↔verb↔adjective)
- Only ONE option fits both grammatically AND semantically
- Use academic vocabulary appropriate for ${config.difficulty}
`;
        }
    },
    {
        id: 'collocation',
        name: 'Word Pairs',
        shortName: 'Word Pairs',
        description: 'Complete common academic word combinations',
        icon: '🔗',
        color: 'orange',
        prompt: (contentPrompt, config) => {
            const collocations = [
                { phrase: '_____ a conclusion', answer: 'draw/reach', distractors: ['make', 'get', 'have', 'do'] },
                { phrase: '_____ light on', answer: 'shed/throw', distractors: ['put', 'give', 'send', 'cast'] },
                { phrase: '_____ research', answer: 'conduct/carry out', distractors: ['make', 'do', 'get', 'have'] },
                { phrase: '_____ evidence', answer: 'substantial/compelling', distractors: ['big', 'much', 'high', 'strong'] },
                { phrase: '_____ attention to', answer: 'pay/give', distractors: ['make', 'put', 'set', 'place'] }
            ];
            const randomColl = collocations[Math.floor(Math.random() * collocations.length)];
            
            return `${contentPrompt}

FORMAT: ACADEMIC COLLOCATION
Test word partnership (collocation).

EXAMPLE: "The study aims to ${randomColl.phrase} the issue."

REQUIREMENTS:
- Create fresh collocation (not the example above)
- Use authentic academic partnerships
- All options grammatically possible, only ONE natural
- Context must make the partnership clear
`;
        }
    },
    {
        id: 'register_shift',
        name: 'Formal Style',
        shortName: 'Formal',
        description: 'Transform casual language to academic style',
        icon: '✨',
        color: 'indigo',
        prompt: (contentPrompt, config) => {
            const registerExamples = [
                { informal: 'The results were really good.', formal: 'highly favorable/substantial/promising' },
                { informal: 'Scientists looked at the data.', formal: 'examined/investigated/analyzed' },
                { informal: 'This theory has a lot of problems.', formal: 'considerable/substantial limitations' },
                { informal: 'The study found out that...', formal: 'determined/ascertained that' },
                { informal: 'We got the data from...', formal: 'obtained/acquired/derived the data from' }
            ];
            const randomExample = registerExamples[Math.floor(Math.random() * registerExamples.length)];
            
            return `${contentPrompt}

FORMAT: REGISTER ADAPTATION
Informal → Formal transformation.

EXAMPLE STYLE:
Informal: "${randomExample.informal}"
Formal: "${randomExample.informal.replace(/really good|looked at|a lot of|found out|got/g, '_____')}"

REQUIREMENTS:
- Create your own informal sentence
- Use clearly casual language (contractions, phrasal verbs, simple words)
- Formal options must be genuinely academic
- Only the best register choice is correct
`;
        }
    }
];

// ============================================
// CONSTANTS & HELPERS
// ============================================

const BlueprintType = {
    // Content types
    MIXED: 'mixed',
    VOCABULARY: 'vocabulary',
    GRAMMAR: 'grammar',
    // Format types  
    RANDOM: 'random',
    CLOZE_TEST: 'cloze_test',
    ERROR_CORRECTION: 'error_correction',
    WORD_FORMATION: 'word_formation',
    COLLOCATION: 'collocation',
    REGISTER_SHIFT: 'register_shift'
};

// Get content blueprint by ID
function getContentBlueprint(id) {
    return ContentBlueprints.find(b => b.id === id) || ContentBlueprints[0];
}

// Get format blueprint by ID
function getFormatBlueprint(id) {
    return FormatBlueprints.find(b => b.id === id) || FormatBlueprints[0];
}

// Get display name for format (used in question header)
function getFormatDisplayName(formatId) {
    const blueprint = FormatBlueprints.find(b => b.id === formatId);
    if (blueprint) {
        return `${blueprint.icon} ${blueprint.shortName}`;
    }
    return '📝 Question';
}

// Generate complete prompt for Mistral AI
function generatePrompt(contentId, formatId, config) {
    const contentBlueprint = getContentBlueprint(contentId);
    const formatBlueprint = getFormatBlueprint(formatId);
    
    return formatBlueprint.prompt(contentBlueprint.prompt(config), config);
}

// Export for use in other modules
// export { 
//     ContentBlueprints, 
//     FormatBlueprints, 
//     BlueprintType,
//     getContentBlueprint,
//     getFormatBlueprint,
//     getFormatDisplayName,
//     generatePrompt
// };
