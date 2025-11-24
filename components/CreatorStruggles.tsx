'use client';

import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const struggles = [
  {
    problem: "I'm stuck at the same income level",
    solution: "We analyze what's holding you back and implement proven growth tactics",
  },
  {
    problem: "I'm overwhelmed by messages",
    solution: "Our chatters handle 100% of DMs while staying true to your voice",
  },
  {
    problem: "My content keeps getting leaked",
    solution: "Military-grade protection + legal enforcement ends that nightmare",
  },
  {
    problem: "I don't know how to market myself",
    solution: "Done-for-you campaigns across every platform",
  },
  {
    problem: "I've been burned by agencies before",
    solution: "Full transparency, fair contracts, and creators who vouch for us",
  },
];

export default function CreatorStruggles() {
  return (
    <section className="py-24 bg-dark-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            We Get It. <span className="text-gradient">We&apos;ve Been There.</span>
          </h2>
          <p className="text-xl text-gray-400">The Struggles Every Creator Faces (And How We Solve Them)</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-6 text-center leading-relaxed"
        >
          Growing on OnlyFans is exhausting. You're creating content, managing DMs, handling marketing,
          fighting leaks, and somehow finding time to live your life.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-white font-semibold max-w-2xl mx-auto mb-16 text-center"
        >
          Sound familiar?
        </motion.p>

        <div className="space-y-6 mb-12">
          {struggles.map((struggle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  {/* Problem */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Problem:</p>
                      <p className="text-white text-lg font-semibold">"{struggle.problem}"</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-primary-light group-hover:translate-x-2 transition-transform duration-300" />
                  </div>

                  {/* Solution */}
                  <div className="flex items-start gap-4 md:col-start-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                      <ArrowRight className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Solution:</p>
                      <p className="text-gray-300 leading-relaxed">{struggle.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl text-center text-white font-semibold mb-8"
        >
          You shouldn't have to choose between success and sanity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            Let's Solve This Together
          </button>
        </motion.div>
      </div>
    </section>
  );
}
