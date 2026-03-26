import { Sun } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { MobileNav } from './MobileNav'
import { ScrollProgress } from './ScrollProgress'

export function Header() {
  return (
    <>
      <ScrollProgress />
      <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/90 border-b border-sage-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <Sun className="w-7 h-7 text-amber group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-heading text-2xl text-forest">Energiklok</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-light hover:text-forest transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/kalkylator"
              className="bg-amber text-forest-dark text-sm font-semibold px-4 py-2 rounded-lg hover:bg-amber-dark transition-colors"
            >
              Beräkna besparing
            </a>
          </nav>

          <MobileNav />
        </div>
      </header>
    </>
  )
}
