'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bus, Menu, X, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Jadwal', href: '#schedule' },
    { label: 'Paket', href: '#packages' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className={`p-2 rounded-lg transition-all duration-300 ${scrolled ? 'bg-primary-600' : 'bg-white/20'}`}>
              <Bus className={`w-7 h-7 transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`} strokeWidth={2} />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Travel JKT-BDG
              </h1>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
            >
              Pesan Sekarang
            </motion.a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/80 hover:bg-white/10'}`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-semibold transition-all"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
