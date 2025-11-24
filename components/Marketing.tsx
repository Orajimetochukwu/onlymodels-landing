'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Target, Edit3, TrendingUp, Users as UsersIcon, Palette } from 'lucide-react';
import { useRef } from 'react';

const services = [
  { icon: Smartphone, text: 'Social media management across all platforms' },
  { icon: Target, text: 'Paid advertising campaigns with proven ROI' },
  { icon: Edit3, text: 'Content strategy and posting schedules' },
  { icon: TrendingUp, text: 'A/B testing and performance optimization' },
  { icon: UsersIcon, text: 'Collaboration and shoutout coordination' },
  { icon: Palette, text: 'Graphic design and promotional assets' },
];

const platforms = ['Twitter', 'Reddit', 'TikTok', 'Instagram', 'YouTube', 'Telegram'];

// Vertical Scroll Stack Component
function WhatWeHandleScroll({ services }: { services: typeof services }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: `${services.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Sticky text */}
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold"
              >
                What We{' '}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Handle
                </span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 leading-relaxed"
              >
                Complete marketing management across every platform. We handle the strategy, execution,
                and optimization so you can focus on creating.
              </motion.p>
            </div>

            {/* Right side - Stacking cards */}
            <div className="relative h-[500px]">
              {services.map((service, index) => {
                const Icon = service.icon;
                const cardProgress = useTransform(
                  scrollYProgress,
                  [index / services.length, (index + 1) / services.length],
                  [0, 1]
                );

                const y = useTransform(cardProgress, [0, 1], [100, 0]);
                const scale = useTransform(cardProgress, [0, 1], [0.9, 1]);
                const rotateZ = useTransform(cardProgress, [0, 1], [index * 2, 0]);

                return (
                  <motion.div
                    key={index}
                    style={{
                      y,
                      scale,
                      rotateZ,
                      zIndex: index,
                    }}
                    className="absolute top-0 left-0 right-0"
                  >
                    <div
                      className="w-full p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"
                      style={{
                        marginTop: `${index * 20}px`,
                      }}
                    >
                      {/* Icon */}
                      <div className="w-16 h-16 mb-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Text */}
                      <h4 className="text-2xl font-bold text-white mb-4">
                        {service.text.split(' ').slice(0, 3).join(' ')}
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed">{service.text}</p>

                      {/* Decorative gradient */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-3xl -z-10" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

        {/* What We Handle - Vertical Scroll Stack */}
        <WhatWeHandleScroll services={services} />

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
