import Container from '../layout/container';
import { FEATURES } from '@/lib/content';
import { Heart, Zap, Target, Watch } from 'lucide-react';

const icons = { Heart, Zap, Target, Watch } as const;

export default function Features() {
  return (
    <section id="features" className="bg-ivory py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">{FEATURES.headline}</h2>
          <p className="mt-4 text-xl text-ink/70">{FEATURES.subheadline}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {FEATURES.items.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <div key={item.id} className="rounded-3xl bg-ivory-deep p-8">
                <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
