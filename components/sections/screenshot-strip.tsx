import Container from '../layout/container';

// The seven App Store screenshots (ivory set), as a horizontally scrollable
// band. Plain <img> + native scrolling: no carousel script, keyboard users
// scroll it with the arrow keys once the region is focused.
const FRAMES = [
  'The #1 Longevity Tracker that’s actually based on science',
  'Train for life, not for performance',
  'VO₂ max predicts how long you’ll live',
  'Raise your VO₂ max, add healthy years',
  'Cardio and strength, stronger together',
  'A plan that trains you for decades',
  'Zone 2, the base of it all',
];

export default function ScreenshotStrip() {
  return (
    <section className="bg-ivory pb-20 md:pb-28" aria-labelledby="inside-heading">
      <Container>
        <div className="max-w-3xl">
          <h2 id="inside-heading" className="text-4xl font-bold tracking-tight text-ink md:text-5xl">
            A look inside
          </h2>
          <p className="mt-4 text-xl text-ink/70">
            Your VO₂ max, your plan and your progress, in one calm app.
          </p>
        </div>
      </Container>

      <div
        className="mt-12 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        // Start in line with the page container, bleed off the right edge
        style={{
          paddingInline: 'max(1rem, calc((100vw - 80rem) / 2 + 2rem))',
          // without this, scroll snapping pulls the first card past the padding
          scrollPaddingInline: 'max(1rem, calc((100vw - 80rem) / 2 + 2rem))',
        }}
        role="region"
        aria-label="Movitalis app screenshots"
        tabIndex={0}
      >
        {FRAMES.map((caption, index) => (
          <img
            key={caption}
            src={`/screenshots/frame-${index + 1}.webp`}
            alt={`Movitalis screenshot: ${caption}`}
            width={660}
            height={1434}
            loading="lazy"
            className="h-auto w-[62vw] max-w-[270px] shrink-0 snap-start rounded-3xl border border-ink/10"
          />
        ))}
      </div>
    </section>
  );
}
