'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Container from '../layout/container';
import ScrollReveal from '../animations/scroll-reveal';
import FadeIn from '../animations/fade-in';
import { FEATURES } from '@/lib/content';
import { Heart, Zap, Target, Watch } from 'lucide-react';

const iconMap = {
  Heart,
  Zap,
  Target,
  Watch,
};

// Feature card with 3D tilt effect
function FeatureCard({ feature, Icon, index }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Disable tilt on touch devices
  const isTouchDevice = typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <ScrollReveal delay={index * 0.15} direction="up">
      <motion.div
        ref={ref}
        style={!isTouchDevice ? {
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        } : undefined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-white rounded-2xl p-8 hover:shadow-glow
                   transition-all duration-300 border border-orange-light hover:border-primary/30"
      >
        {/* Icon */}
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
          {Icon && <Icon className="w-7 h-7 text-primary" />}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>

        {/* Hover accent with orange glow */}
        <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>
    </ScrollReveal>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">

      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {FEATURES.headline}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {FEATURES.subheadline}
          </p>
        </FadeIn>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.items.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <FeatureCard key={feature.id} feature={feature} Icon={Icon} index={index} />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
