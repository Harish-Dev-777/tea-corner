'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Clock, FileText, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'burgers' | 'snacks' | 'sandwiches' | 'juices' | 'drinks';
  image: string;
  popular?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  // Burgers
  { id: 'chicken-burger', name: 'Chicken Burger', price: 80, category: 'burgers', description: 'Classic juicy chicken patty with fresh lettuce and mayo.', image: '/images/menu/burger/chicken-burger.png', popular: true },
  { id: 'chicken-jumbo-burger', name: 'Chicken Jumbo Burger', price: 120, category: 'burgers', description: 'Extra large chicken burger for the big appetite.', image: '/images/menu/burger/chicken-jumbo-burger.png' },
  { id: 'chicken-nugget-burger', name: 'Chicken Nugget Burger', price: 110, category: 'burgers', description: 'Crispy chicken nuggets stuffed inside a soft bun.', image: '/images/menu/burger/chicken-nugget-burger.png' },
  { id: 'chicken-special-burger', name: 'Chicken Special Burger', price: 130, category: 'burgers', description: 'Our chef special chicken burger with secret sauces.', image: '/images/menu/burger/chicken-special-burger.png', popular: true },
  { id: 'double-chicken-fillet-burger', name: 'Double Chicken Fillet', price: 120, category: 'burgers', description: 'Two crispy chicken fillets for double the crunch.', image: '/images/menu/burger/double-chicken-fillet-burger.png' },
  { id: 'egg-burger', name: 'Egg Burger', price: 80, category: 'burgers', description: 'Perfectly fried egg with veggies and cheese.', image: '/images/menu/burger/egg-burger.png' },
  { id: 'veg-burger', name: 'Veg Burger', price: 70, category: 'burgers', description: 'Delicious vegetable patty with fresh greens.', image: '/images/menu/burger/veg-burger.png' },
  { id: 'veg-nugget-burger', name: 'Veg Nugget Burger', price: 110, category: 'burgers', description: 'Crispy veg nuggets in a soft toasted bun.', image: '/images/menu/burger/veg-nugget-burger.png' },

  // Snacks & Noodles
  { id: 'bread-ommelete', name: 'Bread Omelette', price: 50, category: 'snacks', description: 'Classic street-style bread and fluffy omelette.', image: '/images/menu/snacks-noodles/bread-ommelete.png', popular: true },
  { id: 'chicken-puffs', name: 'Chicken Puffs', price: 30, category: 'snacks', description: 'Flaky pastry filled with spicy minced chicken.', image: '/images/menu/snacks-noodles/chicken-puffs.png' },
  { id: 'chicken-role', name: 'Chicken Roll', price: 60, category: 'snacks', description: 'Spicy chicken wrapped in a soft paratha roll.', image: '/images/menu/snacks-noodles/chicken-role.png', popular: true },
  { id: 'egg-puffs', name: 'Egg Puffs', price: 20, category: 'snacks', description: 'Crispy puff pastry with a boiled egg inside.', image: '/images/menu/snacks-noodles/egg-puffs.png' },
  { id: 'gajira', name: 'Gajira Sweet', price: 15, category: 'snacks', description: 'Traditional sweet treat to satisfy your cravings.', image: '/images/menu/snacks-noodles/gajira.png' },
  { id: 'samaosas', name: 'Crispy Samosas', price: 15, category: 'snacks', description: 'Classic potato-filled crispy fried pastry.', image: '/images/menu/snacks-noodles/samaosas.png', popular: true },
  { id: 'veg-puff', name: 'Veg Puff', price: 20, category: 'snacks', description: 'Mixed vegetable filling in a flaky puff pastry.', image: '/images/menu/snacks-noodles/veg-puff.png' },
  { id: 'veg-role', name: 'Veg Roll', price: 60, category: 'snacks', description: 'Healthy veggies wrapped in a soft roll.', image: '/images/menu/snacks-noodles/veg-role.png' },

  // Sandwiches
  { id: 'avacado-egg-sandwich', name: 'Avocado Egg Sandwich', price: 130, category: 'sandwiches', description: 'Healthy avocado mash with sliced boiled egg.', image: '/images/menu/sandwich/avacado-egg-sandwich.png' },
  { id: 'chicken-club-sandwich', name: 'Chicken Club Sandwich', price: 120, category: 'sandwiches', description: 'Triple-layered sandwich with chicken and cheese.', image: '/images/menu/sandwich/chicken-club-sandwich.png', popular: true },
  { id: 'chicken-salami', name: 'Chicken Salami Sandwich', price: 90, category: 'sandwiches', description: 'Premium chicken salami slices in toasted bread.', image: '/images/menu/sandwich/chicken-salami.png' },
  { id: 'chicken-sandwich', name: 'Chicken Sandwich', price: 70, category: 'sandwiches', description: 'Classic creamy chicken sandwich.', image: '/images/menu/sandwich/chicken-sandwich.png' },
  { id: 'chilli-cheese-sandwich', name: 'Chilli Cheese Sandwich', price: 60, category: 'sandwiches', description: 'Spicy chilli and melted cheese goodness.', image: '/images/menu/sandwich/chilli-cheese-sandwich.png', popular: true },
  { id: 'choco-cheese-sandwich', name: 'Choco Cheese Sandwich', price: 90, category: 'sandwiches', description: 'Sweet chocolate and savory cheese combo.', image: '/images/menu/sandwich/choco-cheese-sandwich.png' },
  { id: 'egg-salami', name: 'Egg Salami Sandwich', price: 90, category: 'sandwiches', description: 'Egg and chicken salami layered sandwich.', image: '/images/menu/sandwich/egg-salami.png' },
  { id: 'egg-sandwich', name: 'Egg Sandwich', price: 60, category: 'sandwiches', description: 'Simple and protein-packed egg sandwich.', image: '/images/menu/sandwich/egg-sandwich.png' },
  { id: 'mega-chicken-club-sandwich', name: 'Mega Chicken Club', price: 140, category: 'sandwiches', description: 'The ultimate massive chicken club sandwich.', image: '/images/menu/sandwich/mega-chicken-club-sandwich.png', popular: true },
  { id: 'murruku-sandwich', name: 'Murruku Sandwich', price: 70, category: 'sandwiches', description: 'Chennai special sandwich with crispy murruku.', image: '/images/menu/sandwich/murruku-sandwich.png', popular: true },
  { id: 'panner-cheese-sandwich', name: 'Paneer Cheese Sandwich', price: 80, category: 'sandwiches', description: 'Soft paneer and cheese in a toasted sandwich.', image: '/images/menu/sandwich/panner-cheese-sandwich.png' },
  { id: 'plain-sandwich', name: 'Plain Veg Sandwich', price: 50, category: 'sandwiches', description: 'Fresh vegetables in soft white bread.', image: '/images/menu/sandwich/plain-sandwich.png' },
  { id: 'veg-club-sandwich', name: 'Veg Club Sandwich', price: 110, category: 'sandwiches', description: 'Triple-layered vegetable and cheese sandwich.', image: '/images/menu/sandwich/veg-club-sandwich.png' },
  { id: 'veg-sandwich', name: 'Grilled Veg Sandwich', price: 50, category: 'sandwiches', description: 'Grilled sandwich loaded with mixed veggies.', image: '/images/menu/sandwich/veg-sandwich.png' },
  { id: 'veg-with-cheese', name: 'Veg Cheese Sandwich', price: 70, category: 'sandwiches', description: 'Vegetable sandwich with a generous layer of cheese.', image: '/images/menu/sandwich/veg-with-cheese.png', popular: true },

  // Juices
  { id: 'abc-juice', name: 'ABC Juice', price: 100, category: 'juices', description: 'Apple, Beetroot, and Carrot healthy mix.', image: '/images/menu/fresh-juices/abc.png', popular: true },
  { id: 'kiwi-juice', name: 'Fresh Kiwi Juice', price: 80, category: 'juices', description: 'Freshly squeezed kiwi juice, packed with vitamin C.', image: '/images/menu/fresh-juices/kiwi.png' },
  { id: 'lemon-juice', name: 'Fresh Lemon Juice', price: 25, category: 'juices', description: 'Classic refreshing sweet and salt lemon juice.', image: '/images/menu/fresh-juices/lemon.png' },
  { id: 'mango-juice', name: 'Mango Juice', price: 60, category: 'juices', description: 'Sweet and thick mango juice, a seasonal favorite.', image: '/images/menu/fresh-juices/mango.png', popular: true },
  { id: 'pineapple-juice', name: 'Pineapple Juice', price: 60, category: 'juices', description: 'Refreshing pineapple juice to beat the heat.', image: '/images/menu/fresh-juices/pinapple.png' },
  { id: 'pomegranate-juice', name: 'Pomegranate Juice', price: 80, category: 'juices', description: '100% pure pomegranate juice, full of antioxidants.', image: '/images/menu/fresh-juices/pomegranate.png', popular: true },
  { id: 'watermelon-juice', name: 'Watermelon Juice', price: 50, category: 'juices', description: 'Hydrating watermelon juice, perfect for summer.', image: '/images/menu/fresh-juices/watermelon.png' },
  { id: 'classic-mojito', name: 'Classic Mojito', price: 70, category: 'juices', description: 'Refreshing lime and muddled mint leaves.', image: '/images/menu/mojito.png' },

  // Cool Drinks
  { id: '7up', name: '7Up', price: 10, category: 'drinks', description: 'Chilled clear lemon-lime soda.', image: '/images/cool-drinks/7up.png' },
  { id: 'campa-cola', name: 'Campa Cola', price: 10, category: 'drinks', description: 'Classic Indian cola drink.', image: '/images/cool-drinks/campa.png' },
  { id: 'campa-green', name: 'Campa Lemon', price: 10, category: 'drinks', description: 'Refreshing lemon-flavored soda.', image: '/images/cool-drinks/campa-green.png' },
  { id: 'campa-orange', name: 'Campa Orange', price: 10, category: 'drinks', description: 'Sweet orange soda.', image: '/images/cool-drinks/campa-orenge.png' },
  { id: 'lemon-cool', name: 'Bovonto Lemon', price: 10, category: 'drinks', description: 'Local favorite chilled lemon drink.', image: '/images/cool-drinks/lemon-cool.png' },
  { id: 'mirinda-orange', name: 'Mirinda Orange', price: 10, category: 'drinks', description: 'Chilled bubbly orange soda.', image: '/images/cool-drinks/orenge.png' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'sandwiches', label: 'Sandwiches' },
  { id: 'snacks', label: 'Snacks & Noodles' },
  { id: 'juices', label: 'Fresh Juices' },
  { id: 'drinks', label: 'Cool Drinks' },
];

