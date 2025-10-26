import React from 'react';
import { NavItem, Doctor, Feature, Testimonial, Event } from './types';

export const HomeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

export const DoctorIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const LabIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477-1.022.547m10.894-4.894c.381.381.586.904.586 1.414s-.205 1.033-.586 1.414l-4.894 4.894a2 2 0 01-2.828 0l-4.894-4.894a2 2 0 010-2.828l4.894-4.894a2 2 0 012.828 0l4.894 4.894z" />
  </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export const VideoIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

export const SampleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 2v11a5 5 0 005 5h0a5 5 0 005-5V2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 2h14" />
    </svg>
);

export const ReportIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export const MembershipIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

export const PencilIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L13.196 5.196z" />
    </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const InformationCircleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'doctors', label: 'Doctors' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact Us' },
];

export const MOCK_DOCTORS: Doctor[] = [
  { id: 1, name: 'Dr. Fatima Ahmed', specialty: 'Cardiologist', availability: 'Mon, Wed, Fri (9am - 1pm)', avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=60' },
  { id: 2, name: 'Dr. Kabir Khan', specialty: 'Pediatrician', availability: 'Tue, Thu (2pm - 6pm)', avatarUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16e?w=400&auto=format&fit=crop&q=60' },
  { id: 3, name: 'Dr. Ayesha Chowdhury', specialty: 'Dermatologist', availability: 'Mon - Fri (10am - 5pm)', avatarUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=60' },
  { id: 4, name: 'Dr. Imtiaz Rahman', specialty: 'Orthopedist', availability: 'Sat (10am - 2pm)', avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=60' },
  { id: 5, name: 'Dr. Sharmin Islam', specialty: 'Gynecologist', availability: 'Mon, Wed (3pm - 7pm)', avatarUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&auto=format&fit=crop&q=60' },
];

export const FEATURES: Feature[] = [
    { id: 'doctors', title: 'Find a Doctor', description: 'Search and book appointments', icon: DoctorIcon },
    { id: 'diagnostics', title: 'Diagnostics', description: 'Book lab tests & checkups', icon: LabIcon },
    { id: 'portal', title: 'Patient Portal', description: 'Access your health records', icon: ReportIcon },
    { id: 'telemedicine', title: 'Telemedicine', description: 'Consult with doctors online', icon: VideoIcon },
    { id: 'sample', title: 'Home Sample', description: 'Schedule sample collection', icon: SampleIcon },
    { id: 'membership', title: 'Membership', description: 'View plans and discounts', icon: MembershipIcon }
];

export const TESTIMONIALS: Testimonial[] = [
    { id: 1, name: 'Anwar Hossain', location: 'Chittagong', quote: 'The care I received at P2P Healthcare was exceptional. The doctors are knowledgeable and the staff is incredibly supportive. Highly recommended!', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Salma Begum', location: 'Agrabad, Ctg', quote: 'Booking an appointment was so easy through their website. The whole process was seamless and the facilities are top-notch. A truly modern healthcare experience.', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Rahim Sheikh', location: 'Khulshi, Ctg', quote: 'I was impressed by the professionalism and the patient-centric approach. They really listen to you and make you feel comfortable.', avatarUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&auto=format&fit=crop&q=60' },
];

export const EVENTS: Event[] = [
    { id: 1, title: 'Free Health Check-up Camp', date: 'October 15, 2024', description: 'Join us for a free health screening event covering basic vitals, blood sugar, and cholesterol checks. Open to all community members.', imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60' },
    { id: 2, title: 'Webinar: "Heart Health for All"', date: 'November 5, 2024', description: 'Our leading cardiologists will discuss preventive measures and lifestyle changes for a healthy heart. Register online to get the link.', imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60' },
    { id: 3, title: 'Blood Donation Drive', date: 'December 1, 2024', description: 'Give the gift of life. P2P Healthcare is organizing a blood donation drive in partnership with the local blood bank. Your contribution can save lives.', imageUrl: 'https://images.unsplash.com/photo-1582719478212-c857e5401b31?w=500&auto=format&fit=crop&q=60' },
];