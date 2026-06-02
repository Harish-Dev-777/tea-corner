'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import MobileNav from '@/components/home/MobileNav';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'juices' | 'snacks' | 'bakery' | 'drinks';
  image: string;
  popular?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'signature-burger',
    name: 'Signature Burger',
    price: 249,
    category: 'snacks',
    description: 'Our house-special double patty burger with caramelized onions and signature melted cheese.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-rLRiEDCEscx5Ts-CHaLzpaDz3HThiYfEYEYmSordpoPzbGEjlvSu-96_WVTC5BUDwi5abrwhAkAGFGOqQc_-Wl6Wr1vGVLj_mFaNvffsJZAuaTotmyVmQP6N1JtSzFMu4u0UY2npj8ElpgAtUxDybtpy6H3AQjz_9yABRSrGubS6x4Bp4QTWp8PRJy3KhJVs-U7_nZT-50G25-ciy-9DvrTFr26ijG8D-jy9YBnupJ4glW6e5z99WxbpKW7o9doV_5yQOqx9lFv4',
    popular: true,
  },
  {
    id: 'gourmet-sandwich',
    name: 'Gourmet Sandwich',
    price: 189,
    category: 'snacks',
    description: 'Toasted sourdough bread filled with garden-fresh greens and premium aged cheddar.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKkAkQJxFnuPkWhILSRdAblCbUSAPHhfaeEI8CRXiG0y3tUNWE826n74bNbt_UlU_nzENZQZw1C_89EqSfFCSxqJU_eoolmbFCHGWvH5J7O-x_rv4cU-av29PG_jqAyu_1WMZvCkJ_cZJC4IeQwbAGt74pSiRq5n9jAl8kef08qwNgWXMpQ6fntyOVscYlrEC8rdp27bAhxnVlBWsAIfE0lXf0n_uKCIG4P1qADKLtg7uWAxrA6Iu0sYRfXICac157xllm_eskoPbD',
  },
  {
    id: 'loaded-nacho-fries',
    name: 'Loaded Nacho Fries',
    price: 159,
    category: 'snacks',
    description: 'Crispy golden fries topped with spicy nacho cheese, jalapeños, and fresh salsa.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYn-KPXqLKwAOX-jT8AHkyDli4Vml9q-BxOahfGlsc2fy_BqgY9fRyVonrtE1f3nu6PmeNUUEFMu-T2hrMEgt8AICdzg-hGbf5H9nQiaUxivNaylEEXeEpxGbXgKMcizb3y4vPFqrOfa5-9NkVgWVCim0vHAKELyJAHq_73QvIC7HLXccGiOgugZrvYTN3fZmucbFttQ7-9dOow-zIoNvDrY5ef2Yp4W99_8nUjIbRcVnTJMQaCLUGj4oVFFWgzXVNxFn2zutSCHbK',
  },
  {
    id: 'abc-juice',
    name: 'ABC (Apple, Beet, Carrot)',
    price: 120,
    category: 'juices',
    description: 'The ultimate health booster. Cold-pressed fresh apples, vibrant beets, and sweet carrots.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdZ6yquanZkNXKYvdfnK3jgjHvHqxzP84c2QjnQTuljSz6F-IHKdVtJSA6efRstT67XV_tLCorUZeq85S19N69ZFRAY915p8Cx7Y_KPpPF8xnn7yx1_cuGno39cLcmZiRAPLX71PUtYSzitMXJ3_6G8ylvK0cR3K7tS4e_qxT32iRwsxaj97dV43bJdqZ0ieT4VNL8k1rqc2YdyQyH4y3-DC5SjEBFpxQVxIo0_QppXda2ehIEEa1iqXhojGcNBoGS8_wmWeiTA6i9',
    popular: true,
  },
  {
    id: 'classic-mojito',
    name: 'Classic Mojito',
    price: 110,
    category: 'drinks',
    description: 'Refreshing lime and muddled mint leaves topped with sparkling soda and crushed ice.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpOy9cJ0u05HaGI4Ij2DdH3ESX_HrXoLkllIwqSYEhb2qdrOqHT-AKttXBcwxIeiF4zyXGlXiSIPXqKC_Jt4GHaF7Zys-LSpeFbRrC9pKp0TTEi1ktEW0io4ldaR2I2o-uLMybZIYBSdATadCoPaiTIuon4ebAIyixsCx401Pf7CHkwXbQpg48xpYP2apxe2M-kRqIXYdO3eNaZwLY5Kye5OcgJ7wwz9mqtbFcCVp6bZ6gR8FOiVWYVj0ZW1AQrVzydc6aFGa89v9V',
  },
  {
    id: 'palkova-bun',
    name: 'Palkova Bun',
    price: 45,
    category: 'bakery',
    description: 'A local favorite. Soft sweet bun stuffed with rich, caramelized milk khoa.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFMwcGSej5LR_B69Pnnvvh4ceCGwihGUcTBMuEl6c4GUxM5zwJiVfpD5JzPWTez7xks3SXTNDP8dYZcJ-zXQW68qk8kf4h6ZZzL1fcWcf_jpqoXRw94Mf7b4JZtfX-R5mY6rayYXE5BTDJcDJb5HJZw67geHmbvPP4uv8MhGuX71sOlmqXf3yvgh4rgZUnTo4PswdEYrTrr03sXLO5_rSHMaS8izolDmPkuS-H5ZpOva9urbSfmI7sttR5qBgRcaJaovjH0k9mpB7Q',
    popular: true,
  },
  {
    id: 'crispy-samosa',
    name: 'Crispy Samosa',
    price: 30,
    category: 'snacks',
    description: 'Traditional spiced potato filling in a perfectly flaky, hand-folded pastry crust.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw5L7m8YgKOfEXvp8h6AIupLUfyrLmXM2Jg_oFsvvwkIvmnq1gjS6oNaG_K7yzcV-jb5UE-FMK-jQUQFUiBLV-I_a7VGCjN1iKK2TAbJMzkUGqLPQ2JHlzAwZWnl6MK-CJj1QRTjUfJXks5J_1kNp_Q6SXUJgESDJpZqluvlyo5m6HKgceoFjDWJPeGpNA9eNJnuDOzuUXldwvj_fnAs7Kz__hfokN6FdFqaC_mT3ZEMcbdMcIzbCvLFIvfNhEHwQX86pLpdiPdmWG',
  },
  {
    id: 'pomegranate-juice',
    name: 'Fresh Pomegranate',
    price: 140,
    category: 'juices',
    description: '100% pure juice from hand-picked pomegranates. No added sugar, just pure antioxidant goodness.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaeAmwr09KtBXAFbIm7SwGGsPXEjIX1va4HCDZNgOCl3xU7yNZwUguobOPcXct2mhZ3hm9KbjmTcVXmmXHh7-S8eOW2EAq3nmztQh-BkIW0It6eOpGLkfAkVPCplHZ_EndNUCinLNOxYSOU5I5VQtluL9ygbwq_kFY1d3n53kPho1QAQLGLKVDSi2_6v7-pe4G65u9NaX4eLUErWzKTGjSpxhgvBXqJ0LNAiiXqXrQufYKoxijfEFbiRlIqL7M5gQnDziGDiJCnEwg',
  },
  {
    id: 'egg-puff',
    name: 'Masala Egg Puff',
    price: 35,
    category: 'bakery',
    description: 'Buttery, flaky puff pastry with a whole spiced egg filling. Baked fresh hourly.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaESdfm9gx2yjgE93v_-fSBLUJWZA0qvjVQpHRYsJJmiUcL3-MV65RhLCz2CaSzf0TtJV8s-SGToDgbeDIrqBIeuE_RA8Mpf38x6LlOkbJP6yW229dURHTJT_liW_b-lBNBtV_Xoa4b1RUqhb5gGqtFe6VMW4pAERm2YOP1aytxL7N0n9XSvZI0lOOMmnx2kl0ONyaQqwCIVRI3yYR2GdHIVw8S7BTcIQBolBRnnzsEkKIDenALyZ40Oz3v9OI8uWPCMkie61_L0KS',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'juices', label: 'Fresh Juices' },
  { id: 'snacks', label: 'Savory Snacks' },
  { id: 'bakery', label: 'Bakery & Sweets' },
  { id: 'drinks', label: 'Cool Drinks' },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = MENU_ITEMS.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  return (
    <main className="relative z-10 w-full min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Header />
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[40%] -left-24 w-80 h-80 bg-secondary-container/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow">
        {/* Page Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto animate-fadeIn">
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
            className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed"
          >
            Indulge in our curated selection of artisanal teas, freshly squeezed juices, and hand-crafted gourmet snacks designed to elevate your palate.
          </motion.p>
        </div>

        {/* Filter controls */}
        <div className="w-full max-w-full overflow-hidden mb-12">
          {/* Categories Tab list */}
          <div className="flex gap-3 overflow-x-auto flex-nowrap w-full md:w-auto pb-3 justify-start md:justify-center px-6 md:px-2 scroll-smooth touch-pan-x [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-display text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#ff9f1c] to-[#fd8b00] text-white shadow-md shadow-[rgba(253,139,0,0.25)] scale-[1.02]'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-[#ff9f1c]/10 hover:text-[#fd8b00]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
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
                      className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
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

      <Footer />
      <MobileNav />
    </main>
  );
}
