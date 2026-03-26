'use client'

import { useState } from 'react'
import { posts, POST_CATEGORIES } from '@/data/posts'
import { ArticleCard } from '@/components/content/ArticleCard'
import { cn } from '@/lib/utils'

const CATEGORY_LABELS: Record<string, string> = {
  nyheter: 'Nyheter',
  tips: 'Tips',
  debatt: 'Debatt',
}

export default function AktuelltPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === activeCategory)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="font-heading text-4xl md:text-5xl text-forest mb-4">Aktuellt</h1>
        <p className="text-xl text-ink-light max-w-2xl">
          Nyheter, tips och debatt om energi, solceller och hållbart boende i Sverige.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {POST_CATEGORIES.map((cat) => (
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

      {/* Post grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post) => (
          <ArticleCard
            key={post.slug}
            title={post.title}
            description={post.description}
            href={`/aktuellt/${post.slug}`}
            categoryLabel={CATEGORY_LABELS[post.category] || post.category}
            readingTime={post.readingTime}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-ink-light py-12">
          Inga inlägg i den här kategorin ännu.
        </p>
      )}
    </div>
  )
}
