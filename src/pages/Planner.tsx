import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dices, Shield, Users as UsersIcon } from 'lucide-react'
import { characters } from '../data/characters'
import { approaches, roles, targets } from '../data/planner'

const leads = characters.filter((c) => c.role === 'Protagonist')

function Meter({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs font-semibold uppercase tracking-wide text-mist">
        <span>{label}</span>
        <span>{value}/{max}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={{ width: `${(value / max) * 100}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        />
      </div>
    </div>
  )
}

export default function Planner() {
  const [leadId, setLeadId] = useState(leads[0].id)
  const [approachId, setApproachId] = useState(approaches[0].id)
  const [crewRoleIds, setCrewRoleIds] = useState<string[]>([])
  const [job, setJob] = useState<null | { target: string; seed: number }>(null)

  const approach = approaches.find((a) => a.id === approachId)!
  const lead = characters.find((c) => c.id === leadId)!
  const maxCrew = approach.crewSize - 1

  function toggleRole(id: string) {
    setCrewRoleIds((prev) => {
      if (prev.includes(id)) return prev.filter((r) => r !== id)
      if (prev.length >= maxCrew) return prev
      return [...prev, id]
    })
  }

  const crewRoles = useMemo(() => roles.filter((r) => crewRoleIds.includes(r.id)), [crewRoleIds])

  function generateJob() {
    const target = targets[Math.floor(Math.random() * targets.length)]
    setJob({ target, seed: Math.random() })
  }

  const heatLevel = Math.min(5, approach.risk + Math.max(0, maxCrew - crewRoles.length))

  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <h1 className="font-display text-5xl tracking-wide">
        CREW <span className="text-gradient">PLANNER</span>
      </h1>
      <p className="mt-3 max-w-2xl text-mist">
        A fan-made what-if tool — no real game data here, just a fun way to plan your dream
        crew before launch day.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-xl tracking-wide text-mist">LEAD</h2>
            <div className="mt-3 flex gap-3">
              {leads.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLeadId(l.id)}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-colors ${
                    leadId === l.id ? 'border-white/30 bg-white/10' : 'border-white/8 bg-ink-card'
                  }`}
                >
                  <img src={l.images[0]} className="h-10 w-10 rounded-full object-cover" />
                  <span className="font-semibold">{l.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl tracking-wide text-mist">APPROACH</h2>
            <div className="mt-3 space-y-3">
              {approaches.map((a) => (
                <button
                  key={a.id}
                  onClick={() => {
                    setApproachId(a.id)
                    setCrewRoleIds([])
                  }}
                  className={`w-full rounded-xl border p-4 text-left transition-colors ${
                    approachId === a.id ? 'border-white/30 bg-white/10' : 'border-white/8 bg-ink-card'
                  }`}
                >
                  <div className="font-semibold">{a.name}</div>
                  <div className="text-sm text-mist">{a.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl tracking-wide text-mist">
              CREW <span className="text-sm normal-case text-mist-dim">({crewRoleIds.length}/{maxCrew})</span>
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {roles.map((r) => {
                const selected = crewRoleIds.includes(r.id)
                return (
                  <button
                    key={r.id}
                    onClick={() => toggleRole(r.id)}
                    disabled={!selected && crewRoleIds.length >= maxCrew}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors disabled:opacity-30 ${
                      selected ? 'border-cyan/50 bg-cyan/15 text-cyan' : 'border-white/8 bg-ink-card text-mist'
                    }`}
                  >
                    {r.name}
                  </button>
                )
              })}
            </div>
          </div>

          <button
            onClick={generateJob}
            disabled={crewRoleIds.length < maxCrew}
            className="glow-pink flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-hotpink to-cyan px-6 py-4 font-display text-xl tracking-wide text-ink disabled:opacity-30"
          >
            <Dices className="h-5 w-5" /> GENERATE JOB CARD
          </button>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <AnimatePresence mode="wait">
            {job ? (
              <motion.div
                key={job.seed}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="glow-cyan overflow-hidden rounded-3xl border border-white/10 bg-ink-card"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <img src={lead.images[1] ?? lead.images[0]} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-card to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-cyan">
                    Job Card
                  </div>
                  <h3 className="mt-1 font-display text-3xl tracking-wide">{job.target}</h3>
                  <p className="mt-2 text-sm text-mist">
                    Lead: <span className="text-white">{lead.name}</span> &middot; Approach:{' '}
                    <span className="text-white">{approach.name}</span>
                  </p>

                  <div className="mt-5 space-y-4">
                    <Meter label="Heat" value={heatLevel} max={5} color="linear-gradient(90deg,#ff2fb0,#ff5a3c)" />
                    <Meter label="Payout" value={approach.payout} max={5} color="linear-gradient(90deg,#19e7ff,#19ffb0)" />
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-mist">
                      <UsersIcon className="h-4 w-4" /> Crew
                    </div>
                    <ul className="mt-2 space-y-1">
                      {crewRoles.map((r) => (
                        <li key={r.id} className="text-sm text-mist">
                          <span className="text-white">{r.name}</span> — {r.desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 p-8 text-center text-mist-dim">
                <Shield className="h-8 w-8" />
                <p className="mt-3 text-sm">
                  Pick a lead, an approach, and fill your crew to generate a job card.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