const MENU_CARDS = [
  '/images/menu-cards/fresh-juice-menu.png',
  '/images/menu-cards/burger-menu.png',
  '/images/menu-cards/sandwich-menu.png',
  '/images/menu-cards/snack-noodles-menu.png',
  '/images/menu-cards/falooda-menu.png',
  '/images/menu-cards/ice-creams-menu.png',
  '/images/menu-cards/lazzi-shakes-salad-menu.png',
  '/images/menu-cards/milkshakes-compo-menu.png',
  '/images/menu-cards/vitamin-power-menu.png',
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Lock body scroll and hide nav when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-card-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-card-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-card-open');
    };
  }, [isModalOpen]);

  const filteredItems = MENU_ITEMS.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  const nextCard = () => setCurrentCardIndex((prev) => (prev + 1) % MENU_CARDS.length);
  const prevCard = () => setCurrentCardIndex((prev) => (prev === 0 ? MENU_CARDS.length - 1 : prev - 1));

  return (
    <main className="relative z-10 w-full flex-grow bg-white flex flex-col overflow-x-hidden" role="main">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[40%] -left-24 w-80 h-80 bg-secondary-container/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow">
        {/* Page Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto animate-fadeIn">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-on-surface mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed mb-6"
          >
            Indulge in our curated selection of artisanal teas, freshly squeezed juices, and hand-crafted gourmet snacks designed to elevate your palate.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff9f1c] to-[#fd8b00] text-white font-display text-sm font-bold uppercase tracking-wider hover:shadow-xl shadow-[0_6px_22px_rgba(253,139,0,0.3)] hover:scale-[1.03] active:scale-95 transition-all cursor-pointer border-t border-white/20"
          >
            <FileText className="w-5 h-5" />
            View Menu Card
          </motion.button>
        </div>

        {/* Filter controls */}
        <div className="w-full mb-12 -mx-6 md:mx-0 px-6 md:px-0 relative mt-4">
          {/* Categories Tab list */}
          <nav className="flex gap-3 overflow-x-auto flex-nowrap w-full pb-4 justify-start md:justify-center scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" aria-label="Menu categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-display text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-300 cursor-pointer snap-start ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#ff9f1c] to-[#fd8b00] text-white shadow-md shadow-[rgba(253,139,0,0.25)] scale-[1.02]'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-[#ff9f1c]/10 hover:text-[#fd8b00]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                key={item.id}
                className="bg-white/70 backdrop-blur-md rounded-2xl p-5 border border-amber-50/65 shadow-md flex flex-col justify-between group hover:shadow-xl hover:border-amber-100/80 transition-all duration-300"
              >
                <div>
                  <div className="relative mb-5 w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container shadow-inner">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className={`transition-transform duration-700 group-hover:scale-105 pointer-events-none ${
                        item.category === 'drinks' ? 'object-contain p-4' : 'object-cover'
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
                      referrerPolicy="no-referrer"
                    />
                    
                    {item.popular && (
                      <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-mono uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-display text-lg md:text-xl font-bold text-on-surface text-left group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-display text-lg md:text-xl font-extrabold text-primary shrink-0">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-on-surface-variant text-left leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-amber-100/30 flex items-center justify-between text-xs font-mono text-on-surface-variant/70">
                  <span>Chennai Recipe</span>
                  <span>Made Fresh Daily</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Menu Card Modal Carousel */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[310] p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close menu card viewer"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Left Arrow */}
            <button
              onClick={prevCard}
              className="absolute left-4 md:left-12 lg:left-24 z-[310] p-3 bg-white/10 hover:bg-white/25 text-white rounded-full backdrop-blur-md transition-all cursor-pointer shadow-lg hover:scale-105"
              aria-label="Previous menu card"
            >
              <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
            </button>

            {/* Middle Content (60% width on large screens) */}
            <div className="relative w-full max-w-[90%] md:max-w-[70%] lg:max-w-[55%] aspect-[3/4] max-h-[85vh] md:max-h-[90vh] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCardIndex}
                  initial={{ opacity: 0, x: 100, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20"
                >
                  <Image
                    src={MENU_CARDS[currentCardIndex]}
                    alt={`Menu Card ${currentCardIndex + 1}`}
                    fill
                    className="object-contain bg-black/40"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 70vw, 55vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextCard}
              className="absolute right-4 md:right-12 lg:right-24 z-[310] p-3 bg-white/10 hover:bg-white/25 text-white rounded-full backdrop-blur-md transition-all cursor-pointer shadow-lg hover:scale-105"
              aria-label="Next menu card"
            >
              <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
            </button>

            {/* Image Indicator / Dots */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {MENU_CARDS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCardIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentCardIndex === idx ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to menu card ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
