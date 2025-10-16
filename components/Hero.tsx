'use client';

import Image from 'next/image';
import { FaBus, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
        alt="Perjalanan Travel Jakarta-Bandung"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <FaBus className="text-6xl md:text-7xl text-yellow-400 drop-shadow" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Travel Jakarta - Bandung
          </h1>

          <p className="text-lg md:text-2xl mb-8 text-blue-100">
            Perjalanan Nyaman, Aman, dan Terpercaya untuk Anda dan Keluarga
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
            <p className="text-lg md:text-xl font-semibold mb-2">
              🚀 Rute Populer: Jakarta ↔ Bandung
            </p>
            <p className="text-blue-100">
              Berangkat Setiap Hari | Armada Baru & Terawat | AC & WiFi Gratis
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#booking"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              Pesan Sekarang
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FaWhatsapp className="text-2xl" />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
