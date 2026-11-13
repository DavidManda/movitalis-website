import Container from '../layout/container';
import AppStoreButton from '../ui/app-store-button';
import { FINAL_CTA } from '@/lib/content';

// The page's one loud moment: a full band in the accent colour with white
// type (David's call, 2026-11-13). White on this orange is below the 4.5:1
// contrast guideline for small text, so the two small lines are medium
// weight to compensate.
export default function FinalCTA() {
  return (
    <section className="bg-accent py-20 md:py-28">
      <Container size="md">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            {FINAL_CTA.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl font-medium text-white">{FINAL_CTA.subheadline}</p>
          <div className="mt-9 flex justify-center">
            <AppStoreButton />
          </div>
          <p className="mt-4 text-sm font-medium text-white">{FINAL_CTA.availability}</p>
        </div>
      </Container>
    </section>
  );
}
