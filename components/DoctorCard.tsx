import React from 'react';
import { Doctor, View } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  setView: (view: View) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, setView }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <img
        src={doctor.avatarUrl}
        alt={doctor.name}
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-100 grayscale bg-base-300"
        loading="lazy"
      />
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-neutral">{doctor.name}</h3>
        <p className="text-secondary-focus font-medium mb-2">{doctor.specialty}</p>
        <p className="text-sm text-gray-500 mt-1 flex-grow">{doctor.availability}</p>
        <button 
          onClick={() => setView('appointments')}
          className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-focus transition-colors"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;