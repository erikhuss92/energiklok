import { Sun, Heart } from 'lucide-react'
import { NewsletterForm } from '@/components/ui/NewsletterForm'

export function Footer() {
  return (
    <footer className="bg-forest text-white mt-20">
      {/* Newsletter section */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-xl">
            <h3 className="font-heading text-2xl mb-2">Energibrevet</h3>
            <p className="text-white/70 mb-4">
              Månatliga tips om solenergi, besparingar och smarta energival — direkt i din inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-5 h-5 text-amber" />
              <span className="font-heading text-lg">Energiklok</span>
            </div>
            <p className="text-sm text-white/60">
              Ideell förening som hjälper svenska bostadsägare att fatta smartare energibeslut.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Verktyg
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="/kalkylator" className="hover:text-white transition-colors">Besparingsräknaren</a></li>
              <li><a href="/brf-guiden" className="hover:text-white transition-colors">BRF-guiden</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Kunskap
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="/kunskap/solceller-for-brf" className="hover:text-white transition-colors">Solceller för BRF</a></li>
              <li><a href="/kunskap/batterilager-hemma" className="hover:text-white transition-colors">Batterilager hemma</a></li>
              <li><a href="/kunskap" className="hover:text-white transition-colors">Alla artiklar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Om oss
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="/om" className="hover:text-white transition-colors">Om Energiklok</a></li>
              <li><a href="/om#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Energiklok. Ideell förening.</p>
          <p className="flex items-center gap-1">
            Gjord med <Heart className="w-3 h-3 text-amber" /> för en hållbar framtid
          </p>
        </div>
      </div>
    </footer>
  )
}
