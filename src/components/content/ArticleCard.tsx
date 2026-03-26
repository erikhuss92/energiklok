import { Clock, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

interface ArticleCardProps {
  title: string
  description: string
  href: string
  categoryLabel: string
  readingTime: string
}

export function ArticleCard({ title, description, href, categoryLabel, readingTime }: ArticleCardProps) {
  return (
    <Card hover>
      <a href={href} className="block group">
        <Badge className="mb-3">{categoryLabel}</Badge>
        <h3 className="font-heading text-xl text-forest mb-2 group-hover:text-forest-light transition-colors">
          {title}
        </h3>
        <p className="text-ink-light text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between text-sm text-ink-light">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readingTime}
          </span>
          <span className="flex items-center gap-1 text-forest font-medium group-hover:gap-2 transition-all">
            Läs mer <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </a>
    </Card>
  )
}
