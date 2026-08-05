import { AlertTriangle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { mistakes } from '@/lib/data'

const impactTone: Record<string, 'danger' | 'warning' | 'neutral'> = {
  High: 'danger',
  Medium: 'warning',
  Low: 'neutral',
}

export function Mistakes() {
  return (
    <section>
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-lg bg-[--color-danger]/12 text-[--color-danger]">
          <AlertTriangle className="size-4" />
        </span>
        <h2 className="text-base font-semibold">Mistakes to fix</h2>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Ranked by impact. Small changes, outsized results.
      </p>
      <Accordion className="mt-4">
        {mistakes.map((m) => (
          <AccordionItem key={m.id} value={m.id}>
            <AccordionTrigger>
              <span className="flex flex-1 items-center justify-between gap-3 pr-3">
                <span className="text-left text-sm font-medium">{m.title}</span>
                <span className="flex shrink-0 items-center gap-1.5">
                  <Badge variant={impactTone[m.impact]} size="sm">
                    {m.impact}
                  </Badge>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-pretty leading-relaxed text-muted-foreground">{m.explanation}</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-md bg-secondary px-2 py-1">Impact: {m.impact}</span>
                <span className="rounded-md bg-secondary px-2 py-1">Fix: {m.difficulty}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
