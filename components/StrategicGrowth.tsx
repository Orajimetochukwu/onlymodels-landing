'use client';

import { motion } from 'framer-motion';
import { Search, Map, Rocket, BarChart2 } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Deep-dive audit',
    description: 'We analyze your current performance, audience, and content',
  },
  {
    number: '2',
    icon: Map,
    title: 'Custom roadmap',
    description: '90-day growth plan tailored to your goals',
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Execution & optimization',
    description: 'We handle implementation while you create',
  },
  {
    number: '4',
    icon: BarChart2,
    title: 'Weekly check-ins',
    description: 'Adjust strategy based on real-time data',
  },
];

export default function StrategicGrowth() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Growth Plans <span className="text-gradient">Built for You</span>
          </h2>
          <p className="text-xl text-gray-400">No Templates. No Copy-Paste Strategies.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 text-center leading-relaxed"
        >
          Every creator is different. A strategy that works for a fitness creator won&apos;t work for a
          cosplayer. We don&apos;t believe in one-size-fits-all.
        </motion.p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-12 text-center">Our Process:</h3>

          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-2xl font-bold">
                          {step.number}
                        </div>
                      </div>

                      <step.icon className="w-8 h-8 text-primary-light mb-4" />

                      <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 border-t-2 border-r-2 border-primary/50 rotate-45"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl text-center text-white font-semibold mb-8"
        >
          Your success isn't accidental. It's engineered.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            Get Your Custom Plan
          </button>
        </motion.div>
      </div>
    </section>
  );
}
