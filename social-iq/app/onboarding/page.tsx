'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Heart,
  Users,
  Briefcase,
  Home,
  Flame,
  CalendarHeart,
  MessageCircle,
  Laugh,
  Sparkles,
  Ghost,
  Wand2,
} from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Option = { value: string; label: string; desc: string; icon: React.ElementType }

const contacts: Option[] = [
  { value: 'crush', label: 'Crush', desc: 'Someone new you like', icon: Flame },
  { value: 'partner', label: 'Partner', desc: 'Your relationship', icon: Heart },
  { value: 'friend', label: 'Friend', desc: 'Keeping it strong', icon: Users },
  { value: 'coworker', label: 'Coworker', desc: 'Professional edge', icon: Briefcase },
  { value: 'family', label: 'Family', desc: 'Closer connection', icon: Home },
]

const goals: Option[] = [
  { value: 'date', label: 'Get a date', desc: 'Turn chats into plans', icon: CalendarHeart },
  { value: 'alive', label: 'Keep it alive', desc: 'Never run out of things to say', icon: MessageCircle },
  { value: 'funny', label: 'Be funnier', desc: 'Land every joke', icon: Laugh },
  { value: 'attractive', label: 'Be more attractive', desc: 'Build magnetic tension', icon: Sparkles },
  { value: 'ghost', label: 'Avoid getting ghosted', desc: 'Read the warning signs', icon: Ghost },
  { value: 'replies', label: 'Better replies', desc: 'Always know what to say', icon: Wand2 },
]

const TOTAL = 3

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [contact, setContact] = useState<string | null>(null)
  const [goal, setGoal] = useState<string | null>(null)
  const [confidence, setConfidence] = useState(50)

  const canContinue = step === 0 ? !!contact : step === 1 ? !!goal : true

  function next() {
    if (step < TOTAL - 1) setStep((s) => s + 1)
    else router.push('/upload')
  }

  return (
    <main className="relative flex min-h-dvh flex-col bg-background">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <header className="relative flex items-center justify-between px-6 py-6">
        <Logo />
        <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          Skip for now
        </Link>
      </header>

      {/* progress */}
      <div className="relative mx-auto w-full max-w-xl px-6">
        <div className="flex items-center gap-3">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
              <div
                className={cn(
                  'h-full rounded-full bg-gradient-to-r from-primary to-[#FF9A7A] transition-all duration-500',
                  i <= step ? 'w-full' : 'w-0',
                )}
              />
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs font-medium text-muted-foreground">
          Step {step + 1} of {TOTAL}
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-xl flex-1 flex-col px-6 py-10">
        <div key={step} className="animate-fade-up">
          {step === 0 && (
            <StepShell
              eyebrow="Getting to know you"
              title="Who are you talking to?"
              subtitle="We tailor the analysis to the relationship."
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {contacts.map((o) => (
                  <OptionCard
                    key={o.value}
                    option={o}
                    selected={contact === o.value}
                    onClick={() => setContact(o.value)}
                  />
                ))}
              </div>
            </StepShell>
          )}

          {step === 1 && (
            <StepShell
              eyebrow="Your mission"
              title="What is your goal?"
              subtitle="Pick the outcome that matters most right now."
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {goals.map((o) => (
                  <OptionCard
                    key={o.value}
                    option={o}
                    selected={goal === o.value}
                    onClick={() => setGoal(o.value)}
                  />
                ))}
              </div>
            </StepShell>
          )}

          {step === 2 && (
            <StepShell
              eyebrow="Your starting point"
              title="How confident are you socially?"
              subtitle="Be honest — this is your baseline. It only goes up from here."
            >
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-8 flex items-baseline justify-between">
                  <span className="text-sm text-muted-foreground">Not at all</span>
                  <span className="text-5xl font-semibold tabular-nums text-gradient-primary">
                    {confidence}
                  </span>
                  <span className="text-sm text-muted-foreground">Very confident</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={confidence}
                  onChange={(e) => setConfidence(Number(e.target.value))}
                  aria-label="Social confidence level"
                  className="h-2 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-[0_4px_14px_-2px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
                  style={{
                    background: `linear-gradient(to right, var(--primary) 0%, #FF9A7A ${confidence}%, rgba(255,255,255,0.08) ${confidence}%, rgba(255,255,255,0.08) 100%)`,
                  }}
                />
                <p className="mt-8 text-center text-sm text-muted-foreground">
                  {confidence < 34
                    ? 'We will build your foundation step by step.'
                    : confidence < 67
                      ? 'Solid base — let us sharpen the edges.'
                      : 'Great — let us take you to elite level.'}
                </p>
              </div>
            </StepShell>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between pt-10">
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className={cn(step === 0 && 'pointer-events-none opacity-0')}
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
          <Button size="lg" onClick={next} disabled={!canContinue}>
            {step === TOTAL - 1 ? 'Start analyzing' : 'Continue'}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}

function StepShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <div>
      <span className="text-sm font-medium text-primary">{eyebrow}</span>
      <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-pretty text-muted-foreground">{subtitle}</p>
      <div className="mt-8">{children}</div>
    </div>
  )
}

function OptionCard({
  option,
  selected,
  onClick,
}: {
  option: Option
  selected: boolean
  onClick: () => void
}) {
  const Icon = option.icon
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative flex items-center gap-4 rounded-2xl border p-4 text-left transition-all',
        selected
          ? 'border-primary/50 bg-primary/8 shadow-[0_0_0_1px_color-mix(in_oklab,var(--primary)_40%,transparent)]'
          : 'border-border bg-card hover:border-white/15 hover:bg-secondary/50',
      )}
    >
      <span
        className={cn(
          'grid size-11 shrink-0 place-items-center rounded-xl transition-colors',
          selected ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground',
        )}
      >
        <Icon className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium">{option.label}</span>
        <span className="block truncate text-sm text-muted-foreground">{option.desc}</span>
      </span>
      <span
        className={cn(
          'grid size-5 shrink-0 place-items-center rounded-full border transition-all',
          selected ? 'border-primary bg-primary text-primary-foreground' : 'border-border',
        )}
      >
        {selected && <Check className="size-3.5" />}
      </span>
    </button>
  )
}
