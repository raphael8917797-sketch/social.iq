import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className, href = '/' }: { className?: string; href?: string }) {
  return (
    <Link href={href} className={cn('inline-flex items-center gap-2.5', className)}>
      <span className="relative grid size-8 place-items-center rounded-xl bg-gradient-to-br from-primary to-[#FF9A7A] shadow-[0_6px_18px_-6px_color-mix(in_oklab,var(--primary)_80%,transparent)]">
        <svg viewBox="0 0 24 24" className="size-4 text-primary-foreground" fill="none">
          <path
            d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H10l-4 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-7Z"
            fill="currentColor"
            opacity="0.95"
          />
          <circle cx="9" cy="10" r="1.1" fill="var(--primary)" />
          <circle cx="12" cy="10" r="1.1" fill="var(--primary)" />
          <circle cx="15" cy="10" r="1.1" fill="var(--primary)" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold tracking-tight">SocialIQ</span>
    </Link>
  )
}
