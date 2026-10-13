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
- **`Home` lists projects by name** (`projects.asdvr`, `projects.spacegame`, …), so a new project needs an
  entry in `projects.js` *and* a `ProjectSummary` block in `Home.jsx`. Descriptions render with
  `white-space: pre-line` only on the details page; on home cards the `\n` collapse to spaces.
- **Image modal flow**: `ProjectSummary` (file is misspelled `ProjectSummmary.jsx`) passes `onSelect` to
  `ThumbnailCarousel`; a thumbnail click opens `Modal` with `ImageCarousel` at that index plus a
  "View full project" link. `Modal` unmounts when closed, so `ImageCarousel` re-reads `startIndex` each open.
- **`Footer` is used as both header and footer** (top and bottom of each page): name and a `mailto:` email.
  The phone number was removed on purpose; don't add it back.
- **Styling is all in `src/index.css`** (`App.css` is an unused template leftover, as are `hero.png`,
  `react.svg`, `vite.svg`, `icons.svg` and the empty `PersonalSummary.jsx`). The theme is dark with hard-coded
  colours; the commented palette block in the file lists the intended colours. Headings need the unitless
  `line-height` rule because `:root` sets a fixed one that otherwise makes wrapped headings overlap.
- **Mobile layout gotchas** already hit here: flex items default to `min-width: auto`, so the wide thumbnail
  track can push the page sideways (`.title-content > *` sets `min-width: 0`), and a *wrapping* flex column
  sizes to its widest child (the mobile `.project-summary` uses `nowrap`).

## Repo conventions

- Commits use the GitHub no-reply address (`12216602+Fenlor@users.noreply.github.com`, repo-local git config):
  GitHub email privacy rejects pushes authored with the personal address.
- `public/Andrew_cropped.jpg` (4.2 MB, not used yet) and `.claude/settings.local.json` are git-ignored; add a
  resized copy of the photo when an about section uses it.
