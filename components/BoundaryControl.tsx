'use client';

import { motion } from 'framer-motion';
import { Check, FileText } from 'lucide-react';

const boundaries = [
  "Content types you're comfortable with",
  "Topics your chatters can/cannot discuss",
  "Custom requests you will/won't fulfill",
  "Pricing structures for different content tiers",
];

export default function BoundaryControl() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Your Boundaries. <span className="text-gradient">Always Respected.</span>
          </h2>
          <p className="text-xl text-gray-400">Complete Control Over Your Comfort Zone</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 text-center leading-relaxed"
        >
          <span className="text-white font-semibold">You set the rules. We enforce them.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-dark-light/50 backdrop-blur-sm rounded-2xl p-10 md:p-12 border border-gray-800 max-w-4xl mx-auto mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center">
              <FileText className="w-7 h-7 text-primary-light" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Your Boundary Document</h3>
              <p className="text-gray-400">Created before we start</p>
            </div>
          </div>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Before we start, we create a detailed boundary document covering:
          </p>

          <div className="space-y-4 mb-8">
            {boundaries.map((boundary, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-dark/50 rounded-lg"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-gray-300 leading-relaxed">{boundary}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
            <p className="text-white font-semibold text-lg mb-2">
              Our chatters are trained to never cross your lines.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If a fan requests something outside your boundaries, we handle it professionally—no
              exceptions.
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl text-center text-white font-semibold mb-8"
        >
          You're in control. Always.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            See Our Boundary Framework
          </button>
        </motion.div>
      </div>
    </section>
  );
}
