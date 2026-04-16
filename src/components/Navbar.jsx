import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', name: 'Home', icon: HomeIcon },
    { path: '/timeline', name: 'Timeline', icon: ClockIcon },
    { path: '/stats', name: 'Stats', icon: ChartBarIcon },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="font-bold text-xl text-gray-800">KeenKeeper</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-1 md:space-x-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-1 md:space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm md:text-base font-medium">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;