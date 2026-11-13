import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Container from '@/components/layout/container';
import { APP_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'Privacy Policy - Movitalis',
  description: 'How Movitalis handles your data, on this website and in the app.',
};

// One policy, one source of truth: the full Movitalis privacy policy is the
// document the app links to (APP_CONFIG.privacyPolicyUrl). This page covers
// the website itself and points there for the app, so the two can never
// disagree again. Update the date by hand when the text changes — a date
// computed at render time claimed the policy was "updated today" forever.
export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pb-24 pt-10 bg-ivory">
        <Container size="md">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-ink/60 mb-8">Last updated: 13 November 2026</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Who we are</h2>
              <p className="text-ink/80 leading-relaxed">
                Movitalis is operated by {APP_CONFIG.company.name}, a Romanian company (CUI {APP_CONFIG.company.cui}, Trade Register {APP_CONFIG.company.tradeRegister}), with its registered office at {APP_CONFIG.company.address}. For anything in this document, write to{' '}
                <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-ink underline decoration-accent decoration-2 underline-offset-2">
                  {APP_CONFIG.supportEmail}
                </a>.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">The Movitalis app</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                The full privacy policy for the Movitalis app—what data the app handles, why, the services that process it for us, how long it is kept and how to delete it—is published here:{' '}
                <a href={APP_CONFIG.privacyPolicyUrl} className="text-ink underline decoration-accent decoration-2 underline-offset-2">
                  Movitalis Privacy Policy
                </a>. It is the same document the app links to.
              </p>
              <p className="text-ink/80 leading-relaxed">
                In short: your Apple Health data is read on your phone and stays there unless you choose to sync it; your account stores your email, name, plan and progress; we never sell personal data.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">This website</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                movitalis.app is an informational site. It has no sign-up forms, sets no cookies, and runs no analytics or advertising trackers, which is why you see no cookie banner.
              </p>
              <ul className="list-disc pl-6 text-ink/80 space-y-2">
                <li>The site is hosted on Firebase Hosting (Google). Like any web host, it processes technical request data such as your IP address to deliver the pages and keep the service secure.</li>
                <li>Links to the App Store, Product Hunt, Instagram and TikTok take you to those services, which have their own privacy policies.</li>
                <li>If you email us, we use your address and message only to answer you.</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Your rights</h2>
              <p className="text-ink/80 leading-relaxed">
                Under the GDPR you can ask us for access to your personal data, its correction, deletion, restriction or portability, object to its processing, and withdraw a consent you gave. Write to us at the address above. You can also lodge a complaint with the Romanian data protection authority, ANSPDCP ({' '}
                <a href="https://www.dataprotection.ro/" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-accent decoration-2 underline-offset-2">
                  dataprotection.ro
                </a>
                ), or with the authority in your own EU country.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
