'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '../layout/container';
import Button from '../ui/button';
import AppStoreButton from '../ui/app-store-button';
import ProductHuntEmbed from '../ui/product-hunt-embed';
import Badge from '../ui/badge';
import { HERO } from '@/lib/content';
import { APP_CONFIG } from '@/lib/constants';
import Parallax from '../animations/parallax';
import TextReveal from '../animations/text-reveal';
import PhoneMockup from '../ui/phone-mockup';
import { Heart } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FF6B35 100%)' }}>

      {/* Header integrated into hero */}
      <div className="relative z-50 w-full">
        <Container>
          <div className="flex items-center justify-between py-6">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.img
                src="/logo.png"
                alt="Movitalis"
                className="h-8 w-8 rounded-lg object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="text-2xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Movitalis
              </motion.span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-6">
              <Link
                href="/faq"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </div>
        </Container>
      </div>

      {/* Hero content */}
      <Container className="relative z-10 flex-1 flex items-center py-16">
        {/* Grid Layout - 2 columns on desktop, stack on mobile */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-0 items-center">

          {/* Column 1: Text Content */}
          <div className="order-1 lg:order-1">
            {/* VO2 Badge */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="default" className="bg-white/20 border-white/30 backdrop-blur-md">
                <Heart className="w-4 h-4" />
                <span>Improve your VO₂ max, the #1 longevity marker</span>
              </Badge>
            </motion.div>

            {/* Animated headline with character-by-character reveal */}
            <TextReveal
              text={HERO.headline}
              as="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              delay={0.2}
            />

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <AppStoreButton />
            </motion.div>

            {/* Device requirements */}
            <motion.p
              className="text-sm text-white/70 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Free • iPhone & Apple Watch recommended
            </motion.p>

            {/* Product Hunt Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductHuntEmbed />
            </motion.div>
          </div>

          {/* Column 2: iPhone Image */}
          <div className="order-2 lg:order-2 relative flex items-center justify-center lg:justify-end">
            {/* Single iPhone - larger and can overlap */}
            <motion.div
              className="w-[90%] md:w-full lg:w-[200%] lg:translate-x-12 lg:-translate-y-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Parallax speed="slow">
                <PhoneMockup
                  imageSrc="/product/iphone-1-nobg.png"
                  alt="Movitalis VO₂ Max Dashboard"
                  enableTilt={true}
                  clean={true}
                />
              </Parallax>
            </motion.div>
          </div>

        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
