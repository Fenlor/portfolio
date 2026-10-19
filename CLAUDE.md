# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Andrew Fenn's personal portfolio: a React 19 + React Router 7 single-page app built with Vite 8, plain JS/JSX
(no TypeScript), no runtime dependencies beyond those. Public repo: https://github.com/Fenlor/portfolio.

Start a session with [docs/handoff.md](docs/handoff.md): current state, what's waiting on Andrew, and how he
likes to work. Update it when a round of work ends. Remaining work is also tracked in the review report's
checklist (Prioritised recommendations): https://claude.ai/code/artifact/aa4bf08c-ccee-4785-abe6-a691a869411d.
Tick items there as they land.

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

## Where things are

Docs in `docs/` cover areas with rules that aren't obvious from the code. Read an area's doc before changing
it, and update the doc in the same commit as the code; a stale doc is worse than none. Areas without a doc
are small enough to read directly.

| Area | Files | Doc |
| --- | --- | --- |
| Project data and types | `src/data/projects.js` | below |
| Routing and app shell | `src/App.jsx`, `src/main.jsx`, `components/Header.jsx`, `components/Footer.jsx` | below |
| Home page: hero, type filters, grid | `src/pages/Home.jsx`, `components/ProjectCard.jsx` | below |
| Project page | `src/pages/ProjectDetails.jsx` (per-page `<title>`, YouTube embed) | none |
| Image viewer and carousels | `components/Modal.jsx`, `components/ImageCarousel.jsx`, `components/ThumbnailCarousel.jsx` | [docs/image-viewer.md](docs/image-viewer.md) |
| About section | `components/About.jsx` (bio text, `CV_URL`) | below |
| Project link buttons | `components/ProjectLinks.jsx` | none |
| Styling, colours, phone layout | `src/index.css`, theme colours in `index.html` | [docs/styling.md](docs/styling.md) |

## Architecture

- **`src/data/projects.js` is the single source of truth for projects**: an object keyed by id. Fields are
  `id`, `title`, `type` (one of the ids in the exported `projectTypes`: `xr`, `games`, `web`), `role` (short
  line such as "Solo project" or "Team project · …"), `images` (imported from `/public` paths; `[]` shows a
  "screenshots coming soon" panel), `description` (`\n` separates paragraphs), `links` (`[{ label, url }]`,
  rendered by `ProjectLinks`), and optional `youtubeId` (embedded via youtube-nocookie on the details page).
  Key order is display order (XR, then games, then web); the home page filter buttons come from `projectTypes`.
- **Routing** (`App.jsx`, `BrowserRouter` in `main.jsx`): `/` → `Home`; `/project/:id` → `ProjectDetails`,
  which looks the id up (lowercased) in `projects.js` and shows a not-found view for unknown ids. The old
  `/ASDVR`, `/SpaceGame`, `/RecipeMe` paths redirect there. There is no catch-all 404 route, and deploying
  needs a host rewrite to `index.html` for deep links.
- **App shell**: `App.jsx` wraps every route in `Header` (sticky; brand plus `/#projects`, `/#about`,
  contact) and `Footer`. `Home` scrolls to `location.hash` after render so those links work from other pages.
- **`Home` = hero, project grid, `About`**. The grid maps `Object.values(projects)` to `ProjectCard`, so a
  new project only needs an entry in `projects.js`. Cards show the first paragraph of `description`; the
  details page shows all of it (`white-space: pre-line`).
- **Styling** uses the colour variables in `src/index.css` only, with light and dark sets that must both stay
  at 4.5:1 contrast or better; see [docs/styling.md](docs/styling.md) before touching CSS.
- The phone number was removed from the site on purpose; don't add it back.

## Repo conventions

- Commits use the GitHub no-reply address (`12216602+Fenlor@users.noreply.github.com`, repo-local git config):
  GitHub email privacy rejects pushes authored with the personal address.
- `public/Andrew_cropped.jpg` (4.2 MB original photo) and `.claude/settings.local.json` are git-ignored. The
  about section uses `public/andrew.webp`, a 480 px square cut from that original; regenerate it from the
  original rather than committing the full-size file.
- `src/components/About.jsx` holds the bio text and a `CV_URL` constant; the CV link only renders once
  `CV_URL` points at a PDF in `public/`.
