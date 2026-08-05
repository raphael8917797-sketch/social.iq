import { CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { strengths } from '@/lib/data'

export function Strengths() {
  return (
    <section>
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-lg bg-[--color-success]/12 text-[--color-success]">
          <CheckCircle2 className="size-4" />
        </span>
        <h2 className="text-base font-semibold">What you did well</h2>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {strengths.map((s) => (
          <Card key={s.id} className="flex gap-3 p-5">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[--color-success]" />
            <div>
              <div className="text-sm font-semibold">{s.title}</div>
              <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {s.detail}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
