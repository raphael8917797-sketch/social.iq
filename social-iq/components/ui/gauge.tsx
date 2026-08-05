'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type GaugeProps = {
  value: number
  label: string
  valueLabel?: string
  size?: number
  from?: string
  to?: string
  className?: string
}

export function Gauge({
  value,
  label,
  valueLabel,
  size = 160,
  from = '#FF6B57',
  to = '#FF9A7A',
  className,
}: GaugeProps) {
  const [progress, setProgress] = useState(0)
  const strokeWidth = 12
  const radius = (size - strokeWidth) / 2
  const cx = size / 2
  const cy = size / 2
  // semicircle: half circumference
  const circumference = Math.PI * radius
  const pct = Math.min(Math.max(progress, 0), 100) / 100
  const offset = circumference * (1 - pct)
  const id = `g-${from}-${to}`.replace(/[^a-z0-9]/gi, '')

  useEffect(() => {
    const t = setTimeout(() => setProgress(value), 150)
    return () => clearTimeout(t)
  }, [value])

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div style={{ width: size, height: size / 2 + 8 }} className="relative">
        <svg width={size} height={size / 2 + 8} className="overflow-visible">
          <defs>
            <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          </defs>
          <path
            d={`M ${strokeWidth / 2} ${cy} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${cy}`}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d={`M ${strokeWidth / 2} ${cy} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${cy}`}
            fill="none"
            stroke={`url(#${id})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.16,1,0.3,1)' }}
          />
        </svg>
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center">
          <span className="text-2xl font-semibold tracking-tight tabular-nums">
            {valueLabel ?? `${value}%`}
          </span>
        </div>
      </div>
      <span className="mt-2 text-center text-sm font-medium text-muted-foreground text-balance">
        {label}
      </span>
    </div>
  )
}
