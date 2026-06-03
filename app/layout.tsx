import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import MobileNav from '@/components/home/MobileNav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const SITE_URL = 'https://teacorner.in';
const SITE_NAME = 'Tea Corner';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcf9f8' },
    { media: '(prefers-color-scheme: dark)', color: '#1b1c1c' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Tea Corner Chennai | Fresh Burgers, Juices & Snacks in Choolaimedu',
    template: '%s | Tea Corner Chennai',
  },
  description:
    'Tea Corner in Choolaimedu, Chennai serves fresh burgers, crispy fries, tasty sandwiches, hand-crafted juices & authentic bakery snacks. Visit us at Vadapalani, # 96/10, Periyar Padai Choolaimedu for an incredible dining experience.',
  keywords: [
    'Tea Corner',
    'Tea Corner Chennai',
    'Choolaimedu restaurant',
    'Vadapalani food',
    'Chennai burgers',
    'fresh juices Chennai',
    'snacks Chennai',
    'bakery Chennai',
    'best burger Choolaimedu',
    'falooda Chennai',
    'mojito Chennai',
    'samosa Chennai',
    'egg puff Chennai',
    'fast food Chennai',
    'Indian snacks',
    'gourmet sandwiches',
    'loaded fries',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  icons: {
    icon: [
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Tea Corner Chennai | Fresh Burgers, Juices & Snacks',
    description:
      'Delivering Incredible Moments — Fresh Burgers, Crispy Fries & Tasty Sandwiches. Visit Tea Corner at Vadapalani, # 96/10, Periyar Padai Choolaimedu, Chennai.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Tea Corner Chennai Logo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tea Corner Chennai | Fresh Burgers, Juices & Snacks',
    description:
      'Delivering Incredible Moments — Fresh Burgers, Crispy Fries & Tasty Sandwiches in Choolaimedu, Chennai.',
    images: ['/logo.png'],
    creator: '@teacornerchennai',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  category: 'food',
};

// JSON-LD Structured Data for the business
function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Tea Corner',
    alternateName: 'Tea Corner Chennai',
    description:
      'Tea Corner in Choolaimedu, Chennai serves fresh burgers, crispy fries, tasty sandwiches, hand-crafted juices & authentic bakery snacks.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    telephone: '+917012707168',
    priceRange: '₹30 - ₹300',
    servesCuisine: ['Indian', 'Fast Food', 'Bakery', 'Beverages'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vadapalani, # 96/10, Periyar Padai Choolaimedu',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600094',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0674,
      longitude: 80.2376,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '22:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '120',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://maps.google.com/?q=Tea+Corner+Choolaimedu+Chennai',
    ],
    hasMenu: `${SITE_URL}/menu`,
    acceptsReservations: false,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
            <MobileNav />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
