
import React from 'react';
import { NavItem, View } from '../types';

interface BottomNavProps {
  // Fix: The component expects each navigation item to have an icon, which is missing from the NavItem type.
  // Using an intersection type to enforce the presence of the `icon` property for items passed to this component.
  items: (NavItem & { icon: React.ComponentType<{ className?: string }> })[];
  activeView: View;
  onNavClick: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ items, activeView, onNavClick }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-base-300 shadow-lg md:hidden z-50">
      <div className="flex justify-around">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className={`flex flex-col items-center justify-center w-full pt-3 pb-2 text-sm font-medium transition-colors duration-200 ${
              activeView === item.id ? 'text-primary' : 'text-gray-500 hover:text-primary'
            }`}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span>{item.label}</span>
            {activeView === item.id && <div className="w-8 h-1 bg-primary rounded-full mt-1"></div>}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
