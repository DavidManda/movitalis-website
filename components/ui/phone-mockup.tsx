'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion';
import Image from 'next/image';

interface PhoneMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
  enableTilt?: boolean;
  clean?: boolean;
}

export default function PhoneMockup({
  imageSrc,
  alt,
  className = '',
  enableTilt = true,
  clean = false,
}: PhoneMockupProps) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring configs for smooth, natural motion
  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), springConfig);

  // Disable tilt on touch devices or if user prefers reduced motion
  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  const shouldEnableTilt = enableTilt && !isTouchDevice && !prefersReducedMotion;

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

  // Clean mode - render only the image without shadows or containers
  if (clean) {
    return (
      <motion.div
        className={`relative ${className}`}
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
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={390}
          height={844}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`relative ${className}`}
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
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      {/* Floating shadow effect */}
      <motion.div
        className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"
        style={
          shouldEnableTilt
            ? {
                translateZ: '-50px',
                scale: 0.9,
              }
            : {}
        }
        animate={
          shouldEnableTilt
            ? {
                scale: [0.9, 0.95, 0.9],
              }
            : {}
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Phone container */}
      <div
        className="relative rounded-[3rem] overflow-hidden shadow-2xl"
        style={
          shouldEnableTilt
            ? {
                transformStyle: 'preserve-3d',
                transform: 'translateZ(20px)',
              }
            : {}
        }
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={390}
          height={844}
          className="w-full h-auto"
          priority
        />
      </div>
    </motion.div>
  );
}
