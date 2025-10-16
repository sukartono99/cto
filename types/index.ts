export interface ScheduleItem {
  time: string;
  type: string;
  available: boolean;
}

export interface Package {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
  icon: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  passengers: string;
}
