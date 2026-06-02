'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Home, Utensils, Info, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Setup observer to track full screen mobile menu state via body class 'nav-open'
    const checkNavOpen = () => {
      setNavOpen(document.body.classList.contains('nav-open'));
    };

    const observer = new MutationObserver(checkNavOpen);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    // Initial check
    checkNavOpen();

    return () => observer.disconnect();
  }, []);

  // If the full screen menu is active, do not render any mobile bar or FAB elements
  if (navOpen) return null;

  return (
    <>
      {/* Mobile Bottom Nav - Visible on mobile only */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/85 backdrop-blur-md border-t border-surface-container-high px-6 py-4 flex justify-between items-center z-[100] shadow-xl">
        <Link
          href="/"
          className={`flex flex-col items-center gap-1 cursor-pointer flex-1 transition-all ${
            pathname === '/' ? 'text-primary scale-105 font-bold' : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px]">Home</span>
        </Link>

        <Link
          href="/menu"
          className={`flex flex-col items-center gap-1 cursor-pointer flex-1 transition-all ${
            pathname === '/menu' ? 'text-primary scale-105 font-bold' : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <Utensils className="w-5 h-5" />
          <span className="text-[10px]">Menu</span>
        </Link>

        <Link
          href="/about"
          className={`flex flex-col items-center gap-1 cursor-pointer flex-1 transition-all ${
            pathname === '/about' ? 'text-primary scale-105 font-bold' : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <Info className="w-5 h-5" />
          <span className="text-[10px]">About</span>
        </Link>

        <Link
          href="/contact"
          className={`flex flex-col items-center gap-1 cursor-pointer flex-1 transition-all ${
            pathname === '/contact' ? 'text-primary scale-105 font-bold' : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px]">Contact</span>
        </Link>
      </div>
    </>
  );
}
