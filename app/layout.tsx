import type {Metadata} from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Tea Corner | Delivering Incredible Moments',
  description: 'Fresh Burgers, Crispy Fries & Tasty Sandwiches Delivered Hot to your doorstep. Experience the golden standard of flavor.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden" suppressHydrationWarning>{children}</body>
    </html>
  );
}
