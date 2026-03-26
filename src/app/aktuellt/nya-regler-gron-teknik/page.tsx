import type { Metadata } from 'next'
import { ArticleLayout } from '@/components/content/ArticleLayout'

export const metadata: Metadata = {
  title: 'Nya regler för grönt teknik-avdrag 2026',
  description: 'Vad som ändrats med det gröna teknik-avdraget och hur det påverkar dig.',
}

export default function NyaReglerPost() {
  return (
    <ArticleLayout
      title="Nya regler för grönt teknik-avdrag 2026"
      category="nyheter"
      categoryLabel="Nyheter"
      readingTime="3 min"
      date="12 mars 2026"
      summary="Från 2026 gäller nya regler för det gröna teknik-avdraget. Avdraget har sänkts till 15% och skattereduktionen för mikroproduktion har tagits bort. Här sammanfattar vi förändringarna."
    >
      <h2>Vad har ändrats?</h2>
      <p>
        De viktigaste förändringarna som gäller från 2026:
      </p>
      <ul>
        <li>
          <strong>Grönt teknik-avdrag sänkt till 15%</strong> — Avdraget var tidigare 20%
          men sänktes till 15% från och med juli 2025. Den nya nivån gäller nu fullt ut.
        </li>
        <li>
          <strong>Skattereduktion för mikroproduktion borttagen</strong> — Den tidigare
          skattereduktionen på 60 öre/kWh för överskottsel som matades in på nätet har
          tagits bort helt från 2026.
        </li>
        <li>
          <strong>Maxbelopp oförändrat</strong> — Taket på 50 000 kr per person och år
          kvarstår.
        </li>
      </ul>

      <h2>Hur påverkar det dig?</h2>
      <h3>Villaägare</h3>
      <p>
        Med det lägre avdraget och borttagen mikroproduktionskredit blir det ännu
        viktigare att maximera egenförbrukningen. Investera i ett batterilager om
        du har stor överskottsproduktion — det förbättrar kalkylen avsevärt.
      </p>

      <h3>BRF:er</h3>
      <p>
        BRF:er påverkas mindre av den borttagna mikroproduktionskrediten eftersom
        de vanligtvis har hög egenförbrukning (60–80%). Det gröna teknik-avdraget
        på 15% gäller fortfarande, vilket ger en betydande rabatt på
        investeringen.
      </p>

      <h2>Lönar det sig fortfarande?</h2>
      <p>
        Ja, absolut. Trots de sänkta stöden har priserna på solcellssystem också
        sjunkit, vilket kompenserar för det lägre avdraget. Den typiska
        återbetalningstiden har bara ökat marginellt — från omkring 7 till 8 år
        för en villainstallation.
      </p>
      <p>
        Det viktigaste är att planera installationen med fokus på egenförbrukning.
        Ju mer av solelen du själv använder, desto bättre blir ekonomin — oavsett
        stödnivåer.
      </p>

      <h2>Vad bör du göra nu?</h2>
      <ul>
        <li>Använd vår kalkylator — den är uppdaterad med 2026 års regler</li>
        <li>Överväg batterilager om du har hög överskottsproduktion</li>
        <li>Optimera egenförbrukningen genom att flytta elförbrukning till dagtid</li>
        <li>Kontakta en installatör för en aktuell offert</li>
      </ul>
    </ArticleLayout>
  )
}
