'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hubungi <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Kami siap melayani Anda dengan sepenuh hati 24/7
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: 'Kantor Pusat Jakarta',
                content: (
                  <>
                    Jl. Gatot Subroto No. 123<br />
                    Kuningan, Jakarta Selatan 12950<br />
                    DKI Jakarta, Indonesia
                  </>
                ),
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Phone,
                title: 'Telepon',
                content: (
                  <>
                    <a href="tel:+622112345678" className="hover:text-blue-600 transition-colors">
                      (021) 1234-5678
                    </a>
                    <br />
                    <a href="tel:+6281234567890" className="hover:text-blue-600 transition-colors">
                      0812-3456-7890
                    </a>
                  </>
                ),
                color: 'from-green-500 to-green-600',
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                content: (
                  <>
                    <a 
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                    >
                      +62 812-3456-7890
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Fast response 24/7</p>
                  </>
                ),
                color: 'from-green-500 to-green-600',
              },
              {
                icon: Mail,
                title: 'Email',
                content: (
                  <>
                    <a 
                      href="mailto:info@traveljktbdg.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      info@traveljktbdg.com
                    </a>
                    <br />
                    <a 
                      href="mailto:booking@traveljktbdg.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      booking@traveljktbdg.com
                    </a>
                  </>
                ),
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Clock,
                title: 'Jam Operasional',
                content: (
                  <>
                    <strong>Senin - Minggu:</strong> 05:00 - 22:00 WIB<br />
                    <span className="text-green-600 font-semibold">Customer Service 24/7</span>
                  </>
                ),
                color: 'from-yellow-500 to-yellow-600',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${item.color} p-4 rounded-xl flex-shrink-0 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                      <div className="text-gray-700 leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden h-[600px] lg:sticky lg:top-24"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2088305766824!2d106.82493931476888!3d-6.232236795499067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf2e5f2ab8e6!2sJl.%20Gatot%20Subroto%2C%20Kuningan%2C%20Jakarta%20Selatan%2C%20DKI%20Jakarta!5e0!3m2!1sid!2sid!4v1634567890123!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor Jakarta"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Butuh Bantuan? Hubungi Kami Sekarang!
            </h3>
            <p className="text-blue-100 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
              Tim customer service kami siap membantu Anda 24/7 untuk segala kebutuhan perjalanan Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6281234567890?text=Halo,%20saya%20butuh%20bantuan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Chat via WhatsApp</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+6281234567890"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-blue-600 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Telepon Sekarang</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
