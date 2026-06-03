import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Tea Corner — a family-owned restaurant in Choolaimedu, Chennai. Since 2024, we\'ve been serving fresh burgers, authentic snacks & hand-crafted beverages at Vadapalani, # 96/10, Periyar Padai Choolaimedu.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Tea Corner Chennai',
    description:
      'From our family to yours — discover the story of Tea Corner, a cozy neighborhood café in Choolaimedu, Chennai. Quality ingredients, community spirit, and pure freshness.',
    url: '/about',
    type: 'website',
  },
};

function AboutJsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Tea Corner Chennai',
    description:
      'Tea Corner is a family-owned café in Choolaimedu, Chennai. We serve fresh food and hand-crafted beverages with love since 2024.',
    mainEntity: {
      '@type': 'Restaurant',
      name: 'Tea Corner',
      foundingDate: '2024',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Vadapalani, # 96/10, Periyar Padai Choolaimedu',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        postalCode: '600094',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AboutJsonLd />
      {children}
    </>
  );
}
