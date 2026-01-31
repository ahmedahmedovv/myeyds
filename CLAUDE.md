# Academic English Practice App

A minimal web app for practicing academic English using AI-generated fill-in-the-blank questions.

## Quick Start

1. Double-click `index.html` to open in browser
2. Click "Start Learning" on the welcome page
3. Answer questions by selecting the correct word
4. Keyboard: **1-5** or **A-E** to answer, **Enter** for next

## File Structure

```
/
├── index.html    ← Main app with welcome page
├── mywords.js    ← Vocabulary list (flat array)
└── CLAUDE.md     ← This documentation
```

## Customizing Words

Edit `mywords.js` to add, remove, or modify words:

```javascript
const MYWORDS = [
    "analyze",
    "assess",
    "in terms of",
    "consequently",
    // add or remove words here...
];
```

Words can be:
- Single words: `"analyze"`, `"comprehensive"`
- Phrasal verbs: `"account for"`, `"deal with"`
- Prepositional phrases: `"in terms of"`, `"with regard to"`

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
- Flat vocabulary array (no categories)

## Responsive Design

Optimized for all screen sizes:

| Breakpoint | Target Devices |
|------------|----------------|
| ≤390px | iPhone 13 mini, SE (compact layout) |
| 391-639px | iPhone 14/15 Pro, Max, Plus |
| 640-1023px | Tablets, small desktops |
| ≥1024px | Large desktops |

### iOS Features

- Safe area handling for notch and home indicator
- 44px minimum touch targets (Apple HIG compliant)
- No double-tap zoom on buttons
- Add to Home Screen capable
- `viewport-fit=cover` for edge-to-edge display
