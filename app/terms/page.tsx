'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function TermsOfServicePage() {
  return (
    <main className="relative z-10 w-full flex-grow bg-surface flex flex-col py-32 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-outline-variant/10"
        >
          <h1 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <p>
              Welcome to Tea Corner. These Terms of Service govern your use of our website and your visits to our physical café located at Vadapalani, # 96/10, Periyar Padai Choolaimedu, Chennai - 600 094. By accessing our website or visiting our store, you agree to these terms.
            </p>
            
            <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4">1. Store Policies & Dine-in</h2>
            <p>
              We strive to provide a welcoming and safe environment for all our customers in Chennai. We reserve the right to refuse service to anyone who engages in disruptive behavior or violates local store policies. Seating is on a first-come, first-served basis unless otherwise reserved.
            </p>
            
            <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4">2. Menu and Pricing</h2>
            <p>
              All prices listed on our website or in-store are in Indian Rupees (INR) and are inclusive of applicable taxes, unless stated otherwise. Prices and availability of our teas, coffees, and snacks are subject to change without prior notice.
            </p>

            <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4">3. Local Deliveries</h2>
            <p>
              If we offer local delivery within the Chennai area (either directly or via third-party partners), delivery times are estimates and subject to local traffic and weather conditions in the Choolaimedu/Vadapalani region.
            </p>

            <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4">4. Governing Law</h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of India, with jurisdiction specifically resting in the courts of Chennai, Tamil Nadu.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
