'use client'

import { useState } from 'react'
import { articles, CATEGORIES } from '@/data/articles'
import { ArticleCard } from '@/components/content/ArticleCard'
import { cn } from '@/lib/utils'

export default function KunskapPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? articles
      : articles.filter((a) => a.category === activeCategory)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="font-heading text-4xl md:text-5xl text-forest mb-4">Kunskap</h1>
        <p className="text-xl text-ink-light max-w-2xl">
          Guider, artiklar och analyser om solenergi, batterier och energieffektivisering
          i Sverige.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              activeCategory === cat.id
                ? 'bg-forest text-white'
                : 'bg-white text-ink-light hover:bg-sage-light/30 border border-sage-light/30',
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Article grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-ink-light py-12">
          Inga artiklar i den här kategorin ännu.
        </p>
      )}
    </div>
  )
}
