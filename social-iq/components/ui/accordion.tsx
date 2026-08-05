'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type AccordionContextType = {
  openItems: Set<string>
  toggle: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextType | null>(null)

export function Accordion({
  children,
  className,
  type = 'single',
}: {
  children: React.ReactNode
  className?: string
  type?: 'single' | 'multiple'
}) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set())

  function toggle(value: string) {
    setOpenItems((prev) => {
      const next = new Set(type === 'single' ? [] : prev)
      if (prev.has(value)) {
        next.delete(value)
      } else {
        next.add(value)
      }
      return next
    })
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  )
}

const AccordionItemContext = React.createContext<string>('')

export function AccordionItem({
  children,
  value,
  className,
}: {
  children: React.ReactNode
  value: string
  className?: string
}) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={cn('border-b border-border', className)}>{children}</div>
    </AccordionItemContext.Provider>
  )
}

export function AccordionTrigger({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ctx = React.useContext(AccordionContext)
  const value = React.useContext(AccordionItemContext)
  if (!ctx) throw new Error('AccordionTrigger must be used inside Accordion')
  const open = ctx.openItems.has(value)

  return (
    <button
      onClick={() => ctx.toggle(value)}
      className={cn(
        'flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-all',
        className,
      )}
    >
      {children}
      <ChevronDown
        className={cn('size-4 shrink-0 transition-transform duration-200', open && 'rotate-180')}
      />
    </button>
  )
}

export function AccordionContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ctx = React.useContext(AccordionContext)
  const value = React.useContext(AccordionItemContext)
  if (!ctx) throw new Error('AccordionContent must be used inside Accordion')
  const open = ctx.openItems.has(value)
  if (!open) return null

  return <div className={cn('pb-4 text-sm text-muted-foreground', className)}>{children}</div>
}
