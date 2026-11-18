import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Container from '@/components/layout/container';
import { APP_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'Connect Movitalis to Claude - Movitalis',
  description: 'Let Claude read your Movitalis workouts and propose a training plan. Setup, what it can access, and how to disconnect.',
};

const CONNECTOR_URL = 'https://mcp.movitalis.app/mcp';

const linkClass = 'text-ink underline decoration-accent decoration-2 underline-offset-2';

// The public documentation for the Movitalis connector (Claude's directory
// asks for one). Keep the tool list in step with functions/src/mcp/tools.ts
// in the app repository.
export default function ClaudePage() {
  return (
    <>
      <Header />
      <main className="pb-24 pt-10 bg-ivory">
        <Container size="md">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-8">
            Connect Movitalis to Claude
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-ink/60 mb-8">Last updated: 18 November 2026</p>

            <section className="mb-8">
              <p className="text-ink/80 leading-relaxed">
                Movitalis has a connector for Claude, the AI assistant made by Anthropic. Once connected, you can ask Claude about your training in plain language, and Claude can propose a training plan that you review and accept in the app.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">What you need</h2>
              <ul className="list-disc pl-6 text-ink/80 space-y-2">
                <li>A Movitalis account, signed in on your iPhone.</li>
                <li>Progress sync turned on in Movitalis. Claude reads the data synced to your account, so nothing is available to it until you turn sync on. The Claude screen in the app offers to do this.</li>
                <li>A Claude account.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">How to connect</h2>
              <ol className="list-decimal pl-6 text-ink/80 space-y-2">
                <li>In Claude, open Settings, then Connectors, and choose <strong>Add custom connector</strong>.</li>
                <li>Enter the name <strong>Movitalis</strong> and this address: <code className="break-all">{CONNECTOR_URL}</code></li>
                <li>Claude opens a Movitalis page that shows a connection code.</li>
                <li>In Movitalis, open Profile, then Integrations, then <strong>Claude</strong>. (In versions before 5.3: Profile, then Account details, then Claude.) Enter the code and approve.</li>
                <li>Go back to Claude. The page closes by itself and the connector is ready.</li>
              </ol>
              <p className="text-ink/80 leading-relaxed mt-4">
                Nothing is shared until you approve the code in the app. The code expires after 15 minutes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">What Claude can read</h2>
              <ul className="list-disc pl-6 text-ink/80 space-y-2">
                <li><strong>Profile</strong>: name, age, estimated maximum heart rate, your training zones and weekly target.</li>
                <li><strong>Workouts</strong> from the last six months: time, distance, heart rate, calories, splits, pauses, the route when one was recorded, and the category Movitalis detected.</li>
                <li><strong>VO₂ max history</strong> and its trend.</li>
                <li><strong>Weekly activity</strong>: minutes in zone 2, VO₂ max and strength against your plan.</li>
                <li><strong>Training plan</strong>: the planned sessions of your week and your active program.</li>
                <li><strong>Streaks and achievements</strong>.</li>
              </ul>
              <p className="text-ink/80 leading-relaxed mt-4">
                Claude cannot change or delete any of this. Data read from Strava is never passed to Claude.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Proposing a training plan</h2>
              <p className="text-ink/80 leading-relaxed">
                If you allow it when you connect, Claude can also propose a weekly training plan. A proposal is a draft: it appears on the home screen of Movitalis as &ldquo;Proposed plan&rdquo;, where you see it checked against the app&rsquo;s own guidance, change anything you like, and then use it or discard it. Your current plan keeps running until you choose to use the proposal. This needs Movitalis 5.3 or later.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Things to ask</h2>
              <ul className="list-disc pl-6 text-ink/80 space-y-2">
                <li>&ldquo;How did my training go this month compared with my plan?&rdquo;</li>
                <li>&ldquo;Look at my last long run. Where did my heart rate drift?&rdquo;</li>
                <li>&ldquo;How has my VO₂ max changed since the summer?&rdquo;</li>
                <li>&ldquo;Propose an eight-week plan with five hours a week, swimming, cycling and running.&rdquo;</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">How to disconnect</h2>
              <p className="text-ink/80 leading-relaxed">
                In Movitalis, open Profile, then Integrations, then Claude, and tap <strong>Revoke</strong> next to the connection. Access stops immediately. You can also remove the connector in Claude&rsquo;s settings. Deleting your Movitalis account removes every connection and any unanswered proposal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Privacy</h2>
              <p className="text-ink/80 leading-relaxed">
                Claude is an artificial intelligence system. It reads your data only when you ask it something, and only after you approved the connection. How Anthropic handles what Claude reads is governed by Anthropic&rsquo;s privacy policy and your Claude account settings. The full details for Movitalis are in the{' '}
                <a href={APP_CONFIG.privacyPolicyUrl} className={linkClass}>Movitalis privacy policy</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Help</h2>
              <p className="text-ink/80 leading-relaxed">
                If connecting does not work, write to{' '}
                <a href={`mailto:${APP_CONFIG.supportEmail}`} className={linkClass}>{APP_CONFIG.supportEmail}</a>.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
