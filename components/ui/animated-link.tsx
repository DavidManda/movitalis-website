'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
}

export default function AnimatedLink({
  href,
  children,
  className = '',
  showArrow = false,
  external = false,
}: AnimatedLinkProps) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Link href={href} {...linkProps} className={`group relative inline-flex items-center gap-2 ${className}`}>
      <span className="relative">
        {children}
        {/* Animated underline */}
        <motion.span
          className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-primary to-secondary"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
        />
      </span>

      {showArrow && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      )}
    </Link>
  );
}
