import type { Metadata } from 'next'
import { CalculatorForm } from '@/components/calculator/CalculatorForm'

export const metadata: Metadata = {
  title: 'Besparingsräknaren — Beräkna din solcellsbesparing',
  description: 'Beräkna hur mycket du kan spara med solceller. Anpassad kalkylator för villaägare och BRF:er.',
}

export default function CalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <h1 className="font-heading text-4xl md:text-5xl text-forest mb-4">
          Besparingsräknaren
        </h1>
        <p className="text-xl text-ink-light max-w-2xl">
          Beräkna hur mycket du eller din BRF kan spara med solceller.
          Välj dina förutsättningar nedan och få en uppskattning direkt.
        </p>
      </div>

      <CalculatorForm />
    </div>
  )
}
