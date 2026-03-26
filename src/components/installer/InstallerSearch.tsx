'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { installers, SERVICE_LABELS, type Service } from '@/data/installers'
import { InstallerCard } from './InstallerCard'
import { InstallerMap } from './InstallerMap'
import { cn } from '@/lib/utils'

const ALL_SERVICES: Service[] = ['solceller', 'batteri', 'laddbox', 'varmepump']

export function InstallerSearch() {
  const [query, setQuery] = useState('')
  const [activeServices, setActiveServices] = useState<Set<Service>>(new Set())

  const filtered = useMemo(() => {
    return installers.filter((inst) => {
      const matchesQuery =
        !query ||
        inst.name.toLowerCase().includes(query.toLowerCase()) ||
        inst.city.toLowerCase().includes(query.toLowerCase()) ||
        inst.postnummer.includes(query)

      const matchesServices =
        activeServices.size === 0 ||
        [...activeServices].every((s) => inst.services.includes(s))

      return matchesQuery && matchesServices
    })
  }, [query, activeServices])

  function toggleService(service: Service) {
    setActiveServices((prev) => {
      const next = new Set(prev)
      if (next.has(service)) {
        next.delete(service)
      } else {
        next.add(service)
      }
      return next
    })
  }

  return (
    <div>
      {/* Search + filters */}
      <div className="bg-white rounded-2xl border border-sage-light/30 p-6 mb-8">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-light" />
          <input
            type="text"
            placeholder="Sök på stad, postnummer eller företagsnamn..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-ink focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-ink-light self-center mr-1">Filtrera:</span>
          {ALL_SERVICES.map((service) => (
            <button
              key={service}
              onClick={() => toggleService(service)}
              className={cn(
                'px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
                activeServices.has(service)
                  ? 'bg-forest text-white'
                  : 'bg-sage-light/30 text-ink-light hover:bg-sage-light/50',
              )}
            >
              {SERVICE_LABELS[service]}
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="mb-8">
        <InstallerMap installers={filtered} />
      </div>

      {/* Results */}
      <p className="text-sm text-ink-light mb-4">
        {filtered.length} installatör{filtered.length !== 1 ? 'er' : ''} hittade
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((installer) => (
          <InstallerCard key={installer.id} installer={installer} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-ink-light py-12">
          Inga installatörer matchade din sökning. Prova ett annat sökord.
        </p>
      )}
    </div>
  )
}
