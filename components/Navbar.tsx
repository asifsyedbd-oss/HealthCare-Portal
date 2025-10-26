import React, { useState } from 'react';
import { View } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
    activeView: View;
    onNavClick: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeView, onNavClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo and Brand Name */}
                    <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onNavClick('home')}>
                         <div className="p-2 bg-primary rounded-lg transition-transform duration-300 group-hover:scale-110">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.781-4.121M12 11c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
                            </svg>
                        </div>
                        <h1 className="text-xl font-bold text-primary transition-colors duration-300 group-hover:text-primary-focus">P2P Healthcare</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {NAV_ITEMS.map(item => (
                            <button
                                key={item.id}
                                onClick={() => onNavClick(item.id)}
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 transform hover:-translate-y-px ${
                                    activeView === item.id ? 'text-white bg-primary' : 'text-neutral hover:bg-gray-100'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    
                    <div className="hidden md:flex items-center">
                         <button onClick={() => onNavClick('portal')} className="border-2 border-primary text-primary font-semibold py-2 px-5 rounded-lg text-sm hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
                           Patient Portal
                         </button>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="z-50 p-2 -mr-2">
                            <svg className="w-6 h-6 text-neutral" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                 <div className="pt-24 px-4 space-y-2">
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.id}
                            onClick={() => { onNavClick(item.id); setIsOpen(false); }}
                            className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-300 ${
                                activeView === item.id ? 'text-white bg-primary' : 'text-neutral hover:bg-gray-100'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                     <button onClick={() => { onNavClick('portal'); setIsOpen(false); }} className="mt-4 w-full text-left border-2 border-primary text-primary font-semibold py-3 px-4 rounded-lg text-lg hover:bg-primary hover:text-white transition-all duration-300">
                       Patient Portal
                     </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;