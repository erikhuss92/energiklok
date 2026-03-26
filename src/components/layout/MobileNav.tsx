'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-forest hover:text-forest-light transition-colors"
        aria-label="Öppna meny"
      >
        <Menu className="w-6 h-6" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed top-0 right-0 bottom-0 w-72 bg-cream z-50 shadow-xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <span className="font-heading text-xl text-forest">Energiklok</span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-forest hover:text-forest-light"
                aria-label="Stäng meny"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg text-ink hover:text-forest transition-colors py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <a
                href="/kalkylator"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-amber text-forest-dark font-semibold py-3 rounded-lg hover:bg-amber-dark transition-colors"
              >
                Beräkna din besparing
              </a>
            </div>
          </nav>
        </>
      )}
    </div>
  )
}
