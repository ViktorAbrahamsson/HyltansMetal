# Hyltans Metall Website

Bronze sand-casting foundry (Gnosjö, est. 1926). Swedish copy, English identifiers.
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
- BEM inside modules; page sections get a global `<name>-block` class plus `.block` (+ `--alt`/`--paper`/`--dark`) and `.container`/`-lg`/`-sm`/`-xs`.
- All colors/spacing/sizes via tokens in `src/styles/variables.scss`; responsive only via `m.respond-to(sm|md|lg|xl)`, mobile-first.
- Design system "Sand & Brons": motif classes `.label`, `.molten`, `.ghost-numeral`, `.batch-stamp`, `.btn`/`.btn--ghost`/`.btn--light` in `src/styles/main.scss`. Fonts: Fraunces + Inter (loaded in index.html).
- No image/video assets exist — the design is fully typographic/generative. The hero "wow" is a hand-rolled canvas ember field (`src/components/common/Hero/EmberField.tsx`, no deps, respects prefers-reduced-motion) + molten glow + ghost numeral. Never add `<img>` pointing at `/images/`; do not reintroduce Three.js or use `public/models/ljusstake.glb`.
