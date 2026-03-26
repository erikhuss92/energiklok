import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BRF Energi-checklista',
}

export default function BRFEnergiChecklista() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 print:py-4">
      <div className="text-center mb-10 print:mb-6">
        <h1 className="font-heading text-3xl text-forest print:text-black mb-2">
          BRF Energi-checklista
        </h1>
        <p className="text-ink-light print:text-gray-600">
          Energiklok.se — Checklista för bostadsrättsföreningar
        </p>
      </div>

      <section className="mb-8">
        <h2 className="font-heading text-xl text-forest print:text-black mb-4 border-b border-sage-light/30 pb-2">
          1. Nulägesanalys
        </h2>
        <ul className="space-y-3">
          {[
            'Samla in elräkningar för gemensam el (senaste 12 månaderna)',
            'Dokumentera total årsförbrukning i kWh',
            'Identifiera de 5 största energiförbrukarna i fastigheten',
            'Kontrollera senaste energideklarationen (giltighet 10 år)',
            'Notera typ av uppvärmning (fjärrvärme, värmepump, el)',
            'Kartlägg befintlig ventilation och belysning',
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-5 h-5 border-2 border-forest/40 rounded flex-shrink-0 mt-0.5 print:border-black" />
              <span className="text-ink-light print:text-black">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-xl text-forest print:text-black mb-4 border-b border-sage-light/30 pb-2">
          2. Takkartläggning
        </h2>
        <ul className="space-y-3">
          {[
            'Mät tillgänglig takyta (exkludera fläktar, skorstenar, etc.)',
            'Dokumentera takets orientering (söder/väst/öst)',
            'Kontrollera takets lutning',
            'Bedöm skuggning (träd, intilliggande byggnader)',
            'Kontrollera takets skick och återstående livslängd',
            'Undersök bärighet med konstruktör vid behov',
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-5 h-5 border-2 border-forest/40 rounded flex-shrink-0 mt-0.5 print:border-black" />
              <span className="text-ink-light print:text-black">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-xl text-forest print:text-black mb-4 border-b border-sage-light/30 pb-2">
          3. Offerter och jämförelse
        </h2>
        <ul className="space-y-3">
          {[
            'Begär offerter från minst 3 certifierade installatörer',
            'Jämför systemstorlek (kWp) och uppskattad produktion',
            'Jämför panelmärke, växelriktare och garantivillkor',
            'Kontrollera att grönt teknik-avdrag (15%) är inräknat',
            'Be om referenser från andra BRF-installationer',
            'Kontrollera F-skattsedel och ansvarsförsäkring',
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-5 h-5 border-2 border-forest/40 rounded flex-shrink-0 mt-0.5 print:border-black" />
              <span className="text-ink-light print:text-black">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-xl text-forest print:text-black mb-4 border-b border-sage-light/30 pb-2">
          4. Beslut och genomförande
        </h2>
        <ul className="space-y-3">
          {[
            'Sammanställ beslutsunderlag för styrelsen',
            'Skicka informationsbrev till boende',
            'Håll informationsmöte/frågestund',
            'Genomför stämmobeslut med tillräcklig majoritet',
            'Teckna avtal med vald installatör',
            'Anmäl till elnätsbolaget',
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-5 h-5 border-2 border-forest/40 rounded flex-shrink-0 mt-0.5 print:border-black" />
              <span className="text-ink-light print:text-black">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl text-forest print:text-black mb-4 border-b border-sage-light/30 pb-2">
          5. Uppföljning
        </h2>
        <ul className="space-y-3">
          {[
            'Verifiera produktion mot offert efter 3 månader',
            'Sätt upp övervakning via app/webbportal',
            'Rapportera resultat till medlemmarna efter 12 månader',
            'Utvärdera behov av kompletterande åtgärder (batteri, laddboxar)',
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-5 h-5 border-2 border-forest/40 rounded flex-shrink-0 mt-0.5 print:border-black" />
              <span className="text-ink-light print:text-black">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-12 pt-6 border-t border-sage-light/30 text-center text-sm text-ink-light print:text-gray-500">
        <p>Energiklok.se — Smartare energibeslut för BRF:er och villaägare</p>
      </footer>
    </div>
  )
}
