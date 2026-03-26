import type { Metadata } from 'next'
import { InstallerSearch } from '@/components/installer/InstallerSearch'

export const metadata: Metadata = {
  title: 'Hitta installatör — Certifierade solcellsinstallatörer i Sverige',
  description: 'Sök bland certifierade installatörer av solceller, batterier, laddboxar och värmepumpar i hela Sverige.',
}

export default function InstallerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <h1 className="font-heading text-4xl md:text-5xl text-forest mb-4">
          Hitta installatör
        </h1>
        <p className="text-xl text-ink-light max-w-2xl">
          Sök bland certifierade installatörer av solceller, batterier och laddboxar
          i hela Sverige. Filtrera efter tjänst och plats.
        </p>
      </div>

      <InstallerSearch />

      <div className="mt-12 bg-cream-dark rounded-xl p-6 text-sm text-ink-light">
        <p>
          <strong>Obs:</strong> Energiklok tar ingen provision eller ersättning från installatörer.
          Listan är kuraterad baserat på certifieringar och kundomdömen. Kontakta oss om du vill
          föreslå en installatör.
        </p>
      </div>
    </div>
  )
}
