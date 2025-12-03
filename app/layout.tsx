import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/scroll-progress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://movitalis.app'),
  title: {
    default: "Movitalis - VO2 Max Tracker for Longevity",
    template: "%s | Movitalis",
  },
  description: "Train smarter for a longer, healthier life. Movitalis helps you improve your VO₂ max with personalized plans combining cardio and strength at the right intensity for you.",
  keywords: ['VO2 max', 'longevity', 'fitness tracker', 'Apple Watch', 'health', 'lifespan', 'cardio fitness', 'workout tracker', 'healthspan', 'training plans'],
  authors: [{ name: 'Movitalis' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  openGraph: {
    title: 'Movitalis - Train smarter for longevity',
    description: 'A fitness tracker designed for longevity, not performance. Improve your VO₂ max with personalized plans.',
    url: 'https://movitalis.app',
    siteName: 'Movitalis',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Movitalis - Train for a longer life, not just faster times',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Movitalis - Train smarter for longevity',
    description: 'A fitness tracker designed for longevity, not performance. Improve your VO₂ max with personalized plans.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Movitalis',
    url: 'https://movitalis.app',
    logo: 'https://movitalis.app/logo.png',
    sameAs: [
      'https://www.instagram.com/movitalis',
      'https://www.tiktok.com/@movitalis',
      'https://www.producthunt.com/products/movitalis',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@movitalis.app',
      contactType: 'Customer Support',
    },
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
