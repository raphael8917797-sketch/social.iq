import Link from 'next/link'
import { ArrowRight, Sparkles, Flame, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ScoreRing } from '@/components/ui/score-ring'
import { ProgressBar } from '@/components/ui/progress-bar'
import { ChatBubble } from '@/components/chat-bubble'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-primary" />
            Your personal AI communication coach
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[64px]">
            Know exactly <br className="hidden sm:block" />
            what to <span className="text-gradient-primary">say next</span>.
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Upload any conversation and receive an AI-powered analysis of attraction, confidence,
            emotional signals — and the perfect reply, written for you.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="xl" render={<Link href="/onboarding" />}>
              Analyze my conversation
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-md">
          <Card
            glass
            className="absolute left-0 top-6 w-56 animate-float p-5"
            style={{ transform: 'rotate(-4deg)' }}
          >
            <div className="flex items-center justify-center">
              <ScoreRing value={82} size={150} strokeWidth={11} label="Social score" animate />
            </div>
          </Card>

          <Card
            glass
            className="absolute right-0 top-0 w-64 animate-float-slow p-5"
            style={{ transform: 'rotate(3deg)' }}
          >
            <div className="flex flex-col gap-3">
              <ChatBubble from="them">Long week honestly 😮‍💨</ChatBubble>
              <ChatBubble from="me">Then Thursday you unwind. I&apos;ve got the plan.</ChatBubble>
              <div className="mt-1 flex items-center gap-2 text-[11px] text-primary">
                <Sparkles className="size-3.5" />
                Perfect reply generated
              </div>
            </div>
          </Card>

          <Card
            glass
            className="absolute bottom-4 left-4 w-72 animate-float p-5"
            style={{ transform: 'rotate(-2deg)' }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 font-medium">
                  <Flame className="size-4 text-primary" /> Interest
                </span>
                <span className="text-muted-foreground">88</span>
              </div>
              <ProgressBar value={88} />
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="size-4 text-[--color-success]" /> Confidence
                </span>
                <span className="text-muted-foreground">79</span>
              </div>
              <ProgressBar value={79} tone="success" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
