'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function PrivacyPolicyPage() {
  return (
    <main className="relative z-10 w-full flex-grow bg-surface flex flex-col py-32 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-outline-variant/10"
        >
          <h1 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <p>
              Welcome to Tea Corner ("we," "our," or "us"). We are a local coffee and tea shop based in Chennai, specifically located at Vadapalani, # 96/10, Periyar Padai Choolaimedu. We are committed to protecting your personal information and your right to privacy.
            </p>
            
            <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4">1. Information We Collect</h2>
            <p>
              When you visit our café in Chennai or use our website, we may collect basic information that you voluntarily provide to us, such as your name, phone number, and email address (for instance, if you contact us or join our local loyalty program).
            </p>
            
            <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect primarily to communicate with you, process your feedback, and inform you about promotions, new menu items, or events happening at our Vadapalani location. We do not sell your personal data to third parties.
            </p>

            <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4">3. Local Chennai Operations</h2>
            <p>
              Since we are a local business operating strictly within Chennai, Tamil Nadu, we handle all our customer interactions and data in accordance with local Indian regulations. Any physical data collected at our store is securely stored on-site or in our secure local systems.
            </p>

            <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4">4. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, you may contact us via WhatsApp at +91 70127 07168 or visit us in person at our Vadapalani store.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
