import Container from '../layout/container';
import SectionHeading from '../ui/section-heading';
import { FEATURES } from '@/lib/content';

// Feature tiles: the claim on top, the screen that proves it underneath,
// cropped by the tile. This replaces both the old text-only cards and the
// scrolling screenshot strip.
const TILE_IMAGES: Record<string, { src: string; alt: string }> = {
  'vo2-tracking': { src: '/product/tile-vo2.png', alt: 'VO₂ max insights: 56.5, top 18% for the age group' },
  'smart-training': { src: '/product/tile-zone2.png', alt: 'Endurance · Zone 2: personal heart-rate zone and weekly volume' },
  'intensity-guidance': { src: '/product/tile-plan.png', alt: 'Workout plan for the week, with strength and Zone 2 sessions' },
  'effortless-tracking': { src: '/product/tile-workouts.png', alt: 'Workouts list with active minutes per week' },
};

export default function Features() {
  return (
    <section id="features" className="bg-ivory py-20 md:py-28">
      <Container size="md">
        <SectionHeading title={FEATURES.headline} subtitle={FEATURES.subheadline} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {FEATURES.items.map((item) => {
            const image = TILE_IMAGES[item.id];
            return (
              <div key={item.id} className="flex flex-col overflow-hidden rounded-[2rem] bg-ivory-deep">
                <div className="p-8 pb-0">
                  <h3 className="text-2xl font-bold tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{item.description}</p>
                </div>
                <div className="mt-8 flex h-[300px] justify-center overflow-hidden px-8 sm:h-[340px]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={576}
                    height={811}
                    loading="lazy"
                    className="h-auto w-full max-w-[280px] self-start"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
