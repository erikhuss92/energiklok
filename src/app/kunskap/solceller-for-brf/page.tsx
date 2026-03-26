import type { Metadata } from 'next'
import { ArticleLayout } from '@/components/content/ArticleLayout'

export const metadata: Metadata = {
  title: 'Solceller för BRF — Komplett guide 2026',
  description: 'Allt din bostadsrättsförening behöver veta om att installera solceller.',
}

export default function SolcellerForBrfArticle() {
  return (
    <ArticleLayout
      title="Solceller för BRF — Komplett guide 2026"
      category="solenergi"
      categoryLabel="Solenergi"
      readingTime="8 min"
      date="15 mars 2026"
      summary="Solceller kan sänka en BRF:s gemensamma elkostnad med 40–70%. Den här guiden täcker allt från ekonomisk kalkyl och stämmobeslut till val av installatör och uppföljning."
    >
      <h2>Varför solceller på BRF:ens tak?</h2>
      <p>
        Bostadsrättsföreningar är idealiska för solcellsinstallationer. Med stora takytor och
        hög gemensam elförbrukning kan en BRF uppnå betydligt bättre ekonomi än en enskild
        villaägare. Den gemensamma elen — hissar, tvättstugor, belysning, fläktar — konsumeras
        kontinuerligt under dagen, precis när solcellerna producerar som mest.
      </p>

      <h2>Ekonomin — vad kostar det och vad sparar man?</h2>
      <p>
        En typisk BRF med 20 lägenheter och 300 m² takyta kan installera ett system på
        cirka 50 kWp. Med 2026 års priser innebär det:
      </p>
      <ul>
        <li><strong>Investeringskostnad:</strong> ca 650 000 kr (efter grönt teknik-avdrag på 15%)</li>
        <li><strong>Årlig produktion:</strong> ca 47 500 kWh</li>
        <li><strong>Årlig besparing:</strong> ca 80 000–120 000 kr (beroende på egenförbrukning)</li>
        <li><strong>Återbetalningstid:</strong> 6–9 år</li>
        <li><strong>Livslängd:</strong> 25–30 år med produktionsgaranti</li>
      </ul>

      <h2>Steg-för-steg: Så går processen till</h2>
      <h3>1. Kartlägg förbrukningen</h3>
      <p>
        Börja med att samla in data om föreningens gemensamma elförbrukning. Kontakta ert
        elnätsbolag för detaljerad förbrukningsstatistik. Ju mer egenförbrukning av solelen,
        desto bättre ekonomi.
      </p>

      <h3>2. Få taket utvärderat</h3>
      <p>
        En installatör gör en teknisk bedömning av taket: bärighet, skuggning, orientering
        och tillgänglig yta. Söderläge är optimalt, men även tak mot öst-väst fungerar bra
        med moderna paneler.
      </p>

      <h3>3. Begär offerter</h3>
      <p>
        Kontakta minst tre certifierade installatörer. Jämför inte bara pris — titta på
        panelkvalitet, garantivillkor, referenser från andra BRF:er och serviceavtal.
      </p>

      <h3>4. Stämmobeslut</h3>
      <p>
        Solcellsinstallation räknas normalt som en väsentlig förändring av fastigheten och
        kräver beslut på föreningsstämma. Förbered ett tydligt beslutsunderlag med ekonomisk
        kalkyl och offertjämförelse.
      </p>

      <h2>Grön teknik-avdrag 2026</h2>
      <p>
        Från och med 2026 gäller ett grönt teknik-avdrag på 15% av materialkostnaden för
        solcellsinstallationer. Avdraget görs direkt på fakturan av installatören, så
        föreningen behöver inte lägga ut hela beloppet.
      </p>

      <h2>Vanliga frågor</h2>
      <h3>Kan vi sälja överskottsel?</h3>
      <p>
        Ja, överskottet kan säljas tillbaka till elnätet. Ersättningen är dock lägre än
        inköpspriset (ca 0,50 kr/kWh jämfört med 2,00 kr/kWh), så maximera egenförbrukningen
        för bäst ekonomi.
      </p>

      <h3>Hur påverkas avgiften?</h3>
      <p>
        Solceller sänker föreningens elkostnad, vilket på sikt kan innebära lägre månadsavgifter
        eller undvika höjningar. Investeringen kan finansieras via föreningens underhållsfond
        eller genom lån.
      </p>

      <h3>Behövs bygglov?</h3>
      <p>
        I de flesta fall krävs inte bygglov för solceller som följer takets form. Kontrollera
        med er kommun om det finns särskilda bestämmelser i ert område.
      </p>
    </ArticleLayout>
  )
}
