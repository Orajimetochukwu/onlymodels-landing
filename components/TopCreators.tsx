'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { TrendingUp, DollarSign, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

const stats = [
  {
    icon: DollarSign,
    value: 340,
    suffix: '%',
    label: 'Average Revenue Increase',
    description: 'In first 6 months',
    color: 'from-pink-500 to-purple-600',
  },
  {
    icon: Users,
    value: 0.1,
    suffix: '%',
    label: 'Top OnlyFans Earners',
    description: 'Our average creator ranking',
    color: 'from-purple-600 to-cyan-500',
  },
  {
    icon: TrendingUp,
    value: 24,
    suffix: '/7',
    label: 'Support & Management',
    description: 'Always available for you',
    color: 'from-cyan-500 to-pink-500',
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return value < 1 ? latest.toFixed(1) : Math.round(latest);
  });
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeOut',
    });

    const unsubscribe = rounded.on('change', (latest) => {
      if (node) {
        node.textContent = latest + suffix;
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, value, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export default function TopCreators() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Join the Elite</span>{' '}
            <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              0.1%
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Where top earners turn to scale. Our creators consistently rank in the elite tier of OnlyFans
            because we don't just manage accounts—we engineer growth.
          </p>
        </motion.div>

        {/* Stats Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${stat.color} p-3 flex items-center justify-center mx-auto`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Counter */}
                  <div className="relative text-center">
                    <motion.div
                      className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    >
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                    <p className="text-gray-400 text-sm">{stat.description}</p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/50">
            See If You Qualify
          </button>
        </motion.div>
      </div>
    </section>
  );
}
