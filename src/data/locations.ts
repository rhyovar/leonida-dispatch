export interface Location {
  id: string
  name: string
  county: string
  description: string
  vibe: string
  images: string[]
  mapPosition: { x: number; y: number }
  color: string
}

export const locations: Location[] = [
  {
    id: 'vice-city',
    name: 'Vice City',
    county: 'Vice-Dale County',
    description:
      'The modern, neon-soaked heart of Leonida. A fictional take on Miami with art-deco skyscrapers, a packed waterfront, streetcars, and neighborhoods like Ocean Beach, Little Havana, Little Haiti, South Beach, and the Venetian Islands.',
    vibe: 'Dense urban sprawl, pastel towers, bass-heavy nightlife',
    images: ['/images/locations/Vice_City_01.jpg', '/images/locations/Vice_City_02.jpg', '/images/locations/Vice_City_03.jpg'],
    mapPosition: { x: 68, y: 58 },
    color: '#ff2fb0',
  },
  {
    id: 'leonida-keys',
    name: 'Leonida Keys',
    county: 'Mariana County',
    description:
      'A tropical archipelago modeled on the Florida Keys — upscale waterfront properties, a laid-back island pace, and a stark contrast to the chaos of Vice City.',
    vibe: 'Turquoise water, island bars, old money hiding in plain sight',
    images: ['/images/locations/Leonida_Keys_01.jpg', '/images/locations/Leonida_Keys_02.jpg', '/images/locations/Leonida_Keys_03.jpg'],
    mapPosition: { x: 58, y: 88 },
    color: '#19e7ff',
  },
  {
    id: 'grassrivers',
    name: 'Grassrivers',
    county: 'Mariana County',
    description:
      'An Everglades-style wetland of mangroves, gators, and airboats. Home turf for a different kind of criminal enterprise than the city offers.',
    vibe: 'Swamp fog, airboat chases, nowhere to hide and nowhere to run',
    images: ['/images/locations/Grassrivers_01.jpg', '/images/locations/Grassrivers_02.jpg', '/images/locations/Grassrivers_03.jpg'],
    mapPosition: { x: 40, y: 72 },
    color: '#19ffb0',
  },
  {
    id: 'port-gellhorn',
    name: 'Port Gellhorn',
    county: 'Kelly County',
    description:
      'A forgotten Gulf Coast town past its prime — cheap motels, empty strip malls, and a cheap-liquor economy. Once a hotspot, now a place people end up rather than choose.',
    vibe: 'Faded neon signs, boarded storefronts, desperation with a smile',
    images: ['/images/locations/Port_Gellhorn_01.jpg', '/images/locations/Port_Gellhorn_02.jpg', '/images/locations/Port_Gellhorn_03.jpg'],
    mapPosition: { x: 22, y: 48 },
    color: '#ffb020',
  },
  {
    id: 'ambrosia',
    name: 'Ambrosia',
    county: 'Ambrosia County',
    description:
      'The industrial heart of Leonida, built around a sugar refinery and claimed by a biker gang. Ground zero for a battle over health and wealth playing out across the state.',
    vibe: 'Smokestacks, chain-link, engine noise, territory lines',
    images: ['/images/locations/Ambrosia_01.jpg', '/images/locations/Ambrosia_02.jpg', '/images/locations/Ambrosia_03.jpg'],
    mapPosition: { x: 48, y: 42 },
    color: '#ff5a3c',
  },
  {
    id: 'mount-kalaga',
    name: 'Mount Kalaga National Park',
    county: 'Lummox County',
    description:
      'The northern wilderness bordering Gloriana — hills, hunting and fishing grounds, and off-road trails far from the city lights.',
    vibe: 'Pine ridgelines, dirt roads, quiet you can hear',
    images: ['/images/locations/Mount_Kalaga_01.jpg', '/images/locations/Mount_Kalaga_02.jpg', '/images/locations/Mount_Kalaga_03.jpg'],
    mapPosition: { x: 30, y: 18 },
    color: '#8b5cf6',
  },
]

export const counties = [
  { name: 'Vice-Dale County', note: 'Southeast — Vice City, Ocean Beach, Little Havana, VC Port, Venetian Islands' },
  { name: 'Leonard County', note: 'Northeast — Waning Sands' },
  { name: 'Ambrosia County', note: 'Middle — Ambrosia, Lake Leonida' },
  { name: 'Kelly County', note: 'Northwest — Port Gellhorn' },
  { name: 'Mariana County', note: 'Southwest — Grassrivers, Leonida Keys, Key Lento, Watson Bay' },
  { name: 'Lummox County', note: 'North — Mount Kalaga National Park' },
]
