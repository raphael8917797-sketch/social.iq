import Link from 'next/link'
import { cn } from '@/lib/utils'

function ChatBoltIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <path
        d="M36 18.8C36 28.6 28.6 36 18.8 36C15.8 36 13 35.2 10.6 33.8L4 36L6.2 29.4C4.8 27 4 24.2 4 21.2C4 11.4 11.4 4 21.2 4H36V18.8Z"
        fill="url(#chat-gradient)"
      />
      <path
        d="M24 12L14 23H20.5L18 31L28 20H21.5L24 12Z"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="chat-gradient" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7B3D" />
          <stop offset="1" stopColor="#FF5F1F" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  href = '/',
  showText = true,
}: {
  className?: string
  href?: string
  showText?: boolean
}) {
  return (
    <Link href={href} className={cn('inline-flex items-center gap-2.5', className)}>
      <ChatBoltIcon className="h-9 w-9" />
      {showText && (
        <span className="text-lg font-bold tracking-tight text-foreground">Social.IQ</span>
      )}
    </Link>
  )
}
