'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ImageUp, ClipboardType, UploadCloud, FileText, Lock, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Tabs } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

export default function UploadPage() {
  const router = useRouter()
  const [mode, setMode] = useState('screenshot')
  const [dragging, setDragging] = useState(false)
  const [file, setFile] = useState<string | null>(null)
  const [text, setText] = useState('')

  const ready = mode === 'screenshot' ? !!file : text.trim().length > 20

  return (
    <main className="relative flex min-h-dvh flex-col">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <header className="relative flex items-center justify-between px-6 py-6">
        <Logo />
        <Button variant="ghost" size="sm" render={<Link href="/onboarding" />}>
          <ArrowLeft className="size-4" />
          Back
        </Button>
      </header>

      <div className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-8">
        <div className="text-center">
          <span className="text-sm font-medium text-primary">Almost there</span>
          <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Add your conversation
          </h1>
          <p className="mx-auto mt-2 max-w-md text-pretty text-muted-foreground">
            Upload a screenshot or paste the text. Everything is encrypted and never shared.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Tabs
            value={mode}
            onChange={(v) => setMode(v)}
            tabs={[
              { value: 'screenshot', label: 'Screenshot', icon: <ImageUp className="size-4" /> },
              { value: 'paste', label: 'Paste text', icon: <ClipboardType className="size-4" /> },
            ]}
          />
        </div>

        <div className="mt-6">
          {mode === 'screenshot' ? (
            file ? (
              <div className="flex items-center justify-between rounded-3xl border border-primary/40 bg-card p-6">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <FileText className="size-6" />
                  </span>
                  <div>
                    <p className="font-medium">{file}</p>
                    <p className="text-sm text-muted-foreground">Ready to analyze</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon-sm" onClick={() => setFile(null)} aria-label="Remove file">
                  <X className="size-4" />
                </Button>
              </div>
            ) : (
              <label
                onDragOver={(e) => {
                  e.preventDefault()
                  setDragging(true)
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault()
                  setDragging(false)
                  setFile(e.dataTransfer.files?.[0]?.name ?? 'conversation.png')
                }}
                className={cn(
                  'flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed px-6 py-16 text-center transition-all',
                  dragging
                    ? 'border-primary bg-primary/8'
                    : 'border-white/12 bg-card/60 hover:border-white/25 hover:bg-card',
                )}
              >
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) => setFile(e.target.files?.[0]?.name ?? 'conversation.png')}
                />
                <span className="relative grid size-20 place-items-center">
                  <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-ring" />
                  <span className="grid size-16 place-items-center rounded-full bg-gradient-to-br from-primary to-[#FF9A7A] text-primary-foreground">
                    <UploadCloud className="size-7" />
                  </span>
                </span>
                <p className="mt-6 text-lg font-medium">Drag &amp; drop your screenshots</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  or <span className="text-primary">browse files</span> — PNG, JPG up to 20MB
                </p>
              </label>
            )
          ) : (
            <div className="rounded-3xl border border-border bg-card p-2">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={'Paste your conversation here...\n\nHer: Long week honestly\nMe: Then Thursday you unwind'}
                className="h-64 w-full resize-none rounded-2xl bg-transparent p-5 text-sm leading-relaxed text-foreground outline-none placeholder:text-muted-foreground/60"
              />
              <div className="flex items-center justify-between px-4 pb-3 pt-1 text-xs text-muted-foreground">
                <span>{text.trim().length} characters</span>
                <span>Tip: include at least a few messages for the best analysis</span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Button
            size="xl"
            className="w-full sm:w-auto"
            disabled={!ready}
            onClick={() => router.push('/analyzing')}
          >
            Analyze my conversation
            <ArrowRight className="size-4" />
          </Button>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="size-3.5" />
            End-to-end encrypted. Deleted after analysis.
          </p>
        </div>
      </div>
    </main>
  )
}
