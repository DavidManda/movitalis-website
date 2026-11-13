import Link from 'next/link';
import Container from './container';
import { FOOTER } from '@/lib/content';
import { APP_CONFIG } from '@/lib/constants';
import { Instagram, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory py-12">
      <Container>
        <div className="flex flex-col items-center gap-6">
          {/* Brand */}
          <span className="text-2xl font-bold tracking-tight text-ivory font-[family-name:var(--font-instrument)]">
            Movitalis
          </span>

          {/* Tagline */}
          <p className="text-ivory/70 text-sm text-center">
            Train smarter for a longer, healthier life.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href={APP_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/70 hover:text-ivory transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={APP_CONFIG.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/70 hover:text-ivory transition-colors"
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
                className="text-ivory/70 hover:text-ivory transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {FOOTER.legal.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ivory/70 hover:text-ivory transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${APP_CONFIG.supportEmail}`}
              className="text-ivory/70 hover:text-ivory transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Operator details + consumer protection (required in Romania) */}
          <div className="text-center text-ivory/60 text-xs leading-relaxed">
            <p>
              {APP_CONFIG.company.name} · CUI {APP_CONFIG.company.cui} · Reg. Com.{' '}
              {APP_CONFIG.company.tradeRegister}
            </p>
            <p>{APP_CONFIG.company.address}</p>
            <p>
              <a
                href="https://anpc.ro/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-ivory transition-colors"
              >
                ANPC (consumer protection)
              </a>
              {' · '}
              <a
                href="https://anpc.ro/ce-este-sal/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-ivory transition-colors"
              >
                ANPC – alternative dispute resolution
              </a>
            </p>
            <p className="mt-2">{FOOTER.copyright}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
