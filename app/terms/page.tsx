import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Container from '@/components/layout/container';
import { APP_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'Terms of Service - Movitalis',
  description: 'Terms of Service for Movitalis - Read our terms and conditions.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pb-24 pt-10 bg-ivory">
        <Container size="md">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-ink/60 mb-8">
              Last updated: 13 November 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Acceptance of Terms</h2>
              <p className="text-ink/80 leading-relaxed">
                By accessing and using Movitalis, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

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
              <h2 className="text-2xl font-bold text-ink mb-4">Service Description</h2>
              <p className="text-ink/80 leading-relaxed">
                Movitalis is a fitness tracking application that focuses on VO₂ max and longevity-focused training. We provide personalized workout recommendations based on your health data from Apple Watch and Apple Health.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">User Accounts</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                When you create an account with us, you must provide accurate and complete information. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-ink/80 space-y-2">
                <li>Maintaining the security of your account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Free program, subscriptions and purchases</h2>
              <ul className="list-disc pl-6 text-ink/80 space-y-2">
                <li>Movitalis is free to download. New accounts receive the 8-week starter program free of charge; no payment method is required for it.</li>
                <li>After the starter program, tracking and analysis of your workouts remain free. The personalized training plan and other Pro features require Movitalis Pro, offered as an auto-renewing subscription or a one-time purchase, as shown in the app.</li>
                <li>Prices are displayed in the app before you buy. Purchases are made through Apple's App Store and charged to your Apple Account.</li>
                <li>Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period. You can manage or cancel a subscription at any time in your Apple Account settings.</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Refunds</h2>
              <p className="text-ink/80 leading-relaxed">
                Because payments are processed by Apple, refund requests are handled by Apple: use{' '}
                <a href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-accent decoration-2 underline-offset-2">
                  reportaproblem.apple.com
                </a>. If you have a problem with a purchase, you can also write to us and we will help.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">App licence</h2>
              <p className="text-ink/80 leading-relaxed">
                Your use of the Movitalis app is also covered by Apple's{' '}
                <a href={APP_CONFIG.appleEulaUrl} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-accent decoration-2 underline-offset-2">
                  Licensed Application End User License Agreement
                </a>. If that agreement and these terms conflict on how the app is licensed, Apple's agreement applies.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Health and Medical Disclaimer</h2>
              <p className="text-ink/80 leading-relaxed">
                Movitalis is not a medical device and should not be used as a substitute for professional medical advice. The information provided by our app is for informational purposes only. Always consult with a qualified healthcare provider before starting any exercise program.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Acceptable Use</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-ink/80 space-y-2">
                <li>Use the service for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service</li>
                <li>Share your account credentials with others</li>
                <li>Reverse engineer or copy any part of the service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Intellectual Property</h2>
              <p className="text-ink/80 leading-relaxed">
                All content, features, and functionality of Movitalis are owned by us and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Limitation of Liability</h2>
              <p className="text-ink/80 leading-relaxed">
                To the maximum extent permitted by law, Movitalis shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Changes to Terms</h2>
              <p className="text-ink/80 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes. Your continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Termination</h2>
              <p className="text-ink/80 leading-relaxed">
                We may terminate or suspend your account at any time for violations of these terms. Upon termination, your right to use the service will immediately cease.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Governing law and your consumer rights</h2>
              <p className="text-ink/80 leading-relaxed">
                These terms are governed by Romanian law. If you are a consumer, nothing in them limits the rights you have under the mandatory consumer protection laws of the country where you live, and the limitation of liability above applies only to the extent the law allows. Consumers in Romania can also contact the National Authority for Consumer Protection (ANPC) at{' '}
                <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-accent decoration-2 underline-offset-2">
                  anpc.ro
                </a>.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-ink mb-4">Contact Information</h2>
              <p className="text-ink/80 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-ink underline decoration-accent decoration-2 underline-offset-2">
                  {APP_CONFIG.supportEmail}
                </a>
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
