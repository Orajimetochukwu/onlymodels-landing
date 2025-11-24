'use client';

import { motion } from 'framer-motion';
import { Calendar, DollarSign, Target, TrendingUp } from 'lucide-react';

const topics = [
  { icon: DollarSign, text: 'Revenue optimization and pricing strategy' },
  { icon: Target, text: 'Content planning and audience psychology' },
  { icon: TrendingUp, text: 'Platform algorithm insights and timing' },
  { icon: Calendar, text: 'Long-term career growth and diversification' },
];

export default function Consulting() {
  return (
    <section className="py-24 bg-dark-light relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Strategy Sessions <span className="text-gradient">That Drive Results</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">Direct Access to Industry Experts</p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Every OnlyModels creator gets paired with a dedicated strategist who knows your niche,
              your audience, and your goals.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary-light mb-6">
                Monthly one-on-one consulting sessions cover:
              </h3>

              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <topic.icon className="w-5 h-5 text-primary-light" />
                    </div>
                    <p className="text-gray-300 leading-relaxed pt-2">{topic.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-lg text-white font-semibold mb-8">
              You're not just getting a manager. You're getting a partner invested in your success.
            </p>

            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
              Book a Consultation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-dark rounded-2xl border border-gray-800 p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold">
                  SM
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Strategy Meeting</p>
                  <p className="text-sm text-gray-400">With Your Dedicated Expert</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-primary-light" />
                  <span>Monthly 1-on-1 Sessions</span>
                </div>
                <div className="bg-dark-light/50 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-sm text-gray-400 mb-2">Next Session Topics:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Q4 revenue goals review</li>
                    <li>• New content strategy rollout</li>
                    <li>• Subscriber retention tactics</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-3">Your Progress This Quarter:</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Revenue Growth</span>
                    <span className="text-green-400 font-semibold">+340%</span>
                  </div>
                  <div className="w-full bg-dark-light rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
