import { Brain, Gauge, MessageSquareText, Sparkles, TrendingUp, Trophy } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScoreRing } from '@/components/ui/score-ring'
import { ChatBubble } from '@/components/chat-bubble'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  )
}

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Eyebrow>
            <Sparkles className="size-3.5" /> What you get
          </Eyebrow>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            An unfair advantage in every conversation.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            SocialIQ reads the subtext humans miss — then hands you the exact move to make next.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {/* big card */}
          <Card className="md:col-span-4 md:row-span-2 flex flex-col justify-between overflow-hidden p-8">
            <div>
              <Badge variant="primary" size="sm">
                <Brain className="size-3" /> Deep analysis
              </Badge>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Eight dimensions of social intelligence, scored instantly.
              </h3>
              <p className="mt-3 max-w-md text-muted-foreground">
                Interest, confidence, humor, respect, emotional IQ and more — measured with the
                nuance of a world-class dating and communication coach.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <ScoreRing value={82} size={140} strokeWidth={10} label="Overall" animate={false} />
              <div className="flex-1 space-y-3">
                {[
                  ['Interest', 88, '#FF6B57'],
                  ['Flirting', 86, '#FF9A7A'],
                  ['Confidence', 79, '#22C55E'],
                ].map(([label, val, c]) => (
                  <div key={label as string}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{label as string}</span>
                      <span className="text-muted-foreground">{val as number}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/6">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${val as number}%`, background: c as string }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="md:col-span-2 p-6">
            <MessageSquareText className="size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">Perfect replies</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Five tones, one tap. Funny, confident, romantic, mysterious or natural.
            </p>
            <div className="mt-4 space-y-2">
              <ChatBubble from="me">Thursday. Trust me.</ChatBubble>
            </div>
          </Card>

          <Card className="md:col-span-2 p-6">
            <Gauge className="size-6 text-[--color-success]" />
            <h3 className="mt-4 text-lg font-semibold">Social signals</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Ghosting risk, date probability and momentum, read like a radar.
            </p>
          </Card>

          <Card className="md:col-span-3 p-6">
            <Trophy className="size-6 text-[--color-warning]" />
            <h3 className="mt-4 text-lg font-semibold">Gamified growth</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Earn XP, keep streaks and level up your social skill like a game.
            </p>
          </Card>

          <Card className="md:col-span-3 p-6">
            <TrendingUp className="size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">Track your evolution</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Watch your social score climb over weeks with a beautiful history.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
