'use client'

import Link from 'next/link'
import { useState } from 'react'
import { TrendingUp, TrendingDown, ArrowUpRight, Search } from 'lucide-react'
import { DashboardShell } from '@/components/dashboard-shell'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScoreRing } from '@/components/ui/score-ring'
import { history } from '@/lib/data'
import { cn } from '@/lib/utils'

const filters = ['All', 'Crush', 'Partner', 'Coworker', 'Friend'] as const

function scoreTone(score: number) {
  if (score >= 85) return 'text-[--color-success]'
  if (score >= 70) return 'text-primary'
  return 'text-[--color-warning]'
}

export default function HistoryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const list = history.filter((h) => filter === 'All' || h.tag === filter)
  const avg = Math.round(history.reduce((a, h) => a + h.score, 0) / history.length)

  return (
    <DashboardShell title="History">
      <div className="mx-auto max-w-4xl">
        {/* stat strip */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Total analyses', value: history.length },
            { label: 'Average score', value: avg },
            { label: 'Best score', value: Math.max(...history.map((h) => h.score)) },
          ].map((s) => (
            <Card key={s.label} className="p-5">
              <div className="text-3xl font-semibold tracking-tight tabular-nums">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </Card>
          ))}
        </div>

        {/* filters */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
                  filter === f
                    ? 'border-primary/40 bg-primary/12 text-primary'
                    : 'border-border text-muted-foreground hover:text-foreground',
                )}
              >
                {f}
              </button>
            ))}
          </div>
          <button
            className="hidden size-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground sm:grid"
            aria-label="Search history"
          >
            <Search className="size-4" />
          </button>
        </div>

        {/* list */}
        <div className="mt-4 flex flex-col gap-3">
          {list.map((h) => {
            const up = h.trend >= 0
            return (
              <Link key={h.id} href="/report">
                <Card className="group flex items-center gap-4 p-4 transition-colors hover:border-primary/30">
                  <ScoreRing value={h.score} size={64} strokeWidth={6} showValue compact />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-sm font-semibold">{h.title}</h3>
                      <Badge variant="neutral" size="sm">
                        {h.tag}
                      </Badge>
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {h.contact} · {h.date}
                    </p>
                  </div>
                  <div
                    className={cn(
                      'hidden items-center gap-1 text-sm font-medium sm:flex',
                      up ? 'text-[--color-success]' : 'text-[--color-danger]',
                    )}
                  >
                    {up ? <TrendingUp className="size-4" /> : <TrendingDown className="size-4" />}
                    {up ? '+' : ''}
                    {h.trend}
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </DashboardShell>
  )
}
