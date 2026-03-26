'use client'

import { useEffect, useRef } from 'react'
import type { Installer } from '@/data/installers'

interface Props {
  installers: Installer[]
}

export function InstallerMap({ installers }: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const cssLoaded = useRef(false)

  useEffect(() => {
    // Load Leaflet CSS dynamically
    if (!cssLoaded.current) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'
      document.head.appendChild(link)
      cssLoaded.current = true
    }
  }, [])

  useEffect(() => {
    if (!mapRef.current) return

    // Clean up previous map instance when installers change
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }

    import('leaflet').then((L) => {
      if (!mapRef.current) return

      // Fix default marker icons
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })

      const map = L.map(mapRef.current).setView([62.0, 15.0], 5)
      mapInstanceRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)

      installers.forEach((installer) => {
        L.marker([installer.lat, installer.lng])
          .addTo(map)
          .bindPopup(
            `<strong>${installer.name}</strong><br/>${installer.city}<br/><a href="${installer.website}" target="_blank">Webbplats</a>`,
          )
      })

      // Fit bounds if there are markers
      if (installers.length > 0) {
        const bounds = L.latLngBounds(installers.map((i) => [i.lat, i.lng]))
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 8 })
      }
    })

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [installers])

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-sage-light/30"
    />
  )
}
