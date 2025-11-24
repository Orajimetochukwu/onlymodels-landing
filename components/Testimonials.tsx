'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah M.',
    rank: 'Top 0.08% Creator',
    text: 'I was stuck at the same income level for months. OnlyModels changed everything. Within 4 months, I tripled my earnings and actually got my life back. Their chatters are incredible, and I finally feel like I have a team that cares.',
  },
  {
    name: 'Alex T.',
    rank: 'Top 0.1% Creator',
    text: "I've worked with three agencies before OnlyModels. This is the first one that's been completely transparent with finances. No hidden fees, no excuses. Just results. I wish I'd found them sooner.",
  },
  {
    name: 'Jamie K.',
    rank: 'Top 0.2% Creator',
    text: 'The anti-leak protection alone is worth it. My content was stolen constantly before OnlyModels. Their legal team got everything removed in 48 hours. I finally feel secure.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Hear From <span className="text-gradient">Our Creators</span>
          </h2>
          <p className="text-xl text-gray-400">Real Results. Real Stories.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-dark-light/50 backdrop-blur-sm rounded-2xl p-10 md:p-12 border border-gray-800 relative">
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-center italic">
                      "{testimonials[currentIndex].text}"
                    </p>

                    <div className="text-center">
                      <p className="text-xl font-bold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-primary-light font-semibold">
                        {testimonials[currentIndex].rank}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-dark-light border border-gray-700 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-dark-light border border-gray-700 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            Join Our Creator Network
          </button>
        </motion.div>
      </div>
    </section>
  );
}
