# Travel Jakarta - Bandung Landing Page

Landing page modern dan responsif untuk jasa travel Jakarta-Bandung menggunakan Next.js 15, React, Tailwind CSS, dan TypeScript.

## 🚀 Fitur

- **Hero Section** - Tampilan utama dengan CTA menarik dan highlight rute
- **Jadwal Keberangkatan** - Daftar jadwal harian dengan titik jemput dan antar
- **Form Pemesanan** - Form booking lengkap dengan validasi
- **Paket & Harga** - Tiga paket pilihan: Reguler, Eksekutif, dan VIP
- **Testimoni Pelanggan** - Section testimoni dengan rating bintang
- **Informasi Kontak** - Detail kontak lengkap dengan peta Google Maps
- **Footer** - Link navigasi, sosial media, dan copyright

## 🛠️ Teknologi

- **Next.js 15** - Framework React dengan App Router
- **React 19** - Library UI
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Icon library

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasil.

## 📱 Responsive Design

Landing page ini didesain dengan pendekatan mobile-first dan responsif di semua ukuran layar:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🎨 Struktur Komponen

```
components/
├── Navbar.tsx         # Navigation bar dengan mobile menu
├── Hero.tsx           # Hero section dengan CTA
├── Schedule.tsx       # Jadwal keberangkatan
├── BookingForm.tsx    # Form pemesanan dengan validasi
├── Packages.tsx       # Paket dan harga
├── Testimonials.tsx   # Testimoni pelanggan
├── Contact.tsx        # Informasi kontak dan maps
└── Footer.tsx         # Footer dengan link dan sosial media
```

## 📝 Kustomisasi

### Mengubah Konten

Edit file komponen di folder `components/` untuk mengubah konten sesuai kebutuhan.

### Mengubah Warna

Tailwind CSS digunakan dengan konfigurasi default. Untuk mengubah warna tema:
- Warna utama: `blue-600`
- Warna aksen: `yellow-400`
- Warna sukses: `green-500`

### Mengubah Kontak

Update nomor telepon dan WhatsApp di:
- `components/Hero.tsx`
- `components/Navbar.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Manual Build

```bash
npm run build
npm start
```

## 📄 License

MIT License

## 👨‍💻 Author

Travel Jakarta - Bandung Team

---

Made with ❤️ using Next.js and Tailwind CSS
