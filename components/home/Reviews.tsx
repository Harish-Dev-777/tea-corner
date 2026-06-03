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
    quote: '"The Chicken Special Burger here is vera level, macha! The sauce is just magic. Sad that they don\'t deliver snacks to home, but coming to Choolaimedu with the gang is a regular habit now!"',
    rating: 5,
  },
  {
    id: 'review-2',
    name: 'Priya Lakshmi',
    quote: '"Semma place to chill! Their Mint Mojito is so refreshing. It\'s a bummer they don\'t do home delivery for snacks, but sitting here and eating hot Bread Omelette is a separate vibe altogether."',
    rating: 5,
  },
  {
    id: 'review-3',
    name: 'Karthik S.',
    quote: '"Best tea spot in Vadapalani! Tried their Murukku Sandwich and Mango Juice. Everything is super clean, quick, and very pocket-friendly. A regular hangout spot for us!"',
    rating: 5,
  },
  {
    id: 'review-4',
    name: 'Ananya Krishnan',
    quote: '"Their Veg Club Sandwich is toasted to perfection and always fresh. Even though we can\'t order snacks to home, driving down to the shop is totally worth it for this taste!"',
    rating: 5,
  },
  {
    id: 'review-5',
    name: 'Vigneshwaran K. (Vicky)',
    quote: '"Macha, their Chicken Puffs are ultimate! No home delivery for food items, so you have to drop by. But honestly, eating it hot-hot at the shop is the real deal!"',
    rating: 5,
  },
  {
    id: 'review-6',
    name: 'Divya Balaji',
    quote: '"The Classic Faluda here is absolute bliss! Visited yesterday with my friends. The staff is super friendly, and the evening vibe is always lively. Best place in Chennai!"',
    rating: 5,
  },
  {
    id: 'review-7',
    name: 'Sathish Kumar',
    quote: '"Wanted to order their Egg Burger to my house, but they said snacks are only dine-in/takeaway. Went to the shop directly. Bro, the burger was so hot and juicy, I\'m glad they don\'t deliver and let it get soggy!"',
    rating: 5,
  },
  {
    id: 'review-8',
    name: 'Deepika Selvam',
    quote: '"Their Avocado Egg Sandwich is top notch—healthy and super tasty! Yes, they don\'t deliver snack items home, but visiting their cozy shop is the best part of my weekend."',
    rating: 5,
  },
  {
    id: 'review-9',
    name: 'Ganesh Prabhu',
    quote: '"Best ginger tea and hot snacks in the Vadapalani-Choolaimedu area. Pocket-friendly prices and top-class quality. A must-visit spot for every tea lover!"',
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
