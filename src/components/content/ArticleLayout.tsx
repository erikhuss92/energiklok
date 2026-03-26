import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

interface ArticleLayoutProps {
  title: string
  category: string
  categoryLabel: string
  readingTime: string
  date: string
  summary: string
  children: React.ReactNode
}

export function ArticleLayout({
  title,
  category,
  categoryLabel,
  readingTime,
  date,
  summary,
  children,
}: ArticleLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <a
        href="/kunskap"
        className="inline-flex items-center gap-1 text-sm text-ink-light hover:text-forest transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Tillbaka till Kunskap
      </a>

      <Badge className="mb-4">{categoryLabel}</Badge>

      <h1 className="font-heading text-4xl md:text-5xl text-forest mb-4 leading-tight">
        {title}
      </h1>

      <div className="flex items-center gap-4 text-sm text-ink-light mb-8">
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {readingTime}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {date}
        </span>
      </div>

      {/* Summary box */}
      <div className="bg-sage-light/20 border border-sage-light/40 rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-forest text-sm uppercase tracking-wider mb-2">
          Sammanfattning
        </h2>
        <p className="text-ink-light leading-relaxed">{summary}</p>
      </div>

      <article className="prose prose-lg max-w-none">{children}</article>
    </div>
  )
}
