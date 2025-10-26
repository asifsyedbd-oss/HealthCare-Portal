
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-primary rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-primary">P2P Healthcare</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-gray-500 hover:text-primary">EN</button>
          <span className="text-gray-300">|</span>
          <button className="text-gray-700 hover:text-primary font-semibold">BN</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
