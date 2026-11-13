import Container from '../layout/container';
import { HOW_IT_WORKS } from '@/lib/content';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ivory py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">{HOW_IT_WORKS.headline}</h2>
          <p className="mt-4 text-xl text-ink/70">{HOW_IT_WORKS.subheadline}</p>
        </div>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {HOW_IT_WORKS.steps.map((step) => (
            <li key={step.number} className="border-t-2 border-ink pt-6">
              <span className="text-5xl font-bold tracking-tight text-accent font-[family-name:var(--font-instrument)]">
                {step.number}
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 font-medium text-ink">{step.description}</p>
              <p className="mt-2 leading-relaxed text-ink/70">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
