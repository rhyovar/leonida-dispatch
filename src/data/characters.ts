export interface Character {
  id: string
  name: string
  role: string
  tagline: string
  bio: string
  images: string[]
  accent: string
}

export const characters: Character[] = [
  {
    id: 'lucia-caminos',
    name: 'Lucia Caminos',
    role: 'Protagonist',
    tagline: 'Fresh out, nothing left to lose.',
    bio: 'One of two playable protagonists. Lucia is released from prison and reunites with Jason to pull a Bonnie-and-Clyde-style crime spree across Vice City and the wider state of Leonida.',
    images: ['/images/cast/Lucia_Caminos_01.jpg', '/images/cast/Lucia_Caminos_02.jpg'],
    accent: '#ff2fb0',
  },
  {
    id: 'jason-duval',
    name: 'Jason Duval',
    role: 'Protagonist',
    tagline: 'Love is a long road.',
    bio: 'The second playable protagonist. Jason and Lucia’s story drives the main campaign as they navigate the criminal underworld of a modern, neon-soaked Vice City.',
    images: ['/images/cast/Jason_Duval_01.jpg', '/images/cast/Jason_Duval_02.jpg'],
    accent: '#19e7ff',
  },
  {
    id: 'cal-hampton',
    name: 'Cal Hampton',
    role: 'Supporting Cast',
    tagline: 'Leonida has a way of pulling people in.',
    bio: 'A supporting character revealed in Trailer 2, tied into the wider web of crime spanning Vice City and the rest of the state.',
    images: ['/images/cast/Cal_Hampton_01.jpg', '/images/cast/Cal_Hampton_02.jpg'],
    accent: '#ffb020',
  },
  {
    id: 'boobie-ike',
    name: 'Boobie Ike',
    role: 'Supporting Cast',
    tagline: 'Everybody owes somebody in this state.',
    bio: 'Part of the expanded cast surrounding Jason and Lucia’s crime spree, first shown in the second official trailer.',
    images: ['/images/cast/Boobie_Ike_01.jpg', '/images/cast/Boobie_Ike_02.jpg'],
    accent: '#ff5a3c',
  },
  {
    id: 'drequan-priest',
    name: "Dre'Quan Priest",
    role: 'Supporting Cast',
    tagline: 'Every county’s got a king.',
    bio: 'One of the supporting characters confirmed alongside new locations across Leonida in Trailer 2.',
    images: ['/images/cast/DreQuan_Priest_01.jpg', '/images/cast/DreQuan_Priest_02.jpg'],
    accent: '#8b5cf6',
  },
  {
    id: 'real-dimez',
    name: 'Real Dimez',
    role: 'Supporting Cast',
    tagline: 'Leonida’s loudest crew.',
    bio: 'Introduced in the second trailer as part of the wider ensemble woven through Vice City’s underworld.',
    images: ['/images/cast/Real_Dimez_01.jpg', '/images/cast/Real_Dimez_02.jpg'],
    accent: '#19ffb0',
  },
  {
    id: 'raul-bautista',
    name: 'Raul Bautista',
    role: 'Supporting Cast',
    tagline: 'Old money, new problems.',
    bio: 'A supporting character tied to the expanded cast revealed alongside the May 2026 trailer and screenshot drop.',
    images: ['/images/cast/Raul_Bautista_01.jpg', '/images/cast/Raul_Bautista_02.jpg'],
    accent: '#ffe14d',
  },
  {
    id: 'brian-heder',
    name: 'Brian Heder',
    role: 'Supporting Cast',
    tagline: 'Somebody has to run this town.',
    bio: 'Part of the ensemble cast confirmed in Trailer 2, operating somewhere in the sprawl of Leonida.',
    images: ['/images/cast/Brian_Heder_01.jpg', '/images/cast/Brian_Heder_02.jpg'],
    accent: '#ff85c0',
  },
]
