import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mall: Styrelseprotokoll — Energibeslut',
}

export default function StyrelseprotokollPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 print:py-4">
      <div className="text-center mb-10 print:mb-6">
        <h1 className="font-heading text-3xl text-forest print:text-black mb-2">
          Styrelseprotokoll
        </h1>
        <p className="text-ink-light print:text-gray-600">
          Mall för beslut om energiinvestering — Energiklok.se
        </p>
      </div>

      <div className="space-y-6 text-ink-light print:text-black">
        <section className="border border-sage-light/30 rounded-xl p-6 print:border-gray-300">
          <h2 className="font-heading text-lg text-forest print:text-black mb-4">
            Protokoll fört vid styrelsemöte
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">Förening:</label>
                <div className="border-b border-dashed border-ink-light/30 pb-1 min-h-[1.5rem]" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Org.nr:</label>
                <div className="border-b border-dashed border-ink-light/30 pb-1 min-h-[1.5rem]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">Datum:</label>
                <div className="border-b border-dashed border-ink-light/30 pb-1 min-h-[1.5rem]" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Plats:</label>
                <div className="border-b border-dashed border-ink-light/30 pb-1 min-h-[1.5rem]" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Närvarande:</label>
              <div className="border-b border-dashed border-ink-light/30 pb-1 min-h-[1.5rem] mb-2" />
              <div className="border-b border-dashed border-ink-light/30 pb-1 min-h-[1.5rem]" />
            </div>
          </div>
        </section>

        <section className="border border-sage-light/30 rounded-xl p-6 print:border-gray-300">
          <h2 className="font-heading text-lg text-forest print:text-black mb-4">
            § __ Beslut om investering i solcellsanläggning
          </h2>

          <h3 className="font-semibold mb-2">Bakgrund</h3>
          <p className="mb-4 leading-relaxed">
            Styrelsen har utrett möjligheten att installera solceller på föreningens
            fastighet. Offerter har inhämtats från följande installatörer:
          </p>
          <div className="space-y-2 mb-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex gap-4">
                <span className="text-sm font-medium w-24">Installatör {n}:</span>
                <div className="flex-1 border-b border-dashed border-ink-light/30 pb-1" />
              </div>
            ))}
          </div>

          <h3 className="font-semibold mb-2">Ekonomisk sammanställning</h3>
          <div className="space-y-2 mb-4">
            {[
              'Systemstorlek (kWp):',
              'Uppskattad årsproduktion (kWh):',
              'Investeringskostnad (kr):',
              'Grönt teknik-avdrag (kr):',
              'Nettokostnad (kr):',
              'Uppskattad årlig besparing (kr):',
              'Uppskattad återbetalningstid (år):',
            ].map((label) => (
              <div key={label} className="flex gap-4">
                <span className="text-sm w-64">{label}</span>
                <div className="flex-1 border-b border-dashed border-ink-light/30 pb-1" />
              </div>
            ))}
          </div>

          <h3 className="font-semibold mb-2">Finansiering</h3>
          <p className="mb-4 leading-relaxed">
            Investeringen föreslås finansieras genom:
          </p>
          <div className="space-y-2 mb-4">
            {[
              'Föreningens underhållsfond',
              'Nytt banklån',
              'Kombination av fond och lån',
            ].map((option, i) => (
              <label key={i} className="flex items-center gap-3">
                <span className="w-5 h-5 border-2 border-forest/40 rounded flex-shrink-0 print:border-black" />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <h3 className="font-semibold mb-2">Beslut</h3>
          <p className="leading-relaxed mb-2">
            Styrelsen beslutar att:
          </p>
          <div className="space-y-2 mb-4">
            {[
              'Anta offert från __________________ för installation av solcellsanläggning',
              'Anslå medel enligt ovan för finansiering av investeringen',
              'Föreslå stämman att godkänna investeringen (om stämmobeslut krävs)',
              'Uppdra åt ordförande/annan att teckna avtal med vald installatör',
            ].map((item, i) => (
              <label key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 border-2 border-forest/40 rounded flex-shrink-0 mt-0.5 print:border-black" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="border border-sage-light/30 rounded-xl p-6 print:border-gray-300">
          <h2 className="font-heading text-lg text-forest print:text-black mb-4">
            Underskrifter
          </h2>
          <div className="grid grid-cols-2 gap-8 mt-8">
            {['Ordförande', 'Sekreterare', 'Justerare 1', 'Justerare 2'].map((role) => (
              <div key={role}>
                <div className="border-b border-ink-light/30 pb-1 mb-1 min-h-[2rem]" />
                <p className="text-sm">{role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-12 pt-6 border-t border-sage-light/30 text-center text-sm text-ink-light print:text-gray-500">
        <p>Energiklok.se — Mall framtagen som stöd. Anpassa efter föreningens behov.</p>
      </footer>
    </div>
  )
}
