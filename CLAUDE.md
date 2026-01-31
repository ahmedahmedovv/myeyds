# Academic English Practice App

A minimal web app for practicing academic English using AI-generated fill-in-the-blank questions.

## Quick Start

1. Double-click `index.html` to open in browser
2. Click "Start Learning" on the welcome page
3. Select a vocabulary category (Verbs, Nouns, etc.)
4. Answer questions
5. Keyboard: **1-5** or **A-E** to answer, **Enter** for next

## File Structure

```
/
├── index.html   ← App with integrated welcome page
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

## Categories (7 vocabulary categories)

| Category | Examples |
|----------|----------|
| Verbs | analyze, assess, evaluate, facilitate |
| Nouns | approach, concept, evidence, hypothesis |
| Adjectives | apparent, comprehensive, fundamental |
| Adverbs | consequently, furthermore, nevertheless |
| Prepositions | according to, due to, in terms of |
| Phrasal Verbs | account for, carry out, deal with |
| Connectors | although, however, therefore, whereas |

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

## Mobile Support

Optimized for iPhone 13 mini (375x812) and other iOS devices:

- Safe area handling for notch and home indicator
- 48px minimum touch targets (Apple HIG compliant)
- Horizontal scrolling category tabs with momentum
- No double-tap zoom on buttons
- Add to Home Screen capable

Responsive breakpoints:
| Screen | Optimizations |
|--------|---------------|
| < 375px | Extra compact (iPhone SE) |
| 375px+ | iPhone 13 mini default |
| 640px+ | Tablet/desktop layout |
