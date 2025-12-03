'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks/use-in-view';
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export default function TextReveal({
  text,
  className,
  delay = 0,
  as: Component = 'span'
}: TextRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const prefersReducedMotion = useReducedMotion();

  // Split text into words and characters
  const words = text.split(' ');

  // Mobile detection for faster animation
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const charDelay = isMobile ? 0.01 : 0.02;

  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component ref={ref as any} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: delay + (wordIndex * 0.05) + (charIndex * charDelay),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Component>
  );
}
