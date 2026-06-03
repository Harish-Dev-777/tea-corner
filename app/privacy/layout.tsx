import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Tea Corner Chennai. Learn how we handle and protect your data at our Vadapalani coffee shop.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Tea Corner Chennai',
    description: 'Privacy Policy for Tea Corner Chennai. Learn how we handle and protect your data at our Vadapalani coffee shop.',
    url: '/privacy',
    type: 'website',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
