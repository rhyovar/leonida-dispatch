// PLACEHOLDER CONTENT — structure is real, entries are templates.
// Rockstar has not revealed a vehicle, weapon, or property list for GTA VI.
// This file exists so the Database page's search/filter/grid is fully built
// today. At launch, replace `entries` with real, verified data — the
// shape (`DatabaseEntry`) and category keys stay the same.

export type DatabaseCategory = 'vehicle' | 'weapon' | 'property'

export interface DatabaseEntry {
  id: string
  category: DatabaseCategory
  name: string
  summary: string
}

export const categoryLabels: Record<DatabaseCategory, string> = {
  vehicle: 'Vehicles',
  weapon: 'Weapons',
  property: 'Properties',
}

function placeholderSet(category: DatabaseCategory, count: number): DatabaseEntry[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${category}-${i + 1}`,
    category,
    name: `${categoryLabels[category].slice(0, -1)} ${i + 1} — TBA`,
    summary: 'Not yet confirmed by Rockstar. Placeholder entry — swap in real data at launch.',
  }))
}

export const databaseEntries: DatabaseEntry[] = [
  ...placeholderSet('vehicle', 12),
  ...placeholderSet('weapon', 10),
  ...placeholderSet('property', 6),
]
