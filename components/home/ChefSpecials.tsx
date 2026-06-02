'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface SpecialItem {
  id: string;
  name: string;
  description: string;
  price: string;
  badge: string;
  badgeColor: string;
  image: string;
}

const SPECIAL_ITEMS: SpecialItem[] = [
  {
    id: 'signature-king',
    name: 'The Signature King',
    description: 'Premium double-beef patty with our secret amber sauce and aged cheddar. A royal experience in every bite.',
    price: '₹280',
    badge: 'Most Popular',
    badgeColor: 'bg-primary-fixed text-on-primary-fixed-variant',
    image: '/images/menu/burger.png',
  },
  {
    id: 'loaded-nacho-fries',
    name: 'Loaded Nacho Fries',
    description: 'Golden crispy fries smothered in melted cheese, spicy beef, and fresh jalapeños. Perfect for sharing, or not.',
    price: '₹190',
    badge: "Chef's Choice",
    badgeColor: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    image: '/images/menu/loaded-fries.png',
  },
  {
    id: 'gourmet-club-sandwich',
    name: 'Gourmet Club Sandwich',
    description: 'Triple-layered perfection with grilled chicken, avocado, and sun-dried tomatoes. Elegance served on a plate.',
    price: '₹220',
    badge: 'Fresh & Healthy',
    badgeColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    image: '/images/menu/sandwich.png',
  },
  {
    id: 'tropical-faluda',
    name: 'Tropical Faluda Burst',
    description: 'A colorful masterpiece of fresh fruits, creamy ice cream, and vermicelli. The ultimate summer refresher.',
    price: '₹160',
    badge: 'Sweet Delight',
    badgeColor: 'bg-primary-fixed-dim text-on-primary-fixed-variant',
    image: '/images/menu/faluda.png',
  },
  {
    id: 'mint-mojito',
    name: 'Zesty Mint Mojito',
    description: 'A refreshing blend of garden-fresh mint, lime, and sparkling soda. Crisp, cool, and perfectly balanced.',
    price: '₹120',
    badge: 'Refreshing',
    badgeColor: 'bg-secondary-fixed-dim text-on-secondary-fixed-variant',
    image: '/images/menu/mojito.png',
  },
];

export default function ChefSpecials() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    card.style.transform = `scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'scale(1) rotateX(0) rotateY(0)';
  };

  return (
    <section id="specials" className="py-16 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-3"
          >
            Chef&apos;s Specials
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-1 bg-primary-container mx-auto rounded-full origin-center"
          />
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {SPECIAL_ITEMS.map((item, index) => {
            const isAlt = index % 2 === 1;
            const isFaluda = item.id === 'tropical-faluda';
            return (
              <div
                key={item.id}
                className={`flex flex-col ${
                  isAlt ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-8 md:gap-16 ${
                  isFaluda ? 'max-w-4xl mx-auto w-full' : ''
                }`}
              >
                {/* Product Image Wrapper */}
                <motion.div
                  initial={{ opacity: 0, x: isAlt ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`w-full ${isFaluda ? 'md:w-[42%] flex justify-center' : 'md:w-1/2'} group`}
                >
                  <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={`relative w-full ${
                      isFaluda 
                        ? 'h-[210px] md:h-[300px] max-w-[280px] md:max-w-[320px] bg-[#070613] border border-neutral-900/60' 
                        : 'h-[260px] md:h-[380px] border border-outline-variant/10'
                    } rounded-[24px] overflow-hidden shadow-lg transition-all duration-500 cursor-pointer preserve-3d`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes={isFaluda ? '(max-width: 768px) 100vw, 35vw' : '(max-width: 768px) 100vw, 50vw'}
                      className={`${
                        isFaluda 
                          ? 'object-contain p-0 hover:scale-105' 
                          : 'object-cover hover:scale-105'
                      } transition-transform duration-700`}
                      referrerPolicy="no-referrer"
                    />
                    {!isFaluda && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    )}
                  </div>
                </motion.div>

                {/* Product Description Details */}
                <motion.div
                  initial={{ opacity: 0, x: isAlt ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                  className={`w-full ${isFaluda ? 'md:w-[48%] space-y-3' : 'md:w-1/2 space-y-4'} text-left`}
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                  <h3 className={`font-display font-bold text-on-surface ${
                    isFaluda ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
                  }`}>
                    {item.name}
                  </h3>
                  <p className={`font-sans text-on-surface-variant leading-relaxed ${
                    isFaluda ? 'text-xs md:text-sm' : 'text-sm md:text-base'
                  }`}>
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className={`font-display text-primary font-black tracking-tight ${
                      isFaluda ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
                    }`}>
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
