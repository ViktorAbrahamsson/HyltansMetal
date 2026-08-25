# Hyltans Metall Website

Sand-casting foundry in brons och mässing (Gnosjö, est. 1926). Swedish copy, English identifiers.
**Site copy is taken from the real site at hyltansmetall.se** (mainly `/om-foretaget` and `/tillverkningen`) — the history, the process steps and the pull-quote are the owner's own words, signed Håkan Abrahamsson. Do not invent replacement marketing copy; fetch the source page if it needs extending. Nav labels mirror theirs (Start / Om företaget / Tillverkningen / Produkter / Kontakta oss) while the URLs stay Swedish-slugged (`/om-oss`, `/tillverkning`, `/kontakt`).
Vite 4 + React 18 + TS + SCSS modules. Static site, no CMS — content lives in `src/data/*.ts`. No 3D/Three.js — the owner explicitly does not want the GLB model used.

## Commands
- Dev: `npm run dev`
- Build: `npm run build` (tsc && vite build)

## Hard SCSS rules (violations have caused real bugs)
- `vite.config.ts` injects `@use 'variables' as v; @use 'mixins' as m;` into **every** SCSS file. Never add those `@use` lines yourself. `src/styles/mixins.scss` must not reference `v.$*` (circular load).
- `generateScopedName: '[local]'` → CSS-module class names are **global**. Every class in every `*.module.scss` must be globally unique: always prefix with the file's block name (`.contact-page__form-input`, never `.inner`, `.form`, `.grid`). Hyphenated names need bracket access in TSX: `styles['about-page__lead']`.
- The `grain()` mixin does not set `position` — the caller must already be positioned.
- `backdrop-filter` creates a containing block for `position: fixed` descendants (this trapped the mobile menu overlay inside the header once).

## Conventions
- BEM inside modules; page sections get a global `<name>-block` class plus `.block` (+ `--alt`/`--paper`/`--dark`) and `.container`/`-sm`/`-xs`. Everything full-width shares one 1200px `$container-width` — including the header's inner bar — so edges line up on large screens. (There was a `-lg`/1440px variant; it was removed for exactly that reason.)
- `src/components/layout/ScrollToTop.tsx` resets scroll on route change (the router otherwise keeps the old position). It deliberately skips `POP` so back/forward restores where the visitor was.
- Section headings carry no `01`/`02`/`03` batch stamps, and product cards carry no `Nr xx` — both removed on request. The only numbering left is `Steg xx` + the outline numeral on manufacturing steps, which is the process sequence itself.
- All colors/spacing/sizes via tokens in `src/styles/variables.scss`; responsive only via `m.respond-to(sm|md|lg|xl)`, mobile-first.
- Interactive elements get `:focus-visible` via `m.focus-ring($color)` (literal hex args — #B07A2E on light bg, #D9A24B on dark). A global `prefers-reduced-motion` block in `main.scss` collapses all transitions/animations.
- Design system "Sand & Brons": motif classes `.label`, `.molten`, `.ghost-numeral`, `.batch-stamp`, `.btn`/`.btn--ghost`/`.btn--light` in `src/styles/main.scss`. Fonts: Fraunces + Inter (loaded in index.html).
- The hero stays typographic/generative: a hand-rolled canvas ember field (`src/components/common/Hero/EmberField.tsx`, no deps, respects prefers-reduced-motion) + molten glow + ghost numeral. Do not reintroduce Three.js or use `public/models/ljusstake.glb` — the owner explicitly does not want the GLB model.

## Images
- **`src/assets/images/manifest.ts` is generated — never edit it by hand.** It is the only way images enter the app: `import { images } from '@/assets/images/manifest'`, then `images['process/04-gjutning']`. Each entry carries `src`, `srcSet` (several widths), `width`/`height`, and `blur` (a ~20px placeholder inlined as a data URI). Keys are literal-typed, so a typo is a build error.
- Never `import x from '.../foo.webp'` directly and never use `/images/...` URL strings — that bypasses srcset and the placeholder.
- Always render through `src/components/common/Figure/Figure.tsx`: `<Figure image={...} alt="" ratio="landscape" sizes="..." />`. It reserves its box from the ratio, shows the blur *behind* the photo, and lays `grain()` over the top.
- **Never gate the `<img>` behind an opacity/JS "loaded" flag.** An `<img>` with no data is already transparent, so the blur underneath does the placeholder work by itself and the photo paints the instant it decodes. The old version held `.fig__img { opacity: 0 }` until React flipped state, which forced a visible placeholder on *every* image — cached ones included — and would have stranded a photo invisible if a load event were ever missed.
- Pass `priority` for images in view on first paint (sets `loading="eager"` + `fetchpriority="high"`); everything else stays lazy. Currently used on the first product card and the first manufacturing step. Without it the LCP image is fetched late and at low priority.
- Measure loading on the **preview** build (`hyltans-preview`, port 4173), never `npm run dev`: in dev, Vite requests every image URL module separately (`foo.webp?import`, ~49 extra round-trips) which makes loading look far worse than production, where the same page is 4 requests total.
- **Always pass a real `sizes`.** It defaults to `100vw`, which over-fetches badly inside a 3-column grid — the browser picks the candidate before it knows the layout.
- `src/assets/images/inbox/` is the raw dump for unprocessed originals. It is gitignored (repo `.gitignore` + `.git/info/exclude`) and lives in the main checkout, not in worktrees.
- `scripts/process-images.mjs` (dev dep: `sharp`) turns inbox originals into the sorted WebP assets **and rewrites `manifest.ts`**: `INBOX=<path> node scripts/process-images.mjs`. Its `JOBS` table is the source of truth for crop shape and rotation; `SHAPES` defines each ratio's width ladder.
- Widths above the source's own width are skipped so nothing is upscaled, and the source's native width is added as an extra rung when it falls between two — several photos are only ~620px wide once rotated, and the earlier pipeline was silently upscaling them to 1400px.
- **EXIF orientation is not trustworthy in this photo set.** Most files carry `orientation=6`, but a few were cropped by an editor that rotated the pixels and kept the tag, so applying it turns them 90°. The `rotate` flag per job is set from *looking at the output*, not from the tag. Always eyeball regenerated images before committing.
- Four product categories: Änglar, Malmljusstakar, Tomtar, Övriga produkter — all photographed. `ProductCategory.image` stays optional for future ones; grid rows stretch, so a mixed row would align at the bottom.
- Jobs may carry `preCrop` ({left,top,width,height} on the source, applied before rotation) for cutting something out of frame that no automatic crop would avoid — `products/ovrigt` uses it to trim a branded bottle off the shelf.
