'use client';

import { motion } from 'framer-motion';
import { Bus, CreditCard, Shield, Award } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const paymentMethods = [
    'BCA', 'Mandiri', 'BRI', 'BNI', 'GoPay', 'OVO', 'Dana', 'ShopeePay'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Travel JKT-BDG</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Layanan travel premium Jakarta-Bandung terpercaya sejak 2015. 
              Perjalanan nyaman, aman, dan tepat waktu.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebook, href: 'https://facebook.com', color: 'hover:bg-blue-600' },
                { icon: FaInstagram, href: 'https://instagram.com', color: 'hover:bg-pink-600' },
                { icon: FaTwitter, href: 'https://twitter.com', color: 'hover:bg-sky-500' },
                { icon: FaYoutube, href: 'https://youtube.com', color: 'hover:bg-red-600' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gray-800 ${social.color} p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    aria-label={`Social media ${index + 1}`}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { label: 'Beranda', href: '#' },
                { label: 'Jadwal', href: '#schedule' },
                { label: 'Paket & Harga', href: '#packages' },
                { label: 'Pemesanan', href: '#booking' },
                { label: 'Testimoni', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Kontak', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Travel Jakarta ↔ Bandung</li>
              <li>Sewa Bus Pariwisata</li>
              <li>Paket Tour Bandung</li>
              <li>Layanan Antar Jemput</li>
              <li>Charter Khusus Grup</li>
              <li>Paket Korporat</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4">Kontak</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="tel:+6281234567890" className="hover:text-white transition-colors">
                  📞 0812-3456-7890
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FaWhatsapp className="text-green-500" />
                  <span>WhatsApp 24/7</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@traveljktbdg.com" className="hover:text-white transition-colors">
                  ✉️ info@traveljktbdg.com
                </a>
              </li>
              <li className="text-sm">
                📍 Jl. Gatot Subroto No. 123<br />
                Kuningan, Jakarta Selatan
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Metode Pembayaran
              </h5>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1 bg-gray-800 rounded text-xs text-gray-400"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Sertifikasi & Keamanan
              </h5>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>ISO 9001</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span>Terverifikasi</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-yellow-500" />
                  <span>Asuransi</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© {currentYear} Travel Jakarta-Bandung Premium. All rights reserved.</p>
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Syarat & Ketentuan
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-500 text-sm">
            <p>Made with ❤️ in Indonesia</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
