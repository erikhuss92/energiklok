import { Building2, Home, ArrowRight } from 'lucide-react'

const tracks = [
  {
    icon: Building2,
    title: 'BRF-förening',
    description:
      'Solceller på taket, gemensam energioptimering och lägre avgifter för alla boende.',
    href: '/kalkylator?typ=brf',
    guideHref: '/brf-guiden',
    guideLabel: 'Läs BRF-guiden',
  },
  {
    icon: Home,
    title: 'Villaägare',
    description:
      'Solpaneler, batterilager och smart energistyrning för ditt eget hem.',
    href: '/kalkylator?typ=villa',
    guideHref: '/kunskap/solceller-for-brf',
    guideLabel: 'Läs mer om solceller',
  },
]

export function TrackSelector() {
  return (
    <section className="bg-forest">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-4">
          Välj din väg
        </h2>
        <p className="text-center text-white/70 text-lg mb-12">
          Vi har anpassad hjälp oavsett om du bor i BRF eller villa.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tracks.map((track) => (
            <a
              key={track.title}
              href={track.href}
              className="group bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-amber/20 flex items-center justify-center mb-5">
                <track.icon className="w-7 h-7 text-amber" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-3">{track.title}</h3>
              <p className="text-white/70 leading-relaxed mb-6">{track.description}</p>
              <span className="inline-flex items-center text-amber font-medium group-hover:gap-3 gap-2 transition-all">
                Beräkna besparing <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
