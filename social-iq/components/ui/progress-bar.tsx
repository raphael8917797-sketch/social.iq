import { cn } from '@/lib/utils'

type ProgressBarProps = {
  value: number
  max?: number
  className?: string
  barClassName?: string
  tone?: 'primary' | 'success' | 'warning' | 'error' | 'muted'
}

const tones: Record<NonNullable<ProgressBarProps['tone']>, string> = {
  primary: 'bg-gradient-to-r from-primary to-[#FF9A7A]',
  success: 'bg-[--color-success]',
  warning: 'bg-[--color-warning]',
  error: 'bg-[--color-error]',
  muted: 'bg-muted-foreground/50',
}

export function ProgressBar({
  value,
  max = 100,
  className,
  barClassName,
  tone = 'primary',
}: ProgressBarProps) {
  const pct = Math.min(Math.max(value / max, 0), 1) * 100
  return (
    <div
      className={cn('h-2 w-full overflow-hidden rounded-full bg-white/6', className)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <div
        className={cn('h-full rounded-full transition-[width] duration-1000 ease-out', tones[tone], barClassName)}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
