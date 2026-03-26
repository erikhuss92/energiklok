import { articles, CATEGORY_LABELS } from '@/data/articles'
import { ArticleCard } from '@/components/content/ArticleCard'
import { Button } from '@/components/ui/Button'

export function FeaturedGuides() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl text-forest mb-2">
            Populära guider
          </h2>
          <p className="text-ink-light text-lg">
            Läs våra mest lästa artiklar om solenergi och energibesparing.
          </p>
        </div>
        <Button href="/kunskap" variant="secondary" size="sm" className="hidden md:inline-flex">
          Alla artiklar
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            description={article.description}
            href={`/kunskap/${article.slug}`}
            categoryLabel={CATEGORY_LABELS[article.category] || article.category}
            readingTime={article.readingTime}
          />
        ))}
      </div>
      <div className="mt-8 text-center md:hidden">
        <Button href="/kunskap" variant="secondary">
          Alla artiklar
        </Button>
      </div>
    </section>
  )
}
