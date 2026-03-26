import { Hero } from '@/components/home/Hero'
import { Pillars } from '@/components/home/Pillars'
import { TrackSelector } from '@/components/home/TrackSelector'
import { ROITeaser } from '@/components/home/ROITeaser'
import { FeaturedGuides } from '@/components/home/FeaturedGuides'
import { TrustSection } from '@/components/home/TrustSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <TrackSelector />
      <ROITeaser />
      <FeaturedGuides />
      <TrustSection />
    </>
  )
}
