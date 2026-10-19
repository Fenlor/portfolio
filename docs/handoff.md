# Handoff

Current state of the portfolio and what to do next. Update it when a round of work ends.

Last updated: 2026-10-19, at commit `3b98846` (everything committed and pushed to `main`).

## Where things stand

- Public repo: https://github.com/Fenlor/portfolio. **Not deployed yet**: Andrew wants the content finished
  first. Hosting is undecided (GitHub Pages was the suggested default; Firebase, Netlify and Vercel were the
  other options). GitHub Pages would serve from `/portfolio/`, which needs Vite `base`, a `BrowserRouter`
  `basename`, base-relative public asset paths (e.g. `/andrew.webp` in `About.jsx`) and a 404 fallback.
- The review report and its checklist track the remaining work:
  https://claude.ai/code/artifact/aa4bf08c-ccee-4785-abe6-a691a869411d. Its Progress table has a row per
  change; add one (and tick checklist items) as work lands.
- Six projects, in this order: ASDVR, QuestScan, Sensory Dining Plate (xr); Starship Fenterprise, Pinball
  Game (games); RecipeMe (web). ASDVR and Sensory Dining Plate are team projects; the rest are solo.

## Waiting on Andrew

1. **Screenshots** for every project. ASDVR, Starship Fenterprise and RecipeMe all still use the one ASDVR
   placeholder (`public/ASDVR_SS_PH.png`); QuestScan, Pinball and Sensory Dining Plate have none ("coming
   soon" panel). Plan: crop to a consistent shape, compress to WebP, write alt text, wire into `projects.js`.
2. **His own words** for the hero intro (`Home.jsx`) and the about bio (`About.jsx`, marked DRAFT).
3. **CV PDF**: put it in `public/` and set `CV_URL` in `About.jsx`.
4. **Project details**: tools and highlights for Pinball Game; tools for Sensory Dining Plate; anything new
   on Starship Fenterprise (it stays a mobile game for now; its title may be shortened from
   "SpaceGame (Starship Fenterprise)"); repo or store links for Starship Fenterprise and RecipeMe.
5. **Showcase repos** for ASDVR and maybe QuestScan. Both real repos are private: never link them.
6. After deploying: `og:image` and `og:url` in `index.html`.

Optional ideas raised but not decided: switch SpaceGame and RecipeMe to "screenshots coming soon" instead
of the borrowed ASDVR image; make the carousel arrows actually change the large image.

## Working with Andrew

- He reviews each change, then says "commit and push it", then usually "update the report with …".
  Don't commit until asked.
- UK English everywhere, including commit messages.
- Show visual changes: screenshots at desktop and 375px, in light and dark mode.

## Practical notes

- Dev server: `npx vite --port 5173 --strictPort` (or `npm run dev`). Stopping it from Claude's background
  task often leaves the `node` process listening; check the port with `Get-NetTCPConnection -LocalPort 5173`
  and stop that process.
- Checks used so far (scripts lived in the session scratchpad and are gone): headless Edge driven over the
  DevTools protocol to measure sideways overflow at 375px, missing `alt` text, unnamed buttons, the lowest
  text contrast in both colour schemes, the image viewer's keyboard path, and whether "View full project"
  fits at short screen sizes. Recreate them when needed; `docs/styling.md` and `docs/image-viewer.md` list
  what to check.
- Edge headless can't go below roughly 500px wide with `--window-size`; emulate the viewport through the
  DevTools protocol (`Emulation.setDeviceMetricsOverride`) or load the page in a 375px iframe.
