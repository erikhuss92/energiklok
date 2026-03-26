import type { Metadata } from 'next'
import { ArticleLayout } from '@/components/content/ArticleLayout'

export const metadata: Metadata = {
  title: 'Batterilager hemma — lönar det sig?',
  description: 'Vi går igenom ekonomin, tekniken och de senaste priserna för hembatterier i Sverige 2026.',
}

export default function BatterilagerArticle() {
  return (
    <ArticleLayout
      title="Batterilager hemma — lönar det sig?"
      category="batterier"
      categoryLabel="Batterier"
      readingTime="6 min"
      date="10 mars 2026"
      summary="Hembatterier har blivit billigare och smartare. Men lönar det sig verkligen att komplettera solcellerna med ett batteri? Vi reder ut ekonomin, tekniken och vem som har mest att tjäna."
    >
      <h2>Vad gör ett hembatteri?</h2>
      <p>
        Ett hembatteri lagrar överskottsenergi från dina solceller under dagen och levererar
        den på kvällen och natten, när du faktiskt behöver elen. Utan batteri säljs överskottet
        tillbaka till nätet till ett betydligt lägre pris än du köper el för.
      </p>

      <h2>Ekonomisk kalkyl 2026</h2>
      <p>
        Priset för hembatterier har fallit kraftigt de senaste åren. I 2026 ligger
        marknadspriset på ungefär 7 000–9 000 kr per kWh lagringskapacitet, installerat.
      </p>
      <ul>
        <li><strong>Typisk storlek för villa:</strong> 5–10 kWh</li>
        <li><strong>Investeringskostnad:</strong> 35 000–90 000 kr</li>
        <li><strong>Ökar egenförbrukningen:</strong> från ~30% till ~60% av solproduktionen</li>
        <li><strong>Extra besparing per år:</strong> 5 000–15 000 kr</li>
        <li><strong>Återbetalningstid:</strong> 8–12 år</li>
      </ul>

      <h2>Vem tjänar mest på ett batteri?</h2>
      <p>
        Hembatterier lönar sig bäst om du:
      </p>
      <ul>
        <li>Har solceller och låg egenförbrukning dagtid (jobbar hemifrån = mindre nytta)</li>
        <li>Har rörligt elpris — batteriet kan ladda billigt och leverera dyrt</li>
        <li>Vill ha nödström vid strömavbrott</li>
        <li>Planerar att skaffa elbil och vill ladda med egen solel</li>
      </ul>

      <h2>Tekniken — lithium-ion dominerar</h2>
      <p>
        De flesta hembatterier använder idag litiumjärnfosfat (LFP) som är säkrare och
        har längre livslängd än äldre litiumbatterier. Typisk livslängd är 6 000+ cykler,
        vilket motsvarar 15–20 års användning.
      </p>

      <h2>Grön teknik-avdrag för batterier</h2>
      <p>
        Precis som för solceller gäller det gröna teknik-avdraget (15%) även för
        batteriinstallationer. Avdraget görs direkt på fakturan.
      </p>

      <h2>Vår rekommendation</h2>
      <p>
        Börja med solceller — det ger bäst avkastning. Lägg till batteri om du har hög
        elförbrukning kvällstid, rörligt elavtal, eller om du helt enkelt vill maximera
        din egenproducerade solel. Med dagens priser börjar ekonomin bli riktigt intressant,
        särskilt i kombination med elbilsladdning.
      </p>
    </ArticleLayout>
  )
}
