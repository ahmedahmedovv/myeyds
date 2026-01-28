# Academic English Master - Claude Context

## Project Overview

A client-side web application that generates AI-powered academic English practice questions using Mistral AI. The app creates fill-in-the-blank, error correction, word formation, collocation, and register transformation questions for advanced English learners.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │  index.html  │  │    app.js    │  │    styles.css    │  │
│  │  (UI/Views)  │  │(State & Logic)│  │  (Styling)       │  │
│  └──────┬───────┘  └──────┬───────┘  └──────────────────┘  │
│         │                 │                                  │
│  ┌────────────────────────────────────────────────────────┐│
│  │       blueprints.js (Content & Format Definitions)     ││
│  │       mistralService.js (Mistral AI Integration)       ││
│  └────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
                   ┌─────────────────┐
                   │   Mistral AI    │
                   │  (API Endpoint) │
                   └─────────────────┘
```

## File Structure

| File | Purpose | Lines |
|------|---------|-------|
| `index.html` | Single-page app shell, screens (Setup/Loading/Exam/Results) | ~180 |
| `app.js` | Application state, event handling, UI rendering | ~450 |
| `styles.css` | Complete responsive styling, CSS variables | ~1900 |
| `blueprints.js` | **Content & Format blueprint definitions** | ~350 |
| `mistralService.js` | AI prompt generation, API calls, error handling | ~300 |
| `CLAUDE.md` | This file - project documentation | - |

## Key Concepts

### Blueprint System

The app uses a **two-dimensional blueprint system**:

#### 1. Content Blueprints (WHAT to study)
```javascript
ContentBlueprints = [
    { id: 'mixed',       name: 'Mixed Skills',      icon: '🎯' },
    { id: 'vocabulary',  name: 'Academic Words',    icon: '📚' },
    { id: 'grammar',     name: 'Grammar & Structure', icon: '⚙️' }
]
```

#### 2. Format Blueprints (HOW to practice)
```javascript
FormatBlueprints = [
    { id: 'random',            name: 'Surprise Me',     icon: '🎲' },
    { id: 'cloze_test',        name: 'Fill in Blank',   icon: '📝' },
    { id: 'error_correction',  name: 'Spot the Error',  icon: '🔍' },
    { id: 'word_formation',    name: 'Word Forms',      icon: '🔄' },
    { id: 'collocation',       name: 'Word Pairs',      icon: '🔗' },
    { id: 'register_shift',    name: 'Formal Style',    icon: '✨' }
]
```

Each blueprint contains:
- Metadata (id, name, shortName, description, icon, color)
- `prompt(config)` function that generates AI instructions

### Prompt Composition

```javascript
// In mistralService.js
const basePrompt = generatePrompt(contentId, formatId, config);
// Combines ContentBlueprint.prompt() + FormatBlueprint.prompt()
```

Example flow:
1. User selects: 📚 Words + 🔄 Word Forms
2. `ContentBlueprints[1].prompt()` → vocabulary focus
3. `FormatBlueprints[3].prompt()` → word formation format
4. Combined → Full AI prompt

### State Management

```javascript
app.state = 'SETUP' | 'LOADING' | 'EXAM' | 'RESULTS'

app.config = {
    difficulty: 'Intermediate' | 'Advanced' | 'Proficiency (C2)',
    topic: 'General Science' | 'Economics' | 'History' | ...,
    contentBlueprint: 'mixed' | 'vocabulary' | 'grammar',
    formatBlueprint: 'random' | 'cloze_test' | ...
}

app.questions = []     // Generated questions
app.responses = []     // User answers
app.currentQuestion    // Current question object
app.prefetchedQuestion // Next question (background fetch)
```

## Data Flow

### Generating a Question

```
User clicks "Next Question"
        ↓
Check app.prefetchedQuestion?
        ↓ YES → Display immediately
        ↓ NO  → Show Loading
                ↓
        mistralService.generateSingleQuestion()
                ↓
        generatePrompt(config.contentBlueprint, config.formatBlueprint, config)
                ↓
        POST to Mistral API
                ↓
        Parse JSON response
                ↓
        Display Question
                ↓
        Prefetch next (background)
