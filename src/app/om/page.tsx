import type { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Shield, Target, Users, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Om Energiklok',
  description: 'Energiklok är en ideell förening som hjälper svenska bostadsägare och BRF:er att fatta smartare energibeslut.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Mission */}
      <section className="mb-16">
        <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">Om Energiklok</h1>
        <p className="text-xl text-ink-light leading-relaxed mb-6">
          Energiklok är en ideell förening med ett enkelt mål: hjälpa svenska bostadsägare
          och bostadsrättsföreningar att fatta smartare energibeslut — och spara pengar på köpet.
        </p>
        <p className="text-lg text-ink-light leading-relaxed">
          Vi tror att tillgång till oberoende, lättförståelig information är nyckeln till
          Sveriges energiomställning. Därför erbjuder vi kostnadsfria verktyg, guider och
          kalkylatorer — utan dolda agendor eller provisioner.
        </p>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl text-forest mb-8">Våra värderingar</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: 'Oberoende',
              text: 'Vi är inte kopplade till någon installatör, tillverkare eller energibolag. Våra råd baseras enbart på fakta och forskning.',
            },
            {
              icon: Target,
              title: 'Tillgänglig',
              text: 'Energifrågor ska inte vara komplicerade. Vi förenklar utan att förenkla för mycket.',
            },
            {
              icon: Users,
              title: 'Transparent',
              text: 'Alla våra kalkyler, antaganden och datakällor är öppna. Du kan granska och ifrågasätta allt vi publicerar.',
            },
          ].map((value) => (
            <Card key={value.title}>
              <value.icon className="w-8 h-8 text-forest mb-3" />
              <h3 className="font-heading text-lg text-forest mb-2">{value.title}</h3>
              <p className="text-ink-light text-sm leading-relaxed">{value.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Funding */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl text-forest mb-4">Hur vi finansieras</h2>
        <Card>
          <p className="text-ink-light leading-relaxed mb-4">
            Energiklok finansieras genom bidrag, donationer och ideellt arbete. Vi tar aldrig
            emot provision eller ersättning från de företag vi rekommenderar eller listar i
            vår installatörskatalog.
          </p>
          <p className="text-ink-light leading-relaxed">
            Vår ambition är att vara helt oberoende och transparenta i allt vi gör. Om du vill
            stödja vårt arbete är du välkommen att kontakta oss.
          </p>
        </Card>
      </section>

      {/* Contact */}
      <section id="kontakt">
        <h2 className="font-heading text-3xl text-forest mb-4">Kontakt</h2>
        <Card>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-sage-light/50 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-forest" />
            </div>
            <div>
              <h3 className="font-semibold text-forest mb-1">Skicka ett meddelande</h3>
              <p className="text-ink-light text-sm mb-4">
                Har du frågor, förslag eller vill samarbeta? Hör av dig!
              </p>
              <Button href="mailto:hej@energiklok.se" variant="primary">
                hej@energiklok.se
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
