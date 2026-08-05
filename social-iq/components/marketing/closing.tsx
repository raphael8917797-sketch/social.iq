import Link from 'next/link'
import { ArrowRight, Upload, ScanLine, Wand2, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const steps = [
  {
    icon: Upload,
    title: 'Upload the conversation',
    desc: 'Drop a screenshot or paste the text. Any chat, any app — it stays private.',
  },
  {
    icon: ScanLine,
    title: 'AI reads the subtext',
    desc: 'Emotional signals, attraction, power balance and mistakes, decoded in seconds.',
  },
  {
    icon: Wand2,
    title: 'Get your perfect move',
    desc: 'A full report plus reply options crafted to move the conversation forward.',
  },
]

const testimonials = [
  {
    quote:
      "I stopped guessing. The report told me exactly why she went cold — and the reply it wrote got her back the same night.",
    name: 'Marcus T.',
    role: 'Product Manager',
  },
  {
    quote:
      "It feels like having a communication coach in my pocket. My confidence at work and dating both went up.",
    name: 'Elena R.',
    role: 'Designer',
  },
  {
    quote:
      "The emotional intelligence breakdown is scary accurate. This is the most useful app on my phone.",
    name: 'Devin K.',
    role: 'Founder',
  },
]

export function Closing() {
  return (
    <>
      <section id="how" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-primary">How it works</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              From confusion to clarity in three steps.
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <Card key={s.title} className="relative p-8">
                <span className="text-sm font-semibold text-muted-foreground/60">
                  0{i + 1}
                </span>
                <div className="mt-6 grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            People are upgrading themselves.
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="flex flex-col p-8">
                <Quote className="size-7 text-primary" />
                <p className="mt-5 flex-1 text-pretty leading-relaxed">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-secondary text-sm font-semibold">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <Card className="relative overflow-hidden px-8 py-20 text-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Never wonder what to say again.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join 120,000+ people becoming more confident, magnetic communicators.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="xl" render={<Link href="/onboarding" />}>
                  Analyze my conversation
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} SocialIQ. Communicate with confidence.</p>
        <div className="flex items-center gap-6">
          <Link href="/pricing" className="hover:text-foreground">
            Pricing
          </Link>
          <Link href="/report" className="hover:text-foreground">
            Demo
          </Link>
          <span className="hover:text-foreground">Privacy</span>
          <span className="hover:text-foreground">Terms</span>
        </div>
      </div>
    </footer>
  )
}
