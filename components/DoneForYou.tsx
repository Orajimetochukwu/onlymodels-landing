'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const services = [
  'Professional chatting service (U.S.-based)',
  'Complete content strategy & posting schedule',
  'Multi-platform marketing campaigns',
  'Subscriber engagement & retention',
  'Revenue optimization & upselling',
  'Analytics & performance tracking',
  'Anti-leak content protection',
  'Personal account manager',
];

export default function DoneForYou() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-purple-950/20 to-dark" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-pink-500" />
              <span className="text-pink-500 font-semibold text-lg uppercase tracking-wider">
                Done For You
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">We Handle</span>{' '}
              <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Everything
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Focus on creating content. We'll handle everything else—from chatting with your fans
              to protecting your content, growing your audience, and maximizing your revenue.
            </p>

            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl shadow-pink-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See How It Works
            </motion.button>
          </motion.div>

          {/* Right side - Services card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative p-8 md:p-10 bg-gradient-to-br from-pink-500/10 via-purple-600/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500 rounded-3xl opacity-20 blur-xl" />

                {/* Content */}
                <div className="relative">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                      Full-Service
                    </span>
                    Package
                  </h3>

                  <ul className="space-y-4">
                    {services.map((service, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{service}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Bottom badge */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-center text-gray-400 text-sm">
                      <span className="text-pink-500 font-bold">20% commission</span> on earnings
                      {' • '}
                      <span className="text-cyan-500 font-bold">No upfront costs</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-2xl opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full blur-2xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
