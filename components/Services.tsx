'use client';

import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, Shield, Users, Zap, Target } from 'lucide-react';
import TiltCard from './TiltCard';

const services = [
  {
    icon: MessageSquare,
    title: 'Elite Chatting Services',
    description: 'U.S.-based professionals who understand your brand and engage fans authentically.',
    gradient: 'from-pink-500 to-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Data-driven marketing campaigns across all major platforms to maximize your reach.',
    gradient: 'from-purple-600 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Content Protection',
    description: 'Military-grade anti-leak technology with 24/7 monitoring and instant takedown.',
    gradient: 'from-cyan-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Personal Management',
    description: 'Dedicated account manager who knows your goals and works to achieve them daily.',
    gradient: 'from-pink-500 to-purple-600',
  },
  {
    icon: Zap,
    title: 'Revenue Optimization',
    description: 'Strategic pricing, promotions, and upselling techniques that maximize your earnings.',
    gradient: 'from-purple-600 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Brand Development',
    description: 'Build a powerful personal brand that stands out and attracts premium subscribers.',
    gradient: 'from-cyan-500 to-pink-500',
  },
];

export default function Services() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#E91E8C 1px, transparent 1px), linear-gradient(90deg, #E91E8C 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
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
              Full-Service
            </span>{' '}
            <span className="text-white">
              Management
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to succeed, all under one roof. No juggling multiple agencies or services.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TiltCard className="h-full">
                  <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 group">
                    {/* Gradient glow on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                    {/* Icon */}
                    <div className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} p-3 flex items-center justify-center`}>
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="relative text-2xl font-bold mb-4 text-white group-hover:text-pink-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="relative text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover effect overlay */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-6 text-lg">
            Ready to experience the OnlyModels difference?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/50">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
