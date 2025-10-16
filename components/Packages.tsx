'use client';

import { FaCheckCircle, FaBus, FaStar } from 'react-icons/fa';

interface Package {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
  icon: string;
}

export default function Packages() {
  const packages: Package[] = [
    {
      name: 'Reguler',
      price: 'Rp 75.000',
      icon: '🚌',
      features: [
        'AC Standard',
        'Kursi Reclining',
        'Snack & Air Mineral',
        'Bagasi 20kg',
        'Musik',
        'Asuransi Perjalanan',
      ],
    },
    {
      name: 'Eksekutif',
      price: 'Rp 125.000',
      icon: '✨',
      recommended: true,
      features: [
        'AC Full Blast',
        'Kursi Leather Premium',
        'Meal Box & Minuman',
        'Bagasi 30kg',
        'WiFi Gratis',
        'USB Charger',
        'Entertainment System',
        'Asuransi Perjalanan',
      ],
    },
    {
      name: 'VIP',
      price: 'Rp 175.000',
      icon: '👑',
      features: [
        'AC Premium',
        'Kursi VIP Extra Legroom',
        'Premium Meal & Snack',
        'Bagasi 40kg',
        'WiFi Super Cepat',
        'Colokan & USB-C',
        'Entertainment HD',
        'Bantal & Selimut',
        'Priority Boarding',
        'Asuransi Comprehensive',
      ],
    },
  ];

  return (
    <section id="packages" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Paket & Harga
          </h2>
          <p className="text-gray-600 text-lg">
            Pilih paket yang sesuai dengan kebutuhan perjalanan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:scale-105 ${
                pkg.recommended ? 'ring-4 ring-yellow-400' : ''
              }`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-lg font-bold flex items-center gap-1">
                  <FaStar className="text-sm" />
                  Terpopuler
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{pkg.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 text-sm">per orang</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className={`block w-full text-center py-3 rounded-lg font-bold transition-all ${
                    pkg.recommended
                      ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Pilih Paket
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-700 mb-2">
            💡 <strong>Info:</strong> Harga dapat berubah sewaktu-waktu. Hubungi kami untuk info lebih lanjut.
          </p>
          <p className="text-gray-600 text-sm">
            Diskon khusus untuk pemesanan rombongan (minimal 10 orang)
          </p>
        </div>
      </div>
    </section>
  );
}
