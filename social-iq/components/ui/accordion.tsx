'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export type AccordionItem = {
  id: string
  trigger: React.ReactNode
  content: React.ReactNode
}

export function Accordion({
  items,
  defaultOpen,
  className,
}: {
  items: AccordionItem[]
  defaultOpen?: string
  className?: string
}) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? null)

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {items.map((item) => {
        const isOpen = open === item.id
        return (
          <div
            key={item.id}
            className={cn(
              'overflow-hidden rounded-2xl border transition-colors',
              isOpen ? 'border-primary/30 bg-card' : 'border-border bg-card/60',
            )}
          >
            <button
              onClick={() => setOpen(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
              aria-expanded={isOpen}
            >
              <div className="min-w-0 flex-1">{item.trigger}</div>
              <ChevronDown
                className={cn(
                  'size-5 shrink-0 text-muted-foreground transition-transform duration-300',
                  isOpen && 'rotate-180 text-primary',
                )}
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
