'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks/use-in-view';
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, duration = 0.6, className }: FadeInProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div ref={ref as any} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
