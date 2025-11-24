'use client';

import { motion } from 'framer-motion';
import { DollarSign, Gift, Star, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const perks = [
  { icon: DollarSign, text: 'Cash bonus for every successful referral' },
  { icon: Gift, text: 'Exclusive OnlyModels swag' },
  { icon: Star, text: 'VIP referral status with additional benefits' },
];

export default function ReferFriend() {
  const [copied, setCopied] = useState(false);

  const copyReferralLink = () => {
    navigator.clipboard.writeText('https://onlymodels.com/ref/your-code');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-dark-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Know a Creator <span className="text-gradient">Ready to Level Up?</span>
          </h2>
          <p className="text-xl text-gray-400">Refer a Creator, Earn Rewards</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 text-center leading-relaxed"
        >
          If you know a creator who'd be perfect for OnlyModels, send them our way. When they join
          and hit their first milestone, you both get rewarded.
        </motion.p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">Referral Perks:</h3>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-dark/50 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <perk.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">{perk.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl text-center text-white font-semibold mb-8"
        >
          Help your friends grow. Get rewarded for it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-dark/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
            <p className="text-sm text-gray-400 mb-3 text-center">Share your unique referral link:</p>

            <div className="flex items-center gap-3">
              <div className="flex-1 px-4 py-3 bg-dark-light rounded-lg border border-gray-700 text-gray-300 font-mono text-sm">
                https://onlymodels.com/ref/your-code
              </div>

              <button
                onClick={copyReferralLink}
                className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
              Refer a Creator
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
