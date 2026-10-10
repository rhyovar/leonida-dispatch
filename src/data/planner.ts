export interface Approach {
  id: string
  name: string
  desc: string
  risk: number
  payout: number
  crewSize: number
}

export const approaches: Approach[] = [
  { id: 'smart', name: 'Smart & Quiet', desc: 'Slip in, slip out. Minimal noise, minimal cut.', risk: 2, payout: 2, crewSize: 2 },
  { id: 'loud', name: 'Loud & Fast', desc: 'Kick the door in and move before the response time runs out.', risk: 4, payout: 4, crewSize: 4 },
  { id: 'con', name: 'The Long Con', desc: 'Weeks of setup for one clean score.', risk: 3, payout: 5, crewSize: 3 },
]

export interface Role {
  id: string
  name: string
  desc: string
}

export const roles: Role[] = [
  { id: 'driver', name: 'Getaway Driver', desc: 'Keeps the engine running and the exit clean.' },
  { id: 'hacker', name: 'Technician', desc: 'Cracks the systems nobody else can touch.' },
  { id: 'gunman', name: 'Gunman', desc: 'Handles anything that goes wrong, loudly.' },
  { id: 'inside', name: 'Inside Contact', desc: 'Already has the access the crew needs.' },
  { id: 'planner', name: 'Planner', desc: 'Knows the building better than the people who own it.' },
]

export const targets = [
  'The Allied Crystal refinery, Ambrosia',
  'A Vice City penthouse vault, Ocean Beach',
  'An offshore cash drop, Leonida Keys',
  'A biker gang stash house, Ambrosia',
  'A Port Gellhorn motel safe room',
  'A private airstrip payroll run, VC Port',
]
