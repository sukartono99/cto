'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Users, Calendar, ArrowRight } from 'lucide-react';
import type { ScheduleItem } from '@/types';

const scheduleData: ScheduleItem[] = [
  {
    id: '1',
    time: '05:00',
    route: 'Jakarta → Bandung',
    type: 'Eksekutif',
    available: 2,
    total: 7,
    status: 'almost-full',
    pickupPoints: ['Lebak Bulus', 'Blok M', 'Kuningan'],
    dropPoints: ['Dago', 'Cihampelas', 'Pasteur'],
  },
  {
    id: '2',
    time: '07:00',
    route: 'Jakarta → Bandung',
    type: 'VIP',
    available: 4,
    total: 4,
    status: 'available',
    pickupPoints: ['Lebak Bulus', 'Blok M'],
    dropPoints: ['Dago', 'Pasteur'],
  },
  {
    id: '3',
    time: '09:00',
    route: 'Jakarta → Bandung',
    type: 'Reguler',
    available: 0,
    total: 12,
    status: 'fully-booked',
    pickupPoints: ['Lebak Bulus', 'Blok M', 'Kuningan', 'Cawang'],
    dropPoints: ['Dago', 'Cihampelas', 'Pasteur', 'Cicaheum'],
  },
  {
    id: '4',
    time: '11:00',
    route: 'Jakarta → Bandung',
    type: 'Eksekutif',
    available: 5,
    total: 7,
    status: 'available',
    pickupPoints: ['Lebak Bulus', 'Blok M', 'Kuningan'],
    dropPoints: ['Dago', 'Cihampelas', 'Pasteur'],
  },
  {
    id: '5',
    time: '14:00',
    route: 'Jakarta → Bandung',
    type: 'VIP',
    available: 3,
    total: 4,
    status: 'available',
    pickupPoints: ['Lebak Bulus', 'Blok M'],
    dropPoints: ['Dago', 'Pasteur'],
  },
  {
    id: '6',
    time: '17:00',
    route: 'Jakarta → Bandung',
    type: 'Reguler',
    available: 8,
    total: 12,
    status: 'available',
    pickupPoints: ['Lebak Bulus', 'Blok M', 'Kuningan', 'Cawang'],
    dropPoints: ['Dago', 'Cihampelas', 'Pasteur', 'Cicaheum'],
  },
];

const statusConfig = {
  available: {
    label: 'Tersedia',
    color: 'bg-green-100 text-green-800 border-green-200',
  },
  'almost-full': {
    label: 'Hampir Penuh',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  },
  'fully-booked': {
    label: 'Penuh',
    color: 'bg-red-100 text-red-800 border-red-200',
  },
};

export default function Schedule() {
  const [filter, setFilter] = useState<'all' | 'Reguler' | 'Eksekutif' | 'VIP'>('all');
  const [sortBy, setSortBy] = useState<'time' | 'availability'>('time');

  const filteredSchedules = scheduleData.filter(
    (schedule) => filter === 'all' || schedule.type === filter
  );

  const sortedSchedules = [...filteredSchedules].sort((a, b) => {
    if (sortBy === 'time') {
      return a.time.localeCompare(b.time);
    }
    return b.available - a.available;
  });

  return (
    <section id="schedule" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Jadwal <span className="gradient-text">Keberangkatan</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih jadwal yang sesuai dengan kebutuhan perjalanan Anda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setFilter('Reguler')}
                className={`px-4 py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  filter === 'Reguler'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Reguler
              </button>
              <button
                onClick={() => setFilter('Eksekutif')}
                className={`px-4 py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  filter === 'Eksekutif'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Eksekutif
              </button>
              <button
                onClick={() => setFilter('VIP')}
                className={`px-4 py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  filter === 'VIP'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                VIP
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 font-medium">Urutkan:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'time' | 'availability')}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="time">Waktu</option>
                <option value="availability">Ketersediaan</option>
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedSchedules.map((schedule, index) => (
            <motion.div
              key={schedule.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${
                schedule.status === 'fully-booked' ? 'opacity-75' : 'card-hover'
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{schedule.time}</p>
                      <p className="text-sm text-gray-500">{schedule.type}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      statusConfig[schedule.status].color
                    }`}
                  >
                    {statusConfig[schedule.status].label}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{schedule.route}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">
                      {schedule.available > 0 ? (
                        <>
                          <span className="font-semibold text-blue-600">{schedule.available}</span> / {schedule.total} kursi tersedia
                        </>
                      ) : (
                        'Tidak ada kursi tersedia'
                      )}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mb-4">
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-semibold text-gray-700">Titik Jemput:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {schedule.pickupPoints.map((point) => (
                        <span
                          key={point}
                          className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: schedule.status !== 'fully-booked' ? 1.02 : 1 }}
                  whileTap={{ scale: schedule.status !== 'fully-booked' ? 0.98 : 1 }}
                  disabled={schedule.status === 'fully-booked'}
                  onClick={() => {
                    const bookingSection = document.getElementById('booking');
                    bookingSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    schedule.status === 'fully-booked'
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg focus:ring-blue-500'
                  }`}
                >
                  {schedule.status === 'fully-booked' ? 'Penuh' : 'Pesan Sekarang'}
                  {schedule.status !== 'fully-booked' && <ArrowRight className="w-4 h-4" />}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center"
        >
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Catatan:</span> Jadwal dapat berubah sewaktu-waktu. 
            Hubungi kami untuk informasi terkini atau booking langsung via WhatsApp.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20jadwal%20keberangkatan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            Tanya Jadwal via WhatsApp
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
