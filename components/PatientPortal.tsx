import React, { useState } from 'react';
import { ReportIcon, CalendarIcon, UserIcon } from '../constants';

type PortalTab = 'profile' | 'history' | 'reports';

const PatientPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PortalTab>('profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <h3 className="font-bold text-xl mb-4 text-neutral">Patient Information</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between border-b py-2"><span className="font-semibold">Name:</span> <span>John Doe</span></div>
              <div className="flex justify-between border-b py-2"><span className="font-semibold">Age:</span> <span>34</span></div>
              <div className="flex justify-between border-b py-2"><span className="font-semibold">Blood Group:</span> <span>O+</span></div>
              <div className="flex justify-between border-b py-2"><span className="font-semibold">Contact:</span> <span>+8801xxxxxxxxx</span></div>
            </div>
          </div>
        );
      case 'history':
        return (
          <div>
             <h3 className="font-bold text-xl mb-4 text-neutral">Appointment History</h3>
             <ul className="space-y-3">
                <li className="p-4 bg-base-200 rounded-md border border-gray-200">
                    <p className="font-semibold text-neutral">Dr. Fatima Ahmed (Cardiologist)</p>
                    <p className="text-sm text-gray-600">Date: 15 July 2024</p>
                    <p className="text-sm text-gray-500 mt-1">Status: <span className="font-medium text-secondary-focus">Completed</span></p>
                </li>
                 <li className="p-4 bg-base-200 rounded-md border border-gray-200">
                    <p className="font-semibold text-neutral">Dr. Ayesha Chowdhury (Dermatologist)</p>
                    <p className="text-sm text-gray-600">Date: 02 June 2024</p>
                    <p className="text-sm text-gray-500 mt-1">Status: <span className="font-medium text-secondary-focus">Completed</span></p>
                </li>
             </ul>
          </div>
        );
      case 'reports':
        return (
          <div>
            <h3 className="font-bold text-xl mb-4 text-neutral">Lab Reports</h3>
            <ul className="space-y-3">
                <li className="flex justify-between items-center p-4 bg-base-200 rounded-md border border-gray-200">
                    <div>
                        <p className="font-semibold text-neutral">Complete Blood Count (CBC)</p>
                        <p className="text-sm text-gray-600">Date: 12 July 2024</p>
                    </div>
                    <button className="text-primary font-semibold text-sm hover:underline">Download</button>
                </li>
                <li className="flex justify-between items-center p-4 bg-base-200 rounded-md border border-gray-200">
                    <div>
                        <p className="font-semibold text-neutral">Lipid Profile</p>
                        <p className="text-sm text-gray-600">Date: 12 July 2024</p>
                    </div>
                    <button className="text-primary font-semibold text-sm hover:underline">Download</button>
                </li>
             </ul>
          </div>
        );
    }
  };

  const TabButton = ({ id, label, icon: Icon }: {id: PortalTab, label: string, icon: React.FC<{className?: string}>}) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex-1 p-3 sm:p-4 font-semibold flex items-center justify-center gap-2 transition-colors duration-300 border-b-2 ${
        activeTab === id ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-primary hover:border-gray-300'
      }`}
    >
        <Icon className="w-5 h-5" />
        <span className="hidden sm:inline">{label}</span>
    </button>
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-neutral mb-8 text-center">Patient Portal</h2>
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="flex border-b border-gray-200">
          <TabButton id="profile" label="Profile" icon={UserIcon} />
          <TabButton id="history" label="History" icon={CalendarIcon} />
          <TabButton id="reports" label="Reports" icon={ReportIcon} />
        </div>
        <div className="p-6 md:p-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;