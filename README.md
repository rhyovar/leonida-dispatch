<div align="center">

# LEONIDA DISPATCH

### An unofficial, fan-made companion for GTA VI

Countdown &middot; Interactive Map &middot; Cast Dossier &middot; Completion Tracker &middot; Database &middot; Crew Planner &middot; Trailer Vault

**Not affiliated with Rockstar Games or Take-Two Interactive.**

</div>

---

## What is this?

Leonida Dispatch is a dark-mode, neon-soaked web app built for the lead-up to
Grand Theft Auto VI's launch on **November 19, 2026**. It's not a wiki and
it's not a leak aggregator — it's a small, focused companion built on
Rockstar's own official reveals:

- A **live countdown** to launch day.
- An **interactive map of Leonida** — all six confirmed counties, with
  a file on each region pulled from Rockstar's own trailers and press
  materials.
- A **cast dossier** covering every character confirmed across both
  official trailers, with bio cards and official art.
- A **crew planner** — a fan-made, entirely speculative "what if" tool
  for planning your own heist crew before launch (no real game mechanics,
  just a fun build-your-crew generator).
- A **trailer vault** with both official trailers embedded plus a curated
  screenshot gallery.
- A **completion tracker** — a persistent, check-off-as-you-go list for
  missions, side content, collectibles, and properties. Saved to
  `localStorage`, survives reloads.
- A **database** — a searchable, filterable reference for vehicles,
  weapons, and properties.
- A **collectibles layer** on the map — clickable pins you can mark found,
  persisted locally, filterable by kind.

Everything here is sourced from material Rockstar Games has already made
public. No leaks, no unverified rumors, no datamined content.

### A note on launch-day content

