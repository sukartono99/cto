import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Travel Jakarta Bandung Premium - Layanan Travel Terpercaya, Nyaman & Aman",
  description: "Layanan travel premium Jakarta-Bandung dengan armada mewah, AC, WiFi gratis, driver profesional. Berangkat setiap hari, harga terjangkau. Booking online sekarang!",
  keywords: "travel jakarta bandung, travel bandung jakarta, shuttle jakarta bandung, travel murah jakarta bandung, travel premium jakarta bandung, jasa travel jakarta bandung",
  authors: [{ name: "Travel Jakarta Bandung Premium" }],
  creator: "Travel Jakarta Bandung Premium",
  publisher: "Travel Jakarta Bandung Premium",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Travel Jakarta Bandung Premium - Layanan Travel Terpercaya & Nyaman",
    description: "Layanan travel premium Jakarta-Bandung dengan armada mewah, AC, WiFi gratis, driver profesional. Berangkat setiap hari.",
    url: "https://travel-jakarta-bandung.com",
    siteName: "Travel Jakarta Bandung Premium",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Travel Jakarta Bandung Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Jakarta Bandung Premium - Layanan Travel Terpercaya & Nyaman",
    description: "Layanan travel premium Jakarta-Bandung dengan armada mewah, AC, WiFi gratis, driver profesional.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Travel Jakarta Bandung Premium",
              "description": "Layanan travel premium Jakarta-Bandung dengan armada mewah dan driver profesional",
              "url": "https://travel-jakarta-bandung.com",
              "telephone": "+62-812-3456-7890",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Gatot Subroto No. 123",
                "addressLocality": "Jakarta",
                "addressRegion": "DKI Jakarta",
                "postalCode": "12950",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-6.2088",
                "longitude": "106.8456"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "priceRange": "Rp 150.000 - Rp 350.000",
              "image": "https://travel-jakarta-bandung.com/og-image.jpg"
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
