# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Andrew Fenn's personal portfolio: a React 19 + React Router 7 single-page app built with Vite 8, plain JS/JSX
(no TypeScript), no runtime dependencies beyond those. Public repo: https://github.com/Fenlor/portfolio.

Remaining work is tracked in the review report's checklist (Prioritised recommendations):
https://claude.ai/code/artifact/aa4bf08c-ccee-4785-abe6-a691a869411d. Tick items there as they land.

## Commands

```bash
npm run dev       # Vite dev server; vite.config.js sets host: true, port 5173 (reachable from other devices on the LAN)
npm run build     # production build to dist/
npm run lint      # ESLint flat config: js recommended + react-hooks + react-refresh; must stay at 0 errors
npm run preview   # serve the built dist/
```

There are no tests. Check changes with `npm run lint`, a build, and the running page, including a 375 px wide
viewport. If the dev server keeps serving a broken module after a half-finished edit (same `?t=` stamp in
console errors), restart it; a reload is not enough.

## Architecture

- **`src/data/projects.js` is the single source of truth for projects**: an object keyed by id. Fields are
  `id`, `title`, `thumbnail`, `images` (imported from `/public` paths), `description` (`\n` separates
  paragraphs), `links` (`[{ label, url }]`, rendered by `ProjectLinks`), and optional `youtubeId`
  (embedded via youtube-nocookie on the details page).
- **Routing** (`App.jsx`, `BrowserRouter` in `main.jsx`): `/` → `Home`; `/project/:id` → `ProjectDetails`,
  which looks the id up (lowercased) in `projects.js` and shows a not-found view for unknown ids. The old
  `/ASDVR`, `/SpaceGame`, `/RecipeMe` paths redirect there. There is no catch-all 404 route, and deploying
  needs a host rewrite to `index.html` for deep links.
- **App shell**: `App.jsx` wraps every route in `Header` (sticky; brand plus `/#projects`, `/#about`,
  contact) and `Footer`. `Home` scrolls to `location.hash` after render so those links work from other pages.
- **`Home` = hero, project grid, `About`**. The grid maps `Object.values(projects)` to `ProjectCard`, so a
  new project only needs an entry in `projects.js`. Cards show the first paragraph of `description`; the
  details page shows all of it (`white-space: pre-line`).
- **Image viewer**: the card's image is a button that opens `Modal` (labelled dialog, Escape, Tab trap,
  focus returned to the opener) containing `ImageCarousel` and a "View full project" link. The modal is a
  flex column capped at 90dvh so the image shrinks first on short screens; keep that when restyling.
- **Styling is all in `src/index.css`**, driven by CSS variables on `:root`: a light set ("paper and
  charcoal") and a dark set ("spruce and slate") under `prefers-color-scheme: dark`. Use the variables, never
  raw colours; every text colour was picked to stay at or above 4.5:1 contrast in both modes. Headings, nav,
  buttons and labels use `--mono`; body text uses `--sans`.
- The phone number was removed from the site on purpose; don't add it back.

## Repo conventions

- Commits use the GitHub no-reply address (`12216602+Fenlor@users.noreply.github.com`, repo-local git config):
  GitHub email privacy rejects pushes authored with the personal address.
- `public/Andrew_cropped.jpg` (4.2 MB original photo) and `.claude/settings.local.json` are git-ignored. The
  about section uses `public/andrew.webp`, a 480 px square cut from that original; regenerate it from the
  original rather than committing the full-size file.
- `src/components/About.jsx` holds the bio text and a `CV_URL` constant; the CV link only renders once
  `CV_URL` points at a PDF in `public/`.
