import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - VO2 Max Tracker',
  description: 'Get answers about VO2 max, training plans, Apple Watch compatibility, and how Movitalis helps improve your longevity and fitness age.',
  keywords: ['VO2 max FAQ', 'Apple Watch VO2 max accuracy', 'improve VO2 max questions', 'fitness age explained'],
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
