'use client';

import Container from '../layout/container';
import ScrollReveal from '../animations/scroll-reveal';
import FadeIn from '../animations/fade-in';
import { VO2_EDUCATION } from '@/lib/content';
import { Microscope, AlertTriangle, TrendingUp } from 'lucide-react';

const iconMap = {
  Microscope,
  AlertTriangle,
  TrendingUp,
};

export default function VO2Education() {
  return (
    <section id="vo2-education" className="py-24 md:py-32 bg-white -mt-1">
      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {VO2_EDUCATION.headline}
          </h2>
          <p className="text-xl text-gray-600 font-semibold">
            {VO2_EDUCATION.tagline}
          </p>
        </FadeIn>

        {/* Education blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {VO2_EDUCATION.blocks.map((block, index) => {
            const Icon = iconMap[block.icon as keyof typeof iconMap];

            return (
              <ScrollReveal key={block.id} delay={index * 0.2}>
                <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                    {Icon && <Icon className="w-8 h-8 text-primary" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {block.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
