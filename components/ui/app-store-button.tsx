import { APP_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface AppStoreButtonProps {
  className?: string;
}

export default function AppStoreButton({ className }: AppStoreButtonProps) {
  return (
    <a
      href={APP_CONFIG.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-block transition-transform duration-300 hover:scale-105',
        className
      )}
      aria-label="Download on the App Store"
    >
      <img
        src="/downloadOnTheAppStoreBlack.png"
        alt="Download on the App Store"
        className="h-[56px] w-auto"
      />
    </a>
  );
}
