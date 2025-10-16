'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Users, Calendar, ArrowRight, Wind } from 'lucide-react';
import type { ScheduleItem } from '@/types';

const scheduleData: ScheduleItem[] = [
  // ... (data remains the same)
];

const statusConfig = {
  available: { label: 'Tersedia', bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
  'almost-full': { label: 'Hampir Penuh', bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' },
  'fully-booked': { label: 'Penuh', bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' },
};

export default function Schedule() {
  const [filter, setFilter] = useState<'all' | 'Reguler' | 'Eksekutif' | 'VIP'>('all');
  const [sortBy, setSortBy] = useState<'time' | 'availability'>('time');

  const filteredSchedules = scheduleData.filter(
    (schedule) => filter === 'all' || schedule.type === filter
  );

  const sortedSchedules = [...filteredSchedules].sort((a, b) => {
    if (sortBy === 'time') return a.time.localeCompare(b.time);
    return b.available - a.available;
  });

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="schedule" className="section-padding bg-gray-50">
      <div className="container">
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
            Pilih jadwal yang paling sesuai untuk perjalanan Anda dari Jakarta ke Bandung.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1 flex flex-wrap gap-2">
              {(['all', 'Reguler', 'Eksekutif', 'VIP'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    filter === f
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {f === 'all' ? 'Semua' : f}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 self-end md:self-center">
              <label htmlFor="sortBy" className="text-sm font-medium text-gray-600">Urutkan:</label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'time' | 'availability')}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white hover:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              >
                <option value="time">Waktu Keberangkatan</option>
                <option value="availability">Ketersediaan Kursi</option>
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {sortedSchedules.map((schedule, index) => (
              <motion.div
                key={schedule.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 ${
                  schedule.status === 'fully-booked' ? 'opacity-60' : 'card-hover'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary-100 p-3 rounded-xl">
                        <Clock className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{schedule.time}</p>
                        <p className="font-semibold text-primary-700">{schedule.type}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusConfig[schedule.status].bg} ${statusConfig[schedule.status].text} ${statusConfig[schedule.status].border}`}>
                      {statusConfig[schedule.status].label}
                    </div>
                  </div>

                  <div className="space-y-3 my-5 border-y border-gray-100 py-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Users className="w-5 h-5 flex-shrink-0 text-primary-500" />
                      <span className="text-sm font-medium">
                        {schedule.available > 0 
                          ? <><span className="font-bold text-primary-600">{schedule.available}</span> / {schedule.total} kursi tersedia</>
                          : 'Kursi Penuh'
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 flex-shrink-0 text-primary-500" />
                      <span className="text-sm font-medium truncate">
                        Dari: {schedule.pickupPoints.join(', ')}
                      </span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: schedule.status !== 'fully-booked' ? 1.02 : 1 }}
                    whileTap={{ scale: schedule.status !== 'fully-booked' ? 0.98 : 1 }}
                    disabled={schedule.status === 'fully-booked'}
                    onClick={scrollToBooking}
                    className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      schedule.status === 'fully-booked'
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-primary-300 focus:ring-primary-500'
                    }`}
                  >
                    {schedule.status === 'fully-booked' ? 'Penuh' : 'Pesan Sekarang'}
                    {schedule.status !== 'fully-booked' && <ArrowRight className="w-4 h-4" />}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
