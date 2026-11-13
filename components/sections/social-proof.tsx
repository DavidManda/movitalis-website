import Container from '../layout/container';
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

// Every review, listed, in one horizontally scrollable band (native
// scrolling, nothing auto-rotates). Stars appear only where the source
// shows a star rating.
export default function SocialProof() {
  return (
    <section className="bg-ivory py-20 md:py-28" aria-labelledby="reviews-heading">
      <Container>
        <div className="max-w-3xl">
          <h2 id="reviews-heading" className="text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {SOCIAL_PROOF.headline}
          </h2>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-ink/70">
            <Stars rating={5} />
            <span className="text-lg">{SOCIAL_PROOF.rating}</span>
            <span aria-hidden="true">·</span>
            <span className="text-lg">{SOCIAL_PROOF.productHunt.badge} on Product Hunt</span>
          </div>
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
        aria-label="User reviews"
        tabIndex={0}
      >
        {SOCIAL_PROOF.reviews.map((review) => (
          <figure
            key={review.id}
            className="flex w-[82vw] max-w-[360px] shrink-0 snap-start flex-col rounded-3xl bg-ivory-deep p-7"
          >
            {review.rating ? <Stars rating={review.rating} /> : null}
            {review.title ? (
              <p className="mt-4 text-xl font-bold tracking-tight text-ink font-[family-name:var(--font-instrument)]">
                {review.title}
              </p>
            ) : null}
            <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-ink/80">
              {review.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-ink/10 pt-4 text-sm">
              <span className="block truncate font-semibold text-ink">{review.author}</span>
              <span className="text-ink/60">{review.source}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
