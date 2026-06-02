'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto bg-surface bg-gradient-to-t from-surface-container to-surface w-full pt-16 pb-10 px-6 md:px-12 border-t border-outline-variant/20" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        
        {/* Main Footer Row: Brand and Navigation */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-outline-variant/20">
          {/* Brand Identity */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-display text-2xl font-black text-primary hover:opacity-90 cursor-pointer flex items-center gap-2" aria-label="Tea Corner - Go to homepage">
              <Image src="/logo.png" alt="Tea Corner Logo" width={40} height={40} className="object-contain" />
              Tea Corner
            </Link>
            <p className="text-on-surface-variant font-sans text-sm text-center md:text-left max-w-sm leading-relaxed">
              Serving Delicious Moments Daily. Handcrafted with love and the finest ingredients of gold standard.
            </p>
          </div>

          {/* Main Page Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 md:gap-10 text-sm font-bold text-on-surface-variant" aria-label="Footer navigation">
            <Link
              href="/"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Subsection: Terms, Privacy, and copyright */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
          <p className="font-sans">
            &copy; {new Date().getFullYear()} Tea Corner. All rights reserved.
          </p>
          
          <div className="flex gap-6 font-semibold">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
