# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal portfolio / landing page for marchoag.com. Single-page Vite + React app (no TypeScript). Light mode, vibrant color accents, narrative timeline layout.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:5173
npm run build        # production build to /dist
npm run preview      # preview production build locally
```

No test framework or linter is configured.

## Architecture

Single-page app with four visual sections rendered in `App.jsx`: Hero, Marquee, Timeline, Footer.

- **`src/data.js`** — All content lives here (timeline entries, marquee words, colors, badge labels). Edit content here, not in JSX. Each timeline item has: `year`, `status` (`'live'` | `'launched'` | `'soon'` | `null`), `tag`, `title`, `domain`, `href`, `color`, `desc`.
- **`src/App.jsx`** — All components in one file: `Marquee`, `Badge`, `TLItem` (timeline item with IntersectionObserver fade-in), and `App`.
- **`src/App.module.css`** — All styles via CSS Modules (imported as `s`).
- **`src/index.css`** — CSS custom properties (color palette, font stacks) and resets.
- **`index.html`** — Google Fonts imports (Bricolage Grotesque, Instrument Serif, DM Mono).

## Design System

Color palette defined as CSS variables in `index.css`: `--lime`, `--coral`, `--cobalt`, `--yellow`, `--cyan`, `--magenta`, `--page` (background #F7F4EE), `--ink`, `--mid`, `--faint`, `--fainter`.

Three font families: `--font-display` (Bricolage Grotesque), `--font-serif` (Instrument Serif for italic accents), `--font-mono` (DM Mono for labels/tags).

Timeline items can override colors via their `color` field in `data.js` — this applies to the dot, title, and link.

## Deployment

Static site. Drag `/dist` to Netlify drop, or deploy via Vercel CLI.
