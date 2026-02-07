# Agent Instructions for myeyds

## Project Overview
YDS (Turkish English exam) vocabulary practice app. AI generates fill-in-the-blank questions from a word list.

## Key Files
- `index.html` - Main app with embedded JavaScript
- `mywords.js` - Vocabulary list (1,262 words)
- `CLAUDE.md` - General documentation

## When Modifying Code

### The AI Prompt (CONFIG.getPrompt)
Located in `index.html` around line 779. This generates questions via Mistral API.

**IMPORTANT:** When editing the prompt:
- Keep the JSON response format exact
- Maintain the 5 options structure
- Preserve explanations array (5 items)
- Use `${sanitizedWord}` placeholder

### Word List (mywords.js)
- Flat array: `["word1", "word2", "phrase verb"]`
- Can be single words, phrasal verbs, or prepositional phrases
- Currently 1,262 entries

## Testing Changes
1. Open `index.html` in browser
2. Click "Start Learning"
3. Check that questions load and options display correctly
4. Test keyboard shortcuts (1-5, A-E, Enter)

## Common Tasks

### Add new vocabulary
Edit `mywords.js`, add strings to the MYWORDS array.

### Change AI model/temperature
Edit `CONFIG` object in `index.html`:
```javascript
model: 'mistral-small-latest',
temperature: 0.8,
```

### Fix prompt issues
The prompt template is in `CONFIG.getPrompt()`. Look for the return statement with backticks.

## Deployment
Just push to GitHub. It's a static site (no build step).
