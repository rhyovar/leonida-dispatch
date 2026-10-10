# Contributing to Leonida Dispatch

Thanks for wanting to help build this out. It's a fan project, so the bar is
"make it better," not "follow a strict process" — but a few conventions
keep it maintainable.

## Getting set up

```bash
git clone <this repo>
cd leonida-dispatch
npm install
npm run dev
```

Requires Node 20+.

## Project structure

```
src/
  components/   Shared, reusable UI (nav, countdown, footer)
  pages/        One file per route (Home, LeonidaMap, Cast, Planner, Media)
  data/         Typed content — characters, locations, trailers, planner options
  index.css     Design tokens + Tailwind v4 entry point
public/
  images/       Curated, resized screenshots (see ASSETS.md before adding more)
```

## Before you open a PR

1. `npm run build` must pass clean (`tsc -b && vite build`).
2. `npm run lint` should report no new warnings.
3. If you touched a page, attach a screenshot (light theme doesn't exist yet
   — dark only) in the PR description.
4. Keep new dependencies to a minimum. This is a lean fan project, not a
   framework showcase.

## Adding content (characters, locations, trailers)

All factual content lives in `src/data/*.ts` as plain typed objects — no
CMS, no database. To add or correct an entry:

1. Edit the relevant file in `src/data/`.
2. If it needs an image, add a resized copy under `public/images/` (keep
   images ≤ 1600px wide, JPEG quality ~78–82 — see the `magick`
   invocations in git history for the exact recipe) and update `ASSETS.md`.
3. Only add content that's been **officially confirmed by Rockstar** (a
   trailer, an official screenshot drop, or Rockstar's own site/socials).
   Please don't add unverified leaks — keep this project on solid ground.

## Adding a new module/page

1. Create `src/pages/YourPage.tsx`.
2. Register the route in `src/App.tsx`.
3. Add a nav entry in both `src/components/NavBar.tsx` and
   `src/components/MobileTabBar.tsx`.
4. Follow the existing visual language: dark `ink` background, hot-pink/cyan
   accent gradient used sparingly (headlines/key numbers, not body text),
   `glass`/`glow-*` utility classes from `index.css`, Bebas Neue for display
   headings, Rajdhani for body text.

## Reporting issues

Use GitHub Issues. For bugs, include your browser, what you expected, and
what happened. For content corrections, link the official source (trailer
timestamp, screenshot URL, etc).

## Code of conduct

Be decent. This is a hype project for a game people are excited about —
keep it fun.
