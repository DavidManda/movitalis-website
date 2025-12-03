import { cn } from '@/lib/utils';

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'glow';
}

export default function Badge({ className, children, variant = 'default' }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm',
        'text-sm font-medium text-white border border-white/20',
        {
          'animate-pulse-subtle shadow-glow': variant === 'glow',
        },
        className
      )}
    >
      {children}
    </div>
  );
}
