# Handoff

Current state of the portfolio and what to do next. Update it when a round of work ends.

Last updated: 2026-10-19, at commit `3b98846` (everything committed and pushed to `main`).

## Where things stand

- Public repo: https://github.com/Fenlor/portfolio. **Not deployed yet**: agreed on 2026-10-22 to finish the
  content first. Recommended host is Cloudflare Pages (Recipme is already there): served from the domain
  root, so no Vite `base` or router `basename` changes; deep links work without a 404 workaround; it
  rebuilds on push to `main` (build `npm run build`, output `dist`). Andrew connects the repo in the
  Cloudflare dashboard himself. Still open: a free `*.pages.dev` address or his own domain.
- The review report and its checklist track the remaining work:
  https://claude.ai/code/artifact/aa4bf08c-ccee-4785-abe6-a691a869411d. Its Progress table has a row per
  change; add one (and tick checklist items) as work lands.
- Six projects, in this order (Andrew put Recipme and Starship Fenterprise first): Recipme (web; id
  `recipeme`, live in beta at https://recipme.pages.dev/), Starship Fenterprise (games), ASDVR (xr), Pinball
  Game (games), QuestScan, Sensory Dining Plate (xr). ASDVR and Sensory Dining Plate are team projects; the rest are solo.

## Waiting on Andrew

1. **Screenshots** for every project. Recipme has its own (`public/recipme/`: three 1600x1000 WebP
   images, three phone screens each, captured from the live site at 375x812 @2x with headless Edge and
   composed with Pillow). Starship Fenterprise has five (`public/spacegame/`): the title screen from
   the Unity device simulator on a blurred copy of itself (the lead and card image), gameplay beside the
   scene view, a level-up choice beside play at level 5
   with upgrades, then the level editor
   (cropped to 16:10) and the world editor (padded to 16:10 with its window grey). ASDVR has six (`public/asdvr/`):
   4K Quest 3 screenshots pulled over adb from `/sdcard/Oculus/Screenshots`, centre-cropped to 16:10. The old
   placeholder `public/ASDVR_SS_PH.png` is no longer used. Pinball has four (`public/pinball/`), all from the
   desktop build: Breakfast Time in play (the card image), Anaconda in play, the choose-a-table screen (all three letterboxed to 16:10 in
   the game's own near-black) and a table's menu. QuestScan and Sensory Dining Plate have none ("coming soon" panel).
2. **His own words** for the hero intro (`Home.jsx`) and the about bio (`About.jsx`, marked DRAFT).
3. **CV PDF**: put it in `public/` and set `CV_URL` in `About.jsx`.
4. **Project details**: Pinball is PC-first with PCVR (Andrew's decision, his own paragraph on the page;
   mobile left for later). Its description came from its project folder (`D:\Dev\Unity\Pinball3D`, repo
   private: never link it); it no longer mentions Blender, as the tables are generated in code. The Breakfast Time table's food art
   is from free CC0 packs (itch.io, Poly Pizza; listed in that project's `Assets/Pinball/ThirdParty/LICENSES.md`), not
   the Unity Asset Store. Tools for
   Sensory Dining Plate; anything new
   on Starship Fenterprise (an Android roguelite in progress; its levels are test content for now); a
   store link for it once there is one. The Starship Fenterprise and Recipme repos are private: never link them.
5. **Showcase repos** for ASDVR and maybe QuestScan. Both real repos are private: never link them.
6. After deploying: `og:image` and `og:url` in `index.html`.

Optional ideas raised but not decided: none right now.

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
