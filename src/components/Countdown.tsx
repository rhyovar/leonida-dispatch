import { useEffect, useState } from 'react'
import { releaseDate } from '../data/trailers'

function getTimeParts(target: number) {
  const now = Date.now()
  const diff = Math.max(0, target - now)
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  return { days, hours, minutes, seconds, done: diff <= 0 }
}

export default function Countdown() {
  const target = new Date(releaseDate).getTime()
  const [parts, setParts] = useState(() => getTimeParts(target))

  useEffect(() => {
    const id = setInterval(() => setParts(getTimeParts(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units: { label: string; value: number }[] = [
    { label: 'Days', value: parts.days },
    { label: 'Hours', value: parts.hours },
    { label: 'Minutes', value: parts.minutes },
    { label: 'Seconds', value: parts.seconds },
  ]

  if (parts.done) {
    return (
      <div className="glass glow-pink rounded-2xl px-8 py-6 text-center">
        <p className="font-display text-3xl text-gradient">LEONIDA IS OPEN</p>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
      {units.map((u) => (
        <div
          key={u.label}
          className="glass glow-pink flex w-20 flex-col items-center rounded-2xl py-4 sm:w-24"
        >
          <span className="font-display text-3xl tabular-nums text-white sm:text-4xl">
            {String(u.value).padStart(2, '0')}
          </span>
          <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-widest text-mist">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  )
}
