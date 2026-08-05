'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Brain, HeartPulse, Flame, SearchX, Sparkles, Loader2 } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const steps = [
  { label: 'Reading conversation', icon: Brain },
  { label: 'Detecting emotional signals', icon: HeartPulse },
  { label: 'Calculating attraction', icon: Flame },
  { label: 'Finding mistakes', icon: SearchX },
  { label: 'Generating perfect reply', icon: Sparkles },
]

const STEP_MS = 1500

export default function AnalyzingPage() {
  const router = useRouter()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (active >= steps.length) {
      const t = setTimeout(() => router.push('/report'), 700)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setActive((s) => s + 1), STEP_MS)
    return () => clearTimeout(t)
  }, [active, router])

  const progress = Math.min((active / steps.length) * 100, 100)

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <Logo />
      </div>

      <div className="relative flex w-full max-w-md flex-col items-center">
        {/* animated orb */}
        <div className="relative grid size-40 place-items-center">
          <span className="absolute inset-0 rounded-full bg-primary/25 animate-pulse-ring" />
          <span
            className="absolute inset-4 rounded-full bg-primary/20 animate-pulse-ring"
            style={{ animationDelay: '0.8s' }}
          />
          <span className="relative grid size-24 place-items-center rounded-full bg-gradient-to-br from-primary to-[#FF9A7A] shadow-[0_20px_60px_-15px_color-mix(in_oklab,var(--primary)_80%,transparent)]">
            <Brain className="size-10 text-primary-foreground" />
          </span>
        </div>

        <h1 className="mt-10 text-balance text-center text-2xl font-semibold tracking-tight">
          Analyzing your conversation
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Our AI is reading between the lines.
        </p>

        {/* progress */}
        <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-[#FF9A7A] transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* steps */}
        <div className="mt-8 w-full space-y-2.5">
          {steps.map((s, i) => {
            const done = i < active
            const current = i === active
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className={cn(
                  'flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-500',
                  current
                    ? 'border-primary/40 bg-card'
                    : done
                      ? 'border-border bg-card/50'
                      : 'border-transparent bg-transparent opacity-40',
                )}
              >
                <span
                  className={cn(
                    'grid size-8 shrink-0 place-items-center rounded-full transition-colors',
                    done
                      ? 'bg-[--color-success] text-white'
                      : current
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground',
                  )}
                >
                  {done ? (
                    <Check className="size-4" />
                  ) : current ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Icon className="size-4" />
                  )}
                </span>
                <span
                  className={cn(
                    'text-sm font-medium',
                    current ? 'text-foreground' : done ? 'text-muted-foreground' : 'text-muted-foreground',
                  )}
                >
                  {s.label}
                  {current && <span className="text-primary">...</span>}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
