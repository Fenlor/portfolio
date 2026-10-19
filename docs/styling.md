# Styling and theming

Read this before changing `src/index.css` or adding anything with colour. Update it in the same commit when
the rules below change.

## Where styles live

Everything is in `src/index.css`; there are no CSS modules or component stylesheets. The file is grouped by
banner comments in page order: buttons, header and footer, hero, sections and project grid, about, project
details page, image carousel, image viewer (modal), small screens. Native CSS nesting (`&`) is used in a few
blocks.

## Colour variables

All colours come from variables on `:root`. The light set ("paper and charcoal") is the default; the dark
set ("spruce and slate") replaces it under `@media (prefers-color-scheme: dark)`. The site follows the
visitor's system setting; there is no toggle.

| Variable | Light | Dark | Used for |
| --- | --- | --- | --- |
| `--bg` | `#f6f4ef` | `#16212a` | page background, sticky header |
| `--surface` | `#ffffff` | `#1E2B33` | cards, about card, modal |
| `--surface-muted` | `#ece9e2` | `#24343e` | image placeholders, close-button hover |
| `--text` | `#1E2B33` | `#e6edf3` | body text, headings |
| `--text-muted` | `#4f4a4d` | `#a3acb6` | secondary text, nav, role lines |
| `--border` | `#d9d5cc` | `#2f414c` | card and control borders |
| `--accent` | `#2f6b47` | `#5fb37f` | links, primary buttons, focus rings, tags |
| `--accent-hover` | `#255639` | `#78c493` | hover state of the above |
| `--on-accent` | `#ffffff` | `#0d1a12` | text on an `--accent` fill |
| `--accent-soft` | `#e2eee6` | `#1f3a2c` | ghost-button hover, type tag background |
| `--backdrop` | dark 72% | dark 80% | modal backdrop |

Rules:

- Use the variables; don't write raw colours. The only exception is `.card-media-hint`, a fixed dark label
  over screenshots that has to read the same on any image.
- A new colour needs a value in both sets.
- Every text and background pair must reach 4.5:1 contrast (WCAG AA) in both modes. When last measured, the
  lowest on the site was 4.85:1 (the `xr`/`games`/`web` type tag in dark mode).
- Don't fade text with `opacity`; it can drop contrast below 4.5:1. Use `--text-muted` instead.
- `index.html` has a matching pair of `theme-color` meta tags (`#f6f4ef` / `#16212a`) for the mobile browser
  bar; change them with `--bg`.

## Type

- `--mono` (system monospace stack) for headings, nav, buttons, labels, tags and role lines. Section titles
  get a `// ` prefix from `.section-title::before`.
- `--sans` (system UI stack) for body text, at 17px with 1.6 line height on `:root`.
- `h1`–`h3` set a unitless `line-height: 1.2`. A fixed line height inherited from `:root` once made wrapped
  headings overlap; keep any heading line height unitless.

## Layout and breakpoints

- `.container`: max 1080px wide with 20px side padding. The project page narrows to 860px.
- Project grid: `repeat(auto-fill, minmax(min(300px, 100%), 1fr))`, so three columns on desktop and one on
  phones, with no breakpoint needed.
- `.section` has `scroll-margin-top: 64px` so `/#projects` and `/#about` aren't hidden under the sticky
  header.
- `@media (max-width: 640px)`: shorter header with the `andrew_fenn` text hidden (monogram only), tighter
  hero, about card stacks, smaller thumbnails.
- `@media (max-height: 500px)`: compact image viewer (see `docs/image-viewer.md`).
- `@media (prefers-reduced-motion: reduce)`: transitions off.

## Phone-layout pitfalls already hit here

- A flex or grid item defaults to `min-width: auto`, so a wide child such as a thumbnail track can push the
  whole page sideways. Give the item `min-width: 0` (or use `minmax(min(…, 100%), 1fr)` in grids).
- A wrapping flex column (`flex-direction: column; flex-wrap: wrap`) sizes each line to its widest child and
  overflows; use `nowrap` for columns.
- After any layout change, check that `document.documentElement.scrollWidth` equals the viewport width at
  375px.

## Checking a change

`npm run lint`, a build, then the running page at desktop width and at 375px, in both colour schemes. In
the Claude desktop app's browser pane, `resize_window` takes `preset: "mobile"` and `colorScheme`; in a
normal browser, use devtools device mode and the `prefers-color-scheme` emulation.
