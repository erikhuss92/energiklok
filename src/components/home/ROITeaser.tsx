import { Button } from '@/components/ui/Button'
import { Calculator, TrendingUp } from 'lucide-react'

export function ROITeaser() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-gradient-to-br from-sage-light/30 to-cream-dark rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-forest" />
            <span className="text-sm font-medium text-forest uppercase tracking-wider">
              Typisk besparing
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-forest mb-4">
            En BRF med 20 lägenheter kan spara{' '}
            <span className="text-amber font-mono">~120 000 kr</span>{' '}
            per år
          </h2>
          <p className="text-ink-light text-lg mb-6">
            Med solceller på taket minskar ni den gemensamma elkostnaden och ökar fastighetens värde.
            Beräkna er unika besparing med vår kalkylator.
          </p>
          <Button href="/kalkylator" variant="primary" size="lg">
            <Calculator className="w-5 h-5 mr-2" />
            Testa kalkylatorn
          </Button>
        </div>
        <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-full bg-amber/10 flex items-center justify-center">
          <div className="text-center">
            <div className="font-mono text-4xl md:text-5xl font-bold text-forest">8</div>
            <div className="text-sm text-ink-light mt-1">år återbetalningstid</div>
          </div>
        </div>
      </div>
    </section>
  )
}
