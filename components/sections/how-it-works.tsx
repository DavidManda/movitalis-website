'use client';

import Container from '../layout/container';
import ScrollReveal from '../animations/scroll-reveal';
import FadeIn from '../animations/fade-in';
import { HOW_IT_WORKS } from '@/lib/content';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FF6B35 100%)' }}>
      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {HOW_IT_WORKS.headline}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {HOW_IT_WORKS.subheadline}
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-12">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <ScrollReveal
              key={step.number}
              delay={index * 0.2}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="group flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Number circle */}
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl group-hover:shadow-2xl group-hover:bg-white transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {step.description}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {step.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
