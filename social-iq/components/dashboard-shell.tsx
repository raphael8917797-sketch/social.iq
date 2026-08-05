'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  History,
  User,
  Plus,
  Sparkles,
  Menu,
  X,
  Zap,
} from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/data'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/report', label: 'Report', icon: LayoutDashboard },
  { href: '/history', label: 'History', icon: History },
  { href: '/profile', label: 'Profile', icon: User },
]

export function DashboardShell({
  title,
  children,
  action,
}: {
  title: string
  children: React.ReactNode
  action?: React.ReactNode
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-dvh lg:grid lg:grid-cols-[264px_1fr]">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-[264px] flex-col border-r border-border bg-card/50 px-4 py-6 backdrop-blur-xl transition-transform lg:static lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between px-2">
          <Logo />
          <button
            className="text-muted-foreground lg:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <Button className="mt-8" render={<Link href="/upload" />}>
          <Plus className="size-4" />
          New analysis
        </Button>

        <nav className="mt-8 flex flex-col gap-1">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                  active
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground',
                )}
              >
                <item.icon className={cn('size-[18px]', active && 'text-primary')} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* upgrade card */}
        <div className="mt-auto">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/12 to-transparent p-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="size-4 text-primary" />
              Go Premium
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Unlock unlimited analyses and priority AI.
            </p>
            <Button size="sm" className="mt-3 w-full" render={<Link href="/pricing" />}>
              <Zap className="size-3.5" />
              Upgrade
            </Button>
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-xl px-2 py-2">
            <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-primary to-[#FF9A7A] text-sm font-semibold text-primary-foreground">
              {profile.name.charAt(0)}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{profile.name}</p>
              <p className="truncate text-xs text-muted-foreground">Level {profile.level} · Free</p>
            </div>
          </div>
        </div>
      </aside>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex min-w-0 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-border bg-background/70 px-5 py-4 backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-3">
            <button
              className="text-muted-foreground lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
            <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
          </div>
          {action}
        </header>
        <main className="flex-1 px-5 py-8 sm:px-8">{children}</main>
      </div>
    </div>
  )
}
