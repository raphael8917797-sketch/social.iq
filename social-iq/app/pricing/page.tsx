import Link from 'next/link'
import { Check } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/marketing/closing'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    description: 'Try it out, no commitment.',
    features: ['3 analyses per month', 'Basic social score', '1 reply suggestion per analysis'],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/month',
    description: 'For anyone serious about leveling up.',
    features: [
      'Unlimited analyses',
      'Full 8-category breakdown',
      'Replies in 5 tones',
      'Conversation history',
    ],
    cta: 'Get Pro',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$25',
    period: '/month',
    description: 'The full toolkit, priority everything.',
    features: [
      'Everything in Pro',
      'Priority AI model (faster, more accurate)',
      'Unlimited screenshot uploads',
      'Priority support',
    ],
    cta: 'Get Premium',
    highlight: false,
  },
]

export default function PricingPage() {
  return (
    <main className="relative min-h-dvh">
      <SiteNav />
      <section className="relative px-6 pt-36 pb-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium text-primary">Pricing</span>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Simple plans, real results.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free. Upgrade when you're ready for unlimited insight.
          </p>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'relative flex flex-col p-8',
                plan.highlight && 'border-primary/60 shadow-[0_0_0_1px_var(--primary)]',
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8"
                variant={plan.highlight ? 'default' : 'secondary'}
                render={<Link href="/onboarding" />}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
