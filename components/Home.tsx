import React from 'react';
import { View } from '../types';
import { FEATURES, TESTIMONIALS, MOCK_DOCTORS } from '../constants';
import DoctorCard from './DoctorCard';

interface HomeProps {
  setView: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ setView }) => {

  const handleFeatureClick = (id: View) => {
      setView(id);
  }

  return (
    <div className="space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section className="text-center py-8 md:py-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
          Modern Healthcare, Personalized For You.
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Welcome to P2P Healthcare, Chittagong's trusted medical center. We combine state-of-the-art technology with a patient-first approach to provide you with the best healthcare possible.
        </p>
        <button 
          onClick={() => setView('appointments')}
          className="bg-primary hover:bg-primary-focus text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
        >
          Book an Appointment
        </button>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-neutral mb-12">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              onClick={() => handleFeatureClick(feature.id as View)}
              className="bg-base-200 rounded-lg p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-base-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 bg-white rounded-full mb-4 shadow-sm">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-neutral">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-neutral mb-12">What Our Patients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300">
               <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 grayscale bg-base-300" loading="lazy"/>
              <p className="text-gray-600 italic mb-4 flex-grow">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-bold text-neutral">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-12">
            <button onClick={() => setView('testimonials')} className="text-primary font-semibold hover:underline transition-transform hover:scale-105 inline-block">
                View All Testimonials &rarr;
            </button>
        </div>
      </section>

      {/* Meet Our Doctors Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-neutral mb-12">Meet Our Doctors</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_DOCTORS.slice(0, 3).map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} setView={setView} />
            ))}
        </div>
        <div className="text-center mt-12">
            <button onClick={() => setView('doctors')} className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-focus transition-colors">
                View All Doctors
            </button>
        </div>
      </section>

    </div>
  );
};

export default Home;