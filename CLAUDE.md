# IELTS Prep Platform — Claude Context

## Project Purpose
Static IELTS exam prep website for a 17-year-old son targeting Band 7.0–7.5.
- **Exam date:** August 15, 2026
- **Hosted at:** https://anhtuan-mai.github.io/ielts-prep/
- **Shared via:** Zalo link (mobile-first, max-width 480px)
- **No backend** — localStorage only

## Key Rules
1. **Real Cambridge content only** — no AI-generated questions for listening practice
2. **Play-once audio** — simulates real IELTS exam; never remove this restriction
3. **Audio URLs use GitHub Releases** — base: `https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/`
   - GitHub converts spaces to dots: `Test 1 Part 1.mp3` → `Test.1.Part.1.mp3`
4. **Mobile-first** — all UI changes must work on phone screen (480px)
5. **Dad's 1-minute check** — dashboard must always show streak, tasks done today, predicted band

## Codebase Map
- `index.html` — app shell (3 views: dashboard, study, practice)
- `style.css` — all styles
- `data.js` — all content data (reading, listening, writing, speaking, vocab)
- `app.js` — all logic (state, plan generation, renderers, audio player, band prediction)
- `cambridge-data.js` — Cambridge 17 Test 1 exact Q&A (needs integration into data.js)
- `source/cambridge/extracted/` — OCR'd text from Cambridge PDFs

## Current Status
- MVP live and working
- 64 audio files on GitHub Releases (audio-v1)
- **Pending:** data.js listening section still has placeholder questions — needs replacing with real Cambridge content
- **Next:** Update audio URLs + integrate real Cambridge 16/17 questions into data.js

## Testing
After any change: open https://anhtuan-mai.github.io/ielts-prep/ on mobile (or DevTools mobile view) and verify:
1. Dashboard loads with streak/band/progress
2. Study plan shows today's tasks
3. Listening practice loads audio from GitHub release URL
4. Audio plays once and shows "played" badge after
5. Answers can be submitted and score shown
