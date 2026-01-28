// Academic English Master - Blueprint Definitions
// Blueprints define question generation templates with prompts, icons, and metadata

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
        prompt: (config) => `
CONTENT FOCUS: MIXED (Vocabulary + Grammar)
Randomly choose to test either advanced academic vocabulary OR sophisticated grammar structures.

VOCABULARY ASPECTS:
- High-register academic words (e.g., substantiate, exacerbate, mitigate, proliferate, ubiquitous, inherent, comprehensive, empirical)
- Word choice in formal academic context
- Precision of terminology for ${config.topic}

GRAMMAR ASPECTS:
- Complex tense usage (perfect tenses, future in the past, conditionals)
- Passive voice and nominalization
- Prepositions and articles in academic contexts
- Subordinate clauses and sophisticated connectors
- Subject-verb agreement with complex subjects
`
    },
    {
        id: 'vocabulary',
        name: 'Academic Words',
        shortName: 'Words',
        description: 'Academic vocabulary and terminology',
        icon: '📚',
        color: 'amber',
        prompt: (config) => `
CONTENT FOCUS: ACADEMIC VOCABULARY ONLY
Test sophisticated, high-register vocabulary specific to ${config.topic} and general academic English.

REQUIREMENTS:
- Use C1-C2 level academic vocabulary (AWL - Academic Word List)
- Focus on words like: substantiate, exacerbate, mitigate, proliferate, ubiquitous, inherent, comprehensive, empirical, theoretical, fundamental, underlying, implications, constraints, framework, paradigm, methodology
- Test precision of word choice in formal context
- Include discipline-specific terminology for ${config.topic}

AVOID:
- Simple everyday vocabulary
- Testing only basic synonyms
- Overly obscure or archaic words

FOCUS ON:
- Words that show academic register
- Collocations common in academic writing
- Nuanced distinctions between similar terms
`
    },
    {
        id: 'grammar',
        name: 'Grammar & Structure',
        shortName: 'Grammar',
        description: 'Grammar rules and sentence structure',
        icon: '⚙️',
        color: 'emerald',
        prompt: (config) => `
CONTENT FOCUS: GRAMMAR & STRUCTURE ONLY
Test sophisticated grammatical structures common in academic ${config.topic} writing.

GRAMMAR TOPICS TO COVER:
- Tense usage: present perfect vs simple past, future perfect, continuous aspects
- Passive voice and nominalization (turning verbs into nouns)
- Articles: a/an/the/zero article in academic contexts
- Prepositions: dependent prepositions after verbs/adjectives (interested IN, focus ON, responsible FOR)
- Conditionals: mixed conditionals, inverted conditionals
- Subjunctive and formal structures
- Relative clauses: defining vs non-defining, preposition placement
- Parallel structure and agreement
- Word order in complex sentences
- Modals for deduction and probability

INCLUDE:
- Explicit time markers or context clues
- Complex sentence structures typical of academic writing
- Formal, impersonal constructions
`
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

FORMAT: RANDOM - Choose any engaging question format appropriate for the content.`
    },
    {
        id: 'cloze_test',
        name: 'Fill in the Blank',
        shortName: 'Fill Blank',
        description: 'Complete the sentence with the correct word',
        icon: '📝',
        color: 'blue',
        prompt: (contentPrompt, config) => `${contentPrompt}

FORMAT: FILL IN THE BLANK (Cloze Test)
Create a fill-in-the-blank question with a single missing word or short phrase.

REQUIREMENTS:
- Present one academic sentence with ONE key element replaced by "_____"
- Context must provide specific, logical clues for the answer
- The missing item should be the focal point of testing

EXAMPLES:
- Vocabulary: "The preliminary data failed to _____ the hypothesis, requiring a complete redesign." (substantiate)
- Grammar: "By the time the conference concludes, the researchers _____ their findings to three journals." (will have submitted)
- Vocabulary: "A _____ body of evidence contradicts the earlier assumptions." (substantial)

RULES:
- Use exactly 5 options: 1 correct, 4 plausible distractors
- All options should be the same part of speech
- Distractors should be contextually plausible but clearly wrong
- Include strong contextual clues in the sentence
`
    },
    {
        id: 'error_correction',
        name: 'Spot the Error',
        shortName: 'Spot Error',
        description: 'Find and fix the mistake in the sentence',
        icon: '🔍',
        color: 'red',
        prompt: (contentPrompt, config) => `${contentPrompt}

FORMAT: ERROR CORRECTION
Present a complete academic sentence containing ONE deliberate error.

REQUIREMENTS:
- Include exactly ONE error in the sentence
- Mark the error clearly with ***error*** markers (e.g., "The study ***were*** conducted")
- The error should be a common mistake at ${config.difficulty} level

ERROR TYPES BY CONTENT:
- Vocabulary: Wrong word choice, register too informal ("very" instead of "highly"), wrong collocation
- Grammar: Subject-verb disagreement, wrong tense, article error, preposition error, wrong connector

EXAMPLES:
- Grammar: "The study ***were*** conducted over five years." (were → was)
- Grammar: "The data ***shows*** significant trends." (shows → show - data is plural)
- Vocabulary: "The results were ***very*** significant." (very → highly - register too informal)
- Vocabulary: "The researcher ***did*** an experiment." (did → conducted - wrong register)

OPTIONS:
- Provide 5 corrected versions of the sentence
- OR provide 5 options for the specific word that needs correction
- Include the error-free sentence as one option
`
    },
    {
        id: 'word_formation',
        name: 'Word Forms',
        shortName: 'Word Forms',
        description: 'Transform the word to fit the context',
        icon: '🔄',
        color: 'cyan',
        prompt: (contentPrompt, config) => `${contentPrompt}

FORMAT: WORD FORMATION
Present a sentence requiring transformation of a base word to fit grammatically.

REQUIREMENTS:
- Show a base word in parentheses: (analyze), (significant), (controversy)
- The answer must be a different form of that word
- Include "_____" where the transformed word belongs

TRANSFORMATION TYPES:
- Noun → Verb: "The _____ (analysis) revealed..." (analysis → analyzed)
- Verb → Noun: "The _____ (investigate) showed..." (investigate → investigation)
- Adjective → Noun: "The _____ (significant) of this..." (significant → significance)
- Noun → Adjective: "A highly _____ (controversy) theory" (controversy → controversial)
- Verb → Adjective: "The _____ (predict) outcome" (predict → predicted/predictable)

EXAMPLES:
- "The _____ (analyze) of the data revealed patterns." (analysis)
- "The theory remains highly _____ (controversy)." (controversial)
- "This is a _____ (predict) result given the circumstances." (predictable)

RULES:
- Base word should be commonly known
- Transformed word must be academic register
- Provide 5 different forms of the same word root
- Only ONE form should fit both grammatically AND semantically
`
    },
    {
        id: 'collocation',
        name: 'Word Pairs',
        shortName: 'Word Pairs',
        description: 'Complete common academic word combinations',
        icon: '🔗',
        color: 'orange',
        prompt: (contentPrompt, config) => `${contentPrompt}

FORMAT: ACADEMIC COLLOCATION
Test knowledge of word partnerships (collocations) common in academic writing.

REQUIREMENTS:
- Present a sentence with a missing word that forms a strong collocation
- The answer must be the specific word that naturally partners with another word in the sentence

COLLOCATION TYPES:
- Verb + Noun: _____ a conclusion, _____ research, _____ evidence, _____ a study, _____ an experiment
- Adjective + Noun: _____ evidence, _____ research, _____ analysis, _____ impact, _____ review
- Adverb + Adjective: _____ significant, _____ different, _____ important, _____ likely, _____ clear
- Noun + Preposition: interest _____, focus _____ , approach _____, reaction _____

EXAMPLES:
- "The study aims to _____ light on the mechanisms." (shed/throw - collocates with 'light')
- "A _____ body of evidence supports this." (substantial/growing - collocates with 'body')
- "Results were _____ interpreted." (cautiously/duly - collocates with 'interpreted')
- "The research _____ on previous studies." (draws/builds - collocates with 'on')

RULES:
- Test authentic academic collocations, not arbitrary combinations
- Distractors should be plausible verbs/adjectives but NOT collocate naturally
- Context should make grammatical sense with all options, but only ONE is the natural collocation
- Focus on high-frequency academic collocations
`
    },
    {
        id: 'register_shift',
        name: 'Formal Style',
        shortName: 'Formal',
        description: 'Transform casual language to academic style',
        icon: '✨',
        color: 'indigo',
        prompt: (contentPrompt, config) => `${contentPrompt}

FORMAT: REGISTER ADAPTATION (Informal → Formal)
Present an informal statement and ask for the formal academic equivalent.

REQUIREMENTS:
- Show an informally-worded statement about ${config.topic}
- Ask for the formal academic replacement for a specific informal word/phrase
- Use format: "Informal: [sentence]. Formal: [sentence with _____]"

INFORMAL MARKERS TO TRANSFORM:
- Phrasal verbs: "look at" → examine/investigate, "find out" → determine/ascertain
- Simple words: "big" → substantial/significant, "good" → favorable/promising
- Casual expressions: "a lot of" → considerable/substantial, "get" → obtain/acquire
- Contractions and simple structures → Complex nominalized structures
- Personal pronouns → Impersonal constructions

EXAMPLES:
- "Informal: The results were really good. Formal: The results were _____" (highly favorable/substantial/promising)
- "Informal: Scientists looked at how cells grow. Formal: Scientists _____ cell growth." (examined/investigated)
- "Informal: This theory has a lot of problems. Formal: This theory has _____ limitations." (considerable/substantial)

RULES:
- Informal version should be clearly conversational (contractions, simple words, phrasal verbs)
- Formal options should be genuinely academic (Latin-based, technical, nominalized)
- 5 formal alternatives with varying degrees of appropriateness
- Only the best academic option is correct
`
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
