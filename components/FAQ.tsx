'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import type { FAQItem } from '@/types';

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Bagaimana cara memesan tiket travel?',
    answer: 'Anda dapat memesan tiket melalui form pemesanan di website kami, atau langsung hubungi kami via WhatsApp. Kami akan mengkonfirmasi ketersediaan dan detail pembayaran.',
    category: 'Pemesanan',
  },
  {
    id: '2',
    question: 'Berapa lama waktu perjalanan Jakarta-Bandung?',
    answer: 'Waktu perjalanan normal sekitar 3-4 jam tergantung kondisi lalu lintas. Kami selalu memilih rute terbaik untuk kenyamanan dan efisiensi waktu Anda.',
    category: 'Perjalanan',
  },
  {
    id: '3',
    question: 'Apakah ada titik jemput khusus?',
    answer: 'Ya, kami menyediakan beberapa titik jemput strategis seperti Lebak Bulus, Blok M, Kuningan, dan Cawang untuk Jakarta. Untuk Bandung: Dago, Cihampelas, Pasteur, dan Cicaheum.',
    category: 'Perjalanan',
  },
  {
    id: '4',
    question: 'Bagaimana sistem pembayaran?',
    answer: 'Kami menerima pembayaran via transfer bank (BCA, Mandiri, BRI), e-wallet (GoPay, OVO, Dana), dan tunai. Pembayaran dilakukan setelah konfirmasi booking.',
    category: 'Pembayaran',
  },
  {
    id: '5',
    question: 'Apakah bisa reschedule atau refund?',
    answer: 'Reschedule bisa dilakukan maksimal H-1 keberangkatan tanpa biaya tambahan. Untuk refund, akan dikenakan biaya administrasi 20% jika pembatalan dilakukan H-1 atau lebih.',
    category: 'Kebijakan',
  },
  {
    id: '6',
    question: 'Fasilitas apa saja yang tersedia?',
    answer: 'Semua paket dilengkapi dengan AC, WiFi gratis, air mineral, dan driver profesional. Paket Eksekutif dan VIP mendapat fasilitas tambahan seperti USB charger, snack, dan kursi yang lebih nyaman.',
    category: 'Fasilitas',
  },
  {
    id: '7',
    question: 'Apakah ada diskon untuk grup?',
    answer: 'Ya, kami memberikan diskon khusus untuk pemesanan grup (minimal 5 orang). Hubungi customer service kami untuk penawaran terbaik.',
    category: 'Pembayaran',
  },
  {
    id: '8',
    question: 'Bagaimana jika terlambat dari jam keberangkatan?',
    answer: 'Driver akan menunggu maksimal 15 menit dari jadwal. Jika lebih dari itu, Anda perlu reschedule ke jadwal berikutnya atau dikenakan biaya tambahan.',
    category: 'Kebijakan',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQ = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pertanyaan <span className="gradient-text">Umum</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan yang sering diajukan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
        </motion.div>

        <div className="space-y-4">
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={openId === faq.id}
                >
                  <div className="flex-1 pr-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-2">
                      {faq.category}
                    </span>
                    <p className="font-semibold text-gray-900 text-lg">
                      {faq.question}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                Tidak ada pertanyaan yang cocok dengan pencarian Anda.
              </p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Masih Ada Pertanyaan?
          </h3>
          <p className="text-gray-600 mb-6">
            Tim customer service kami siap membantu Anda 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/6281234567890?text=Halo,%20saya%20memiliki%20pertanyaan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Hubungi via WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+6281234567890"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Telepon Kami
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
