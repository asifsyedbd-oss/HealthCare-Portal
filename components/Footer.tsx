import React from 'react';
import { View } from '../types';
import { PhoneIcon } from '../constants';

interface FooterProps {
    onNavClick: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
    const quickLinks: { id: View, label: string }[] = [
        { id: 'about', label: 'About Us' },
        { id: 'services', label: 'Services' },
        { id: 'doctors', label: 'Find a Doctor' },
        { id: 'contact', label: 'Contact Us' }
    ];

    return (
        <footer className="bg-primary text-primary-content">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand and Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">P2P Healthcare</h3>
                        <p className="text-gray-400 text-sm">
                            Your trusted medical partner in Chittagong.
                        </p>
                        <div className="flex items-center mt-4">
                            <PhoneIcon className="w-5 h-5 text-gray-300"/>
                            <span className="ml-2 text-sm">+880 123 456 7890</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map(link => (
                                <li key={link.id}>
                                    <button onClick={() => onNavClick(link.id)} className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                         <ul className="space-y-3 text-sm text-gray-400">
                            <li>Doctor Consultation</li>
                            <li>Diagnostic Tests</li>
                            <li>Telemedicine</li>
                            <li>Home Sample Collection</li>
                        </ul>
                    </div>
                    
                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                           <a href="#" className="text-gray-400 hover:text-white transition-transform hover:scale-110 inline-block"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
                           <a href="#" className="text-gray-400 hover:text-white transition-transform hover:scale-110 inline-block"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} P2P Healthcare. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;