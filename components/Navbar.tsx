
import React, { useState, useEffect } from 'react';
import { Page, NavItem } from '../types';

interface NavbarProps {
  current: Page;
  onNavigate: (page: Page) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Biodata', id: 'biodata' },
  { label: 'Film', id: 'film' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ current, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden mr-3 group-hover:rotate-12 transition-transform border border-slate-200 shadow-sm">
              <img 
                src="https://i.pinimg.com/736x/15/8c/34/158c340cbcb41c73d8ca67d820843472.jpg" 
                alt="Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className={`font-serif font-bold text-xl tracking-tight text-slate-900`}>
                GO YOUN-JUNG
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-indigo-600 font-semibold -mt-1">HOLICC</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  current === item.id 
                    ? 'text-indigo-600 border-b-2 border-indigo-600' 
                    : 'text-slate-600 hover:text-indigo-600'
                } py-1`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-indigo-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-indigo-800 transition-all shadow-lg shadow-indigo-200"
            >
              Get in Touch
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 rounded-md ${
                  current === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
