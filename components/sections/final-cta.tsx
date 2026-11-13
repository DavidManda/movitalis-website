import Container from '../layout/container';
import AppStoreButton from '../ui/app-store-button';
import { FINAL_CTA } from '@/lib/content';

// The page's one loud moment: a full band in the accent colour, with ink
// type (white on this orange falls short of contrast guidelines).
export default function FinalCTA() {
  return (
    <section className="bg-accent py-20 md:py-28">
      <Container size="md">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-ink md:text-6xl">
            {FINAL_CTA.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-ink">{FINAL_CTA.subheadline}</p>
          <div className="mt-9 flex justify-center">
            <AppStoreButton />
          </div>
          <p className="mt-4 text-sm text-ink">{FINAL_CTA.availability}</p>
        </div>
      </Container>
    </section>
  );
}
