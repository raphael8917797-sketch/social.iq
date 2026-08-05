'use client'

import { useState } from 'react'
import { Copy, Check, Wand2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { replies, type ReplyStyle } from '@/lib/data'

const styles: { key: ReplyStyle; label: string }[] = [
  { key: 'natural', label: 'Natural' },
  { key: 'funny', label: 'Funny' },
  { key: 'confident', label: 'Confident' },
  { key: 'romantic', label: 'Romantic' },
  { key: 'mysterious', label: 'Mysterious' },
]

export function ReplySuggestions() {
  const [style, setStyle] = useState<ReplyStyle>('natural')
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard?.writeText(replies[style])
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section>
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-lg bg-primary/12 text-primary">
          <Wand2 className="size-4" />
        </span>
        <h2 className="text-base font-semibold">Suggested replies</h2>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Craft your next message in the tone that fits the moment.
      </p>

      <Card className="mt-4 p-5">
        <Tabs value={style} onValueChange={(v) => setStyle(v as ReplyStyle)}>
          <TabsList>
            {styles.map((s) => (
              <TabsTrigger key={s.key} value={s.key}>
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="mt-4 rounded-2xl border border-border bg-secondary/40 p-5">
          <p className="text-pretty leading-relaxed">{replies[style]}</p>
        </div>

        <div className="mt-4 flex justify-end">
          <Button variant="secondary" size="sm" onClick={copy}>
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? 'Copied' : 'Copy reply'}
          </Button>
        </div>
      </Card>
    </section>
  )
}
