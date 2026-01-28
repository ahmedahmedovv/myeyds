# Academic English Practice App

A minimal web app for practicing academic English using AI-generated fill-in-the-blank questions.

## Quick Start

1. Double-click `index.html` to open in browser
2. Select a category (Verbs, Nouns, Modals, etc.)
3. Answer questions
4. Keyboard: **1-5** or **A-E** to answer, **Enter** for next

## File Structure

```
/
├── index.html   ← App code & UI (don't edit unless changing API)
├── words.js     ← Word lists (edit this to customize vocabulary)
└── CLAUDE.md    ← This documentation
```

## Customizing Words

Edit `words.js` to add, remove, or modify words:

```javascript
const WORDS = {
    verbs: [
        'analyze',
        'assess',
        // add or remove words here...
    ],
    nouns: [...],
    adjectives: [...],
    // etc.
};
```

## Adding a New Category

1. Add word array to `words.js`:
```javascript
const WORDS = {
    // existing categories...

    idioms: [
        'break the ice',
        'the bottom line',
        'think outside the box',
        // ...
    ],
};
```

2. Add button to `index.html` (in the toggle-group div):
```html
<button class="toggle-btn" data-mode="idioms">Idioms</button>
```

## API Configuration

Edit `CONFIG` in `index.html`:

```javascript
const CONFIG = {
    apiKey: 'your-api-key',        // Mistral API key
    model: 'mistral-small-latest', // AI model
    temperature: 0.8,              // Creativity (0-1)
    maxTokens: 1024,               // Response length
    getPrompt: function(word) {    // AI prompt template
        return `...`;
    }
};
```

## Categories (16 total, 320 items)

### Vocabulary (7 categories)

| Category | Examples |
|----------|----------|
| Verbs | analyze, assess, evaluate, facilitate |
| Nouns | approach, concept, evidence, hypothesis |
| Adjectives | apparent, comprehensive, fundamental |
| Adverbs | consequently, furthermore, nevertheless |
| Prepositions | according to, due to, in terms of |
| Phrasal Verbs | account for, carry out, deal with |
| Connectors | although, however, therefore, whereas |

### Grammar (9 categories)

| Category | Examples |
|----------|----------|
| Relative Clauses | who, which, in which, whose |
| Noun Clauses | that, what, whether, whoever |
| Tenses | had been, will have, should have |
| If Clauses | unless, provided that, as long as |
| Modals | can, could, ought to, had better |
| Passive Voice | is done, has been done, is said to be |
| Quantifiers | a few, a little, plenty of, neither |
| Pronouns | myself, each other, everyone, whoever |
| Gerund/Inf/Caus | doing, to do, have something done |

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| 1-5 | Select option |
| A-E | Select option |
| Enter | Next question |

## Technical Notes

- No server required (works with double-click)
- Uses Mistral AI API
- Prefetches next question while user answers
- Score resets when switching categories
- Mobile responsive
