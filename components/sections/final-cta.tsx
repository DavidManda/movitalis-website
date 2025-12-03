'use client';

import { motion } from 'framer-motion';
import Container from '../layout/container';
import AppStoreButton from '../ui/app-store-button';
import { FINAL_CTA } from '@/lib/content';
import Parallax from '../animations/parallax';

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FF6B35 100%)' }}>
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {FINAL_CTA.headline}
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-xl text-white/90 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {FINAL_CTA.subheadline}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 flex justify-center"
          >
            <AppStoreButton className="mx-auto" />
          </motion.div>

          {/* Availability */}
          <motion.p
            className="text-white/70 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {FINAL_CTA.availability}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
