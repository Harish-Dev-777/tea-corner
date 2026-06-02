'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  quote: string;
  rating: number;
}

const REVIEWS: Review[] = [
  {
    id: 'review-1',
    name: 'Arjun Ramanathan',
    quote: '"The Signature King burger is hands down the best I\'ve had in Chennai. The sauce is truly magical!"',
    rating: 5,
  },
  {
    id: 'review-2',
    name: 'Priya Lakshmi',
    quote: '"Perfect place for a weekend treat. Their Mint Mojito is incredibly refreshing. Great service too!"',
    rating: 5,
  },
  {
    id: 'review-3',
    name: 'Karthik S.',
    quote: '"Lovely ambiance and the Faluda is a work of art. My kids absolutely loved the Nacho Fries."',
    rating: 4,
  },
  {
    id: 'review-4',
    name: 'Meera Nair',
    quote: '"The Gourmet Club Sandwich was toasted to perfection. Extremely fresh avocados and rich flavor layers!"',
    rating: 5,
  },
  {
    id: 'review-5',
    name: 'Rohan Kapoor',
    quote: '"Their double cheeseburgers are stacked high with premium toppings. Quickest hot delivery in town!"',
    rating: 5,
  },
  {
    id: 'review-6',
    name: 'Divya Balaji',
    quote: '"The Tropical Faluda is a colorful stack of sheer happiness. A delightful work of art!"',
    rating: 5,
  },
  {
    id: 'review-7',
    name: 'Sathish Kumar',
    quote: '"Super fast delivery and everything arrived piping hot. The Loaded Fries were beautifully crunchy!"',
    rating: 5,
  },
  {
    id: 'review-8',
    name: 'Shalini Roy',
    quote: '"Staff is lovely and the quality of ingredients is top tier. My go-to order place in Chennai."',
    rating: 4,
  },
  {
    id: 'review-9',
    name: 'Sanjay Mohan',
    quote: '"Incredible quality and taste. The burger is incredibly juicy and the fries are pure perfection."',
    rating: 5,
  },
];

const GROUPS = [
  [REVIEWS[0], REVIEWS[1], REVIEWS[2]],
  [REVIEWS[3], REVIEWS[4], REVIEWS[5]],
  [REVIEWS[6], REVIEWS[7], REVIEWS[8]],
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-white overflow-hidden w-full relative z-10">
      <div className="w-full">
        <div className="text-center mb-12 px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-3"
          >
            Customer Reviews
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-1 bg-primary-container mx-auto rounded-full origin-center"
          />
        </div>

        {/* CSS for custom continuous loop marquee */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .reviews-marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 38s linear infinite;
          }
          .reviews-marquee-track:hover {
            animation-play-state: paused;
          }
        `}} />

        {/* Carousel continuous scrolling marquee track */}
        <div className="w-full overflow-hidden relative py-4 select-none [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]">
          <div className="reviews-marquee-track gap-8 px-4">
            
            {/* First sequence of reviews */}
            {REVIEWS.map((review) => (
              <div
                key={`${review.id}-first`}
                className="w-[280px] sm:w-[320px] md:w-[380px] shrink-0 bg-surface-container-low p-6 rounded-[20px] flex flex-col gap-4 border border-outline-variant/15 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:translate-y-[-4px] group text-left"
              >
                {/* Star ratings */}
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const isFilled = i < review.rating;
                    return (
                      <Star
                        key={i}
                        className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                          isFilled ? 'fill-primary text-primary' : 'text-outline-variant'
                        }`}
                      />
                    );
                  })}
                </div>

                {/* Review text */}
                <p className="font-sans text-sm md:text-base text-on-surface italic leading-relaxed font-normal whitespace-normal">
                  {review.quote}
                </p>

                {/* Reviewer name */}
                <div className="mt-auto pt-1">
                  <p className="font-display text-[12px] font-bold text-primary uppercase tracking-wider">
                    {review.name}
                  </p>
                </div>
              </div>
            ))}

            {/* Second identical sequence of reviews for perfect seamless looping transition */}
            {REVIEWS.map((review) => (
              <div
                key={`${review.id}-duplicate`}
                className="w-[280px] sm:w-[320px] md:w-[380px] shrink-0 bg-surface-container-low p-6 rounded-[20px] flex flex-col gap-4 border border-outline-variant/15 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:translate-y-[-4px] group text-left"
              >
                {/* Star ratings */}
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const isFilled = i < review.rating;
                    return (
                      <Star
                        key={i}
                        className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                          isFilled ? 'fill-primary text-primary' : 'text-outline-variant'
                        }`}
                      />
                    );
                  })}
                </div>

                {/* Review text */}
                <p className="font-sans text-sm md:text-base text-on-surface italic leading-relaxed font-normal whitespace-normal">
                  {review.quote}
                </p>

                {/* Reviewer name */}
                <div className="mt-auto pt-1">
                  <p className="font-display text-[12px] font-bold text-primary uppercase tracking-wider">
                    {review.name}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
