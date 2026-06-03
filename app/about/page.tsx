'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Sparkles, Heart, Coffee, ShieldCheck, Leaf, Users, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="relative z-10 w-full flex-grow bg-white flex flex-col overflow-x-hidden" role="main">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:py-24 min-h-[70vh] flex items-center overflow-hidden">
        {/* Animated Background Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/20 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary-container/10 blur-[80px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/10 text-secondary font-semibold text-xs md:text-sm mb-6 uppercase tracking-wider">
              ESTABLISHED 2024
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface mb-6 leading-[1.15]">
              From Our Family <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">to Yours</span>,<br />
              Every Cup Matters.
            </h1>
            <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-lg mb-8 leading-relaxed">
              At Tea Corner, we think a good cup of tea is the best way to connect. Since 2024, we&apos;ve been making drinks and snacks that bring people together.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                className="w-full h-full object-cover" 
                src="/images/about/about-img-01.png"
                alt="Tea Corner inside cafe counter and prep area"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl max-w-[210px] border border-amber-100/50 text-left"
            >
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center mb-3">
                <Coffee className="w-5 h-5 text-primary" />
              </div>
              <p className="font-display font-bold text-xs uppercase tracking-wider text-primary mb-0.5">Brew Ritual</p>
              <p className="font-sans font-semibold text-sm text-on-surface">Perfectly Brewed at 85°C</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-surface-container-low" id="story">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[3/4] max-h-[520px]">
                <Image 
                  className="object-cover" 
                  src="/images/about/about-img-02.png"
                  alt="Tea Corner storefront in Chennai with scooters parked"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-primary-container rounded-full -z-10 blur-2xl opacity-20"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="order-1 md:order-2 text-left"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-on-surface mb-8 leading-tight">
                A Journey from <br />
                <span className="text-secondary italic">the Heart of Chennai</span>
              </h2>
              <div className="space-y-6 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">
                <p>
                  Located right in <span className="font-bold text-on-surface">Vadapalani, # 96/10, Periyar Padai Choolaimedu</span>, Tea Corner started with a simple dream: to bring great tea and a friendly space to our neighborhood.
                </p>
                <p>
                  We saw that people in Chennai love their tea, but needed a cozy place to enjoy it. We source the best tea leaves and make fresh snacks that go perfectly with every sip.
                </p>
                <p>
                  Every part of our shop is built with love. We wanted to create a place where you can slow down and enjoy a quality moment with friends and family.
                </p>
              </div>
              <div className="mt-10 p-6 rounded-2xl border-l-4 border-primary bg-primary/5 italic font-display text-base md:text-lg text-on-surface font-semibold shadow-sm">
                &ldquo;We&apos;re not just a tea shop; we&apos;re part of your daily routine.&rdquo;
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Space Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold mb-4"
            >
              Fresh &amp; Vibrant Vibes
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto"
            >
              Come see the energy of our shop, where everything is fresh and the tea is always brewing.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Bento Display */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-8 group relative overflow-hidden rounded-3xl h-[400px] shadow-lg"
            >
              <Image 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/images/about/about-img-03.png"
                alt="Vibrant close-up of fresh fruit display at Tea Corner"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-8 left-8 text-white text-left z-10">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2">The Best Ingredients</h3>
                <p className="font-sans text-xs md:text-sm opacity-90 max-w-md">We pick fresh fruits every day to make sure your drinks taste amazing.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:col-span-4 flex flex-col gap-6"
            >
              <div className="bg-gradient-to-br from-primary-container to-secondary-container rounded-3xl p-8 text-on-primary-container flex-1 text-on-secondary shadow-lg text-left flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-display text-lg md:text-xl font-bold mb-2 text-white">A Busy, Happy Spot</h4>
                <p className="font-sans text-xs md:text-sm opacity-95 text-white/90">Watch our team make your favorite drinks right in front of you with craftsmanship.</p>
              </div>
              
              <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/10 flex-1 text-left flex flex-col justify-center shadow-md">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg md:text-xl font-bold mb-2 text-on-surface">The Cozy Corner</h4>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant">Whether you&apos;re meeting a friend or just need a quiet break, we have the perfect seat for you.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center group p-8 rounded-3xl bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-on-surface mb-3">Uncompromising Quality</h3>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                We only use the best tea leaves and fresh ingredients for every single cup we serve.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center group p-8 rounded-3xl bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:-rotate-6 transition-all duration-300">
                <Leaf className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-on-surface mb-3">Pure Freshness</h3>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Our snacks and juices are made fresh with no hidden extras—just honest, delicious food.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center group p-8 rounded-3xl bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                <Users className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-on-surface mb-3">Heart of Community</h3>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Tea Corner is for everyone. We&apos;re proud to be a warm, friendly spot for the individuals of Chennai.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-container to-secondary-container rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl text-left"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 max-w-md">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-primary-container mb-4">
                Ready for a cup?
              </h2>
              <p className="font-sans text-sm md:text-base text-on-primary-container/90 leading-relaxed">
                Stop by today and find your new favorite drink in our little cozy corner of Choolaimedu.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <Link href="/menu">
                <button className="bg-gradient-to-r from-[#f9f7f5] to-[#ffffff] hover:shadow-xl text-black font-bold font-display px-8 py-4 rounded-full shadow-[0_6px_22px_rgba(253,139,0,0.3)] hover:scale-[1.03] active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-wider border-t border-white/20">
                  See Our Menu
                  <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
