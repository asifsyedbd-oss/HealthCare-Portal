import React from 'react';
import { DoctorIcon, LabIcon, VideoIcon, SampleIcon, ReportIcon } from '../constants';

const AboutUs: React.FC = () => {

  const services = [
    { name: 'Expert Doctor Consultations', icon: DoctorIcon },
    { name: 'Advanced Diagnostic & Lab Tests', icon: LabIcon },
    { name: 'Convenient Telemedicine Services', icon: VideoIcon },
    { name: 'At-Home Sample Collection', icon: SampleIcon },
    { name: 'Comprehensive Health Checkups', icon: ReportIcon },
  ];

  const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        {children}
      </p>
    </div>
  );

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-neutral mb-2">About P2P Healthcare</h2>
        <p className="text-lg text-gray-500">
          Your trusted partner in health, right here in Chittagong.
        </p>
      </div>

      <div className="space-y-8">
        <InfoCard title="Our Mission">
          To deliver patient-centered healthcare with excellence in quality, service, and access. We aim to bridge the gap between patients and providers through technology and compassionate care.
        </InfoCard>

        <InfoCard title="Our Vision">
          To be the leading healthcare provider in Chittagong, renowned for our commitment to clinical excellence, patient satisfaction, and innovative health solutions.
        </InfoCard>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-primary mb-6">Our Services</h3>
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 -mx-3">
                <div className="bg-base-200 p-3 rounded-full flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-gray-700 text-lg">{service.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;