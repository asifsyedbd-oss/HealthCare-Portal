import React, { useState } from 'react';
import { MOCK_DOCTORS, DoctorIcon, CalendarIcon, ClockIcon, PencilIcon } from '../constants';
import { Doctor } from '../types';

const AppointmentBooking: React.FC = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [reason, setReason] = useState('');
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'success'>('idle');

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];
  
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctorId || !selectedDate || !selectedTime) {
      alert('Please select a doctor, date, and time.');
      return;
    }
    // Simulate booking
    setBookingStatus('success');
  };
  
  const handleReset = () => {
      setSelectedDoctorId(null);
      setSelectedDate('');
      setSelectedTime(null);
      setReason('');
      setBookingStatus('idle');
  }

  if (bookingStatus === 'success') {
    const doctor = MOCK_DOCTORS.find(d => d.id === selectedDoctorId);
    return (
      <div className="p-4 max-w-lg mx-auto text-center">
         <div className="bg-base-200 border border-gray-200 p-6 sm:p-8 rounded-lg" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-bold text-2xl text-neutral">Appointment Confirmed!</p>
            <div className="mt-6 text-left space-y-3 bg-white p-4 rounded-md border border-gray-200">
                <p><strong>Doctor:</strong> {doctor?.name}</p>
                <p><strong>Specialty:</strong> {doctor?.specialty}</p>
                <p><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
            </div>
        </div>
        <button 
          onClick={handleReset}
          className="mt-8 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-focus transition-colors"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-neutral mb-8 text-center">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg border border-gray-200">
        {/* Doctor Selection */}
        <div>
          <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-2">Select Doctor</label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <DoctorIcon className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="doctor"
              value={selectedDoctorId ?? ''}
              onChange={(e) => setSelectedDoctorId(Number(e.target.value))}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition appearance-none bg-white"
            >
              <option value="" disabled>Choose a doctor</option>
              {MOCK_DOCTORS.map(doc => (
                <option key={doc.id} value={doc.id}>{doc.name} - {doc.specialty}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
           <div className="relative">
             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="date"
              min={today}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white"
            />
           </div>
        </div>

        {/* Time Slot Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {timeSlots.map(time => (
              <button
                type="button"
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-2 border rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedTime === time 
                    ? 'bg-primary text-white border-primary-focus' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        
        {/* Reason for Visit */}
        <div>
           <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit (Optional)</label>
            <div className="relative">
             <div className="pointer-events-none absolute top-3.5 left-0 flex items-center pl-3">
              <PencilIcon className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              id="reason"
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Briefly describe your symptoms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white"
            />
            </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!selectedDoctorId || !selectedDate || !selectedTime}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-focus transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-base shadow"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default AppointmentBooking;