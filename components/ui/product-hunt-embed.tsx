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
      aria-label="Movitalis on Product Hunt: #1 Product of the Week in Health & Fitness"
    >
      <img
        src="/product-hunt-badge.svg"
        alt="Product Hunt: #1 Product of the Week in Health & Fitness"
        width="250"
        height="54"
        className="w-auto h-auto"
      />
    </a>
  );
}
