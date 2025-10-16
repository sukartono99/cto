'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Users,
  MapPin,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import type { BookingFormData } from '@/types';

const bookingSchema = z.object({
  name: z.string().min(3, 'Nama minimal 3 karakter').max(100, 'Nama maksimal 100 karakter'),
  phone: z.string().min(10, 'Nomor telepon minimal 10 digit').regex(/^[0-9+\-\s()]+$/, 'Format nomor telepon tidak valid'),
  email: z.string().email('Email tidak valid'),
  date: z.string().min(1, 'Pilih tanggal keberangkatan'),
  departureTime: z.string().min(1, 'Pilih waktu keberangkatan'),
  passengers: z.number().min(1, 'Minimal 1 penumpang').max(12, 'Maksimal 12 penumpang'),
  route: z.enum(['jakarta-bandung', 'bandung-jakarta']),
  packageType: z.enum(['reguler', 'eksekutif', 'vip']),
  pickupPoint: z.string().min(1, 'Pilih titik jemput'),
  dropPoint: z.string().min(1, 'Pilih titik antar'),
  notes: z.string().optional(),
});

type BookingFormSchema = z.infer<typeof bookingSchema>;

const pickupPoints = {
  'jakarta-bandung': ['Lebak Bulus', 'Blok M', 'Kuningan', 'Cawang', 'Cibubur'],
  'bandung-jakarta': ['Dago', 'Cihampelas', 'Pasteur', 'Cicaheum', 'Kopo'],
};

const dropPoints = {
  'jakarta-bandung': ['Dago', 'Cihampelas', 'Pasteur', 'Cicaheum', 'Kopo'],
  'bandung-jakarta': ['Lebak Bulus', 'Blok M', 'Kuningan', 'Cawang', 'Cibubur'],
};

