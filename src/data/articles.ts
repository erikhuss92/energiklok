export interface ArticleMeta {
  slug: string
  title: string
  description: string
  category: 'solenergi' | 'batterier' | 'energieffektivisering'
  date: string
  readingTime: string
}

export const articles: ArticleMeta[] = [
  {
    slug: 'solceller-for-brf',
    title: 'Solceller för BRF — Komplett guide 2026',
    description:
      'Allt din bostadsrättsförening behöver veta om att installera solceller — från beslut till driftsättning.',
    category: 'solenergi',
    date: '2026-03-15',
    readingTime: '8 min',
  },
  {
    slug: 'batterilager-hemma',
    title: 'Batterilager hemma — lönar det sig?',
    description:
      'Vi går igenom ekonomin, tekniken och de senaste priserna för hembatterier i Sverige 2026.',
    category: 'batterier',
    date: '2026-03-10',
    readingTime: '6 min',
  },
  {
    slug: 'rot-avdrag-energi',
    title: 'Grön teknik-avdrag för energiinstallationer',
    description:
      'Så fungerar det gröna teknik-avdraget för solceller, batterier och laddboxar — allt du behöver veta.',
    category: 'energieffektivisering',
    date: '2026-03-05',
    readingTime: '5 min',
  },
]

export const CATEGORIES = [
  { id: 'all', label: 'Alla' },
  { id: 'solenergi', label: 'Solenergi' },
  { id: 'batterier', label: 'Batterier' },
  { id: 'energieffektivisering', label: 'Energieffektivisering' },
] as const
