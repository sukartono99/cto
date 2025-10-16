import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import Packages from '@/components/Packages';
import BookingForm from '@/components/BookingForm';
import Testimonials from '@/components/Testimonials';
import Facilities from '@/components/Facilities';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Schedule />
      <Packages />
      <BookingForm />
      <Testimonials />
      <Facilities />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
