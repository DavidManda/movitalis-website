import Container from '../layout/container';
import SectionHeading from '../ui/section-heading';
import { SOCIAL_PROOF } from '@/lib/content';
import { Star } from 'lucide-react';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={n <= rating ? 'h-5 w-5 fill-accent text-accent' : 'h-5 w-5 text-ink/20'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// All written App Store reviews in a masonry of cards — every card has the
// same anatomy (stars, title, text, author), nothing scrolls or rotates.
export default function SocialProof() {
  return (
    <section className="bg-ivory py-20 md:py-28" aria-labelledby="reviews-heading">
      <Container size="md">
        <SectionHeading id="reviews-heading" title={SOCIAL_PROOF.headline} />
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-ink/70">
          <Stars rating={5} />
          <span className="text-lg">{SOCIAL_PROOF.rating}</span>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {SOCIAL_PROOF.reviews.map((review) => (
            <figure key={review.id} className="mb-5 break-inside-avoid rounded-3xl bg-ivory-deep p-7">
              <Stars rating={review.rating} />
              <p className="mt-4 text-xl font-bold tracking-tight text-ink font-[family-name:var(--font-instrument)]">
                {review.title}
              </p>
              <blockquote className="mt-2 text-lg leading-relaxed text-ink/80">{review.quote}</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="block truncate font-semibold text-ink">{review.author}</span>
                <span className="text-ink/60">{review.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