const timeSlots = ['05:00', '07:00', '09:00', '11:00', '14:00', '17:00'];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormSchema>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      route: 'jakarta-bandung',
      packageType: 'eksekutif',
      passengers: 1,
    },
  });

  const watchRoute = watch('route');
  const watchPassengers = watch('passengers');
  const watchPackageType = watch('packageType');

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,4})(\d{0,4})(\d{0,4})$/);
    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join('-');
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue('phone', formatted);
  };

  const onSubmit = async (data: BookingFormSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Booking Data:', data);
    
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setStep(1);
    }, 5000);
  };

  const calculatePrice = () => {
    const prices = { reguler: 150000, eksekutif: 250000, vip: 350000 };
    return prices[watchPackageType] * watchPassengers;
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Form <span className="gradient-text">Pemesanan</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Isi form di bawah untuk memesan tiket perjalanan Anda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
            <div className="flex items-center justify-between max-w-md mx-auto">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= num
                        ? 'bg-white text-blue-600 shadow-lg'
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    {num}
                  </div>
                  {num < 3 && (
                    <div
                      className={`h-1 w-12 md:w-20 mx-2 transition-all ${
                        step > num ? 'bg-white' : 'bg-blue-500'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-white font-semibold">
                {step === 1 && 'Informasi Perjalanan'}
                {step === 2 && 'Data Penumpang'}
                {step === 3 && 'Konfirmasi'}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <MapPin className="inline w-4 h-4 mr-1" />
                      Rute Perjalanan
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="relative cursor-pointer">
                        <input
                          type="radio"
                          {...register('route')}
                          value="jakarta-bandung"
                          className="peer sr-only"
                        />
                        <div className="p-4 border-2 rounded-lg transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-blue-300">
                          <p className="font-semibold text-gray-900">Jakarta → Bandung</p>
                        </div>
                      </label>
                      <label className="relative cursor-pointer">
                        <input
                          type="radio"
                          {...register('route')}
                          value="bandung-jakarta"
                          className="peer sr-only"
                        />
                        <div className="p-4 border-2 rounded-lg transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-blue-300">
                          <p className="font-semibold text-gray-900">Bandung → Jakarta</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Paket Perjalanan
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['reguler', 'eksekutif', 'vip'].map((type) => (
                        <label key={type} className="relative cursor-pointer">
                          <input
                            type="radio"
                            {...register('packageType')}
                            value={type}
                            className="peer sr-only"
                          />
                          <div className="p-3 border-2 rounded-lg transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-blue-300 text-center">
                            <p className="font-semibold text-gray-900 capitalize">{type}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Calendar className="inline w-4 h-4 mr-1" />
                        Tanggal Keberangkatan
                      </label>
                      <input
                        type="date"
                        {...register('date')}
                        min={getTomorrowDate()}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                      {errors.date && (
                        <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Clock className="inline w-4 h-4 mr-1" />
                        Waktu Keberangkatan
                      </label>
                      <select
                        {...register('departureTime')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Pilih waktu</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      {errors.departureTime && (
                        <p className="mt-1 text-sm text-red-600">{errors.departureTime.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Users className="inline w-4 h-4 mr-1" />
                      Jumlah Penumpang: {watchPassengers}
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setValue('passengers', Math.max(1, watchPassengers - 1))}
                        className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        {...register('passengers', { valueAsNumber: true })}
                        className="flex-1 text-center px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        min="1"
                        max="12"
                      />
                      <button
                        type="button"
                        onClick={() => setValue('passengers', Math.min(12, watchPassengers + 1))}
                        className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        +
                      </button>
                    </div>
                    {errors.passengers && (
                      <p className="mt-1 text-sm text-red-600">{errors.passengers.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Titik Jemput
                      </label>
                      <select
                        {...register('pickupPoint')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Pilih lokasi jemput</option>
                        {pickupPoints[watchRoute].map((point) => (
                          <option key={point} value={point}>
                            {point}
                          </option>
                        ))}
                      </select>
                      {errors.pickupPoint && (
                        <p className="mt-1 text-sm text-red-600">{errors.pickupPoint.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Titik Antar
                      </label>
                      <select
                        {...register('dropPoint')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Pilih lokasi antar</option>
                        {dropPoints[watchRoute].map((point) => (
                          <option key={point} value={point}>
                            {point}
                          </option>
                        ))}
                      </select>
                      {errors.dropPoint && (
                        <p className="mt-1 text-sm text-red-600">{errors.dropPoint.message}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline w-4 h-4 mr-1" />
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      placeholder="Masukkan nama lengkap"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline w-4 h-4 mr-1" />
                      Nomor Telepon / WhatsApp
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      onChange={handlePhoneChange}
                      placeholder="0812-3456-7890"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-1" />
                      Email
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="nama@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <MessageSquare className="inline w-4 h-4 mr-1" />
                      Catatan Tambahan (Opsional)
                    </label>
                    <textarea
                      {...register('notes')}
                      placeholder="Tambahkan catatan atau permintaan khusus"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Ringkasan Pemesanan</h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Rute:</span>
                        <span className="font-semibold text-gray-900">
                          {watchRoute === 'jakarta-bandung' ? 'Jakarta → Bandung' : 'Bandung → Jakarta'}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Paket:</span>
                        <span className="font-semibold text-gray-900 capitalize">{watchPackageType}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Penumpang:</span>
                        <span className="font-semibold text-gray-900">{watchPassengers} orang</span>
                      </div>
                      <div className="flex justify-between py-3 bg-blue-100 rounded-lg px-4">
                        <span className="font-bold text-gray-900">Total Harga:</span>
                        <span className="font-bold text-blue-600 text-lg">
                          Rp {calculatePrice().toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Catatan:</span> Tim kami akan menghubungi Anda via WhatsApp 
                      untuk konfirmasi pembayaran dan detail keberangkatan.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Kembali
                </motion.button>
              )}

              {step < 3 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Lanjutkan
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Memproses...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Konfirmasi Pemesanan
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </form>

          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600 mb-3">
              Atau pesan langsung via WhatsApp
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20tiket%20travel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5" />
              Pesan via WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-12 h-12 text-green-600" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Pemesanan Berhasil!
              </h3>
              
              <p className="text-gray-600 mb-6">
                Terima kasih! Tim kami akan segera menghubungi Anda via WhatsApp untuk konfirmasi pembayaran.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSuccess(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all"
              >
                Tutup
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
