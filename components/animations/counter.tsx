'use client';

import { useEffect, useRef } from 'react';
import { useInView } from '@/lib/hooks/use-in-view';
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion';
import { animate } from 'framer-motion';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className
}: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!nodeRef.current || !isInView || hasAnimated.current) return;

    if (prefersReducedMotion) {
      nodeRef.current.textContent = `${prefix}${to}${suffix}`;
      hasAnimated.current = true;
      return;
    }

    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = `${prefix}${Math.round(value)}${suffix}`;
        }
      },
    });

    hasAnimated.current = true;
    return () => controls.stop();
  }, [isInView, from, to, duration, suffix, prefix, prefersReducedMotion]);

  return (
    <span ref={ref as any}>
      <span ref={nodeRef} className={className}>
        {prefix}{from}{suffix}
      </span>
    </span>
  );
}
