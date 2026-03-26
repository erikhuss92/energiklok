import type { Metadata } from 'next'
import { ArticleLayout } from '@/components/content/ArticleLayout'

export const metadata: Metadata = {
  title: '5 energitips inför sommaren',
  description: 'Maximera din solel och sänk elkostnaderna med dessa fem konkreta tips.',
}

export default function TipsInforSommarenPost() {
  return (
    <ArticleLayout
      title="5 energitips inför sommaren"
      category="tips"
      categoryLabel="Tips"
      readingTime="4 min"
      date="18 mars 2026"
      summary="Sommaren är högsäsong för solenergi. Med några enkla justeringar kan du maximera produktionen och sänka dina elkostnader rejält. Här är våra fem bästa tips."
    >
      <h2>1. Rengör dina solpaneler</h2>
      <p>
        Under vintern samlas smuts, pollen och fågelspillning på panelerna. En smutsig
        panel kan tappa 5–15% av sin effekt. En enkel avspolning med trädgårdsslang
        räcker ofta — undvik högtryckstvätt och starka rengöringsmedel.
      </p>

      <h2>2. Flytta elförbrukningen till dagtid</h2>
      <p>
        Utan batteri är den mest lönsamma kilowattimmen den du själv förbrukar.
        Kör tvättmaskin, diskmaskin och andra stora laster mitt på dagen när
        solproduktionen är som högst. Använd timer-funktioner om du inte är hemma.
      </p>

      <h2>3. Kontrollera ditt övervakningssystem</h2>
      <p>
        De flesta solcellssystem har en app eller webbportal där du kan följa
        produktionen i realtid. Kontrollera att alla paneler producerar som de ska.
        Om en panel avviker markant kan det tyda på skuggning, smuts eller ett
        tekniskt fel.
      </p>

      <h2>4. Överväg ett sommarelavtal</h2>
      <p>
        Om du har rörligt elpris och solceller kan sommaren vara en bra tid att se
        över ditt elavtal. Elpriserna är generellt lägre på sommaren, men om du
        producerar mer än du förbrukar vill du ha bästa möjliga ersättning för
        överskottet.
      </p>

      <h2>5. Planera för nästa steg</h2>
      <p>
        Sommaren är perfekt för att utvärdera om det är dags att utöka systemet.
        Kanske ett batterilager för att lagra överskottselen? Eller en laddbox
        för elbilen? Använd sommarens produktionsdata som underlag för kalkylen.
      </p>

      <h2>Bonustips för BRF:er</h2>
      <p>
        Om din BRF har solceller, informera de boende om att köra tvättmaskiner
        och torktumlar dagtid under sommaren. En enkel lapp i tvättstugan kan
        göra stor skillnad för föreningens egenförbrukning — och ekonomi.
      </p>
    </ArticleLayout>
  )
}
