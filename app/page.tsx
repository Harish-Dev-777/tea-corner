import React from 'react';
import type { Metadata } from 'next';
import VisitUs from '@/components/home/VisitUs';
import Hero from '@/components/home/Hero';
import ChefSpecials from '@/components/home/ChefSpecials';
import Reviews from '@/components/home/Reviews';

export const metadata: Metadata = {
  title: 'Tea Corner Chennai | Fresh Burgers, Juices & Snacks in Choolaimedu',
  description:
    'Delivering Incredible Moments — Tea Corner serves fresh burgers, crispy fries, tasty sandwiches, hand-crafted juices & bakery snacks at Vadapalani, # 96/10, Periyar Padai Choolaimedu, Chennai.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tea Corner Chennai | Delivering Incredible Moments',
    description:
      'Fresh Burgers, Crispy Fries & Tasty Sandwiches. Visit Tea Corner at Choolaimedu, Chennai for an unforgettable dining experience.',
    url: '/',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="relative z-10 w-full flex-grow bg-white flex flex-col overflow-x-hidden">
      <Hero />
      <ChefSpecials />
      <Reviews />
      <VisitUs />
    </main>
  );
}
