import type { Metadata } from 'next';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import VO2Education from '@/components/sections/vo2-education';
import Features from '@/components/sections/features';
import HowItWorks from '@/components/sections/how-it-works';
import Comparison from '@/components/sections/comparison';
import SocialProof from '@/components/sections/social-proof';
import FinalCTA from '@/components/sections/final-cta';
import SoftwareApplicationSchema from '@/components/seo/software-application-schema';

export const metadata: Metadata = {
  title: 'VO2 Max Tracker for Longevity | Improve Your Fitness Age',
  description: 'Track and improve your VO2 max with Movitalis. Science-backed training plans for Apple Watch designed to add healthy years to your life. Start free today.',
  keywords: ['VO2 max tracker', 'improve VO2 max', 'longevity fitness app', 'Apple Watch VO2 max', 'fitness age calculator', 'cardio fitness tracking'],
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <SoftwareApplicationSchema />
      <main>
        <Hero />
        <VO2Education />
        <Comparison />
        <Features />
        <HowItWorks />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
