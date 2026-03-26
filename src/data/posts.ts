export interface PostMeta {
  slug: string
  title: string
  description: string
  category: 'nyheter' | 'tips' | 'debatt'
  date: string
  readingTime: string
}

export const posts: PostMeta[] = [
  {
    slug: 'solenergi-rekord-2025',
    title: 'Sverige slog nytt solenergirekord 2025',
    description:
      '652 MW ny solcellskapacitet installerades under 2025 — en ökning med 15% jämfört med föregående år.',
    category: 'nyheter',
    date: '2026-03-20',
    readingTime: '3 min',
  },
  {
    slug: 'tips-infor-sommaren',
    title: '5 energitips inför sommaren',
    description:
      'Sommaren är perfekt för att maximera din solel. Här är fem konkreta tips för att få ut mest av dina solceller.',
    category: 'tips',
    date: '2026-03-18',
    readingTime: '4 min',
  },
  {
    slug: 'nya-regler-gron-teknik',
    title: 'Nya regler för grönt teknik-avdrag 2026',
    description:
      'Från och med 2026 gäller nya regler för det gröna teknik-avdraget. Vi sammanfattar vad som ändrats.',
    category: 'nyheter',
    date: '2026-03-12',
    readingTime: '3 min',
  },
]

export const POST_CATEGORIES = [
  { id: 'all', label: 'Alla' },
  { id: 'nyheter', label: 'Nyheter' },
  { id: 'tips', label: 'Tips' },
  { id: 'debatt', label: 'Debatt' },
] as const
