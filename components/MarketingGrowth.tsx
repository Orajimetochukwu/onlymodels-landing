'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, TrendingUp, Target, Zap, Users } from 'lucide-react';

const platforms = [
  { name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-600' },
  { name: 'Twitter/X', icon: Twitter, color: 'from-cyan-500 to-blue-500' },
  { name: 'YouTube', icon: Youtube, color: 'from-red-500 to-pink-500' },
  { name: 'TikTok', icon: TrendingUp, color: 'from-purple-600 to-pink-500' },
];

const strategies = [
  {
    icon: Target,
    title: 'Targeted Campaigns',
    description: 'Data-driven ad campaigns that reach your ideal subscribers on every platform.',
  },
  {
    icon: Zap,
    title: 'Viral Content Strategy',
    description: 'Create content that gets shared, saves, and converts followers into paying fans.',
  },
  {
    icon: Users,
    title: 'Audience Building',
    description: 'Grow an engaged audience that is genuinely interested in your content.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    description: 'Track what works and double down on strategies that drive real results.',
  },
];

export default function MarketingGrowth() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #E91E8C 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Platform-First
            </span>{' '}
            <span className="text-white">Growth Strategy</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't just focus on OnlyFans. We build your presence across all platforms to drive
            maximum traffic and subscribers.
          </p>
        </motion.div>

        {/* Platform orbit visualization */}
        <motion.div
          className="relative h-96 mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Center - OnlyFans */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-pink-500/50"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="text-2xl font-bold text-white">OF</span>
            </motion.div>
          </div>

          {/* Orbiting platforms */}
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            const angle = (index * 360) / platforms.length;
            const radius = 180;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  x: x - 40,
                  y: y - 40,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300`}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2 + index * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {platforms.map((_, index) => {
              const angle = (index * 360) / platforms.length;
              const radius = 180;
              const x1 = 50;
              const y1 = 50;
              const x2 = 50 + (Math.cos((angle * Math.PI) / 180) * radius * 100) / 400;
              const y2 = 50 + (Math.sin((angle * Math.PI) / 180) * radius * 100) / 400;

              return (
                <motion.line
                  key={index}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              );
            })}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E91E8C" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Strategy cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Icon className="w-12 h-12 text-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-3">{strategy.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{strategy.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: '500%', label: 'Average follower growth in 90 days' },
            { value: '8+', label: 'Platforms we manage simultaneously' },
            { value: '24/7', label: 'Campaign monitoring & optimization' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
