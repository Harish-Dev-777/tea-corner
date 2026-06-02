'use client';

import React from 'react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollSubpage = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 mt-auto bg-surface bg-gradient-to-t from-surface-container to-surface w-full pt-16 pb-10 px-6 md:px-12 border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        
        {/* Main Footer Row: Brand and Navigation */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-outline-variant/20">
          {/* Brand Identity */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-display text-2xl font-black text-primary hover:opacity-90 cursor-pointer" onClick={() => scrollToSection('home')}>
              Tea Corner
            </div>
            <p className="text-on-surface-variant font-sans text-sm text-center md:text-left max-w-sm leading-relaxed">
              Serving Delicious Moments Daily. Handcrafted with love and the finest ingredients of gold standard.
            </p>
          </div>

          {/* Centered Main Page Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 md:gap-10 text-sm font-bold text-on-surface-variant">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('specials')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('visit')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Absolute Bottom Subsection: Terms, Privacy, and copyright */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
          <p className="font-sans">
            &copy; {new Date().getFullYear()} Tea Corner. All rights reserved.
          </p>
          
          <div className="flex gap-6 font-semibold">
            <a
              onClick={scrollSubpage}
              className="hover:text-primary transition-colors cursor-pointer"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              onClick={scrollSubpage}
              className="hover:text-primary transition-colors cursor-pointer"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
