# marchoag.com

Personal portfolio / landing page. Vite + React, light mode, vibrant color accents, narrative timeline.

## Get started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build & deploy

```bash
npm run build      # outputs to /dist
```

Drag the `/dist` folder onto https://netlify.com/drop, or:

```bash
npm i -g vercel
vercel             # follow prompts, live in ~30 seconds
```

## Editing content

All projects and timeline entries live in **`src/data.js`** — no JSX required.
Each object has: `year`, `status`, `tag`, `title`, `domain`, `href`, `color`, `desc`.

Status values: `'live'` | `'launched'` | `'soon'` | `null`

## File structure

```
src/
  main.jsx          entry point
  App.jsx           all components
  App.module.css    all styles
  data.js           timeline content ← edit this
  index.css         CSS variables + resets
index.html          font imports
```
