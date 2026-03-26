import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Energiklok — Smartare energibeslut för BRF:er och villaägare',
    template: '%s | Energiklok',
  },
  description:
    'Hjälp svenska bostadsägare och BRF:er att fatta smartare energibeslut — och spara pengar på köpet. Solceller, batterilager och energioptimering.',
  metadataBase: new URL('https://energiklok.se'),
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: 'Energiklok',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
