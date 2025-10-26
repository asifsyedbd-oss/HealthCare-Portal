import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral">What Our Patients Say</h2>
        <p className="text-gray-500 mt-2 text-lg">
          Real stories from people we've had the privilege to care for.
        </p>
      </div>

      <div className="space-y-8">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-8 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
            <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 grayscale bg-base-300" loading="lazy"/>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 italic text-xl">"{testimonial.quote}"</p>
               <div className="mt-6">
                <p className="font-bold text-lg text-neutral">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;