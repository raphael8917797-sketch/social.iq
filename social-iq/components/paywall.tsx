'use client'

import { useEffect, useState } from 'react'
import {
  Check,
  Sparkles,
  Infinity as InfinityIcon,
  MessageSquareText,
  History,
  Zap,
  Rocket,
  ShieldCheck,
  Lock,
  Star,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const perks = [
  { icon: Sparkles, label: 'Full AI analysis of every conversation' },
  { icon: InfinityIcon, label: 'Unlimited conversations' },
  { icon: MessageSquareText, label: 'Best replies in every tone' },
  { icon: History, label: 'Complete conversation history' },
  { icon: Zap, label: 'Priority AI — 3x faster' },
  { icon: Rocket, label: 'All future updates included' },
]

export function PricingPlans({
  compact = false,
  onUnlock,
}: {
  compact?: boolean
  onUnlock?: () => void
}) {
  const [yearly, setYearly] = useState(true)

  return (
    <div>
      {/* toggle */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card/60 p-1">
          <button
            onClick={() => setYearly(false)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-all',
              !yearly ? 'bg-secondary text-foreground' : 'text-muted-foreground',
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={cn(
              'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
              yearly ? 'bg-primary text-primary-foreground' : 'text-muted-foreground',
            )}
          >
            Yearly
            <span className={cn('rounded-full px-1.5 py-0.5 text-[10px]', yearly ? 'bg-white/20' : 'bg-primary/15 text-primary')}>
              -58%
            </span>
          </button>
        </div>
      </div>

      <div className={cn('mt-8 grid gap-4', compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2')}>
        {/* Monthly / secondary */}
        <div className="flex flex-col rounded-3xl border border-border bg-card p-7">
          <span className="text-sm font-medium text-muted-foreground">Monthly</span>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-semibold tracking-tight">$19</span>
            <span className="text-muted-foreground">/mo</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Flexible. Cancel anytime.</p>
          <Button variant="secondary" size="lg" className="mt-6" onClick={onUnlock}>
            Choose monthly
          </Button>
        </div>

        {/* Yearly / highlighted */}
        <div className="relative flex flex-col overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-b from-primary/10 to-card p-7 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_50%,transparent)]">
          <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/25 blur-3xl" />
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">Yearly</span>
            <Badge variant="primary" size="sm">
              <Star className="size-3" /> Best value
            </Badge>
          </div>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-semibold tracking-tight">$7.90</span>
            <span className="text-muted-foreground">/mo</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Billed $95 yearly. <span className="text-foreground">Save $133.</span>
          </p>
          <Button size="lg" className="mt-6" onClick={onUnlock}>
            <Sparkles className="size-4" />
            Unlock Premium
          </Button>
        </div>
      </div>
    </div>
  )
}

export function PaywallBody({ onUnlock }: { onUnlock?: () => void }) {
  return (
    <div>
      <div className="text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
          <Lock className="size-3.5" />
          Report locked
        </div>
        <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Unlock your Complete Social Report
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-muted-foreground">
          See every mistake, strength and perfectly-worded reply — plus unlimited future analyses.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-lg gap-2.5 sm:grid-cols-2">
        {perks.map((p) => (
          <div key={p.label} className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-3.5 py-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <p.icon className="size-4" />
            </span>
            <span className="text-sm">{p.label}</span>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-lg">
        <PricingPlans onUnlock={onUnlock} />
      </div>

      {/* trust */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="size-4 text-[--color-success]" />
          30-day money-back guarantee
        </span>
        <span className="flex items-center gap-1.5">
          <Lock className="size-4" />
          Secure payment
        </span>
        <span className="flex items-center gap-1.5">
          <Check className="size-4 text-[--color-success]" />
          Cancel anytime
        </span>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-primary text-primary" />
          ))}
        </div>
        <span className="text-muted-foreground">
          <span className="font-medium text-foreground">4.9</span> from 12,400+ members
        </span>
      </div>
    </div>
  )
}

export function PaywallDialog({
  open,
  onClose,
  onUnlock,
}: {
  open: boolean
  onClose: () => void
  onUnlock?: () => void
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-background/70 p-4 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Unlock Premium"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] sm:p-10 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="size-5" />
        </button>
        <PaywallBody onUnlock={onUnlock} />
      </div>
    </div>
  )
}

export const Paywall = PaywallDialog
