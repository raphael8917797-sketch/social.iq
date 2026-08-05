'use client'

import { useState } from 'react'
import { Lock, Sparkles } from 'lucide-react'
import { DashboardShell } from '@/components/dashboard-shell'
import { Overview } from '@/components/report/overview'
import { Categories } from '@/components/report/categories'
import { Insights } from '@/components/report/insights'
import { Mistakes } from '@/components/report/mistakes'
import { Strengths } from '@/components/report/strengths'
import { ReplySuggestions } from '@/components/report/reply-suggestions'
import { Paywall } from '@/components/paywall'
import { Button } from '@/components/ui/button'

export default function ResultsPage() {
  const [unlocked, setUnlocked] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)

  return (
    <DashboardShell title="Report">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <p className="text-sm font-medium text-primary">Conversation with Maya · Today</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">Your analysis is ready</h2>
        </div>

        <div className="space-y-10">
          <Overview />
          <Categories />

          {/* Premium content */}
          <div className="relative">
            <div
              className={
                unlocked ? 'space-y-10' : 'pointer-events-none space-y-10 blur-md select-none'
              }
              aria-hidden={!unlocked}
            >
              <Insights />
              <Mistakes />
              <Strengths />
              <ReplySuggestions />
            </div>

            {!unlocked && (
              <div className="absolute inset-0 flex items-start justify-center pt-24">
                <div className="mx-4 max-w-md rounded-3xl border border-border bg-card/90 p-8 text-center backdrop-blur-xl shadow-2xl">
                  <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-primary/12 text-primary">
                    <Lock className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-balance">
                    Unlock your full breakdown
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    Predictive insights, ranked mistakes, your strengths, and AI-crafted replies in
                    5 tones — all waiting behind the blur.
                  </p>
                  <Button className="mt-5 w-full" onClick={() => setShowPaywall(true)}>
                    <Sparkles className="size-4" />
                    Unlock Premium
                  </Button>
                  <p className="mt-3 text-xs text-muted-foreground">7-day free trial · Cancel anytime</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Paywall
        open={showPaywall}
        onClose={() => setShowPaywall(false)}
        onUnlock={() => {
          setUnlocked(true)
          setShowPaywall(false)
        }}
      />
    </DashboardShell>
  )
}
