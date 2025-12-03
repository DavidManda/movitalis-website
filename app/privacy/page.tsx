import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Container from '@/components/layout/container';
import { APP_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'Privacy Policy - Movitalis',
  description: 'Privacy Policy for Movitalis - Learn how we protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-32 bg-white">
        <Container size="md">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Movitalis ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Health and fitness data (VO₂ max, workout data, activity metrics) from Apple Health</li>
                <li>Account information (email address, name)</li>
                <li>Usage data and analytics</li>
                <li>Device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your data to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide and improve our services</li>
                <li>Generate personalized training recommendations</li>
                <li>Track your progress and VO₂ max improvements</li>
                <li>Send you notifications about your workouts</li>
                <li>Analyze and improve app performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage</h2>
              <p className="text-gray-700 leading-relaxed">
                Your health data is stored securely using Firebase services with encryption both in transit and at rest. We implement industry-standard security measures to protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell your personal data. We may share data with service providers who help us operate our app (such as cloud hosting providers), but only to the extent necessary to provide our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access your personal data</li>
                <li>Request deletion of your data</li>
                <li>Export your data</li>
                <li>Opt-out of certain data collection</li>
                <li>Update or correct your information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-primary hover:underline">
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
