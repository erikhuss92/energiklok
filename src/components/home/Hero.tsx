import { ArrowRight, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-sage-light/20" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl md:text-7xl text-forest leading-[1.1] mb-6">
            Sverige kan bättre.{' '}
            <span className="text-amber">Din BRF också.</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink-light leading-relaxed mb-8 max-w-2xl">
            Vi hjälper bostadsrättsföreningar och villaägare att fatta smartare energibeslut
            — och spara pengar på köpet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kalkylator" variant="accent" size="lg">
              <Calculator className="w-5 h-5 mr-2" />
              Beräkna din besparing
            </Button>
            <Button href="/brf-guiden" variant="secondary" size="lg">
              Guide för din BRF
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
