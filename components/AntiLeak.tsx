'use client';

import { motion } from 'framer-motion';
import { Shield, Gavel, Fingerprint, Bell } from 'lucide-react';

const protectionLayers = [
  {
    icon: Shield,
    title: 'AI-Powered Monitoring',
    description: 'We scan the internet 24/7 for stolen content. Automated takedowns happen in hours, not days.',
  },
  {
    icon: Gavel,
    title: 'Legal DMCA Enforcement',
    description: 'Dedicated legal team handles copyright claims, cease & desists, and platform removals.',
  },
  {
    icon: Fingerprint,
    title: 'Watermarking & Fingerprinting',
    description: 'Invisible tracking embedded in every file. We know where leaks come from.',
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    description: 'Instant notifications if your content appears on unauthorized sites.',
  },
];

export default function AntiLeak() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Your Content. <span className="text-gradient">Protected.</span>
          </h2>
          <p className="text-xl text-gray-400">Military-Grade Security + Legal Enforcement</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 text-center leading-relaxed"
        >
          Content theft isn't just frustrating—it's a threat to your livelihood. OnlyModels treats
          security like a non-negotiable.
        </motion.p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-10 text-center">Our Multi-Layer Protection:</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {protectionLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 bg-dark-light/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                      <layer.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{layer.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{layer.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-center text-white font-semibold mb-8"
        >
          Your content deserves the same protection as your bank account.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            Get Protected Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
