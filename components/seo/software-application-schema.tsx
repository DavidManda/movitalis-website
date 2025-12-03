export default function SoftwareApplicationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Movitalis',
    operatingSystem: 'iOS',
    applicationCategory: 'HealthApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    description: 'Train smarter for longevity. Improve your VO₂ max with personalized plans combining cardio and strength at the right intensity.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
