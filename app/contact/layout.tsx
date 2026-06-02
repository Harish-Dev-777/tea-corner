import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Tea Corner Chennai — visit us at Choolaimedu, Periyar Padhai. Call +91 98765 43210, email hello@teacorner.in, or walk in during our opening hours.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Tea Corner Chennai',
    description:
      'Visit Tea Corner at Choolaimedu, Periyar Padhai, Chennai. Open Mon-Fri 7AM-9PM, Sat-Sun 8AM-10PM. Call, email, or walk in.',
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
      telephone: '+919876543210',
      email: 'hello@teacorner.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Periyar Padhai, Choolaimedu',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        postalCode: '600094',
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '21:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '08:00',
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
