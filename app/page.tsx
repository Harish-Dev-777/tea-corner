import React from 'react';
import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import ChefSpecials from '@/components/home/ChefSpecials';
import Reviews from '@/components/home/Reviews';
import VisitUs from '@/components/home/VisitUs';
import Footer from '@/components/home/Footer';
import MobileNav from '@/components/home/MobileNav';

export default function Home() {
  return (
    <main className="relative z-10 w-full min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <ChefSpecials />
      <Reviews />
      <VisitUs />
      <Footer />
      <MobileNav />
    </main>
  );
}
