'use client';

import { motion } from 'framer-motion';

const logos = [
  'Forbes', 'TechCrunch', 'Business Insider', 'The Verge', 'Wired', 'Mashable',
  'Forbes', 'TechCrunch', 'Business Insider', 'The Verge', 'Wired', 'Mashable', // Duplicate for seamless loop
];

export default function FeaturedIn() {
  return (
    <section className="py-16 bg-dark-light/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8"
        >
          Recognized by Industry Leaders
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center mx-12 text-2xl font-bold text-gray-600 hover:text-gray-300 transition-colors duration-300"
                style={{ minWidth: '150px' }}
              >
                {logo}
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-light/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-light/50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
