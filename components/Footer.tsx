'use client';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBus } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaBus className="text-3xl text-blue-400" />
              <h3 className="text-xl font-bold">Travel JKT-BDG</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Layanan travel terpercaya Jakarta-Bandung sejak 2015. 
              Perjalanan nyaman, aman, dan tepat waktu.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-400 hover:text-white transition-colors">
                  Jadwal
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-white transition-colors">
                  Pemesanan
                </a>
              </li>
              <li>
                <a href="#packages" className="text-gray-400 hover:text-white transition-colors">
                  Paket & Harga
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Travel Jakarta - Bandung</li>
              <li>Travel Bandung - Jakarta</li>
              <li>Sewa Bus Pariwisata</li>
              <li>Paket Tour Bandung</li>
              <li>Layanan Antar Jemput</li>
              <li>Charter Khusus</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Informasi</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Tentang Kami</li>
              <li>Syarat & Ketentuan</li>
              <li>Kebijakan Privasi</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Karir</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-center md:text-left">
            <div className="text-gray-400">
              <p>© {currentYear} Travel Jakarta-Bandung. All rights reserved.</p>
            </div>
            <div className="text-gray-400 md:text-right">
              <p>
                Made with ❤️ in Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>
            Jl. Gatot Subroto No. 123, Jakarta Selatan | 
            <a href="tel:+6281234567890" className="hover:text-white ml-1">0812-3456-7890</a> | 
            <a href="mailto:info@traveljktbdg.com" className="hover:text-white ml-1">info@traveljktbdg.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
