import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/marketing/hero'
import { Features } from '@/components/marketing/features'
import { Closing, SiteFooter } from '@/components/marketing/closing'

export default function HomePage() {
  return (
    <main className="relative min-h-dvh">
      <SiteNav />
      <Hero />
      <Features />
      <Closing />
      <SiteFooter />
    </main>
  )
}
