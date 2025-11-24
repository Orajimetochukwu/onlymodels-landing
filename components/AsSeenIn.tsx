'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'Miami Weekly', width: 'w-32' },
  { name: 'AVN', width: 'w-24' },
  { name: 'XBIZ', width: 'w-28' },
  { name: 'FHM', width: 'w-20' },
];

export default function AsSeenIn() {
  return (
    <section className="py-16 bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 uppercase tracking-wider mb-10"
        >
          As Featured In
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className={`${logo.width} h-12 flex items-center justify-center`}
            >
              <div className="text-2xl font-bold text-gray-600 hover:text-gray-300 transition-colors duration-300 grayscale hover:grayscale-0">
                {logo.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
