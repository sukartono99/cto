'use client';

import { motion } from 'framer-motion';
import { Check, Star, Sparkles, Crown } from 'lucide-react';
import type { Package } from '@/types';

const packagesData: Package[] = [
  // ... (data remains the same)
];

const iconMap = { bus: Sparkles, star: Star, crown: Crown };

export default function Packages() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="packages" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')]"></div>
      <div className="container relative">
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
            Kami menawarkan tiga paket eksklusif yang dirancang untuk kenyamanan Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {packagesData.map((pkg, index) => {
            const IconComponent = iconMap[pkg.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 h-full ${
                  pkg.recommended ? 'lg:scale-105 ring-2 ring-primary-600 shadow-2xl' : 'lg:hover:scale-105'
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-1.5 rounded-bl-lg font-bold text-sm tracking-wide">
                    REKOMENDASI
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  <div className="mb-6 text-center">
                    <IconComponent 
                      className={`w-10 h-10 mb-4 mx-auto ${
                        pkg.recommended ? 'text-primary-600' : 'text-gray-400'
                      }`}
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-500">{pkg.description}</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    {pkg.originalPrice && <p className="text-gray-400 line-through">{pkg.originalPrice}</p>}
                    <p className="text-4xl font-extrabold text-gray-900">{pkg.price}</p>
                    <p className="text-sm text-gray-500">/ orang</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={scrollToBooking}
                    className={`w-full py-3.5 mt-auto rounded-lg font-bold transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      pkg.recommended
                        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white focus:ring-primary-500'
                        : 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-800'
                    }`}
                  >
                    Pesan Paket {pkg.name}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
