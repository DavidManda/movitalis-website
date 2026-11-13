import Container from '../layout/container';

// The seven App Store screenshots (ivory set), as a horizontally scrollable
// strip. Plain <img> + native scrolling: no carousel script, keyboard users
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
    <section className="py-24 md:py-32 bg-white" aria-labelledby="inside-heading">
      <Container>
        <div className="text-center mb-12">
          <h2 id="inside-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A look inside
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your VO₂ max, your plan and your progress, in one calm app.
          </p>
        </div>
      </Container>

      <div
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-6 2xl:justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
            className="snap-center shrink-0 w-[62vw] max-w-[280px] h-auto rounded-3xl shadow-lg"
          />
        ))}
      </div>
    </section>
  );
}
