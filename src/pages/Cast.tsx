import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { characters } from '../data/characters'

export default function Cast() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = characters.find((c) => c.id === activeId) ?? null

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="font-display text-5xl tracking-wide">
        CAST <span className="text-gradient">DOSSIER</span>
      </h1>
      <p className="mt-3 max-w-2xl text-mist">
        Everyone confirmed so far across both official trailers. Tap a file for the full bio.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {characters.map((c, i) => (
          <motion.button
            key={c.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setActiveId(c.id)}
            className="group relative overflow-hidden rounded-2xl border border-white/8 text-left"
          >
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={c.images[0]}
                alt={c.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div
              className="absolute inset-x-0 bottom-0 h-1"
              style={{ background: c.accent }}
            />
            <div className="absolute inset-x-0 bottom-0 p-3">
              <div className="text-[0.6rem] font-semibold uppercase tracking-widest text-mist">
                {c.role}
              </div>
              <div className="font-display text-lg tracking-wide text-white">{c.name}</div>
            </div>
          </motion.button>
        ))}
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
              className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-raised sm:rounded-3xl"
              style={{ boxShadow: `0 0 0 1px ${active.accent}40, 0 20px 60px -20px ${active.accent}60` }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
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
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: active.accent }}>
                  {active.role}
                </div>
                <h3 className="mt-1 font-display text-4xl tracking-wide">{active.name}</h3>
                <p className="mt-2 italic text-mist">"{active.tagline}"</p>
                <p className="mt-4 text-mist">{active.bio}</p>
                {active.images[1] && (
                  <img src={active.images[1]} className="mt-5 aspect-video w-full rounded-xl object-cover" />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
