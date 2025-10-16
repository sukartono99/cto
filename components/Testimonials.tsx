'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, BadgeCheck } from 'lucide-react';
import type { Testimonial } from '@/types';

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    location: 'Jakarta',
    rating: 5,
    text: 'Pelayanan sangat memuaskan! Driver ramah, mobil bersih dan nyaman. Perjalanan dari Jakarta ke Bandung sangat menyenangkan. Highly recommended!',
    verified: true,
    date: '2 minggu yang lalu',
  },
  {
    id: '2',
    name: 'Siti Nurhaliza',
    location: 'Bandung',
    rating: 5,
    text: 'Sudah 3x pakai travel ini untuk pulang kampung. Selalu tepat waktu, armada bagus, harga juga terjangkau. Puas banget!',
    verified: true,
    date: '1 bulan yang lalu',
  },
  {
    id: '3',
    name: 'Andi Wijaya',
    location: 'Jakarta',
    rating: 5,
    text: 'Paket VIP nya luar biasa! Kursi super nyaman, WiFi kenceng, driver profesional. Worth it untuk harga segitu.',
    verified: true,
    date: '3 minggu yang lalu',
  },
  {
    id: '4',
    name: 'Rina Maharani',
    location: 'Bandung',
    rating: 4,
    text: 'Travel yang recommended. Booking mudah, customer service responsif. Cuma kadang jadwal keberangkatan agak mundur 10-15 menit.',
    verified: true,
    date: '1 minggu yang lalu',
  },
  {
    id: '5',
    name: 'Dimas Pratama',
    location: 'Jakarta',
    rating: 5,
    text: 'Pakai untuk perjalanan bisnis ke Bandung. Sangat puas dengan fasilitas eksekutifnya. Bisa kerja di mobil karena WiFi stabil.',
    verified: false,
    date: '2 bulan yang lalu',
  },
  {
    id: '6',
    name: 'Maya Kusuma',
    location: 'Bandung',
    rating: 5,
    text: 'Best travel service! Armada selalu bersih, driver ramah dan tau jalan. Harga bersaing dan pelayanan maksimal. 5 bintang!',
    verified: true,
    date: '3 hari yang lalu',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const visibleTestimonials = 3;
  const maxIndex = Math.max(0, testimonialsData.length - visibleTestimonials);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Testimoni <span className="gradient-text">Pelanggan</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Apa kata pelanggan kami tentang layanan travel premium kami
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
            <AnimatePresence initial={false} mode="wait">
              {testimonialsData.slice(currentIndex, currentIndex + visibleTestimonials).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
                    <Quote className="w-8 h-8 text-blue-200" />
                  </div>

                  <p className="text-gray-700 mb-6 line-clamp-4 min-h-[6rem]">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        {testimonial.verified && (
                          <BadgeCheck className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg mb-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-1">{renderStars(testimonialsData[currentIndex].rating)}</div>
                  <Quote className="w-8 h-8 text-blue-200" />
                </div>

                <p className="text-gray-700 mb-6">
                  {testimonialsData[currentIndex].text}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonialsData[currentIndex].name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-900">{testimonialsData[currentIndex].name}</p>
                      {testimonialsData[currentIndex].verified && (
                        <BadgeCheck className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{testimonialsData[currentIndex].location}</p>
                    <p className="text-xs text-gray-400 mt-1">{testimonialsData[currentIndex].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-blue-50 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </motion.button>

            <div className="flex gap-2">
              {Array.from({ length: testimonialsData.length - (visibleTestimonials - 1) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    currentIndex === index ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-3 bg-white hover:bg-blue-50 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 rounded-full">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">dari 500+ ulasan</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
