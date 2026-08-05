'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type SimpleTab = { value: string; label: string; icon?: React.ReactNode }

type TabsContextType = {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextType | null>(null)

type TabsProps =
  | {
      tabs: SimpleTab[]
      value: string
      onChange: (value: string) => void
      className?: string
      children?: never
    }
  | {
      tabs?: undefined
      value: string
      onValueChange: (value: string) => void
      className?: string
      children: React.ReactNode
    }

export function Tabs(props: TabsProps) {
  const { value, className } = props

  if ('tabs' in props && props.tabs) {
    const { tabs, onChange } = props
    return (
      <div
        className={cn(
          'inline-flex flex-wrap items-center gap-1 rounded-full border border-border bg-card/60 p-1',
          className,
        )}
        role="tablist"
      >
        {tabs.map((tab) => {
          const active = tab.value === value
          return (
            <button
              key={tab.value}
              role="tab"
              aria-selected={active}
              onClick={() => onChange(tab.value)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
                active
                  ? 'bg-primary text-primary-foreground shadow-[0_6px_18px_-8px_color-mix(in_oklab,var(--primary)_70%,transparent)]'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          )
        })}
      </div>
    )
  }

  const { onValueChange, children } = props as Extract<TabsProps, { children: React.ReactNode }>
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex flex-wrap items-center gap-1 rounded-full border border-border bg-card/60 p-1',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function TabsTrigger({
  children,
  value,
  className,
}: {
  children: React.ReactNode
  value: string
  className?: string
}) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error('TabsTrigger must be used inside Tabs')
  const active = ctx.value === value

  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={() => ctx.onValueChange(value)}
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
        active
          ? 'bg-primary text-primary-foreground shadow-[0_6px_18px_-8px_color-mix(in_oklab,var(--primary)_70%,transparent)]'
          : 'text-muted-foreground hover:text-foreground',
        className,
      )}
    >
      {children}
    </button>
  )
}

export function TabsContent({
  children,
  value,
  className,
}: {
  children: React.ReactNode
  value: string
  className?: string
}) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error('TabsContent must be used inside Tabs')
  if (ctx.value !== value) return null
  return <div className={className}>{children}</div>
}
