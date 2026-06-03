'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

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
                  href="https://maps.google.com/?q=96/10+Periyar+Padai+Choolaimedu+Vadapalani+Chennai+600094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3.5 group cursor-pointer text-on-surface hover:text-primary transition-colors duration-200"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-sans text-sm md:text-base text-on-surface-variant group-hover:text-primary transition-colors">
                    Vadapalani, # 96/10, Periyar Padai Choolaimedu, Chennai-600 094
                  </span>
                </a>

                {/* Call */}
                <a
                  href="tel:+917012707168"
                  className="flex gap-3.5 group cursor-pointer text-on-surface hover:text-primary transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-sans text-sm md:text-base text-on-surface-variant group-hover:text-primary transition-colors">
                    +91 70127 07168
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917012707168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3.5 group cursor-pointer text-on-surface hover:text-[#25D366] transition-colors duration-200"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="font-sans text-sm md:text-base text-on-surface-variant group-hover:text-[#25D366] transition-colors">
                    +91 70127 07168
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
                  <span className="text-on-surface font-semibold">Monday - Sunday</span>
                  <span className="text-on-surface-variant">07:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
