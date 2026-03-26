import { MapPin, Phone, ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { SERVICE_LABELS, type Installer } from '@/data/installers'

interface Props {
  installer: Installer
}

export function InstallerCard({ installer }: Props) {
  return (
    <Card hover>
      <div className="flex flex-col h-full">
        <h3 className="font-heading text-lg text-forest mb-1">{installer.name}</h3>
        <p className="flex items-center gap-1 text-sm text-ink-light mb-3">
          <MapPin className="w-3.5 h-3.5" />
          {installer.city} — {installer.postnummer}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {installer.services.map((service) => (
            <Badge key={service} variant="sage" className="text-xs">
              {SERVICE_LABELS[service]}
            </Badge>
          ))}
        </div>

        <p className="text-sm text-ink-light leading-relaxed mb-4 flex-1">
          {installer.description}
        </p>

        <div className="flex items-center gap-4 text-sm">
          <a
            href={installer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-forest font-medium hover:text-forest-light transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Webbplats
          </a>
          <span className="flex items-center gap-1 text-ink-light">
            <Phone className="w-3.5 h-3.5" />
            {installer.phone}
          </span>
        </div>
      </div>
    </Card>
  )
}
