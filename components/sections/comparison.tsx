import Container from '../layout/container';
import SectionHeading from '../ui/section-heading';
import { COMPARISON } from '@/lib/content';

// The one dark section of the page: ink ground, ivory type. Column
// headers use the same display face and case as the rest of the page.
export default function Comparison() {
  return (
    <section className="bg-ink py-20 text-ivory md:py-28">
      <Container size="md">
        <SectionHeading title={COMPARISON.headline} subtitle={COMPARISON.subheadline} tone="ivory" />

        <div className="mx-auto mt-14 max-w-3xl overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="font-[family-name:var(--font-instrument)] text-xl tracking-tight">
                <th scope="col" className="w-[26%] pb-5">
                  <span className="sr-only">Aspect</span>
                </th>
                <th scope="col" className="pb-5 pr-4 font-semibold text-ivory/60">Typical fitness apps</th>
                <th scope="col" className="pb-5 font-bold text-ivory">Movitalis</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row) => (
                <tr key={row.feature} className="border-t border-ivory/15">
                  <th scope="row" className="py-5 pr-4 align-top text-base font-medium text-ivory/50">
                    {row.feature}
                  </th>
                  <td className="py-5 pr-4 align-top text-lg text-ivory/60">{row.typical}</td>
                  <td className="py-5 align-top text-lg font-semibold text-ivory">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" aria-hidden="true" />
                    {row.movitalis}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
