// PLACEHOLDER CONTENT — structure is real, pins are illustrative examples.
// Real collectible/POI coordinates don't exist yet; they'll be datamined
// or community-mapped after launch. This file exists so the map's pin
// layer, filtering, and rendering are fully built today. At launch,
// replace `collectibles` with real coordinates — `mapPosition` is a
// 0-100 percentage of the map SVG's viewBox, same system as locations.ts.

export type CollectibleKind = 'weapon' | 'vehicle' | 'package' | 'secret'

export interface Collectible {
  id: string
  kind: CollectibleKind
  name: string
  mapPosition: { x: number; y: number }
}

export const collectibleKindLabels: Record<CollectibleKind, string> = {
  weapon: 'Weapon Cache',
  vehicle: 'Rare Vehicle',
  package: 'Hidden Package',
  secret: 'Secret',
}

export const collectibleKindColors: Record<CollectibleKind, string> = {
  weapon: '#ff5a3c',
  vehicle: '#19e7ff',
  package: '#ffb020',
  secret: '#8b5cf6',
}

// Illustrative example pins only — NOT real in-game locations.
export const collectibles: Collectible[] = [
  { id: 'c1', kind: 'package', name: 'Example Hidden Package', mapPosition: { x: 64, y: 54 } },
  { id: 'c2', kind: 'weapon', name: 'Example Weapon Cache', mapPosition: { x: 50, y: 44 } },
  { id: 'c3', kind: 'vehicle', name: 'Example Rare Vehicle', mapPosition: { x: 56, y: 84 } },
  { id: 'c4', kind: 'secret', name: 'Example Secret', mapPosition: { x: 32, y: 22 } },
  { id: 'c5', kind: 'package', name: 'Example Hidden Package', mapPosition: { x: 24, y: 50 } },
]
