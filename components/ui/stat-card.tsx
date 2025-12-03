'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion';
import Counter from '@/components/animations/counter';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  className?: string;
}

export default function StatCard({
  icon: Icon,
  value,
  suffix = '',
  prefix = '',
  label,
  description,
  className = '',
}: StatCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), springConfig);

  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  const shouldEnableTilt = !isTouchDevice && !prefersReducedMotion;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!shouldEnableTilt) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    if (!shouldEnableTilt) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`relative p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow ${className}`}
      style={
        shouldEnableTilt
          ? {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
          : {}
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      {/* Gradient background on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        {/* Value with counter animation */}
        <div className="mb-2">
          <Counter
            to={value}
            suffix={suffix}
            prefix={prefix}
            duration={2}
            className="text-4xl font-bold text-gray-900"
          />
        </div>

        {/* Label */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{label}</h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
