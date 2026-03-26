'use client'

import { Printer } from 'lucide-react'

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-forest text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-forest-light transition-colors inline-flex items-center gap-2"
    >
      <Printer className="w-4 h-4" />
      Skriv ut / Spara som PDF
    </button>
  )
}
