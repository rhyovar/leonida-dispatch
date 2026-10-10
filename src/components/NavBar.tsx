import { NavLink } from 'react-router-dom'
import { Radio } from 'lucide-react'

const links = [
  { to: '/', label: 'Dispatch' },
  { to: '/map', label: 'Map' },
  { to: '/cast', label: 'Cast' },
  { to: '/tracker', label: 'Tracker' },
  { to: '/database', label: 'Database' },
  { to: '/planner', label: 'Crew Planner' },
  { to: '/media', label: 'Media' },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <Radio className="h-5 w-5 text-cyan" strokeWidth={2.5} />
          <span className="font-display text-xl tracking-wider">
            LEONIDA <span className="text-gradient">DISPATCH</span>
          </span>
        </NavLink>
        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors xl:text-sm ${
                  isActive ? 'bg-white/10 text-white' : 'text-mist hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
