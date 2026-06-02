'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="visit" className="py-16 px-6 md:px-12 bg-surface-container">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-3"
          >
            Visit Us
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-1 bg-primary-container mx-auto rounded-full origin-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-primary mb-4">
                Contact Details
              </h3>
              <div className="space-y-4">
                {/* Location */}
                <a
                  href="https://maps.google.com/?q=Tea+Corner+Choolaimedu+Periyar+Padhai+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3.5 group cursor-pointer text-on-surface hover:text-primary transition-colors duration-200"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-sans text-sm md:text-base text-on-surface-variant group-hover:text-primary transition-colors">
                    Tea Corner Chennai, Choolaimedu, Periyar Padhai
                  </span>
                </a>

                {/* Call */}
                <a
                  href="tel:+919876543210"
                  className="flex gap-3.5 group cursor-pointer text-on-surface hover:text-primary transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-sans text-sm md:text-base text-on-surface-variant group-hover:text-primary transition-colors">
                    +91 98765 43210
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@teacorner.com"
                  className="flex gap-3.5 group cursor-pointer text-on-surface hover:text-primary transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-sans text-sm md:text-base text-on-surface-variant group-hover:text-primary transition-colors">
                    hello@teacorner.com
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-primary" />
                Opening Hours
              </h3>
              <div className="space-y-3.5 font-sans text-sm md:text-base">
                <div className="flex justify-between border-b border-outline-variant/30 pb-2.5">
                  <span className="text-on-surface font-semibold">Monday - Friday</span>
                  <span className="text-on-surface-variant">10:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/30 pb-2.5">
                  <span className="text-on-surface font-semibold">Saturday</span>
                  <span className="text-on-surface-variant">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/30 pb-2.5">
                  <span className="text-on-surface font-semibold">Sunday</span>
                  <span className="text-on-surface-variant">12:00 PM - 09:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
