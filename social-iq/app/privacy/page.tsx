import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/marketing/closing'

export default function PrivacyPage() {
  return (
    <main className="relative min-h-dvh">
      <SiteNav />
      <section className="relative mx-auto max-w-3xl px-6 pt-36 pb-24">
        <h1 className="text-balance text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <div>
            <h2 className="text-lg font-semibold text-foreground">What we collect</h2>
            <p className="mt-2 leading-relaxed">
              When you use Social.IQ, we process the conversation text or screenshot you submit
              solely to generate your analysis. We do not require an account to try the free tier.
              If you subscribe, we collect your email and payment details through our payment
              processor.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">How we use it</h2>
            <p className="mt-2 leading-relaxed">
              Conversations you submit are sent to our AI provider for analysis and are not sold
              or shared with third parties for advertising purposes. We do not use your
              conversations to train AI models.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Data retention</h2>
            <p className="mt-2 leading-relaxed">
              If you have an account, your analysis history is stored so you can access it later.
              You can request deletion of your data at any time by contacting us.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Your rights</h2>
            <p className="mt-2 leading-relaxed">
              You can request access to, correction of, or deletion of your personal data at any
              time.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2 leading-relaxed">
              Questions about this policy? Reach out at contact@socialiq.app.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
