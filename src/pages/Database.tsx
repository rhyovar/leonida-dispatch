import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { databaseEntries, categoryLabels, type DatabaseCategory } from '../data/database'

const categories: (DatabaseCategory | 'all')[] = ['all', 'vehicle', 'weapon', 'property']

export default function Database() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<DatabaseCategory | 'all'>('all')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return databaseEntries.filter((e) => {
      const matchesCategory = category === 'all' || e.category === category
      const matchesQuery = !q || e.name.toLowerCase().includes(q) || e.summary.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <h1 className="font-display text-5xl tracking-wide">
        LEONIDA <span className="text-gradient">DATABASE</span>
      </h1>
      <p className="mt-3 max-w-2xl text-mist">
        A searchable reference for vehicles, weapons, and properties. Placeholder entries today
        — this fills in with verified data as Rockstar reveals it.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist-dim" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the database..."
            className="w-full rounded-xl border border-white/8 bg-ink-card py-3 pl-10 pr-4 text-sm text-white placeholder:text-mist-dim focus:border-cyan/40 focus:outline-none"
          />
        </div>
        <div className="flex gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                category === c ? 'bg-white/10 text-white' : 'text-mist hover:text-white'
              }`}
            >
              {c === 'all' ? 'All' : categoryLabels[c]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {results.map((entry) => (
          <div key={entry.id} className="rounded-xl border border-white/8 bg-ink-card p-4">
            <div className="text-[0.6rem] font-semibold uppercase tracking-widest text-cyan">
              {categoryLabels[entry.category]}
            </div>
            <div className="mt-1 font-semibold text-white">{entry.name}</div>
            <p className="mt-1 text-sm text-mist-dim">{entry.summary}</p>
          </div>
        ))}
        {results.length === 0 && (
          <p className="col-span-full py-12 text-center text-mist-dim">No matches.</p>
        )}
      </div>
    </div>
  )
}