```

### Question Object Structure

```javascript
{
    id: "q-1234567890-0",
    blueprint: "cloze_test",      // Format type
    category: "Vocabulary",       // Content type
    academicContext: "Medicine",  // Subject
    sentence: "The _____ data supported the hypothesis.",
    options: ["preliminary", "final", "irrelevant", "conclusive", "ambiguous"],
    correctIndex: 0,
    explanation: "'Preliminary' refers to early-stage data collected before full study..."
}
```

## Common Tasks

### Adding a New Content Blueprint

1. Open `blueprints.js`
2. Add to `ContentBlueprints` array:

```javascript
{
    id: 'idioms',
    name: 'Academic Idioms',
    shortName: 'Idioms',
    description: 'Common expressions in academic writing',
    icon: '💡',
    color: 'yellow',
    prompt: (config) => `
CONTENT FOCUS: ACADEMIC IDIOMS
Test understanding of common academic expressions...
`
}
```

3. Done! UI auto-generates button.

### Adding a New Format Blueprint

1. Open `blueprints.js`
2. Add to `FormatBlueprints` array:

```javascript
{
    id: 'sentence_completion',
    name: 'Complete the Sentence',
    shortName: 'Completion',
    description: 'Finish the second sentence',
    icon: '✏️',
    color: 'teal',
    prompt: (contentPrompt, config) => `${contentPrompt}

FORMAT: SENTENCE COMPLETION
Present two related sentences. The second is incomplete...
`
}
```

3. Done! Button appears automatically.

### Modifying AI Prompts

Each blueprint has a `prompt` function that receives:
- `config`: { difficulty, topic, category, ... }
- `contentPrompt` (format blueprints only): The content blueprint's prompt

Edit the template literals in these functions to change AI behavior.

### Styling Changes

Key CSS variables in `:root`:
```css
--color-primary: #4f46e5;      /* Indigo - main brand */
--color-green-500: #22c55e;    /* Success/correct */
--color-red-500: #ef4444;      /* Error/incorrect */
--color-slate-50: #f8fafc;     /* Background */
```

Responsive breakpoints:
- 375px: Large phones
- 640px: Tablets
- 768px: Desktop

### Handling API Errors

The service has automatic fallback:

```javascript
MODELS = ["mistral-medium", "mistral-small", "mistral-tiny"]

// If 429/503 error → try next model
// If JSON parse error → retry with cleanup
// Max 3 attempts per question
```

## Security Notes

⚠️ **API Key Exposure**: The Mistral API key is currently hardcoded in `mistralService.js`. For production:
- Move API calls to a backend proxy
- Use environment variables
- Implement rate limiting

## Development Tips

### Testing Changes

1. Modify files
2. Open `index.html` directly in browser
3. Or run local server: `python3 -m http.server 8000`

### Debug Mode

Add to console:
```javascript
// See current state
console.log(app.config);

// Check blueprint definitions
console.log(ContentBlueprints, FormatBlueprints);

// View raw AI response
// (Uncomment console.log in mistralService.js line ~110)
```

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features (arrow functions, template literals, async/await)
- Fetch API required
- CSS Grid and Flexbox used extensively

## Future Enhancements Ideas

| Feature | Complexity | Impact |
|---------|-----------|--------|
| LocalStorage progress persistence | Low | High |
| User accounts / backend | High | High |
| Speech synthesis for sentences | Low | Medium |
| Dark mode toggle | Low | Medium |
| Export results to PDF | Medium | Low |
| Keyboard shortcuts (1-5, Enter) | Low | High |
| Spaced repetition algorithm | Medium | High |
| Self-hosted LLM option | High | Medium |

## Contact & Contributions

When modifying this codebase:
1. Keep blueprints modular and self-contained
2. Maintain backwards compatibility for question objects
3. Test both content and format combinations
4. Ensure mobile responsiveness
5. Handle API errors gracefully
