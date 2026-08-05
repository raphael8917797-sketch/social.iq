import { cn } from '@/lib/utils'

export function ChatBubble({
  from,
  children,
  className,
}: {
  from: 'me' | 'them'
  children: React.ReactNode
  className?: string
}) {
  const me = from === 'me'
  return (
    <div className={cn('flex', me ? 'justify-end' : 'justify-start', className)}>
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed',
          me
            ? 'rounded-br-md bg-primary text-primary-foreground'
            : 'rounded-bl-md bg-secondary text-secondary-foreground',
        )}
      >
        {children}
      </div>
    </div>
  )
}
