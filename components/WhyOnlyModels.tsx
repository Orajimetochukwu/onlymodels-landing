'use client';

import { motion } from 'framer-motion';
import { Lock, Users, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: '100% Transparency',
    description: 'No hidden fees. No surprise deductions. You see every dollar, every decision.',
  },
  {
    icon: Users,
    title: 'Authentic U.S. Chatters',
    description: 'Real conversations that convert. No bots, no scripts that sound fake.',
  },
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'Your content stays yours. Advanced leak protection and legal support included.',
  },
  {
    icon: TrendingUp,
    title: 'Custom Growth Plans',
    description: 'No cookie-cutter strategies. Your brand, your goals, your roadmap.',
  },
];

export default function WhyOnlyModels() {
  return (
    <section className="py-24 bg-dark-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Built Different. <span className="text-gradient">Proven Results.</span>
          </h2>
          <p className="text-xl text-gray-400">The Agency That Actually Puts Creators First</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 text-center leading-relaxed"
        >
          Most agencies treat you like a number. We treat you like a partner. OnlyModels was founded by
          former creators who got tired of broken promises, hidden fees, and one-size-fits-all strategies.{' '}
          <span className="text-white font-semibold">We built the agency we wish existed.</span>
        </motion.p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-10 text-center">The OnlyModels Difference:</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 bg-dark rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            Start Your Application
          </button>
        </motion.div>
      </div>
    </section>
  );
}
