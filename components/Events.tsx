import React from 'react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral">Upcoming Events</h2>
        <p className="text-gray-500 mt-2 text-lg">
          Join us for our community health events and webinars.
        </p>
      </div>

      <div className="space-y-12">
        {EVENTS.map((event) => (
          <div key={event.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300">
            <div className="w-full md:w-5/12 bg-base-300">
               <img src={event.imageUrl} alt={event.title} className="w-full h-64 md:h-full object-cover grayscale" loading="lazy"/>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center md:w-7/12">
              <p className="text-sm font-semibold text-secondary-focus">{event.date}</p>
              <h3 className="text-2xl font-bold text-neutral mt-1">{event.title}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{event.description}</p>
              <button className="mt-6 bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary-focus transition-colors self-start">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;