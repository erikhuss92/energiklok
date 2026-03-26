import type { Metadata } from 'next'
import { ArticleLayout } from '@/components/content/ArticleLayout'

export const metadata: Metadata = {
  title: 'Grön teknik-avdrag för energiinstallationer',
  description: 'Så fungerar det gröna teknik-avdraget för solceller, batterier och laddboxar.',
}

export default function RotAvdragArticle() {
  return (
    <ArticleLayout
      title="Grön teknik-avdrag för energiinstallationer"
      category="energieffektivisering"
      categoryLabel="Energieffektivisering"
      readingTime="5 min"
      date="5 mars 2026"
      summary="Det gröna teknik-avdraget ger dig 15% rabatt på material och installation av solceller, batterier och laddboxar. Här förklarar vi hur det fungerar, vem som kan få det, och hur mycket du kan spara."
    >
      <h2>Vad är grönt teknik-avdrag?</h2>
      <p>
        Det gröna teknik-avdraget (tidigare kallat &quot;grön teknik-skattereduktion&quot;) är ett
        statligt stöd som ger privatpersoner och bostadsrättsföreningar rabatt på
        installationen av grön teknik. Sedan juli 2025 är avdraget 15% av den totala
        kostnaden (material + arbete).
      </p>

      <h2>Vad täcks av avdraget?</h2>
      <ul>
        <li><strong>Solceller:</strong> Installation av solcellspaneler och tillhörande utrustning (växelriktare, montagesystem)</li>
        <li><strong>Batterilager:</strong> Hembatterier anslutna till solcellssystemet</li>
        <li><strong>Laddpunkter:</strong> Installation av laddbox för elbil</li>
      </ul>

      <h2>Hur fungerar det i praktiken?</h2>
      <p>
        Avdraget görs direkt på fakturan av installatören — du behöver alltså inte lägga
        ut hela beloppet och söka tillbaka pengar. Installatören ansöker om utbetalning
        från Skatteverket.
      </p>

      <h3>Exempel: Solceller på villa</h3>
      <ul>
        <li>Total installationskostnad: 150 000 kr</li>
        <li>Grönt teknik-avdrag (15%): -22 500 kr</li>
        <li><strong>Du betalar: 127 500 kr</strong></li>
      </ul>

      <h3>Exempel: Solceller + batteri på BRF</h3>
      <ul>
        <li>Solcellsinstallation: 650 000 kr</li>
        <li>Batteriinstallation: 80 000 kr</li>
        <li>Total: 730 000 kr</li>
        <li>Grönt teknik-avdrag (15%): -109 500 kr</li>
        <li><strong>Föreningen betalar: 620 500 kr</strong></li>
      </ul>

      <h2>Villkor och begränsningar</h2>
      <ul>
        <li>Installationen måste utföras av ett företag med F-skattsedel</li>
        <li>Bostaden måste vara din permanentbostad (eller föreningens fastighet)</li>
        <li>Maxbelopp per person: 50 000 kr per år i skattereduktion</li>
        <li>Kan kombineras med ROT-avdrag, men inte för samma arbete</li>
      </ul>

      <h2>Viktigt att veta för BRF:er</h2>
      <p>
        Bostadsrättsföreningar kan använda grönt teknik-avdrag för installationer på
        föreningens fastighet. Avdraget fördelas då på föreningens medlemmar baserat
        på andelstal. Kontakta er installatör för att säkerställa att avdraget hanteras
        korrekt.
      </p>

      <h2>Har avdraget förändrats?</h2>
      <p>
        Ja. Avdraget har sänkts från 20% till 15% (sedan juli 2025). Dessutom har
        skattereduktionen för mikroproduktion av förnybar el (den så kallade
        &quot;solcellsskatten&quot;) tagits bort från 2026. Det gör det ännu viktigare att
        maximera egenförbrukningen av solelen.
      </p>
    </ArticleLayout>
  )
}
