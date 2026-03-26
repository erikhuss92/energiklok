import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mall: Jämförelse av offerter',
}

export default function JamforelsemallPage() {
  const criteria = [
    'Installatör / Företag',
    'Systemstorlek (kWp)',
    'Antal paneler',
    'Panelmärke / Modell',
    'Växelriktare (märke)',
    'Uppskattad årsproduktion (kWh)',
    'Total kostnad (kr)',
    'Grönt teknik-avdrag (kr)',
    'Nettokostnad (kr)',
    'Pris per kWp (kr)',
    'Garanti — paneler (år)',
    'Garanti — växelriktare (år)',
    'Garanti — installation (år)',
    'Produktionsgaranti',
    'Montagesystem',
    'Övervakning inkluderad',
    'Serviceavtal erbjuds',
    'F-skattsedel kontrollerad',
    'Ansvarsförsäkring kontrollerad',
    'BRF-referenser',
    'Uppskattad installationstid',
    'Betalningsvillkor',
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 print:py-4">
      <div className="text-center mb-10 print:mb-6">
        <h1 className="font-heading text-3xl text-forest print:text-black mb-2">
          Jämförelsemall för offerter
        </h1>
        <p className="text-ink-light print:text-gray-600">
          Jämför installatörer sida vid sida — Energiklok.se
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left p-3 bg-forest text-white font-medium rounded-tl-lg print:bg-gray-800">
                Kriterium
              </th>
              <th className="text-left p-3 bg-forest text-white font-medium print:bg-gray-800">
                Offert 1
              </th>
              <th className="text-left p-3 bg-forest text-white font-medium print:bg-gray-800">
                Offert 2
              </th>
              <th className="text-left p-3 bg-forest text-white font-medium rounded-tr-lg print:bg-gray-800">
                Offert 3
              </th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion, i) => (
              <tr
                key={criterion}
                className={i % 2 === 0 ? 'bg-white' : 'bg-cream-dark print:bg-gray-50'}
              >
                <td className="p-3 font-medium text-forest print:text-black border-b border-sage-light/20">
                  {criterion}
                </td>
                <td className="p-3 border-b border-sage-light/20 min-w-[150px]" />
                <td className="p-3 border-b border-sage-light/20 min-w-[150px]" />
                <td className="p-3 border-b border-sage-light/20 min-w-[150px]" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-8">
        <h2 className="font-heading text-lg text-forest print:text-black mb-3">
          Sammanfattande bedömning
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="border border-sage-light/30 rounded-lg p-4 print:border-gray-300">
              <p className="font-medium text-forest print:text-black mb-2">Offert {n}:</p>
              <div className="space-y-2">
                <div>
                  <label className="text-sm block mb-1">Styrkor:</label>
                  <div className="border-b border-dashed border-ink-light/30 pb-1 min-h-[1.5rem]" />
                </div>
                <div>
                  <label className="text-sm block mb-1">Svagheter:</label>
                  <div className="border-b border-dashed border-ink-light/30 pb-1 min-h-[1.5rem]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-heading text-lg text-forest print:text-black mb-3">
          Styrelsens rekommendation
        </h2>
        <div className="border border-sage-light/30 rounded-lg p-4 print:border-gray-300">
          <div className="border-b border-dashed border-ink-light/30 pb-1 min-h-[3rem]" />
        </div>
      </section>

      <footer className="mt-12 pt-6 border-t border-sage-light/30 text-center text-sm text-ink-light print:text-gray-500">
        <p>Energiklok.se — Anpassa kriterierna efter era specifika behov.</p>
      </footer>
    </div>
  )
}
