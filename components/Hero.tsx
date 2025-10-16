'use client';

import { motion } from 'framer-motion';
import { Bus, Award, Shield, Clock, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-gray-900 z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 p-4 bg-white/10 rounded-full"
              >
                <Bus className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.1, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-white rounded-full blur-xl"
              ></motion.div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          >
            Travel Premium Jakarta 
            <span className="block mt-2 text-secondary-500">Bandung</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto mb-10"
          >
            Nikmati perjalanan premium dengan armada terbaru, driver profesional, dan fasilitas lengkap untuk kenyamanan Anda.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToBooking}
              className="bg-secondary-500 hover:bg-secondary-600 text-gray-900 font-bold px-8 py-3.5 rounded-lg text-lg transition-all shadow-lg hover:shadow-2xl w-full sm:w-auto"
            >
              Pesan Tiket Sekarang
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2 text-primary-100 text-sm">
            <Award className="w-4 h-4 text-secondary-500" />
            <span>ISO 9001 Certified</span>
          </div>
          <div className="flex items-center gap-2 text-primary-100 text-sm">
            <Shield className="w-4 h-4 text-secondary-500" />
            <span>Terverifikasi</span>
          </div>
          <div className="flex items-center gap-2 text-primary-100 text-sm">
            <Clock className="w-4 h-4 text-secondary-500" />
            <span>Sejak 2015</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  );
}
