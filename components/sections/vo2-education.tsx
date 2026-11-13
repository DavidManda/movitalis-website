import Container from '../layout/container';
import SectionHeading from '../ui/section-heading';
import { VO2_EDUCATION } from '@/lib/content';

// Three plain statements: a bold lead-in and the sentence that backs it.
export default function VO2Education() {
  return (
    <section id="vo2" className="bg-ivory py-20 md:py-28">
      <Container size="md">
        <SectionHeading title={VO2_EDUCATION.headline} />

        <div className="mx-auto mt-14 max-w-3xl space-y-10 text-center">
          {VO2_EDUCATION.blocks.map((block) => (
            <p key={block.id} className="text-2xl leading-snug tracking-tight md:text-3xl font-[family-name:var(--font-instrument)]">
              <span className="font-bold text-ink">{block.title}.</span>{' '}
              <span className="font-medium text-ink/60">{block.description}</span>
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
