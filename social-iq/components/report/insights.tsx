import { Card } from '@/components/ui/card'
import { Gauge } from '@/components/ui/gauge'
import { insights } from '@/lib/data'

export function Insights() {
  return (
    <section>
      <h2 className="text-base font-semibold">Predictive insights</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        What the signals suggest about where this is heading.
      </p>
      <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-3">
        {insights.map((i) => (
          <Card key={i.key} className="flex flex-col items-center p-5">
            <Gauge value={i.value} label={i.valueLabel} from={i.from} to={i.to} />
            <div className="mt-3 text-center text-sm font-medium text-muted-foreground text-balance">
              {i.label}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
