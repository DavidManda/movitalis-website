import Link from 'next/link';
import Container from './container';
import { APP_CONFIG } from '@/lib/constants';

export default function Header() {
  return (
    <header className="relative z-50">
      <Container>
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-9 w-9 rounded-[10px] object-cover" />
            <span className="text-2xl font-bold tracking-tight text-ink font-[family-name:var(--font-instrument)]">
              Movitalis
            </span>
          </Link>

          <nav className="flex items-center gap-3 sm:gap-6" aria-label="Main">
            <Link href="/faq" className="text-sm font-medium text-ink/70 hover:text-ink transition-colors">
              FAQ
            </Link>
            <a
              href={APP_CONFIG.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Download
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
