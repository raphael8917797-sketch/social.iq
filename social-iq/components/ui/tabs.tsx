'use client'

import { cn } from '@/lib/utils'
import * as React from 'react'

type Tab = { value: string; label: string; icon?: React.ReactNode }

type TabsProps = {
  tabs: Tab[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export function Tabs({ tabs, value, onChange, className }: TabsProps) {
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

export const TabsList = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('inline-flex flex-wrap items-center gap-1 rounded-full border border-border bg-card/60 p-1', className)}>
    {children}
  </div>
)

export const TabsTrigger = ({
  children,
  value,
  className,
}: {
  children: React.ReactNode
  value: string
  className?: string
}) => (
  <button
    data-value={value}
    className={cn('inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all', className)}
  >
    {children}
  </button>
)

export const TabsContent = ({ children, value }: { children: React.ReactNode; value: string }) => (
  <div data-value={value}>{children}</div>
)
