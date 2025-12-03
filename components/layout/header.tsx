'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from './container';

export default function Header() {
  return (
    <header className="relative z-50">
      <Container>
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.img
              src="/logo.png"
              alt="Movitalis"
              className="h-8 w-8 rounded-lg object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Movitalis
            </motion.span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              href="/faq"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
