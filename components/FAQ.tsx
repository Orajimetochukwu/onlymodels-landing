'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What's your commission structure?",
    answer: "We discuss commission transparently during onboarding. Rates vary based on your current earnings and growth goals. No hidden fees, ever.",
  },
  {
    question: "How selective is your application process?",
    answer: "Very. We work with creators who are serious about growth and already have traction. If you're earning consistently and ready to scale, we want to talk.",
  },
  {
    question: "Do I give up control of my account?",
    answer: "Absolutely not. You own your account, your content, and your brand. We're here to support, not take over.",
  },
  {
    question: "Can I leave anytime?",
    answer: "Yes. We include exit clauses in every contract. No penalties, no drama.",
  },
  {
    question: "Are your chatters really based in the U.S.?",
    answer: "100%. We don't outsource. Every chatter is hired, trained, and managed in-house.",
  },
  {
    question: "How do you handle content leaks?",
    answer: "AI monitoring + DMCA enforcement + legal action. We catch leaks fast and remove them faster.",
  },
  {
    question: "How long before I see results?",
    answer: "Most creators see measurable growth within 30-60 days. Major revenue increases typically happen within 3-6 months.",
  },
  {
    question: "Do you work with male creators?",
    answer: "Yes! We represent creators of all genders and niches.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Questions? <span className="text-gradient">Answered.</span>
          </h2>
          <p className="text-xl text-gray-400">Everything You Need to Know</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-dark-light/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-dark-light/30 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-light" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary-light" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
