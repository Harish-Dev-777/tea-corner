'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronRight, Cake, Pizza, ChevronLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Link from 'next/link';

export default function Hero() {
  const [rotationStep, setRotationStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const foodItems = [
    {
      id: "fries",
      alt: "Loaded Fries",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuALWabbZwni8U-bP9KUBwKvAAdw0GCzwDu3U02eI1sfY3MlZJ686ZeGVMEh9XB8F0rQ0agfbwmgmKEOs3R_sdCsgujsgB4L37AquGAcUeqFVkYx8bwjVc8P1O0HDZrsZ9dBScXGQrjHGZHeF45ymIpZYc_lGr3v9EgUDUfXVaGj_F21iX6b6nB3dbvou12Anwh9pw7qGbmTLJQUgiOVpCR4J6R3rcGgaOdxm4IrIuqs-1Gs7q9ebUM7VrsvWOtnGyHA-f3QTkspNgYK",
      isUnsplash: false
    },
    {
      id: "burger",
      alt: "Crispy Chicken Burger",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsLBuIzGwjb27WGQIqOtbW7nu1H6W7c-lSyd4mGfa212uWwVE9LYMRssQ4siMHlho1MmrYjIfvIUpq5GhkZ_6jzW0dQy9ifAiFp0dsdqspiKiwsCYcbx9GyAZRYrF9tEk-9o_wOAHz7-VI1JaijQu86UBqtsJX5lfnHBmwuHbSEBwPvU9All0uwNKF89Dc4aUw_B3-F8jv_VNj0IsIijp14LYV8NZDIdIaVfGc0I6LcN7_T_RDkxqhRk3XvAOLSDIBwHu7vXbCiVmI",
      isUnsplash: false
    },
    {
      id: "sandwich",
      alt: "Gourmet Sandwich",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl5eswhMK2iIftlx3sqpOeKeIT--QIc0F96VDzRZls7cvVioMMDwgwJcWH4xuLEni10vrpU5DYt7h7QMq2SOyNWygg2fC_OZc2ccXHL7haiQpuQquaPRdBgpnr-jXF8AgwFGBAlTx7oT5v2-DXhNla75mm_DP7Syi0pjai9w_7yEKtw0ErnqEbR3RkijoPQc5s47LsP6QJfcakvIx8qBPYXGLuU6vNNv29insmvwtniyY2MA6FZDJUe-vqemMMj7t5MxntJsX46_DT",
      isUnsplash: false
    },
    {
      id: "samosa",
      alt: "Crispy Samosas",
      src: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop&q=80",
      isUnsplash: true
    },
    {
      id: "puff",
      alt: "Baked Puff Pastry",
      src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80",
      isUnsplash: true
    },
    {
      id: "chai",
      alt: "Cutting Chai Tea",
      src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80",
      isUnsplash: true
    }
  ];

  // Responsive slots based on viewport breakpoint
  const SLOTS = isMobile ? [
    // Slot 0: Hidden Off-stage Left active (for transition)
    {
      left: '-30%',
      top: '50%',
      scale: 0.5,
      zIndex: 10,
      opacity: 0,
      rotate: -20,
    },
    // Slot 1: Left active edge of plate (Normal sizing) - Hidden on Mobile
    {
      left: '10%',
      top: '50%',
      scale: 0.74,
      zIndex: 20,
      opacity: 0,
      rotate: -10,
    },
    // Slot 2: CENTER (Active + Magnified 2.2x)
    {
      left: '50%',
      top: '50%',
      scale: 2.2,
      zIndex: 40,
      opacity: 1,
      rotate: 0,
    },
    // Slot 3: Right active edge of plate (Normal sizing) - Hidden on Mobile
    {
      left: '90%',
      top: '50%',
      scale: 0.74,
      zIndex: 20,
      opacity: 0,
      rotate: 10,
    },
    // Slot 4: Hidden Off-stage Right active
    {
      left: '130%',
      top: '50%',
      scale: 0.5,
      zIndex: 10,
      opacity: 0,
      rotate: 20,
    },
    // Slot 5: Hidden back crossover slot
    {
      left: '50%',
      top: '20%',
      scale: 0.35,
      zIndex: 5,
      opacity: 0,
      rotate: 0,
    }
  ] : [
    // Slot 0: Hidden queue Left-Back
    {
      left: '-5%',
      top: '28%',
      scale: 0.45,
      zIndex: 10,
      opacity: 0,
      rotate: -24,
    },
    // Slot 1: Left active edge of plate (Normal sizing)
    {
      left: '16%',
      top: '42%',
      scale: 0.68,
      zIndex: 20,
      opacity: 0.9,
      rotate: -12,
    },
    // Slot 2: Center/Middle edge of plate (Big center display 1.62x)
    {
      left: '50%',
      top: '60%',
      scale: 1.62,
      zIndex: 40,
      opacity: 1,
      rotate: 0,
    },
    // Slot 3: Right active edge of plate (Normal sizing)
    {
      left: '84%',
      top: '42%',
      scale: 0.68,
      zIndex: 20,
      opacity: 0.9,
      rotate: 12,
    },
    // Slot 4: Hidden queue Right-Back
    {
      left: '105%',
      top: '28%',
      scale: 0.45,
      zIndex: 10,
      opacity: 0,
      rotate: 24,
    },
    // Slot 5: Hidden back crossover queue
    {
      left: '50%',
      top: '14%',
      scale: 0.35,
      zIndex: 5,
      opacity: 0,
      rotate: 0,
    }
  ];

  // Auto rotate infinitely
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setRotationStep((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setRotationStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setRotationStep((prev) => prev - 1);
  };

  const handleItemClick = (slotIndex: number) => {
    if (isMobile) return; // Disallow tap rotation on mobile off-stage
    if (slotIndex === 1) {
      handlePrev();
    } else if (slotIndex === 3) {
      handleNext();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  const scrollToSpecials = () => {
    const section = document.getElementById('specials');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative flex flex-col items-center justify-start md:justify-center gap-y-2 md:gap-y-6 lg:gap-y-8 min-h-screen lg:min-h-[780px] lg:h-[calc(100vh-100px)] pt-[115px] md:pt-[120px] pb-10 px-4 md:px-8 text-center overflow-hidden bg-radial from-orange-50/20 via-transparent to-transparent"
    >
      {/* Main headings */}
      <div className="relative z-20 max-w-4xl mx-auto select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary-fixed text-primary px-[16px] py-[6px] rounded-full text-xs md:text-sm font-semibold mb-3 tracking-wide shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span>Premium Indian &amp; Global Flavors</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-on-surface mb-2.5 leading-[1.1] tracking-tight"
        >
          Delivering Incredible <br /> 
          <motion.span 
            initial={{ backgroundSize: '0% 100%' }}
            animate={{ backgroundSize: '100% 100%' }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary-container to-secondary"
          >
            Moments
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-xs md:text-base text-on-surface-variant max-w-md md:max-w-xl mx-auto leading-relaxed"
        >
          Fresh Burgers, Crispy Fries &amp; Tasty Sandwiches Delivered Hot to your doorstep. Experience the golden standard of flavor.
        </motion.p>
      </div>

      {/* Food Plate Rotating Collage Section */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative z-10 w-full max-w-[1080px] h-[235px] md:h-[360px] lg:h-[390px] mx-auto mt-10 md:-mt-8 lg:-mt-12 mb-5 md:-mb-14 lg:-mb-18 flex justify-center items-center overflow-visible select-none"
      >
        {/* Soft filled horizontal ellipse drawing styled exactly like a plate edge */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none z-0 overflow-visible">
          <svg 
            viewBox="0 0 1000 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="absolute w-[98%] md:w-[94%] h-auto top-[25%] md:top-[8%] left-1/2 -translate-x-1/2 pointer-events-none overflow-visible opacity-90"
          >
            {/* Broad light-peach shadow ellipse layer */}
            <ellipse 
              cx="500" 
              cy="200" 
              rx="410" 
              ry="140" 
              fill="rgba(245, 166, 35, 0.04)" 
              stroke="#ffe8d1" 
              strokeWidth="42"
            />
            {/* Fine amber contour stroke ellipse layer */}
            <ellipse 
              cx="500" 
              cy="200" 
              rx="410" 
              ry="140" 
              fill="none" 
              stroke="#ffd3b4" 
              strokeWidth="14"
            />
          </svg>
        </div>

        {/* Manual navigation chevrons for premium experience */}
        <button
          onClick={handlePrev}
          aria-label="Previous dish"
          className="absolute left-2 md:left-4 lg:left-1/2 lg:-translate-x-[460px] top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-amber-100 shadow-md text-primary hover:bg-primary hover:text-white transition-all duration-300 pointer-events-auto cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next dish"
          className="absolute right-2 md:right-4 lg:right-1/2 lg:translate-x-[460px] top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-amber-100 shadow-md text-primary hover:bg-primary hover:text-white transition-all duration-300 pointer-events-auto cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Render 6 items positioned on 6 potential slots rotating smoothly */}
        {foodItems.map((item, index) => {
          // Calculate the active slot using a modular cycle matching the exact requested direction
          const slotIdx = (index - rotationStep + 120000) % 6;
          const slot = SLOTS[slotIdx];

          return (
            <motion.div
              key={item.id}
              animate={{
                left: slot.left,
                top: slot.top,
                scale: slot.scale,
                zIndex: slot.zIndex,
                opacity: slot.opacity,
                rotate: slot.rotate,
              }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 17,
                mass: 0.9,
              }}
              onClick={() => handleItemClick(slotIdx)}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[42%] md:w-[28%] max-w-[280px] aspect-square flex items-center justify-center cursor-pointer select-none overflow-visible group"
            >
              {/* Inner container to hold reflection shadow and interactive state */}
              <div 
                className="relative w-full h-full p-2 transition-transform duration-300 ease-out group-hover:scale-105 active:scale-95 flex items-center justify-center"
              >
                {/* Visual backdrop shadow */}
                {((!isMobile && slotIdx === 2) || (isMobile && slotIdx === 2)) && (
                  <div className="absolute -bottom-4 w-[75%] h-[12px] bg-black/6 blur-lg rounded-full pointer-events-none" />
                )}

                <div className="relative w-[90%] h-[90%] flex items-center justify-center">
                  {item.isUnsplash ? (
                    <div className="relative w-full h-full rounded-full bg-white p-1.5 md:p-2 shadow-[0_15px_30px_rgba(131,85,0,0.14)] border-4 border-amber-50/70 overflow-hidden aspect-square flex items-center justify-center select-none shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 30vw, (max-width: 1024px) 25vw, 280px"
                        priority
                        className="object-cover rounded-full pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 30vw, (max-width: 1024px) 25vw, 280px"
                      priority
                      className="object-contain pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>



      {/* View Full Menu CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-20 col-span-full"
      >
        <Link href="/menu" className="inline-block">
          <button
            className="relative px-10 py-4 rounded-full text-white font-display text-xs md:text-sm uppercase font-bold tracking-widest transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_8px_24px_rgba(253,139,0,0.32)] hover:shadow-[0_12px_32px_rgba(253,139,0,0.48)] bg-gradient-to-r from-[#ff9f1c] to-[#fd8b00] overflow-hidden group border-t border-white/20 cursor-pointer"
          >
            {/* Glossy sheen overlay animation effect */}
            <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/12 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              VIEW FULL MENU
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
