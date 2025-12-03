import { cn } from '@/lib/utils';

interface ProductHuntEmbedProps {
  className?: string;
}

export default function ProductHuntEmbed({ className }: ProductHuntEmbedProps) {
  return (
    <a
      href="https://www.producthunt.com/products/movitalis/launches/movitalis?embed=true&utm_source=badge-top-post-topic-badge&utm_medium=badge&utm_source=badge-movitalis"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-block transition-all duration-300 hover:scale-105 hover:opacity-90',
        className
      )}
      aria-label="Movitalis - #1 Product of the Week on Product Hunt"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=940015&theme=light&period=weekly&topic_id=43"
        alt="Movitalis - A longevity-focused activity tracker, planner & coach | Product Hunt"
        width="250"
        height="54"
        className="w-auto h-auto"
      />
    </a>
  );
}
