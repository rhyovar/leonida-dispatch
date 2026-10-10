import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { trailers } from '../data/trailers'
import { characters } from '../data/characters'
import { locations } from '../data/locations'

const gallery = [
  ...characters.flatMap((c) => c.images.map((src) => ({ src, caption: c.name }))),
  ...locations.flatMap((l) => l.images.map((src) => ({ src, caption: l.name }))),
]

export default function Media() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="font-display text-5xl tracking-wide">
        TRAILER <span className="text-gradient">VAULT</span>
      </h1>
      <p className="mt-3 max-w-2xl text-mist">
        Every official trailer plus a curated gallery of Rockstar’s own screenshots.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {trailers.map((t) => (
          <div key={t.id} className="overflow-hidden rounded-2xl border border-white/8 bg-ink-card">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${t.videoId}`}
                title={t.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl tracking-wide">{t.title}</h3>
              <p className="mt-2 text-sm text-mist">{t.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-3xl tracking-wide">SCREENSHOT GALLERY</h2>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {gallery.map((g, i) => (
          <button
            key={g.src + i}
            onClick={() => setLightbox(g.src)}
            className="group relative aspect-video overflow-hidden rounded-xl border border-white/8"
          >
            <img
              src={g.src}
              alt={g.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
              <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                {g.caption}
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              src={lightbox}
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-16 text-center text-xs text-mist-dim">
        All screenshots and trailers are the property of Rockstar Games / Take-Two Interactive,
        used here for commentary and fan-reference purposes only.
      </p>
    </div>
  )
}
