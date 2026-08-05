import { Sparkles, TrendingUp, Clock, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScoreRing } from '@/components/ui/score-ring'
import { overallScore, aiSummary } from '@/lib/data'

export function Overview() {
  return (
    <div className="grid gap-4 lg:grid-cols-[380px_1fr]">
      <Card className="flex flex-col items-center justify-center p-8">
        <Badge variant="primary" size="sm">
          <Sparkles className="size-3" /> Overall social score
        </Badge>
        <div className="mt-4">
          <ScoreRing value={overallScore} label="out of 100" size={220} />
        </div>
        <p className="mt-2 text-center text-sm font-medium text-[--color-success]">
          Top 12% · Strong conversation
        </p>
      </Card>

      <Card className="flex flex-col p-7">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
            <Sparkles className="size-4" />
          </span>
          <h2 className="text-base font-semibold">AI Summary</h2>
        </div>
        <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
          {aiSummary}
        </p>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { icon: Target, label: 'Date probability', value: '74%', tone: 'text-primary' },
            { icon: TrendingUp, label: 'Momentum', value: 'High', tone: 'text-[--color-success]' },
            { icon: Clock, label: 'Best time to reply', value: 'Now', tone: 'text-[--color-warning]' },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-secondary/40 p-4">
              <s.icon className={`size-4 ${s.tone}`} />
              <div className="mt-3 text-lg font-semibold tracking-tight">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
