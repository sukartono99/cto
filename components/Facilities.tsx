'use client';

import { motion } from 'framer-motion';
import {
  Wifi,
  Coffee,
  Shield,
  Clock,
  Users,
  Zap,
  Heart,
  ThumbsUp,
  AirVent,
  Music,
  Usb,
  Sparkles,
} from 'lucide-react';

const facilities = [
  {
    icon: AirVent,
    title: 'AC Dingin',
    description: 'AC yang selalu dingin dan nyaman selama perjalanan',
  },
  {
    icon: Wifi,
    title: 'WiFi Gratis',
    description: 'Internet super cepat untuk browsing dan streaming',
  },
  {
    icon: Usb,
    title: 'USB Charger',
    description: 'Port charger di setiap kursi untuk gadget Anda',
  },
  {
    icon: Coffee,
    title: 'Snack & Drink',
    description: 'Tersedia snack dan minuman gratis',
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Musik dan hiburan selama perjalanan',
  },
  {
    icon: Shield,
    title: 'Asuransi',
    description: 'Dilindungi asuransi perjalanan',
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Tepat Waktu',
    description: 'Kami selalu berangkat dan tiba tepat waktu',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Aman & Terpercaya',
    description: 'Driver profesional dan armada terawat',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: ThumbsUp,
    title: 'Pelayanan Terbaik',
    description: 'Customer service responsif 24/7',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Heart,
    title: 'Nyaman & Bersih',
    description: 'Armada selalu bersih dan nyaman',
    color: 'from-pink-500 to-pink-600',
  },
];

export default function Facilities() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Fasilitas & <span className="gradient-text">Keunggulan</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Nikmati berbagai fasilitas premium untuk perjalanan yang lebih nyaman
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all"
                >
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                  {facility.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Mengapa Memilih Kami?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-4 -mr-4">
            <Sparkles className="w-32 h-32 text-white/10" />
          </div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4">
            <Zap className="w-32 h-32 text-white/10" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Siap Berangkat?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Pesan tiket Anda sekarang dan nikmati perjalanan premium Jakarta-Bandung 
              dengan harga terjangkau
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const bookingSection = document.getElementById('booking');
                  bookingSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-gray-100 text-blue-600 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Pesan Tiket Sekarang
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20layanan%20travel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Hubungi Kami
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
