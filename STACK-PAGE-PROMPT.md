# Prompt: Generate a /stack (Colophon) Page

Drop this into any project's Claude Code session. It will discover the tech stack and design language automatically, then generate a styled /stack page that matches.

---

## The Prompt

```
I want you to create a /stack page (a "colophon") for this project. This page should clearly communicate what the site is built with — both for non-technical people and developers.

**Step 1: Discover the stack.**
Read package.json (or equivalent), config files (astro.config, next.config, vite.config, tsconfig, etc.), and any deployment config to identify:
- Framework and version
- UI library and version
- Language (TypeScript version, etc.)
- Styling solution and version
- Animation libraries
- Icon libraries
- Build tools
- Any other dependencies worth mentioning
- Hosting/deployment platform
- DNS/CDN provider
- Third-party services (forms, analytics, auth, database, etc.)

**Step 2: Discover the design language.**
Read 2-3 existing pages and 2-3 components to extract:
- Color palette (primary, secondary, accent colors — exact hex values)
- Typography (font families, how headings vs body text are styled)
- Spacing patterns (section padding, container max-widths)
- Card/container patterns (border radius, backgrounds, borders, shadows, hover states)
- Grid patterns (responsive breakpoints, gap sizes)
- Icon usage (library, sizing conventions, color conventions)
- Any recurring design motifs (gradients, dividers, badges, etc.)
Read the global CSS/theme file if one exists.

**Step 3: Read the layout file.**
Understand how pages are structured — what wrapper/layout component they use, what props it accepts (title, description, path, etc.), and what shared elements exist (navbar, footer, etc.).

**Step 4: Build the /stack page with these exact sections:**

1. **Header** — Page title + one-line philosophy about the stack. Match the project's heading style.

2. **Architecture overview** — Explain the rendering strategy (SSG, SSR, SPA, islands, etc.). If the project uses an islands/partial hydration pattern, include a visual grid showing which components ship JS vs. render static. Order components to match their actual position on the site. Use colored pills/badges with a legend.

3. **Stack grid** — One card per major technology. Each card gets:
   - An icon from the project's icon library (pick one that represents the technology's role)
   - A colored icon background (use the project's accent palette, one color per card)
   - The technology name and version
   - A role label (e.g., "Framework", "UI Components", "Language")
   - A 1-2 sentence description of what it does in this project
   - Card styling must match the project's existing card patterns exactly.

4. **Infrastructure** — Compact cards for hosting, DNS, third-party services. Simpler/smaller than the stack cards.

5. **Design system** — Two side-by-side cards:
   - Typography: render each font family IN that font with its name and role
   - Color palette: render actual color swatches with hex codes. Show primary colors individually, accent colors as a row of smaller swatches.

6. **Why this stack** — 3-4 cards explaining the architectural philosophy/trade-offs. Use inverted styling (dark background, light text) to visually distinguish this section. Keep descriptions concise and opinionated.

**Step 5: Add a footer link.**
Add a "Colophon" link to the site footer, pointing to /stack. Place it with the other utility links (terms, privacy, etc.).

**Styling rules:**
- Match the project's existing design language EXACTLY — same colors, fonts, spacing, border-radius, hover effects
- Do not invent new design patterns. Reuse what already exists in the codebase.
- The page should look like it was always part of the site, not bolted on.
- No client-side JavaScript unless the project's page pattern requires it (e.g., for a shared navbar component). The stack page content itself should be fully static.
- Use the project's existing icon library for all icons. Do not add new dependencies.

**Output:**
- Create the page file in the appropriate pages directory
- Modify the footer component to add the Colophon link
- Run a build to confirm no errors
```

---

## Notes

- This prompt is framework-agnostic. It works for Astro, Next.js, Remix, plain Vite, etc.
- Claude will adapt the page structure to match whatever page pattern the project uses.
- The prompt deliberately does NOT specify colors, fonts, or specific Tailwind classes — it forces Claude to discover them from the existing codebase.
- If the project has no icon library, Claude will use unicode or plain text labels instead.
