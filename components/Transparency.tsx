'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const promises = [
  'Clear commission structure – Discussed upfront, locked in writing',
  'Real-time earnings dashboard – Check your numbers 24/7',
  'No surprise deductions – Every expense explained before approval',
  'Monthly transparent reports – Full breakdown of marketing spend and ROI',
  'Exit anytime clause – No traps, no penalties for leaving',
];

export default function Transparency() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            No Fine Print. <span className="text-gradient">No Hidden Fees.</span>
          </h2>
          <p className="text-xl text-gray-400">Radical Transparency, Always</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mb-12 leading-relaxed"
        >
          You&apos;ve heard the horror stories: agencies taking 50%+ cuts, burying fees in contracts, or
          ghosting creators after signing.{' '}
          <span className="text-white font-semibold">That&apos;s not us.</span>
        </motion.p>

        <div className="mb-12 bg-dark-light/50 backdrop-blur-sm rounded-2xl p-10 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-8 text-primary-light">Our Promise:</h3>

          <div className="space-y-5">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">{promise.split('–')[0]}</span>
                  {promise.includes('–') && ` – ${promise.split('–')[1]}`}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-center text-white font-semibold"
        >
          You own your account. You own your content. You own your future.
        </motion.p>
      </div>
    </section>
  );
}
