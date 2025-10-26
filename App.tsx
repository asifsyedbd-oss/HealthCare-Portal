import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import DoctorsList from './components/DoctorsList';
import PatientPortal from './components/PatientPortal';
import AppointmentBooking from './components/AppointmentBooking';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Events from './components/Events';
import ContactUs from './components/ContactUs';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home setView={setCurrentView} />;
      case 'about':
        return <AboutUs />;
      case 'services':
        return <Services />;
      case 'doctors':
        return <DoctorsList setView={setCurrentView} />;
      case 'testimonials':
        return <Testimonials />;
      case 'events':
        return <Events />;
      case 'contact':
        return <ContactUs />;
      case 'portal':
        return <PatientPortal />;
      case 'appointments':
         return <AppointmentBooking />;
      default:
        return <Home setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-base-100 font-sans text-neutral flex flex-col">
      <Navbar 
        activeView={currentView}
        onNavClick={(view) => setCurrentView(view)}
      />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
          {renderContent()}
        </div>
      </main>
      <Footer onNavClick={(view) => setCurrentView(view)} />
    </div>
  );
};

export default App;