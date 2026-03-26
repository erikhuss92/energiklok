import type { Metadata } from 'next'
import { ArticleLayout } from '@/components/content/ArticleLayout'

export const metadata: Metadata = {
  title: 'Sverige slog nytt solenergirekord 2025',
  description: '652 MW ny solcellskapacitet installerades under 2025 — en ökning med 15%.',
}

export default function SolenergiRekordPost() {
  return (
    <ArticleLayout
      title="Sverige slog nytt solenergirekord 2025"
      category="nyheter"
      categoryLabel="Nyheter"
      readingTime="3 min"
      date="20 mars 2026"
      summary="Under 2025 installerades 652 MW ny solcellskapacitet i Sverige — en ökning med 15% jämfört med 2024. Totalt finns nu över 4 GW installerad soleffekt i landet."
    >
      <h2>Rekordsiffror för svensk solenergi</h2>
      <p>
        Enligt färska siffror från Energimyndigheten installerades totalt 652 MW ny
        solcellskapacitet i Sverige under 2025. Det innebär en ökning med cirka 15%
        jämfört med föregående år och ett nytt årsrekord.
      </p>
      <p>
        Den totala installerade soleffekten i Sverige passerade därmed 4 GW — en
        milstolpe som visar att solenergi blivit en etablerad del av det svenska
        energisystemet.
      </p>

      <h2>BRF:er driver tillväxten</h2>
      <p>
        En allt större del av installationerna sker på flerbostadshus och
        bostadsrättsföreningar. Under 2025 stod BRF:er för uppskattningsvis 25% av
        den nyinstallerade kapaciteten, en ökning från 18% året innan.
      </p>
      <p>
        &quot;Vi ser ett tydligt skifte där allt fler BRF-styrelser inser att solceller
        är en lönsam investering för föreningen&quot;, säger branschorganisationen
        Svensk Solenergi.
      </p>

      <h2>Sjunkande priser gynnar investeringar</h2>
      <p>
        Priserna på solcellsmoduler fortsatte att sjunka under 2025, med en
        genomsnittlig prisminskning på 8–12% för färdiginstallerade system.
        Tillsammans med det gröna teknik-avdraget gör detta att återbetalningstiden
        för en typisk villainstallation nu ligger på 7–10 år.
      </p>

      <h2>Vad betyder det för dig?</h2>
      <p>
        Om du eller din BRF funderar på solceller har förutsättningarna aldrig varit
        bättre. Priserna är låga, tekniken är beprövad och stödsystemen finns på plats.
        Använd vår kalkylator för att beräkna din potentiella besparing.
      </p>
    </ArticleLayout>
  )
}
