import { PrintButton } from '@/components/ui/PrintButton'

export default function DocumentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="print:bg-white print:text-black">
      <div className="print:hidden max-w-3xl mx-auto px-4 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <a
            href="/brf-guiden"
            className="text-sm text-ink-light hover:text-forest transition-colors"
          >
            &larr; Tillbaka till BRF-guiden
          </a>
          <PrintButton />
        </div>
      </div>
      {children}
    </div>
  )
}
