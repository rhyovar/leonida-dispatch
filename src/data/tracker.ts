// PLACEHOLDER CONTENT — structure is real, items are templates.
// Rockstar has not revealed mission lists, collectible counts, or side
// content for GTA VI. These categories/items exist so the Tracker page's
// persistence, progress math, and UI are fully built and testable today.
// At launch, replace `items` in each category with real, verified content
// (wiki/community-sourced) — the shape (`TrackerItem[]`) stays the same.

export interface TrackerItem {
  id: string
  name: string
  note?: string
}

export interface TrackerCategory {
  id: string
  name: string
  description: string
  items: TrackerItem[]
}

export const trackerCategories: TrackerCategory[] = [
  {
    id: 'story',
    name: 'Story Missions',
    description: 'Main campaign missions, in order. Placeholder list — replace at launch.',
    items: Array.from({ length: 12 }, (_, i) => ({
      id: `story-${i + 1}`,
      name: `Mission ${i + 1} — TBA`,
    })),
  },
  {
    id: 'side',
    name: 'Side Content',
    description: 'Side missions, random events, and activities. Placeholder list.',
    items: Array.from({ length: 10 }, (_, i) => ({
      id: `side-${i + 1}`,
      name: `Side Activity ${i + 1} — TBA`,
    })),
  },
  {
    id: 'collectibles',
    name: 'Collectibles',
    description: 'Hidden packages, easter eggs, and other pickups. Placeholder list.',
    items: Array.from({ length: 15 }, (_, i) => ({
      id: `collect-${i + 1}`,
      name: `Collectible ${i + 1} — TBA`,
    })),
  },
  {
    id: 'properties',
    name: 'Properties',
    description: 'Purchasable or story-unlocked properties. Placeholder list.',
    items: Array.from({ length: 6 }, (_, i) => ({
      id: `prop-${i + 1}`,
      name: `Property ${i + 1} — TBA`,
    })),
  },
]
