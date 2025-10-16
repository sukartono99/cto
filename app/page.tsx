import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import BookingForm from '@/components/BookingForm';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
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
      <Contact />
      <Footer />
    </main>
  );
}
