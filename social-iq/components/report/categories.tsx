import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { ProgressBar } from '@/components/ui/progress-bar'
import { categories } from '@/lib/data'

export function Categories() {
  return (
    <section>
      <h2 className="text-base font-semibold">Category breakdown</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Eight dimensions of how you show up in conversation.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {categories.map((c) => {
          const up = c.trend >= 0
          return (
            <Card key={c.key} className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-secondary text-primary">
                    <c.icon className="size-4" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{c.label}</div>
                    <div
                      className={`mt-0.5 flex items-center gap-1 text-xs font-medium ${
                        up ? 'text-[--color-success]' : 'text-[--color-danger]'
                      }`}
                    >
                      {up ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                      {up ? '+' : ''}
                      {c.trend} vs last chat
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-semibold tracking-tight tabular-nums">{c.score}</div>
              </div>
              <div className="mt-4">
                <ProgressBar value={c.score} />
              </div>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {c.blurb}
              </p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
