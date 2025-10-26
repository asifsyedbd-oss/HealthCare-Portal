import React from 'react';
import { FEATURES } from '../constants';
import { View } from '../types';

const Services: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral">Our Comprehensive Services</h2>
        <p className="text-gray-500 mt-2 text-lg">
          We offer a wide range of medical services to meet all your health needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {FEATURES.map((feature) => (
          <div key={feature.id} className="bg-white p-6 rounded-lg border border-gray-200 flex items-start space-x-5 hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0 p-3 bg-base-200 rounded-full">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral">{feature.title}</h3>
              <p className="text-gray-600 mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;