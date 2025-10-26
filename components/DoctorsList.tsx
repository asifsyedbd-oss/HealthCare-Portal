import React, { useState } from 'react';
import { Doctor, View } from '../types';
import DoctorCard from './DoctorCard';
import { MOCK_DOCTORS } from '../constants';

interface DoctorsListProps {
  setView: (view: View) => void;
}

const DoctorsList: React.FC<DoctorsListProps> = ({ setView }) => {
  const [doctors, setDoctors] = useState<Doctor[]>(MOCK_DOCTORS);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter(doctor => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
    if (!trimmedSearchTerm) return true; // Show all doctors if search is empty
    return doctor.name.toLowerCase().includes(trimmedSearchTerm) ||
           doctor.specialty.toLowerCase().includes(trimmedSearchTerm);
  });

  return (
    <div>
      <h2 className="text-3xl font-bold text-neutral mb-2 text-center">Find Your Doctor</h2>
      <p className="text-center text-gray-500 mb-8">Search by name or specialty</p>
      
      <div className="mb-8 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="e.g. 'Cardiologist' or 'Dr. Ahmed'"
          className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-primary transition-colors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => <DoctorCard key={doctor.id} doctor={doctor} setView={setView}/>)
        ) : (
          <p className="text-center text-gray-500 py-10 md:col-span-3">No doctors found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;