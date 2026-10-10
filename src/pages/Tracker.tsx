import { motion } from 'framer-motion'
import { CheckCircle2, Circle, RotateCcw } from 'lucide-react'
import { trackerCategories } from '../data/tracker'
import { useLocalStorage } from '../lib/useLocalStorage'

export default function Tracker() {
  const [done, setDone] = useLocalStorage<Record<string, boolean>>('ld-tracker-done', {})

  const totalItems = trackerCategories.reduce((n, c) => n + c.items.length, 0)
  const totalDone = Object.values(done).filter(Boolean).length
  const overallPct = totalItems === 0 ? 0 : Math.round((totalDone / totalItems) * 100)

  function toggle(id: string) {
    setDone((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function resetAll() {
    setDone({})
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-5xl tracking-wide">
            COMPLETION <span className="text-gradient">TRACKER</span>
          </h1>
          <p className="mt-3 max-w-2xl text-mist">
            Check things off as you go — your progress is saved in this browser.
            Content below is a placeholder template; it’ll be replaced with real,
            verified mission/collectible lists on launch day.
          </p>
        </div>
        <button
          onClick={resetAll}
          className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-mist hover:text-white"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Reset
        </button>
      </div>

      <div className="glass mt-8 rounded-2xl p-6">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-sm font-semibold uppercase tracking-wide text-mist">
            Overall progress
          </span>
          <span className="font-display text-2xl">{overallPct}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-white/5">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg,#ff2fb0,#19e7ff)' }}
            animate={{ width: `${overallPct}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="mt-2 text-xs text-mist-dim">
          {totalDone} / {totalItems} items checked off
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {trackerCategories.map((cat) => {
          const catDone = cat.items.filter((i) => done[i.id]).length
          const catPct = cat.items.length === 0 ? 0 : Math.round((catDone / cat.items.length) * 100)
          return (
            <div key={cat.id} className="rounded-2xl border border-white/8 bg-ink-card p-5">
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-xl tracking-wide">{cat.name}</h2>
                <span className="text-xs font-semibold text-mist-dim">
                  {catDone}/{cat.items.length}
                </span>
              </div>
              <p className="mt-1 text-xs text-mist-dim">{cat.description}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-cyan transition-all"
                  style={{ width: `${catPct}%` }}
                />
              </div>
              <ul className="mt-4 max-h-64 space-y-1 overflow-y-auto pr-1">
                {cat.items.map((item) => {
                  const checked = !!done[item.id]
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => toggle(item.id)}
                        className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition-colors ${
                          checked ? 'text-mist-dim line-through' : 'text-white hover:bg-white/5'
                        }`}
                      >
                        {checked ? (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" />
                        ) : (
                          <Circle className="h-4 w-4 shrink-0 text-mist-dim" />
                        )}
                        {item.name}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
