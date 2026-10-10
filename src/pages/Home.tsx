import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Map, Users, ClipboardList, Film, ArrowUpRight } from 'lucide-react'
import Countdown from '../components/Countdown'
import { trailers } from '../data/trailers'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const modules = [
  {
    to: '/map',
    icon: Map,
    title: 'Leonida Map',
    desc: 'Six counties, six vibes. Click through Vice City, Grassrivers, Ambrosia, and more.',
    accent: 'from-pink-500/20 to-transparent',
  },
  {
    to: '/cast',
    icon: Users,
    title: 'Cast Dossier',
    desc: 'Jason, Lucia, and the supporting crew pulling Leonida’s strings.',
    accent: 'from-cyan-400/20 to-transparent',
  },
  {
    to: '/planner',
    icon: ClipboardList,
    title: 'Crew Planner',
    desc: 'Build your own heist crew, pick an approach, and generate a job card.',
    accent: 'from-amber-400/20 to-transparent',
  },
  {
    to: '/media',
    icon: Film,
    title: 'Trailer Vault',
    desc: 'Both official trailers with stats, plus a curated screenshot gallery.',
    accent: 'from-purple-400/20 to-transparent',
  },
]

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="grid-overlay scanlines absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url(/images/hero/jason_lucia_01.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/80 to-ink" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 py-24 text-center sm:py-32">
          <motion.span
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-4 rounded-full border border-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-mist"
          >
            Unofficial Fan Companion
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="font-display text-6xl leading-none sm:text-8xl"
          >
            WELCOME TO
            <br />
            <span className="text-gradient">LEONIDA</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-mist"
          >
            Your dispatch terminal for everything GTA 6 — countdown, interactive map,
            cast files, a crew planner, and the full trailer vault. Built by fans, for fans.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <Countdown />
          </motion.div>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.35 }}
            className="mt-4 text-sm text-mist-dim"
          >
            until Grand Theft Auto VI — November 19, 2026
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={m.to}
                  className={`group relative block overflow-hidden rounded-2xl border border-white/8 bg-ink-card p-6 transition-transform hover:-translate-y-1`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${m.accent} opacity-0 transition-opacity group-hover:opacity-100`} />
                  <div className="relative">
                    <Icon className="h-6 w-6 text-cyan" strokeWidth={2} />
                    <h3 className="mt-4 font-display text-2xl tracking-wide">{m.title}</h3>
                    <p className="mt-2 text-sm text-mist">{m.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-cyan">
                      Open <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <h2 className="font-display text-4xl tracking-wide">
          LATEST <span className="text-gradient">TRANSMISSIONS</span>
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
                <div className="mt-4 flex gap-4">
                  {t.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-lg text-white">{s.value}</div>
                      <div className="text-[0.65rem] uppercase tracking-wide text-mist-dim">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
