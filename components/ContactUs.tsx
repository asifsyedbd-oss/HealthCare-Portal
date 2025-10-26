import React from 'react';
import { PhoneIcon } from '../constants';

const ContactUs: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    // Here you would typically handle form submission, e.g., send data to a server.
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral">Get In Touch</h2>
        <p className="text-gray-500 mt-2 text-lg">
          We're here to help. Contact us with any questions or to schedule an appointment.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 bg-white p-6 sm:p-8 rounded-lg border border-gray-200">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <h3 className="text-2xl font-semibold text-neutral mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows={4} required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-focus transition-colors">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 lg:col-span-2">
          <h3 className="text-2xl font-semibold text-neutral mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">Address</h4>
              <p className="text-gray-600">123 Health St, CDA Avenue, Chittagong, Bangladesh</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600 flex items-center"><PhoneIcon className="w-4 h-4 mr-2 text-neutral"/>+880 123 456 7890</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">contact@p2phealthcare.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Operating Hours</h4>
              <p className="text-gray-600">Saturday - Thursday: 9:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Friday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;