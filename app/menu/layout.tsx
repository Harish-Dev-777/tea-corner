import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Menu',
  description:
    'Explore Tea Corner\'s full menu — signature burgers, loaded nacho fries, gourmet sandwiches, fresh juices, crispy samosas, bakery sweets & cool drinks. All freshly made in Choolaimedu, Chennai.',
  alternates: {
    canonical: '/menu',
  },
  openGraph: {
    title: 'Our Menu | Tea Corner Chennai',
    description:
      'Browse our curated selection of artisanal teas, freshly squeezed juices, and hand-crafted gourmet snacks. Made fresh daily at Vadapalani, # 96/10, Periyar Padai Choolaimedu.',
    url: '/menu',
    type: 'website',
  },
};

function MenuJsonLd() {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://teacorner.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Menu',
        item: 'https://teacorner.in/menu',
      },
    ],
  };

  const menuData = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Tea Corner Menu',
    description: 'Full menu of Tea Corner Chennai featuring burgers, sandwiches, juices, bakery items, and more.',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Savory Snacks',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Signature Burger',
            description: 'Our house-special double patty burger with caramelized onions and signature melted cheese.',
            offers: {
              '@type': 'Offer',
              price: '249',
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'MenuItem',
            name: 'Gourmet Sandwich',
            description: 'Toasted sourdough bread filled with garden-fresh greens and premium aged cheddar.',
            offers: {
              '@type': 'Offer',
              price: '189',
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'MenuItem',
            name: 'Loaded Nacho Fries',
            description: 'Crispy golden fries topped with spicy nacho cheese, jalapeños, and fresh salsa.',
            offers: {
              '@type': 'Offer',
              price: '159',
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'MenuItem',
            name: 'Crispy Samosa',
            description: 'Traditional spiced potato filling in a perfectly flaky, hand-folded pastry crust.',
            offers: {
              '@type': 'Offer',
              price: '30',
              priceCurrency: 'INR',
            },
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Fresh Juices',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'ABC (Apple, Beet, Carrot)',
            description: 'Cold-pressed fresh apples, vibrant beets, and sweet carrots.',
            offers: {
              '@type': 'Offer',
              price: '120',
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'MenuItem',
            name: 'Fresh Pomegranate',
            description: '100% pure juice from hand-picked pomegranates.',
            offers: {
              '@type': 'Offer',
              price: '140',
              priceCurrency: 'INR',
            },
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Bakery & Sweets',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Palkova Bun',
            description: 'Soft sweet bun stuffed with rich, caramelized milk khoa.',
            offers: {
              '@type': 'Offer',
              price: '45',
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'MenuItem',
            name: 'Masala Egg Puff',
            description: 'Buttery, flaky puff pastry with a whole spiced egg filling.',
            offers: {
              '@type': 'Offer',
              price: '35',
              priceCurrency: 'INR',
            },
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Cool Drinks',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Classic Mojito',
            description: 'Refreshing lime and muddled mint leaves topped with sparkling soda.',
            offers: {
              '@type': 'Offer',
              price: '110',
              priceCurrency: 'INR',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuData) }}
      />
    </>
  );
}

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MenuJsonLd />
      {children}
    </>
  );
}
