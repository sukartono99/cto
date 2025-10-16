'use client';

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Kami siap melayani Anda dengan sepenuh hati
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Kantor Pusat Jakarta</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Jl. Gatot Subroto No. 123<br />
                    Kuningan, Jakarta Selatan 12950<br />
                    DKI Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-full flex-shrink-0">
                  <FaPhone className="text-green-600 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Telepon</h3>
                  <p className="text-gray-700 mb-2">
                    <a href="tel:+622112345678" className="hover:text-blue-600">
                      (021) 1234-5678
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a href="tel:+6281234567890" className="hover:text-blue-600">
                      0812-3456-7890
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-full flex-shrink-0">
                  <FaWhatsapp className="text-green-600 text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    +62 812-3456-7890
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Fast response 24/7
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FaEnvelope className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Email</h3>
                  <a 
                    href="mailto:info@traveljktbdg.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    info@traveljktbdg.com
                  </a>
                  <br />
                  <a 
                    href="mailto:booking@traveljktbdg.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    booking@traveljktbdg.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-4 rounded-full flex-shrink-0">
                  <FaClock className="text-yellow-600 text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Jam Operasional</h3>
                  <p className="text-gray-700">
                    <strong>Senin - Jumat:</strong> 05:00 - 22:00 WIB<br />
                    <strong>Sabtu - Minggu:</strong> 05:00 - 22:00 WIB<br />
                    <span className="text-green-600 font-semibold">Customer Service 24/7</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2088305766824!2d106.82493931476888!3d-6.232236795499067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf2e5f2ab8e6!2sJl.%20Gatot%20Subroto%2C%20Kuningan%2C%20Jakarta%20Selatan%2C%20DKI%20Jakarta!5e0!3m2!1sid!2sid!4v1634567890123!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Butuh Bantuan? Hubungi Kami Sekarang!
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Tim customer service kami siap membantu Anda 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-2xl" />
              Chat via WhatsApp
            </a>
            <a
              href="tel:+6281234567890"
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaPhone />
              Telepon Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
