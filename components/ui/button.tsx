'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={cn(
        'relative inline-flex items-center justify-center rounded-lg font-semibold',
        'transition-all duration-300 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          // Primary variant with enhanced glow
          'bg-gradient-to-r from-primary to-secondary text-white': variant === 'primary',
          'hover:shadow-glow-lg hover:scale-105': variant === 'primary',

          // Secondary with subtle border
          'bg-white text-gray-900 border-2 border-gray-200': variant === 'secondary',
          'hover:border-primary hover:shadow-md hover:scale-105': variant === 'secondary',

          // Ghost minimal
          'bg-transparent text-gray-900 hover:bg-gray-100 hover:scale-105': variant === 'ghost',

          // Sizes
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',

          'w-full': fullWidth,
        },
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
