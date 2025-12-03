'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks/use-in-view';
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  direction = 'up'
}: ScrollRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  const directionOffset = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  if (prefersReducedMotion) {
    return <div ref={ref as any} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionOffset[direction] }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
