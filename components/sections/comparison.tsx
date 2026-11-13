import Container from '../layout/container';
import { COMPARISON } from '@/lib/content';

// The one dark section of the page: ink ground, ivory type. The Movitalis
// column is the only place the accent appears.
export default function Comparison() {
  return (
    <section className="bg-ink py-20 text-ivory md:py-28">
      <Container size="md">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{COMPARISON.headline}</h2>
        <p className="mt-4 text-xl text-ivory/70">{COMPARISON.subheadline}</p>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="text-sm uppercase tracking-wider">
                <th scope="col" className="w-[28%] pb-4 font-medium text-ivory/50">
                  <span className="sr-only">Aspect</span>
                </th>
                <th scope="col" className="pb-4 font-medium text-ivory/50">Typical fitness apps</th>
                <th scope="col" className="pb-4 font-semibold text-accent">Movitalis</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row) => (
                <tr key={row.feature} className="border-t border-ivory/15">
                  <th scope="row" className="py-5 pr-4 align-top text-sm font-medium text-ivory/50">
                    {row.feature}
                  </th>
                  <td className="py-5 pr-4 align-top text-lg text-ivory/60">{row.typical}</td>
                  <td className="py-5 align-top text-lg font-semibold text-ivory">{row.movitalis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
