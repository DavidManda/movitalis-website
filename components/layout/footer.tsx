import Link from 'next/link';
import Container from './container';
import { FOOTER } from '@/lib/content';
import { APP_CONFIG } from '@/lib/constants';
import { Instagram, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Container>
        <div className="flex flex-col items-center gap-6">
          {/* Brand */}
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Movitalis
          </span>

          {/* Tagline */}
          <p className="text-gray-400 text-sm text-center">
            Train smarter for a longer, healthier life.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href={APP_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={APP_CONFIG.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <Music className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            {FOOTER.product.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {FOOTER.legal.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${APP_CONFIG.supportEmail}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-xs">
            {FOOTER.copyright}
          </div>
        </div>
      </Container>
    </footer>
  );
}
