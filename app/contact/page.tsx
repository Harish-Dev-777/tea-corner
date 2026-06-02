'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="relative z-10 w-full flex-grow bg-white flex flex-col overflow-x-hidden" role="main">
      
      {/* Background radial glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[30%] -right-24 w-80 h-80 bg-secondary-container/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="pt-32 pb-12 w-full text-center max-w-3xl mx-auto px-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/10 text-secondary font-semibold text-xs md:text-sm mb-4 uppercase tracking-wider">
          WE&apos;RE COZY
        </span>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-on-surface mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed"
        >
          Have questions about our aromatic brews, delicious snacks, or just want to share feedback? Visit our friendly neighborhood corner inside Chennai.
        </motion.p>
      </section>

      {/* Two-Column Grid: Left Details & Right Opening Hours */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* Left Column: Visit Our Corner (Details) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="flex flex-col justify-start text-left bg-white rounded-3xl p-8 md:p-10 border border-outline-variant/10 shadow-md space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-black text-on-surface mb-4">Visit Our Corner</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
                Call us directly, email our team, or simply walk in. We love welcoming guests to our clean, aromatic tea corner.
              </p>
            </div>

            {/* List of details */}
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#904d00] mb-1">Address</h4>
                  <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                    Tea Corner Chennai, Choolaimedu,<br />
                    Periyar Padhai, Chennai, Tamil Nadu PIN-600094
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#904d00] mb-1">Phone</h4>
                  <p className="font-sans font-semibold text-sm md:text-base text-on-surface hover:text-[#904d00] transition-colors mt-0.5">
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#904d00] mb-1">Email</h4>
                  <p className="font-sans text-sm md:text-base text-on-surface hover:text-[#904d00] transition-colors mt-0.5">
                    <a href="mailto:hello@teacorner.in">hello@teacorner.in</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Opening Hours */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="relative overflow-hidden group bg-surface-container-low rounded-3xl p-8 md:p-10 border border-outline-variant/10 shadow-md flex flex-col justify-between h-full"
          >
            {/* Background design glow */}
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full transition-transform duration-700 group-hover:scale-150"></div>
            
            <div className="space-y-6 relative z-10 w-full text-left">
              <h3 className="font-display text-2xl font-black text-on-surface flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                Opening Hours
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Relax, slow down, and enjoy freshly brewed tea during our daily serving schedules.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center py-4 border-b border-outline-variant/20">
                  <span className="font-sans text-sm md:text-base text-on-surface-variant font-medium">Monday - Friday</span>
                  <span className="font-display font-extrabold text-sm md:text-base text-on-surface">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-outline-variant/20">
                  <span className="font-sans text-sm md:text-base text-on-surface-variant font-medium">Saturday - Sunday</span>
                  <span className="font-display font-extrabold text-sm md:text-base text-on-surface">8:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-200/25 text-left font-sans italic text-xs md:text-sm text-on-surface-variant relative z-10">
              &ldquo;A warm tea paired with a crispy snack creates the golden standard of unforgettable community moments.&rdquo;
            </div>
          </motion.div>

        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12 w-full text-left">
        <div className="mb-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-black text-on-surface">Find us inside Chennai</h3>
            <p className="font-sans text-xs text-on-surface-variant mt-0.5">We are nested right in Periyar Padhai, Choolaimedu. Come in for a friendly welcome sip!</p>
          </div>
          <a
            href="https://maps.google.com/?q=Tea+Corner+Choolaimedu+Chennai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs group font-bold tracking-wider uppercase text-primary inline-flex items-center gap-1.5 cursor-pointer hover:underline underline-offset-4 shrink-0 transition-all"
          >
            Get Live Directions
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Chennai Map Image wrapper with Hover effect */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[21/9] min-h-[300px] max-h-[460px] rounded-3xl overflow-hidden shadow-lg border border-amber-100 group cursor-pointer"
        >
          <a 
            href="https://maps.google.com/?q=Tea+Corner+Choolaimedu+Chennai"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full relative"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAThsr4t1xfdLtH0GttP-KB8CFD0GtG4VIM7FCdJXEx_Y3Z-dI0ZcfMapB5AH3VBZhWOqxx4GjMIb5ln8r4YXjRqp1qtAjh6Pdxm50w0QaDgYeVeeu1BQWBTFtCvjxVIJ9kMkKovsbQs4s3owDANiznNR4Co-bnoF8uGOil70os4K57KKW8UAEy0RsHbpcAK1r8xDXbYc7XCu3vhL3u7N5Z9RUnR7Pz4SJocQQorltErZTR4S7ZTNzMu58HsltTFylFvX1iANsyAv8m"
              alt="Hand-drawn stylised roadmap of Chennai pointing to Tea Corner"
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.015]"
              sizes="100vw"
              referrerPolicy="no-referrer"
            />
            {/* Dark glass blur overlay visible on hover */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
            
            {/* Center target floating badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-primary/95 text-white font-display text-xs md:text-sm font-bold uppercase tracking-widest shadow-xl px-6 py-3.5 rounded-full backdrop-blur-md hover:bg-primary group-hover:scale-105 transition-all">
                Open Google Maps Live
              </span>
            </div>
          </a>
        </motion.div>
      </section>

    </main>
  );
}
