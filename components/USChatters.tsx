'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Clock, TrendingUp, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';

const features = [
  { icon: MessageCircle, text: 'Voice matching – We study your style, tone, and personality' },
  { icon: Clock, text: '24/7 coverage – Never miss a high-value fan interaction' },
  { icon: TrendingUp, text: 'Natural conversations – No templates, no cringe scripts' },
  { icon: BarChart3, text: 'Performance tracking – See exactly how chats drive sales' },
];

const chatMessages = [
  { text: "Hey! Love your latest post 😍", sent: false, delay: 0 },
  { text: "Thank you so much! I had fun with that one 💕", sent: true, delay: 1000 },
  { text: "Do you have anything exclusive?", sent: false, delay: 2000 },
  { text: "I do! I just uploaded some new content you might like. Check your DMs 😘", sent: true, delay: 3000 },
];

export default function USChatters() {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const timers = chatMessages.map((msg, index) =>
      setTimeout(() => setVisibleMessages(index + 1), msg.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="py-24 bg-dark-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Real Conversations. <span className="text-gradient">Real Connections.</span>
              </h2>
              <p className="text-xl text-gray-400">U.S.-Based Chatters Who Actually Sound Like You</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Your fans can tell when a conversation feels off. Broken English, robotic responses, and
              obvious scripts kill trust—and revenue.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-300 mb-12 leading-relaxed"
            >
              Our in-house chatting team is 100% U.S.-based, extensively trained in your voice, and
              committed to authentic engagement. They don&apos;t just reply to DMs.{' '}
              <span className="text-white font-semibold">They build relationships that convert.</span>
            </motion.p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-primary-light">Why Our Chatting Works:</h3>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary-light" />
                  </div>
                  <p className="text-gray-300 leading-relaxed pt-2">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Learn About Our Chat Team
            </motion.button>
          </div>

          {/* Right: Chat Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-dark rounded-2xl border border-gray-800 p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent"></div>
                <div>
                  <p className="font-semibold text-white">OnlyModels Chat</p>
                  <p className="text-sm text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Active now
                  </p>
                </div>
              </div>

              <div className="space-y-4 min-h-[300px]">
                {chatMessages.slice(0, visibleMessages).map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        msg.sent
                          ? 'bg-gradient-to-r from-primary to-primary-dark text-white'
                          : 'bg-gray-800 text-gray-200'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 rounded-full">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent outline-none text-gray-400 text-sm"
                    disabled
                  />
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>

            {/* US Flag indicator */}
            <div className="absolute -top-4 -right-4 bg-dark-light border border-gray-700 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
              <span className="text-2xl">🇺🇸</span>
              <span className="text-sm font-semibold text-white">100% U.S.-Based</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
