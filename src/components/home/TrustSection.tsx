import { Shield, Heart, Eye } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Oberoende',
    description: 'Vi säljer ingenting. Våra råd baseras på fakta, inte provision.',
  },
  {
    icon: Eye,
    title: 'Transparent',
    description: 'Alla våra kalkyler och antaganden är öppna och granskningsbara.',
  },
  {
    icon: Heart,
    title: 'Ideell',
    description: 'Vi är en ideell förening som drivs av engagemang för hållbar energi.',
  },
]

export function TrustSection() {
  return (
    <section className="bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl text-forest mb-2">
            Varför lita på oss?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-3">
                <value.icon className="w-5 h-5 text-forest" />
              </div>
              <h3 className="font-semibold text-forest mb-1">{value.title}</h3>
              <p className="text-sm text-ink-light">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
