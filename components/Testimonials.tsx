'use client';

import { FaStar, FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Budi Santoso',
      location: 'Jakarta',
      rating: 5,
      text: 'Pelayanan sangat memuaskan! Sopir ramah, armada bersih dan nyaman. Perjalanan Jakarta-Bandung jadi lebih menyenangkan.',
      avatar: '👨‍💼',
    },
    {
      name: 'Siti Aminah',
      location: 'Bandung',
      rating: 5,
      text: 'Sudah langganan travel ini sejak 2 tahun lalu. Selalu tepat waktu dan harga terjangkau. Recommended banget!',
      avatar: '👩‍💼',
    },
    {
      name: 'Ahmad Rivai',
      location: 'Jakarta',
      rating: 5,
      text: 'Paket VIP-nya worth it! WiFi cepat, kursi nyaman, pelayanan prima. Cocok untuk perjalanan bisnis.',
      avatar: '👨‍💻',
    },
    {
      name: 'Dewi Lestari',
      location: 'Bandung',
      rating: 5,
      text: 'Pertama kali pakai travel ini dan langsung jatuh cinta. Bersih, aman, dan sopir sangat berpengalaman.',
      avatar: '👩',
    },
    {
      name: 'Rudi Hartono',
      location: 'Jakarta',
      rating: 5,
      text: 'Booking mudah, CS responsif di WhatsApp. Armada bagus dan sesuai ekspektasi. Pasti pakai lagi!',
      avatar: '👨',
    },
    {
      name: 'Maya Sari',
      location: 'Bandung',
      rating: 5,
      text: 'Saya suka dengan fasilitas entertainment-nya. Anak-anak jadi nggak bosen selama perjalanan. Mantap!',
      avatar: '👩‍🦰',
    },
  ];

  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => <FaStar key={i} className="text-yellow-400" />);
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Pelanggan
          </h2>
          <p className="text-gray-600 text-lg">
            Apa kata mereka yang sudah menggunakan layanan kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative"
            >
              <FaQuoteLeft className="absolute top-4 right-4 text-4xl text-blue-200" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <div className="flex gap-1 mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-50 rounded-lg p-8">
            <p className="text-4xl font-bold text-blue-600 mb-2">4.9/5.0</p>
            <div className="flex justify-center gap-1 mb-2">
              {renderStars(5)}
            </div>
            <p className="text-gray-700">
              Berdasarkan <strong>1,500+</strong> ulasan pelanggan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
