import type * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border font-medium whitespace-nowrap transition-colors',
  {
    variants: {
      variant: {
        default: 'border-border bg-secondary text-secondary-foreground',
        primary: 'border-primary/20 bg-primary/10 text-primary',
        success: 'border-[color-mix(in_oklab,var(--success)_25%,transparent)] bg-[color-mix(in_oklab,var(--success)_12%,transparent)] text-[--color-success]',
        warning: 'border-[color-mix(in_oklab,var(--warning)_25%,transparent)] bg-[color-mix(in_oklab,var(--warning)_12%,transparent)] text-[--color-warning]',
        error: 'border-[color-mix(in_oklab,var(--error)_25%,transparent)] bg-[color-mix(in_oklab,var(--error)_12%,transparent)] text-[--color-error]',
        outline: 'border-border bg-transparent text-muted-foreground',
      },
      size: {
        sm: 'px-2 py-0.5 text-[11px]',
        md: 'px-2.5 py-1 text-xs',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  },
)

function Badge({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge, badgeVariants }
