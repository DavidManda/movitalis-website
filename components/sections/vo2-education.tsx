import Container from '../layout/container';
import { VO2_EDUCATION } from '@/lib/content';

export default function VO2Education() {
  return (
    <section id="vo2" className="bg-ivory py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {VO2_EDUCATION.headline}
          </h2>
          <p className="mt-4 text-xl text-ink/70">{VO2_EDUCATION.tagline}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {VO2_EDUCATION.blocks.map((block) => (
            <div key={block.id} className="rounded-3xl bg-ivory-deep p-8">
              <h3 className="text-2xl font-bold tracking-tight text-ink">{block.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{block.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
