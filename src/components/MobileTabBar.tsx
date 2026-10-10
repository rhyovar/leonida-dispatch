import { NavLink } from 'react-router-dom'
import { Radio, Map, Users, ClipboardList, Film } from 'lucide-react'

const tabs = [
  { to: '/', label: 'Dispatch', icon: Radio },
  { to: '/map', label: 'Map', icon: Map },
  { to: '/cast', label: 'Cast', icon: Users },
  { to: '/planner', label: 'Crew', icon: ClipboardList },
  { to: '/media', label: 'Media', icon: Film },
]

export default function MobileTabBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 backdrop-blur-md lg:hidden">
      <div className="flex items-stretch justify-between px-2 py-1">
        {tabs.map((t) => {
          const Icon = t.icon
          return (
            <NavLink
              key={t.to}
              to={t.to}
              className={({ isActive }) =>
                `flex flex-1 flex-col items-center gap-1 rounded-xl py-2 text-[0.65rem] font-semibold uppercase tracking-wide ${
                  isActive ? 'text-cyan' : 'text-mist-dim'
                }`
              }
            >
              <Icon className="h-5 w-5" strokeWidth={2.25} />
              {t.label}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
