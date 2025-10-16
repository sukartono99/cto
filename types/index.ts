export interface ScheduleItem {
  id: string;
  time: string;
  route: string;
  type: 'Reguler' | 'Eksekutif' | 'VIP';
  available: number;
  total: number;
  status: 'available' | 'almost-full' | 'fully-booked';
  pickupPoints: string[];
  dropPoints: string[];
}

export interface Package {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  features: string[];
  recommended?: boolean;
  icon: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar?: string;
  verified?: boolean;
  date: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  departureTime: string;
  passengers: number;
  route: 'jakarta-bandung' | 'bandung-jakarta';
  packageType: 'reguler' | 'eksekutif' | 'vip';
  pickupPoint: string;
  dropPoint: string;
  notes?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  officeHours: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}
