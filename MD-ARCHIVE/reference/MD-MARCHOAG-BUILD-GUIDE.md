# BUILD GUIDE — marchoag.com

## Quick Reference

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:5173
npm run build        # production build to /dist
npm run preview      # preview production build locally
```

## Architecture

Single-page Vite + React app (no TypeScript). Four visual sections in `App.jsx`: Hero, Marquee, Timeline, Footer.

### Key Files
- **`src/data.js`** — All content (timeline entries, marquee words, colors, badges). Edit content HERE.
- **`src/App.jsx`** — All components in one file (Marquee, Badge, TLItem, App)
- **`src/App.module.css`** — All styles via CSS Modules (imported as `s`)
- **`src/index.css`** — CSS custom properties and resets
- **`index.html`** — Google Fonts imports

### Design System
- Color palette as CSS variables: `--lime`, `--coral`, `--cobalt`, `--yellow`, `--cyan`, `--magenta`, `--page`, `--ink`, `--mid`, `--faint`, `--fainter`
- Fonts: Bricolage Grotesque (display), Instrument Serif (italic accents), DM Mono (labels/tags)
- Timeline items can override colors via `color` field in `data.js`

## Deployment
- **Platform**: Render (static site)
- **Branch**: main (auto-deploys)
- **Build**: `npm run build` → `/dist`
