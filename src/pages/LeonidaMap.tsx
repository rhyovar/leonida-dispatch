import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, Circle } from 'lucide-react'
import { locations, counties } from '../data/locations'
import { collectibles, collectibleKindLabels, collectibleKindColors, type CollectibleKind } from '../data/collectibles'
import { useLocalStorage } from '../lib/useLocalStorage'

type Layer = 'counties' | 'collectibles'
const kinds: CollectibleKind[] = ['weapon', 'vehicle', 'package', 'secret']

export default function LeonidaMap() {
  const [layer, setLayer] = useState<Layer>('counties')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [activeKinds, setActiveKinds] = useState<CollectibleKind[]>(kinds)
  const [found, setFound] = useLocalStorage<Record<string, boolean>>('ld-collectibles-found', {})

  const active = locations.find((l) => l.id === activeId) ?? null

  const visibleCollectibles = useMemo(
    () => collectibles.filter((c) => activeKinds.includes(c.kind)),
    [activeKinds],
  )

  function toggleKind(k: CollectibleKind) {
    setActiveKinds((prev) => (prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]))
  }

  function toggleFound(id: string) {
    setFound((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const foundCount = collectibles.filter((c) => found[c.id]).length

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-5xl tracking-wide">
            STATE OF <span className="text-gradient">LEONIDA</span>
          </h1>
          <p className="mt-3 max-w-2xl text-mist">
            Six counties confirmed by Rockstar — roughly twice the size of GTA V’s map.
            {layer === 'counties' ? ' Click a pin to pull the file on each region.' : ' Collectible pins are illustrative placeholders until real locations are mapped.'}
          </p>
        </div>
        <div className="flex gap-1 rounded-full border border-white/10 p-1">
          <button
            onClick={() => setLayer('counties')}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
              layer === 'counties' ? 'bg-white/10 text-white' : 'text-mist'
            }`}
          >
            Counties
          </button>
          <button
            onClick={() => setLayer('collectibles')}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
              layer === 'collectibles' ? 'bg-white/10 text-white' : 'text-mist'
            }`}
          >
            Collectibles
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-ink-card">
          <div className="grid-overlay absolute inset-0 opacity-40" />
          <svg viewBox="0 0 100 100" className="relative h-full w-full" style={{ minHeight: 420 }}>
            <defs>
              <radialGradient id="landGlow" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#10152a" />
                <stop offset="100%" stopColor="#05070d" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#landGlow)" />

            {layer === 'counties' && (
              <>
                {locations.map((loc) => (
                  <line
                    key={loc.id}
                    x1={loc.mapPosition.x}
                    y1={loc.mapPosition.y}
                    x2={50}
                    y2={50}
                    stroke={loc.color}
                    strokeWidth={0.15}
                    opacity={activeId === loc.id ? 0.5 : 0.08}
                  />
                ))}
                {locations.map((loc) => (
                  <g
                    key={loc.id}
                    transform={`translate(${loc.mapPosition.x} ${loc.mapPosition.y})`}
                    className="cursor-pointer"
                    onClick={() => setActiveId(loc.id)}
                  >
                    <circle
                      r={activeId === loc.id ? 3.2 : 2.4}
                      fill={loc.color}
                      opacity={activeId === loc.id ? 1 : 0.75}
                      style={{ transition: 'r 0.2s ease' }}
                    />
                    <circle r={5.5} fill={loc.color} opacity={0.15} />
                  </g>
                ))}
              </>
            )}

            {layer === 'collectibles' &&
              visibleCollectibles.map((c) => {
                const isFound = !!found[c.id]
                const color = collectibleKindColors[c.kind]
                return (
                  <g
                    key={c.id}
                    transform={`translate(${c.mapPosition.x} ${c.mapPosition.y})`}
                    className="cursor-pointer"
                    onClick={() => toggleFound(c.id)}
                  >
                    <circle r={2} fill={isFound ? '#2a3350' : color} opacity={isFound ? 0.5 : 0.9} />
                    <circle r={4} fill={color} opacity={0.15} />
                  </g>
                )
              })}
          </svg>

          {layer === 'counties' && (
            <div className="pointer-events-none absolute inset-0">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveId(loc.id)}
                  className="pointer-events-auto absolute -translate-x-1/2 -translate-y-full rounded-md px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white/90"
                  style={{ left: `${loc.mapPosition.x}%`, top: `${loc.mapPosition.y - 3}%` }}
                >
                  {loc.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {layer === 'counties' ? (
          <div className="rounded-3xl border border-white/8 bg-ink-card p-6">
            <h2 className="font-display text-xl tracking-wide text-mist">COUNTIES</h2>
            <ul className="mt-4 space-y-3">
              {counties.map((c) => (
                <li key={c.name} className="border-b border-white/5 pb-3 last:border-0">
                  <div className="font-semibold text-white">{c.name}</div>
                  <div className="text-sm text-mist">{c.note}</div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="rounded-3xl border border-white/8 bg-ink-card p-6">
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-xl tracking-wide text-mist">COLLECTIBLES</h2>
              <span className="text-xs font-semibold text-mist-dim">
                {foundCount}/{collectibles.length} found
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {kinds.map((k) => (
                <button
                  key={k}
                  onClick={() => toggleKind(k)}
                  className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold"
                  style={{
                    borderColor: activeKinds.includes(k) ? collectibleKindColors[k] : 'rgba(255,255,255,0.08)',
                    color: activeKinds.includes(k) ? collectibleKindColors[k] : 'var(--color-mist-dim)',
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: collectibleKindColors[k] }}
                  />
                  {collectibleKindLabels[k]}
                </button>
              ))}
            </div>
            <ul className="mt-5 space-y-1">
              {visibleCollectibles.map((c) => {
                const isFound = !!found[c.id]
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => toggleFound(c.id)}
                      className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm ${
                        isFound ? 'text-mist-dim line-through' : 'text-white hover:bg-white/5'
                      }`}
                    >
                      {isFound ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" />
                      ) : (
                        <Circle className="h-4 w-4 shrink-0" style={{ color: collectibleKindColors[c.kind] }} />
                      )}
                      {c.name}
                    </button>
                  </li>
                )
              })}
            </ul>
            <p className="mt-4 text-xs text-mist-dim">
              Illustrative placeholder pins — real collectible coordinates will replace these
              once the community maps them post-launch.
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-6"
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
              onClick={(e) => e.stopPropagation()}
              className="glow-pink max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-raised sm:rounded-3xl"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img src={active.images[0]} alt={active.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-raised to-transparent" />
                <button
                  onClick={() => setActiveId(null)}
                  className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-cyan">
                  {active.county}
                </div>
                <h3 className="mt-1 font-display text-4xl tracking-wide">{active.name}</h3>
                <p className="mt-3 text-mist">{active.description}</p>
                <p className="mt-3 text-sm italic text-mist-dim">{active.vibe}</p>
                {active.images.length > 1 && (
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {active.images.slice(1).map((img) => (
                      <img key={img} src={img} className="aspect-video w-full rounded-xl object-cover" />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
