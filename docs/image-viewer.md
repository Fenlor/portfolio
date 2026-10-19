# Image viewer and carousels

Read this before changing `Modal.jsx`, `ImageCarousel.jsx`, `ThumbnailCarousel.jsx`, the image part of
`ProjectCard.jsx`, or the carousel and modal sections of `src/index.css`. Update it in the same commit when
the behaviour below changes.

## Pieces

- `ProjectCard.jsx`: the card's first screenshot is a button ("View <title> screenshots") that opens
  `Modal` with `ImageCarousel` and a "View full project →" link. A project with `images: []` gets a
  non-interactive "screenshots coming soon" panel instead, and no modal.
- `Modal.jsx`: the dialog itself (behaviour below). It renders nothing while closed, so the carousel inside
  starts fresh on every open.
- `ImageCarousel.jsx`: large preview plus a `ThumbnailCarousel`; takes `images`, `title` and an optional
  `startIndex`. Also used inline (not in a modal) on the project page, which skips it when there are no
  images.
- `ThumbnailCarousel.jsx`: thumbnails as buttons plus ‹ › arrows. It is controlled: `ImageCarousel` owns
  the selected index and passes `index` and `onSelect`, so the thumbnails and arrows both change the large
  image. The arrows wrap around at either end and are hidden when there is only one image. The selected
  thumbnail is kept in view by setting the track's `scrollLeft` directly (not `scrollIntoView`, which can
  scroll the page too).

## Modal behaviour (keep all of it)

- `role="dialog"`, `aria-modal="true"`, `aria-label` from the `label` prop (e.g. "ASDVR Application images").
- On open, focus moves to the first focusable element, which is the × Close button.
- Tab and Shift+Tab wrap around inside the dialog; focus can't reach the page behind.
- Escape, the Close button, or a click on the backdrop closes it.
- The page behind can't scroll while it is open (`body` overflow hidden, restored on close).
- On close, focus returns to the element that opened it, if that element is still on the page.
- `onClose` is read through a ref, so the open/close effect runs once per open even though parents pass a
  new arrow function each render. Don't add `onClose` to that effect's dependencies.

## Sizing (keep it fitting short screens)

`.modal-content` is a flex column capped at 90vh (90dvh where supported) with `overflow: hidden`. Every
child keeps its size (`flex-shrink: 0`) except `.image-carousel`, whose `.big-preview` takes only the height
left over (`flex: 1 1 auto; min-height: 0; object-fit: contain`). Inside the modal, thumbnails are a fixed
96×64. Under 500px of screen height the padding and close button shrink.

Before this layout, the "View full project" link was cut off even on a 1280×720 screen. When last
measured, it was visible without scrolling at 360×560, 375×667, 667×375, 800×450, 1280×560 and 1280×720.

## Accessibility labels

- Card image button: "View <title> screenshots".
- Large preview `alt`: "<title> screenshot N of M".
- Thumbnail buttons: "View <title> screenshot N of M", with `aria-pressed` on the selected one; the
  thumbnail `img` itself has empty `alt` because the button carries the label.
- Arrow buttons: "Previous image" and "Next image".

## Checking a change

With the dev server running: Tab to a card image and press Enter (focus should land on Close), Tab around
(focus stays inside), press Escape (the dialog closes and focus is back on the card image). Then open it at
a short viewport such as 667×375 and confirm "View full project" is visible without scrolling inside the
viewer.
