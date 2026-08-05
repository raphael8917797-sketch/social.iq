'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type ScoreRingProps = {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  label?: string
  sublabel?: string
  className?: string
  valueClassName?: string
  gradientFrom?: string
  gradientTo?: string
  animate?: boolean
}

export function ScoreRing({
  value,
  max = 100,
  size = 220,
  strokeWidth = 14,
  label,
  sublabel,
  className,
  valueClassName = 'text-5xl',
  gradientFrom = '#FF6B57',
  gradientTo = '#FF9A7A',
  animate = true,
}: ScoreRingProps) {
  const [progress, setProgress] = useState(animate ? 0 : value)
  const [display, setDisplay] = useState(animate ? 0 : value)
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const pct = Math.min(progress / max, 1)
  const offset = circumference * (1 - pct)
  const id = `${gradientFrom}-${gradientTo}`.replace(/[^a-z0-9]/gi, '')

  useEffect(() => {
    if (!animate) return
    const t = setTimeout(() => setProgress(value), 150)
    return () => clearTimeout(t)
  }, [value, animate])

  useEffect(() => {
    if (!animate) {
      setDisplay(value)
      return
    }
    let raf: number
    const start = performance.now()
    const duration = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    const t = setTimeout(() => {
      raf = requestAnimationFrame(tick)
    }, 150)
    return () => {
      clearTimeout(t)
      cancelAnimationFrame(raf)
    }
  }, [value, animate])

  return (
    <div
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={cn(
            'font-semibold tracking-tight text-foreground tabular-nums',
            valueClassName,
          )}
        >
          {display}
        </span>
        {label ? (
          <span className="mt-1 text-sm font-medium text-muted-foreground">{label}</span>
        ) : null}
        {sublabel ? (
          <span className="mt-0.5 text-xs text-muted-foreground/70">{sublabel}</span>
        ) : null}
      </div>
    </div>
  )
}
