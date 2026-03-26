import type { Metadata } from 'next'
import { brfSteps } from '@/data/brf-steps'
import { BRFStepper } from '@/components/content/BRFStepper'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { FileDown, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'BRF-guiden — Solceller för din bostadsrättsförening',
  description: 'Steg-för-steg guide för BRF-styrelser som vill installera solceller. Från energikartläggning till uppföljning.',
}

export default function BRFGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-heading text-4xl md:text-5xl text-forest mb-4">
          BRF-guiden
        </h1>
        <p className="text-xl text-ink-light leading-relaxed max-w-2xl">
          En komplett steg-för-steg guide för BRF-styrelser som vill investera i
          solenergi. Från första kartläggningen till driftsättning och uppföljning.
        </p>
      </div>

      {/* CTA banner */}
      <Card className="mb-10 bg-gradient-to-r from-sage-light/20 to-cream-dark">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <p className="font-medium text-forest">
              Börja med att beräkna er potentiella besparing
            </p>
            <p className="text-sm text-ink-light">
              Vår kalkylator ger en snabb uppskattning baserad på er förenings storlek.
            </p>
          </div>
          <Button href="/kalkylator?typ=brf" variant="accent" size="sm">
            <Calculator className="w-4 h-4 mr-2" />
            Öppna kalkylatorn
          </Button>
        </div>
      </Card>

      {/* Steps */}
      <BRFStepper steps={brfSteps} />

      {/* Resources */}
      <section className="mt-16">
        <h2 className="font-heading text-2xl text-forest mb-6">Resurser att ladda ner</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'BRF Energi-checklista', format: 'PDF' },
            { title: 'Mall: Styrelseprotokoll energibeslut', format: 'PDF' },
            { title: 'Mall: Informationsbrev till boende', format: 'PDF' },
            { title: 'Jämförelsemall för offerter', format: 'PDF' },
          ].map((resource) => (
            <Card key={resource.title} hover className="cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <FileDown className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <p className="font-medium text-forest text-sm">{resource.title}</p>
                  <p className="text-xs text-ink-light">{resource.format} — Kommer snart</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
