'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Target, BarChart3 } from 'lucide-react';

const features = [
  { icon: GraduationCap, text: 'Trained in psychology and sales techniques' },
  { icon: BookOpen, text: 'Personalized voice guides for every creator' },
  { icon: Target, text: 'Focus on high-value fan retention' },
  { icon: BarChart3, text: 'Tracked metrics: response time, conversion rate, upsell success' },
];

export default function InHouseChatters() {
  return (
    <section className="py-24 bg-dark-light relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Chatters Who <span className="text-gradient">Sound Like You</span>
          </h2>
          <p className="text-xl text-gray-400">Because Your Fans Deserve Real Conversations</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-6 text-center leading-relaxed"
        >
          <span className="text-white font-semibold">Bad chatting costs you money. Period.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 text-center leading-relaxed"
        >
          Our U.S.-based team doesn&apos;t just send messages—they create experiences. Extensively trained
          in your voice, tone, and boundaries, they handle DMs like you would, converting casual fans
          into loyal subscribers.
        </motion.p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-10 text-center">What Makes Our Chatters Elite:</h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-dark/50 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-light" />
                </div>
                <p className="text-gray-300 leading-relaxed pt-2">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 max-w-2xl mx-auto text-center mb-12"
        >
          <p className="text-2xl md:text-3xl font-bold text-white mb-2">
            Average chat conversion rate:
          </p>
          <p className="text-4xl md:text-5xl font-bold text-gradient">
            37% higher
          </p>
          <p className="text-gray-400 mt-2">than industry standard</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            Meet Our Chat Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