The Tracker, Database, and map Collectibles layer ship today with clearly
labeled **placeholder data** — Rockstar hasn't revealed mission lists,
collectible counts, or a vehicle/weapon roster yet, so that data can't
exist. What's real and working right now is the *infrastructure*: the
typed data shapes, the search/filter logic, and the `localStorage`
persistence (check something off, reload the page, it's still checked).
At launch, replacing the placeholder arrays in `src/data/tracker.ts`,
`src/data/database.ts`, and `src/data/collectibles.ts` with real, verified
content is the only change needed — no UI rework. See each file's header
comment for specifics.

## Screenshots

> Run it locally (`npm run dev`) to see it live — static screenshots don't
> do the countdown or the crew planner's animations justice.

| Dispatch (Home) | Leonida Map |
|---|---|
| Hero, live countdown, trailer feed | Six-county + collectibles interactive map with per-region detail panels |

| Cast Dossier | Crew Planner |
|---|---|
| Full cast grid with bios | Build a crew, pick an approach, generate a job card |

| Completion Tracker | Database |
|---|---|
| Persistent checklist with progress bars | Searchable, filterable vehicle/weapon/property reference |

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) | Type-safe, component-driven, nothing exotic |
| Build tool | [Vite 8](https://vite.dev) | Fast dev server, fast builds |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) | Utility-first, CSS-native `@theme` tokens, no config file needed |
| Routing | [React Router v7](https://reactrouter.com) | Client-side routing across 7 pages |
| Motion | [Framer Motion](https://www.framer.com/motion/) | Scroll-triggered reveals, modal transitions, the countdown's feel |
| Icons | [Lucide](https://lucide.dev) | Consistent, lightweight icon set |

No backend, no external database, no API keys required. All content is
static, typed TypeScript data in `src/data/`; user progress (Tracker,
collectibles found) persists client-side via `localStorage`.

## Getting started

**Requirements:** Node.js 20+ and npm.

```bash
git clone <this-repo-url>
cd leonida-dispatch
npm install
npm run dev
```

Open the URL Vite prints (defaults to `http://localhost:5173`).

### Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check (`tsc -b`) then produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally to sanity-check it |
| `npm run lint` | Run `oxlint` over the codebase |

## Project structure

```
leonida-dispatch/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── cast/           Curated, resized character stills
│       ├── locations/      Curated, resized location stills
│       └── hero/           Hero background images
├── src/
│   ├── components/
│   │   ├── NavBar.tsx           Desktop top navigation
│   │   ├── MobileTabBar.tsx     Mobile bottom tab bar
│   │   ├── Countdown.tsx        Live countdown to release
│   │   └── Footer.tsx           Site footer + legal disclaimer
│   ├── pages/
│   │   ├── Home.tsx             Hero, countdown, module grid, trailer feed
│   │   ├── LeonidaMap.tsx       Interactive map: counties + collectibles layers
│   │   ├── Cast.tsx             Character grid + detail modal
│   │   ├── Tracker.tsx          Persistent completion checklist
│   │   ├── Database.tsx         Searchable vehicle/weapon/property reference
│   │   ├── Planner.tsx          Crew/heist planner tool
│   │   └── Media.tsx            Trailer embeds + screenshot gallery
│   ├── data/
│   │   ├── characters.ts        Confirmed cast, bios, image refs
│   │   ├── locations.ts         Confirmed counties/regions, map coordinates
│   │   ├── trailers.ts          Trailer metadata + release date constant
│   │   ├── planner.ts           Crew planner's approaches/roles/targets
│   │   ├── tracker.ts           [placeholder] Tracker categories/items
│   │   ├── database.ts          [placeholder] Vehicle/weapon/property entries
│   │   └── collectibles.ts      [placeholder] Map collectible pins
│   ├── lib/
│   │   └── useLocalStorage.ts   Persistence hook (Tracker, collectibles-found)
│   ├── App.tsx                  Route table + shared layout
│   ├── main.tsx                 React entry point
│   └── index.css                Tailwind v4 entry + design tokens
├── ASSETS.md                    Image attribution & removal-request info
├── CONTRIBUTING.md              Contribution guide
├── LICENSE                      MIT (code only — see ASSETS.md for images)
└── README.md                    You are here
```

## Design system

The whole app is built around the **Vice City palette** — hot pink
(`#ff2fb0`) into cyan (`#19e7ff`), on a near-black ink background
(`#05070d`). A few rules keep it consistent:

- **Bebas Neue** for all display/heading text, **Rajdhani** for body copy
  — both loaded via Google Fonts.
- The pink→cyan gradient is reserved for headline text and key numbers
  only. It never appears in body copy or on more than one element per
  section — it's a signature, not a default.
- Cards use a consistent `glass` treatment (translucent, blurred,
  thin-bordered) defined once in `index.css` and reused everywhere.
- Every interactive surface (buttons, nav links, cards) has a visible hover
  and active state — no dead-feeling UI.
- Motion is purposeful: scroll-triggered fades on first view, spring-eased
  modal transitions, a live-ticking countdown. Nothing animates just to
  animate.

Design tokens live in `src/index.css` under `@theme` — change a color
there and it propagates everywhere via Tailwind's generated utility classes.

## Content sources & accuracy

All factual content (characters, locations, trailer stats, release date) is
sourced from Rockstar Games' own official trailers and press materials. The
**Crew Planner** is explicitly and clearly labeled as a fan-made
speculative tool with no connection to actual game mechanics — Rockstar
has not revealed heist/crew systems for GTA VI at the time of writing.

If anything here is inaccurate or Rockstar has made a newer official
statement that contradicts it, please open an issue with a source link.

## Legal

This is an unofficial, non-commercial fan project. **Grand Theft Auto**,
**GTA**, **GTA VI**, **Vice City**, and all related characters, names, and
media are trademarks of **Take-Two Interactive Software, Inc.** This
project is not affiliated with, endorsed by, sponsored by, or in any way
officially connected with Rockstar Games, Take-Two Interactive, or any of
their subsidiaries.

Source code is MIT licensed (see `LICENSE`). Image assets under
`public/images/` are Rockstar/Take-Two's own promotional material, included
for commentary and fan-reference purposes — see `ASSETS.md` for full
attribution and removal-request info.

## Contributing

Contributions welcome — see [`CONTRIBUTING.md`](./CONTRIBUTING.md) for
setup, project conventions, and how to add content.

## Roadmap

- [ ] **Launch day:** replace placeholder data in `tracker.ts`, `database.ts`,
      and `collectibles.ts` with real, verified content
- [ ] Light/alternate theme toggle
- [ ] Shareable crew-planner job cards (image export)
- [ ] Search/filter on the cast and media pages
- [ ] PWA support for an installable "dispatch terminal" feel
- [ ] Update the map and cast data as Rockstar reveals more

---

<div align="center">

Built by fans, for fans. See you in Leonida.

</div>
