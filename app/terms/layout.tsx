import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Tea Corner Chennai. Read our policies for dining in or ordering from our Vadapalani coffee shop.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | Tea Corner Chennai',
    description: 'Terms of Service for Tea Corner Chennai. Read our policies for dining in or ordering from our Vadapalani coffee shop.',
    url: '/terms',
    type: 'website',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
