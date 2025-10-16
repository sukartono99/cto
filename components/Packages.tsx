'use client';

import { motion } from 'framer-motion';
import { Check, Star, Sparkles, Crown } from 'lucide-react';
import type { Package } from '@/types';

const packagesData: Package[] = [
  {
    id: '1',
    name: 'Reguler',
    price: 'Rp 150.000',
    originalPrice: 'Rp 200.000',
    description: 'Pilihan ekonomis untuk perjalanan hemat',
    icon: 'bus',
    features: [
      'Kursi Standar (12 Penumpang)',
      'AC & WiFi Gratis',
      'Driver Profesional',
      'Musik Selama Perjalanan',
      'Air Mineral Gratis',
      'Rest Area 1x',
    ],
  },
  {
    id: '2',
    name: 'Eksekutif',
    price: 'Rp 250.000',
    originalPrice: 'Rp 300.000',
    description: 'Kenyamanan lebih dengan fasilitas premium',
    icon: 'star',
    recommended: true,
    features: [
      'Kursi Eksekutif (7 Penumpang)',
      'Leg Room Lebih Luas',
      'AC & WiFi Super Cepat',
      'USB Charger Setiap Kursi',
      'Snack & Air Mineral',
      'Rest Area 2x',
      'Bantal & Selimut',
      'Asuransi Perjalanan',
    ],
  },
  {
    id: '3',
    name: 'VIP',
    price: 'Rp 350.000',
    originalPrice: 'Rp 450.000',
    description: 'Pengalaman perjalanan mewah dan privat',
    icon: 'crown',
    features: [
      'Kursi VIP Reclining (4 Penumpang)',
      'Extra Leg Room & Privacy',
      'AC Individual',
      'Entertainment System',
      'Premium Snack & Beverages',
      'Power Outlet & Fast WiFi',
      'Bantal, Selimut Premium',
      'Asuransi Premium',
      'Priority Pickup',
    ],
  },
];

const iconMap = {
  bus: Star,
  star: Sparkles,
  crown: Crown,
};

export default function Packages() {
  return (
    <section id="packages" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paket & <span className="gradient-text">Harga</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg, index) => {
            const IconComponent = iconMap[pkg.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all ${
                  pkg.recommended 
                    ? 'ring-2 ring-blue-600 lg:scale-105' 
                    : 'hover:shadow-2xl'
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-bl-2xl">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold">REKOMENDASI</span>
                    </div>
                  </div>
                )}

                <div className={`p-8 ${pkg.recommended ? 'pt-16' : ''}`}>
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl ${
                      pkg.recommended 
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
                        : 'bg-gray-100'
                    }`}>
                      <IconComponent 
                        className={`w-12 h-12 ${
                          pkg.recommended ? 'text-white' : 'text-blue-600'
                        }`}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 text-center mb-6">
                    {pkg.description}
                  </p>

                  <div className="text-center mb-6">
                    {pkg.originalPrice && (
                      <p className="text-sm text-gray-400 line-through mb-1">
                        {pkg.originalPrice}
                      </p>
                    )}
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-4xl font-bold text-blue-600">
                        {pkg.price}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Per orang</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className={`rounded-full p-0.5 ${
                            pkg.recommended 
                              ? 'bg-blue-100' 
                              : 'bg-gray-100'
                          }`}>
                            <Check className={`w-4 h-4 ${
                              pkg.recommended 
                                ? 'text-blue-600' 
                                : 'text-gray-600'
                            }`} />
                          </div>
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const bookingSection = document.getElementById('booking');
                      bookingSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      pkg.recommended
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white focus:ring-blue-500'
                        : 'bg-gray-900 hover:bg-gray-800 text-white focus:ring-gray-900'
                    }`}
                  >
                    Pilih Paket {pkg.name}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Butuh Paket Khusus?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Kami menyediakan paket kustom untuk grup, korporat, atau kebutuhan khusus lainnya. 
              Hubungi kami untuk penawaran terbaik!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20paket%20khusus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <span>Konsultasi via WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
