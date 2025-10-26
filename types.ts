export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  availability: string;
  avatarUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export type View = 'home' | 'about' | 'services' | 'doctors' | 'testimonials' | 'events' | 'contact' | 'portal' | 'appointments';

export interface NavItem {
  id: View;
  label: string;
}

export interface Testimonial {
    id: number;
    name: string;
    location: string;
    quote: string;
    avatarUrl: string;
}

export interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
}