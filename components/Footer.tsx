'use client';

import { motion } from 'framer-motion';
import { Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Testimonials', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  legal: [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Creator Agreement', href: '#' },
    { label: 'DMCA Policy', href: '#' },
  ],
  resources: [
    { label: 'FAQ', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Creator Guide', href: '#' },
    { label: 'Apply Now', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: '#', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-light">
      {/* Wavy SVG Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E91E8C" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,0 L0,0 Z"
            fill="url(#waveGradient)"
            opacity="0.3"
          />
          <path
            d="M0,20 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,0 L0,0 Z"
            fill="url(#waveGradient)"
            opacity="0.2"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-gradient">OnlyModels</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
                Built by creators, for creators. Join the elite 0.1% and grow your OnlyFans career
                with transparency, security, and proven results.
              </p>

              {/* Contact Info */}
              <div className="mb-6">
                <a
                  href="tel:+14387784338"
                  className="flex items-center gap-3 text-gray-300 hover:text-pink-500 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center group-hover:bg-pink-500/30 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-pink-500" />
                  </div>
                  <span className="font-semibold">+1 (438) 778-4338</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-dark rounded-full flex items-center justify-center border border-gray-700 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-primary-light" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-light transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-light transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-light transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} OnlyModels. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm italic">
              Built by creators, for creators.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
