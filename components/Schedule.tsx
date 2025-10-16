'use client';

import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

interface ScheduleItem {
  time: string;
  type: string;
  available: boolean;
}

export default function Schedule() {
  const schedules: ScheduleItem[] = [
    { time: '05:00', type: 'Reguler', available: true },
    { time: '07:00', type: 'Eksekutif', available: true },
    { time: '09:00', type: 'VIP', available: true },
    { time: '11:00', type: 'Reguler', available: true },
    { time: '13:00', type: 'Eksekutif', available: true },
    { time: '15:00', type: 'VIP', available: true },
    { time: '17:00', type: 'Reguler', available: true },
    { time: '19:00', type: 'Eksekutif', available: true },
  ];

  const pickupPoints = [
    'Blok M',
    'Lebak Bulus',
    'Ciputat',
    'Serpong',
    'Cikupa',
    'Balaraja',
  ];

  const dropPoints = [
    'Pasteur',
    'Dago',
    'Cihampelas',
    'Cicaheum',
    'Kiaracondong',
    'Cibiru',
  ];

  return (
    <section id="schedule" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jadwal Keberangkatan
          </h2>
          <p className="text-gray-600 text-lg">
            Kami melayani perjalanan setiap hari dengan jadwal fleksibel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {schedules.map((schedule, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-blue-600"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FaClock className="text-blue-600" />
                  <span className="text-2xl font-bold text-gray-900">
                    {schedule.time}
                  </span>
                </div>
                {schedule.available && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
                    Tersedia
                  </span>
                )}
              </div>
              <p className="text-gray-600">{schedule.type}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Titik Jemput</h3>
                <p className="text-gray-600">Jakarta</p>
              </div>
            </div>
            <ul className="space-y-3">
              {pickupPoints.map((point, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-green-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Titik Antar</h3>
                <p className="text-gray-600">Bandung</p>
              </div>
            </div>
            <ul className="space-y-3">
              {dropPoints.map((point, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
