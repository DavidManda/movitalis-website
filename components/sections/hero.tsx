import Container from '../layout/container';
import Header from '../layout/header';
import AppStoreButton from '../ui/app-store-button';
import ProductHuntEmbed from '../ui/product-hunt-embed';
import { HERO } from '@/lib/content';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <Header />

      {/* The rising line from the App Store screenshots — the page's one
          decorative use of the accent */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] w-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 360 C 240 350, 380 330, 560 270 S 900 150, 1200 60"
          fill="none"
          stroke="#F76E48"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <Container>
        <div className="relative grid items-center gap-10 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-14">
          <div>
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl">
              {HERO.subheadline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <AppStoreButton />
              <ProductHuntEmbed />
            </div>
            <p className="mt-4 text-sm text-ink/60">
              Free to download · iPhone and Apple Watch
            </p>
          </div>

          {/* One phone, the Home screen, tilted */}
          <div className="flex justify-center lg:justify-end" style={{ perspective: '1600px' }}>
            <img
              src="/product/phone-home.png"
              alt="Movitalis Home screen: today’s workout done, the program’s week 5 of 6 and the VO₂ max trend"
              width={742}
              height={1582}
              className="w-[62%] max-w-[330px] lg:w-[78%] lg:max-w-[380px]"
              style={{
                transform: 'rotateY(-18deg) rotateX(8deg) rotateZ(4deg)',
                filter: 'drop-shadow(28px 36px 40px rgba(18, 30, 30, 0.28))',
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
