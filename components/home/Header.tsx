'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const MENU_ITEMS = [
  { id: 'home', label: 'Home', subtitle: 'Start your flavor journey', path: '/' },
  { id: 'menu', label: 'Our Menu', subtitle: 'Explore cooked dishes & fresh juices', path: '/menu' },
  { id: 'about', label: 'About Us', subtitle: 'Steeped in Chennai tradition since 2024', path: '/about' },
  { id: 'contact', label: 'Contact Us', subtitle: 'Visit our warm corner or write to us', path: '/contact' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }
};

const itemVariants = {
  hidden: { y: 35, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring" as const, 
      stiffness: 120, 
      damping: 14 
    } 
  },
  exit: { 
    y: -25, 
    opacity: 0, 
    transition: { 
      duration: 0.2, 
      ease: "easeInOut" as const
    } 
  }
};

const overlayVariants = {
  hidden: { 
    opacity: 0,
    y: '-100vh', 
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1] as const
    }
  },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1] as const
    }
  },
  exit: { 
    opacity: 0,
    y: '-100vh',
    transition: {
      duration: 0.5,
      delay: 0.05,
      ease: [0.76, 0, 0.24, 1] as const
    }
  }
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuCardOpen, setMenuCardOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Watch for menu-card-open class on body to hide/show nav
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setMenuCardOpen(document.body.classList.contains('menu-card-open'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('nav-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('nav-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('nav-open');
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        id="navbar"
        initial={{ y: -60, opacity: 0 }}
        animate={menuCardOpen ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[75%] lg:w-[70%] z-[220] px-6 lg:px-8 py-2 flex justify-between items-center transition-all duration-300 ${
          isOpen
            ? 'bg-transparent border-transparent shadow-none'
            : scrolled 
              ? 'bg-white/80 shadow-[0_10px_40px_rgba(131,85,0,0.08)] py-1.5 border border-white/40 rounded-full backdrop-blur-md' 
              : 'bg-white/45 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/25 rounded-full backdrop-blur-md'
        }`}
      >
        <Link 
          href="/"
          onClick={() => {
            setIsOpen(false);
          }} 
          className="flex items-center gap-2 md:gap-3 font-display text-2xl md:text-3xl text-primary font-extrabold tracking-tight cursor-pointer hover:opacity-90 z-[230]"
        >
          <Image src="/logo.png" alt="Tea Corner — Fresh burgers, juices & snacks in Chennai" width={56} height={56} className="object-contain" />
          <span className="text-xl md:text-2xl">Tea Corner</span>
        </Link>
        
        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-10 font-sans text-sm font-semibold text-on-surface-variant z-10" aria-label="Main navigation">
          <Link
            href="/"
            className={`hover:text-primary transition-colors duration-300 relative py-1 cursor-pointer ${pathname === '/' ? 'text-primary font-bold' : ''}`}
          >
            Home
            {pathname === '/' && <motion.span layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
          </Link>
          <Link
            href="/menu"
            className={`hover:text-primary transition-colors duration-300 relative py-1 cursor-pointer ${pathname === '/menu' ? 'text-primary font-bold' : ''}`}
          >
            Menu
            {pathname === '/menu' && <motion.span layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
          </Link>
          <Link
            href="/about"
            className={`hover:text-primary transition-colors duration-300 relative py-1 cursor-pointer ${pathname === '/about' ? 'text-primary font-bold' : ''}`}
          >
            About
            {pathname === '/about' && <motion.span layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
          </Link>
          <Link
            href="/contact"
            className={`hover:text-primary transition-colors duration-300 relative py-1 cursor-pointer ${pathname === '/contact' ? 'text-primary font-bold' : ''}`}
          >
            Contact
            {pathname === '/contact' && <motion.span layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
          </Link>
        </nav>

        {/* Right action group */}
        <div className="flex items-center gap-4 z-[230]">
          {/* Desktop CTA Button */}
          <Link href="/menu">
            <button
              className="hidden lg:block relative px-8 py-3 rounded-full text-white font-semibold text-xs md:text-sm uppercase tracking-wider bg-gradient-to-r from-[#ff9f1c] to-[#fd8b00] hover:shadow-xl transition-all hover:scale-[1.03] active:scale-95 duration-300 cursor-pointer overflow-hidden group border-t border-white/20 shadow-[0_4px_18px_rgba(253,139,0,0.32)]"
            >
              <span className="relative z-10 font-bold font-display">Menu</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#fd8b00] to-[#ff9f1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>

          {/* Mobile/Tablet Custom Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative lg:hidden w-11 h-11 flex flex-col justify-center items-center rounded-full bg-white/92 border border-amber-100 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 select-none"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between relative">
              <span className={`w-full h-0.5 bg-primary rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`w-full h-0.5 bg-primary rounded transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`w-full h-0.5 bg-primary rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-[#fdfbf7] via-white to-[#fffbeb] z-[210] flex flex-col justify-between pt-28 pb-12 px-6 md:px-16 overflow-y-auto"
          >
            {/* Background design elements */}
            <div className="absolute top-[20%] right-[10%] opacity-[0.03] select-none font-display text-[15vw] font-black lowercase text-primary pointer-events-none">
              chai
            </div>
            <div className="absolute bottom-[10%] left-[5%] opacity-[0.02] select-none font-display text-[12vw] font-black lowercase text-primary pointer-events-none">
              corner
            </div>

            <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center my-auto">
              {/* Centered Staggered Links */}
              <motion.div 
                variants={containerVariants}
                className="flex flex-col items-center justify-center gap-8 md:gap-10 text-center"
              >
                {MENU_ITEMS.map((item) => (
                  <motion.div 
                    key={item.id} 
                    variants={itemVariants}
                    className="relative"
                  >
                    <Link
                      href={item.path}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="text-center cursor-pointer focus:outline-none block group"
                    >
                      <span className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-on-surface hover:text-primary transition-colors duration-300">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom details */}
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-amber-100/40 pt-6 mt-6 md:mt-0 text-center md:text-left gap-4 font-mono text-xs text-on-surface-variant/70">
              <p>© 2026 Tea Corner. All Rights Reserved.</p>
              <p>Open Daily • 9:00 AM - 11:00 PM</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
