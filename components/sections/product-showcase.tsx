'use client';

import PhoneMockup from '@/components/ui/phone-mockup';
import Parallax from '@/components/animations/parallax';
import TextReveal from '@/components/animations/text-reveal';
import { motion } from 'framer-motion';
import { Activity, Target, TrendingUp, Watch } from 'lucide-react';

const iconMap = {
  Activity,
  Target,
  TrendingUp,
  Watch,
};

const features = [
  {
    title: 'Real-time VO₂ Max Tracking',
    description:
      'Monitor your cardiovascular fitness in real-time during every workout with advanced heart rate analysis.',
    icon: 'Activity',
  },
  {
    title: 'Personalized Training Zones',
    description:
      'AI-powered recommendations adapt to your fitness level, ensuring optimal training intensity for maximum results.',
    icon: 'Target',
  },
  {
    title: 'Longevity Insights',
    description:
      'See how your fitness improvements translate to life expectancy gains with science-backed predictions.',
    icon: 'TrendingUp',
  },
  {
    title: 'Apple Watch Integration',
    description:
      'Seamless sync with Apple Health and real-time workout tracking on your wrist.',
    icon: 'Watch',
  },
];

export default function ProductShowcase() {
  return (
    <section
      id="product-showcase"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF4EF 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Product Features
            </span>
          </motion.div>
          <TextReveal
            text="Everything you need to train smarter"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          />
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Simple, science-backed tools for improving your longevity
          </motion.p>
        </div>

        {/* Main showcase grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Phone mockups with parallax */}
          <div className="relative h-[600px] lg:h-[700px]">
            <Parallax speed="slow" className="absolute left-0 top-0 w-1/2">
              <PhoneMockup
                imageSrc="/product/iphone-1.png"
                alt="Movitalis VO2 Max Dashboard"
                className="w-full"
              />
            </Parallax>
            <Parallax speed="fast" className="absolute right-0 top-20 w-1/2">
              <PhoneMockup
                imageSrc="/product/iphone-2.png"
                alt="Movitalis Workout View"
                className="w-full"
              />
            </Parallax>
            <Parallax
              speed="medium"
              className="absolute left-1/4 bottom-0 w-1/2"
            >
              <PhoneMockup
                imageSrc="/product/iphone-3.png"
                alt="Movitalis Training Zones"
                className="w-full"
              />
            </Parallax>
          </div>

          {/* Features list */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={feature.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  );
}
