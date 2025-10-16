# Travel Jakarta - Bandung Premium Landing Page

Landing page premium dan profesional untuk jasa travel Jakarta-Bandung dengan fokus pada UI/UX excellence dan quality assurance. Dibangun menggunakan Next.js 15, React 19, TypeScript, Tailwind CSS, dan Framer Motion.

## ✨ Fitur Utama

### 🎯 Hero Section (Premium Design)
- Headline compelling dengan value proposition yang jelas
- Animated bus icon dengan glow effect
- CTA buttons dengan micro-interactions
- Trust badges (ISO, verified, tahun berdiri)
- Animated scroll indicator
- Background dengan gradient overlay

### 📅 Jadwal Keberangkatan (Interactive)
- Tabel jadwal yang sortable dan filterable
- Status ketersediaan real-time (Available, Almost Full, Fully Booked)
- Hover effects pada setiap jadwal card
- Mobile: Responsive card layout
- Loading states yang smooth

### 📝 Form Pemesanan (Multi-Step)
- Multi-step form dengan progress indicator
- Real-time validation menggunakan React Hook Form + Zod
- Auto-format nomor telepon
- Passenger counter dengan +/- buttons
- Summary section yang update real-time
- Success animation setelah submit
- WhatsApp direct booking alternative

### 💰 Paket & Harga (Comparison)
- Pricing cards dengan recommended badge
- Feature comparison untuk 3 paket (Reguler, Eksekutif, VIP)
- Hover effect dengan elevation
- Iconography untuk setiap fasilitas
- Responsive grid layout

### ⭐ Testimoni (Carousel)
- Auto-play carousel dengan manual navigation
- Star rating visualization
- Customer verification badges
- Quote styling yang menarik
- Responsive: Mobile swipe & Desktop grid

### 🚌 Fasilitas & Keunggulan
- Icon grid dengan animated icons
- Benefits section dengan gradient cards
- Vehicle showcase
- CTA section dengan gradient background

### ❓ FAQ Section
- Accordion component dengan smooth animations
- Search functionality
- Category tags
- Expandable answers

### 📍 Lokasi & Kontak
- Google Maps embed
- Multiple contact methods dengan animated cards
- Office hours information
- Social media links

### 🦶 Footer
- Multi-column responsive layout
- Payment methods display
- Sertification badges
- Important links
- Social media integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React + React Icons
- **Font**: Inter (Google Fonts)

## 📦 Installation

```bash
# Clone repository
git clone <repository-url>
cd project

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasil.

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deploy ke Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy ke Platform Lain
- **Netlify**: Connect repository dan set build command ke `npm run build`
- **Railway**: Connect repository, akan auto-detect Next.js
- **DigitalOcean App Platform**: Deploy dari GitHub dengan auto-detection

## 📱 Responsive Design

Landing page ini didesain dengan mobile-first approach dan fully responsive:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels untuk interactive elements
- Keyboard navigation support (Tab, Enter, Esc)
- Focus indicators yang visible
- Alt text untuk semua images
- Color contrast ratio minimum 4.5:1
- Screen reader friendly

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6, #2563eb)
- **Secondary**: Yellow/Orange (#f59e0b)
- **Accent**: Green (#10b981)
- **Neutrals**: Gray scale

### Typography Scale
- **H1**: 4xl - 7xl (responsive)
- **H2**: 3xl - 5xl (responsive)
- **H3**: 2xl - 4xl (responsive)
- **Body**: base - xl (responsive)

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Border Radius
- sm: 0.25rem
- md: 0.375rem
- lg: 0.5rem
- xl: 0.75rem
- 2xl: 1rem

## 🧪 Testing Checklist

### Functional Testing
- ✅ Semua links berfungsi dengan benar
- ✅ Form validation bekerja untuk semua field
- ✅ Form submission berhasil dengan success animation
- ✅ WhatsApp links membuka chat dengan benar
- ✅ Email links membuka email client
- ✅ Smooth scroll to sections berfungsi
- ✅ FAQ accordion expand/collapse works
- ✅ Carousel navigation works
- ✅ All interactive elements respond correctly

### Cross-browser Testing
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

### Responsive Testing
- ✅ Mobile portrait (320px - 480px)
- ✅ Mobile landscape (480px - 768px)
- ✅ Tablet (768px - 1024px)
- ✅ Desktop (1024px+)
- ✅ Large screens (1440px+)

### Performance Optimization
- Image optimization ready (use WebP format)
- Code splitting dengan Next.js dynamic imports
- Lazy loading untuk images below fold
- Minimal bundle size dengan tree shaking
- Fast page load target: <3s

## 📁 Project Structure

```
project/
├── app/
│   ├── favicon.ico
│   ├── globals.css       # Global styles & design system
│   ├── layout.tsx        # Root layout dengan SEO metadata
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation dengan mobile menu
│   ├── Hero.tsx          # Hero section dengan animations
│   ├── Schedule.tsx      # Interactive schedule
│   ├── Packages.tsx      # Pricing comparison
│   ├── BookingForm.tsx   # Multi-step booking form
│   ├── Testimonials.tsx  # Customer testimonials carousel
│   ├── Facilities.tsx    # Facilities & benefits
│   ├── FAQ.tsx           # FAQ accordion
│   ├── Contact.tsx       # Contact information & map
│   └── Footer.tsx        # Footer dengan links
├── types/
│   └── index.ts          # TypeScript type definitions
├── public/               # Static assets
├── .env.example          # Environment variables template
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` dan sesuaikan dengan kebutuhan:

```env
NEXT_PUBLIC_PHONE_NUMBER=+6281234567890
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
NEXT_PUBLIC_EMAIL=info@traveljktbdg.com
```

### Customization

#### Mengubah Konten
Edit file komponen di folder `components/` untuk mengubah konten.

#### Mengubah Warna
Edit `app/globals.css` di bagian `@theme inline` untuk mengubah color palette.

#### Mengubah Kontak
Update nomor telepon, WhatsApp, dan email di:
- `components/Hero.tsx`
- `components/Navbar.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

## 📊 SEO Optimization

Landing page ini sudah include:
- Meta title & description optimized
- Open Graph tags untuk social sharing
- Twitter Card tags
- Structured data (LocalBusiness schema)
- Semantic HTML structure
- Heading hierarchy (H1-H6)
- Alt text untuk images
- Sitemap ready

## 🎯 Performance Tips

1. **Images**: Use WebP format dengan fallback
2. **Fonts**: System fonts sudah dioptimize dengan font-display: swap
3. **Lazy Loading**: Sudah aktif untuk images di bawah fold
4. **Code Splitting**: Automatic dengan Next.js
5. **Caching**: Configure di next.config.ts untuk production

## 📝 License

MIT License - Feel free to use for your projects

## 👨‍💻 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🐛 Troubleshooting

### Build Errors
- Pastikan semua dependencies ter-install dengan benar
- Clear `.next` folder dan rebuild: `rm -rf .next && npm run build`

### Style Issues
- Clear Tailwind cache
- Restart development server

### Type Errors
- Check `types/index.ts` untuk type definitions
- Run `npx tsc --noEmit` untuk check TypeScript errors

## 📞 Support

Jika ada pertanyaan atau issue, silakan buat issue di repository atau hubungi:
- Email: dev@traveljktbdg.com
- WhatsApp: +62 812-3456-7890

---

Made with ❤️ using Next.js, TypeScript, and Tailwind CSS
