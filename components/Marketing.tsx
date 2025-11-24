'use client';

import { motion } from 'framer-motion';
import { Smartphone, Target, Edit3, TrendingUp, Users as UsersIcon, Palette } from 'lucide-react';

const services = [
  { icon: Smartphone, text: 'Social media management across all platforms' },
  { icon: Target, text: 'Paid advertising campaigns with proven ROI' },
  { icon: Edit3, text: 'Content strategy and posting schedules' },
  { icon: TrendingUp, text: 'A/B testing and performance optimization' },
  { icon: UsersIcon, text: 'Collaboration and shoutout coordination' },
  { icon: Palette, text: 'Graphic design and promotional assets' },
];

const platforms = ['Twitter', 'Reddit', 'TikTok', 'Instagram', 'YouTube', 'Telegram'];

export default function Marketing() {
  return (
    <section className="py-24 bg-dark-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Marketing That <span className="text-gradient">Actually Works</span>
          </h2>
          <p className="text-xl text-gray-400">Custom Campaigns. Measurable Results. Zero Guesswork.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 text-center leading-relaxed"
        >
          Generic marketing doesn&apos;t cut it. Your brand is unique—your strategy should be too.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 text-center leading-relaxed"
        >
          OnlyModels builds hyper-targeted campaigns designed around <em className="text-white font-semibold">your</em> audience,{' '}
          <em className="text-white font-semibold">your</em> content style, and{' '}
          <em className="text-white font-semibold">your</em> revenue goals. From Reddit to Twitter to
          TikTok, we handle every platform while you focus on creating.
        </motion.p>

        {/* Platform orbit visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-md mx-auto mb-16 h-64"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/50">
            <span className="text-2xl font-bold">YOU</span>
          </div>

          {platforms.map((platform, index) => {
            const angle = (index * 360) / platforms.length;
            const radius = 120;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className="px-4 py-2 bg-dark-light border border-primary/30 rounded-full text-sm font-semibold text-primary-light hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                  {platform}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">What We Handle:</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-dark/50 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary-light" />
                </div>
                <p className="text-gray-300 leading-relaxed pt-1">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl text-center text-white font-semibold mb-8"
        >
          You create. We amplify.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            Explore Our Marketing Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
