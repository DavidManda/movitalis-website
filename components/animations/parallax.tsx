'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion';

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  speed?: 'slow' | 'medium' | 'fast';
}

export default function Parallax({
  children,
  offset = 50,
  className,
  speed = 'medium'
}: ParallaxProps) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Different speeds for layering
  const speedMultipliers = {
    slow: 0.5,
    medium: 1,
    fast: 1.5,
  };

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offset * speedMultipliers[speed], -offset * speedMultipliers[speed]]
  );

  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
