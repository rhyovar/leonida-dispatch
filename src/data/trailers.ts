export interface Trailer {
  id: string
  title: string
  videoId: string
  description: string
  stats: { label: string; value: string }[]
}

export const trailers: Trailer[] = [
  {
    id: 'trailer-1',
    title: 'Trailer 1 — "Vice City, USA"',
    videoId: 'QdBZY2fkU-0',
    description:
      'The first official reveal. Introduces dual protagonists Lucia and Jason, confirms the fictional state of Leonida, and sets the tone with Tom Petty’s "Love Is A Long Road." Released December 4, 2023, a day early after a leak forced Rockstar’s hand.',
    stats: [
      { label: 'Released', value: 'Dec 4, 2023' },
      { label: 'Length', value: '1:30' },
      { label: 'Views', value: '296M+' },
    ],
  },
  {
    id: 'trailer-2',
    title: 'Trailer 2',
    videoId: 'VQRLujxTm3c',
    description:
      'Captured entirely in-engine on PS5. Expands the story — Lucia out of prison, reunited with Jason for a crime spree across Vice City and Leonida — and reveals the supporting cast plus a wave of new locations. Confirmed the release window.',
    stats: [
      { label: 'Released', value: 'May 6, 2025' },
      { label: 'Length', value: '2:47' },
      { label: 'Views', value: '183M+' },
    ],
  },
]

export const releaseDate = '2026-11-19T00:00:00'
