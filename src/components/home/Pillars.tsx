import { Wallet, Leaf, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const pillars = [
  {
    icon: Wallet,
    title: 'Spara pengar',
    description:
      'Sänk elkostnaderna med solenergi och smart energistyrning. En typisk BRF sparar 50 000–150 000 kr per år.',
  },
  {
    icon: Leaf,
    title: 'Minska utsläpp',
    description:
      'Bidra till omställningen. Varje kWh solenergi minskar beroendet av importerad fossilel.',
  },
  {
    icon: TrendingUp,
    title: 'Öka fastighetsvärdet',
    description:
      'Solceller och energieffektivisering höjer fastighetens marknadsvärde och attraktionskraft.',
  },
]

export function Pillars() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-heading text-3xl md:text-4xl text-forest text-center mb-4">
        Varför Energiklok?
      </h2>
      <p className="text-center text-ink-light text-lg mb-12 max-w-2xl mx-auto">
        Vi gör det enkelt att förstå, planera och genomföra energiförbättringar.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <Card key={pillar.title} hover>
            <div className="w-12 h-12 rounded-xl bg-sage-light/50 flex items-center justify-center mb-4">
              <pillar.icon className="w-6 h-6 text-forest" />
            </div>
            <h3 className="font-heading text-xl text-forest mb-2">{pillar.title}</h3>
            <p className="text-ink-light leading-relaxed">{pillar.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
