import Container from '../layout/container';
import FadeIn from '../animations/fade-in';
import ComparisonTable from '../ui/comparison-table';
import { COMPARISON } from '@/lib/content';

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 md:py-32" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FF6B35 100%)' }}>

      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {COMPARISON.headline}
          </h2>
          <p className="text-xl text-white/90">
            {COMPARISON.subheadline}
          </p>
        </FadeIn>

        {/* Comparison table */}
        <ComparisonTable rows={COMPARISON.rows} />
      </Container>
    </section>
  );
}
