import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mall: Informationsbrev till boende',
}

export default function InformationsbrevPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 print:py-4">
      <div className="text-center mb-10 print:mb-6">
        <h1 className="font-heading text-3xl text-forest print:text-black mb-2">
          Informationsbrev till boende
        </h1>
        <p className="text-ink-light print:text-gray-600">
          Mall för BRF-styrelser — Energiklok.se
        </p>
      </div>

      <div className="space-y-6 text-ink-light print:text-black leading-relaxed">
        <div className="border border-sage-light/30 rounded-xl p-8 print:border-gray-300">
          <div className="mb-8">
            <div className="flex justify-between mb-6">
              <div>
                <p className="font-semibold text-forest print:text-black">BRF __________________</p>
                <p className="text-sm">Org.nr: __________________</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Datum: __________________</p>
              </div>
            </div>
          </div>

          <h2 className="font-heading text-xl text-forest print:text-black mb-4">
            Information om planerad solcellsinstallation
          </h2>

          <p className="mb-4">Kära boende,</p>

          <p className="mb-4">
            Styrelsen vill informera er om att vi utreder möjligheten att installera
            solceller på föreningens tak. Vi tror att detta kan vara en lönsam investering
            som både sänker föreningens elkostnader och bidrar till en hållbar framtid.
          </p>

          <h3 className="font-semibold text-forest print:text-black mt-6 mb-2">
            Varför solceller?
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Sänker föreningens gemensamma elkostnad med uppskattningsvis ________ kr/år</li>
            <li>Bidrar till minskade koldioxidutsläpp</li>
            <li>Ökar fastighetens marknadsvärde</li>
            <li>Återbetalningstid på uppskattningsvis ________ år</li>
          </ul>

          <h3 className="font-semibold text-forest print:text-black mt-6 mb-2">
            Vad innebär det för dig som boende?
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Ingen ändring av din lägenhet — solcellerna installeras på taket</li>
            <li>Installationen tar uppskattningsvis ________ veckor</li>
            <li>Viss byggnadsaktivitet på taket under installationsperioden</li>
            <li>På sikt kan besparingen leda till lägre månadsavgift eller undvika höjningar</li>
          </ul>

          <h3 className="font-semibold text-forest print:text-black mt-6 mb-2">
            Ekonomi
          </h3>
          <div className="bg-cream-dark rounded-lg p-4 mb-4 print:bg-gray-100">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Beräknad investeringskostnad:</span>
                <span className="font-mono">________ kr</span>
              </div>
              <div className="flex justify-between">
                <span>Grönt teknik-avdrag (15%):</span>
                <span className="font-mono">-________ kr</span>
              </div>
              <div className="flex justify-between font-semibold border-t border-ink-light/20 pt-2">
                <span>Nettokostnad:</span>
                <span className="font-mono">________ kr</span>
              </div>
              <div className="flex justify-between">
                <span>Uppskattad årlig besparing:</span>
                <span className="font-mono">________ kr</span>
              </div>
              <div className="flex justify-between">
                <span>Finansiering:</span>
                <span>________________</span>
              </div>
            </div>
          </div>

          <h3 className="font-semibold text-forest print:text-black mt-6 mb-2">
            Nästa steg
          </h3>
          <p className="mb-4">
            Frågan kommer att behandlas på föreningsstämman den ________________.
            Innan dess välkomnar vi era frågor och synpunkter. Kontakta styrelsen via
            ________________ eller kom till informationsmötet den ________________.
          </p>

          <p className="mb-4">
            Mer information om solceller för BRF:er finns på{' '}
            <span className="font-semibold">energiklok.se/brf-guiden</span>
          </p>

          <div className="mt-8">
            <p>Med vänliga hälsningar,</p>
            <p className="mt-4">Styrelsen för BRF __________________</p>
          </div>
        </div>
      </div>

      <footer className="mt-12 pt-6 border-t border-sage-light/30 text-center text-sm text-ink-light print:text-gray-500">
        <p>Energiklok.se — Anpassa texten efter er förenings specifika förutsättningar.</p>
      </footer>
    </div>
  )
}
