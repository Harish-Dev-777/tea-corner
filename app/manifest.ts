import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tea Corner Chennai',
    short_name: 'Tea Corner',
    description:
      'Fresh Burgers, Juices & Snacks — Delivering Incredible Moments from Choolaimedu, Chennai.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fcf9f8',
    theme_color: '#835500',
    orientation: 'portrait',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
