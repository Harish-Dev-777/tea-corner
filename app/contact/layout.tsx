import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Tea Corner Chennai — visit us at Vadapalani, # 96/10, Periyar Padai Choolaimedu. Call +91 70127 07168, or walk in during our opening hours.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Tea Corner Chennai',
    description:
      'Visit Tea Corner at Vadapalani, # 96/10, Periyar Padai Choolaimedu, Chennai. Open Mon-Sun 7AM-10PM. Call, or walk in.',
    url: '/contact',
    type: 'website',
  },
};

function ContactJsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Tea Corner Chennai',
    description:
      'Contact details and opening hours for Tea Corner, a popular café in Choolaimedu, Chennai.',
    mainEntity: {
      '@type': 'Restaurant',
      name: 'Tea Corner',
      telephone: '+917012707168',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Vadapalani, # 96/10, Periyar Padai Choolaimedu',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        postalCode: '600094',
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '22:00',
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContactJsonLd />
      {children}
    </>
  );
}
