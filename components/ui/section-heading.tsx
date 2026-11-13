interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  tone?: 'ink' | 'ivory';
}

// One heading treatment for the whole page (centred, narrow measure), so
// sections can't drift apart typographically.
export default function SectionHeading({ id, title, subtitle, tone = 'ink' }: SectionHeadingProps) {
  const main = tone === 'ink' ? 'text-ink' : 'text-ivory';
  const sub = tone === 'ink' ? 'text-ink/70' : 'text-ivory/70';
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 id={id} className={`text-4xl font-bold tracking-tight md:text-5xl ${main}`}>
        {title}
      </h2>
      {subtitle ? <p className={`mt-4 text-xl ${sub}`}>{subtitle}</p> : null}
    </div>
  );
}
