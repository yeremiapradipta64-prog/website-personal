
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-8 h-8 rounded overflow-hidden mr-3 border border-slate-200">
                <img 
                  src="https://i.pinimg.com/736x/15/8c/34/158c340cbcb41c73d8ca67d820843472.jpg" 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="font-serif font-bold text-xl tracking-tight text-slate-900 uppercase">GO YOUN-JUNG HOLICC</h1>
            </div>
            <p className="text-slate-500 font-light text-sm max-w-sm leading-relaxed">
              Excellence in education since 1998. go youn-jung holicc is dedicated to providing a nurturing environment where students can thrive academically, socially, and emotionally.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-light">
              <li><button onClick={() => onNavigate('home')} className="hover:text-indigo-600 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('biodata')} className="hover:text-indigo-600 transition-colors">Biodata</button></li>
              <li><button onClick={() => onNavigate('film')} className="hover:text-indigo-600 transition-colors">Film</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-indigo-600 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Social Media</h4>
            <div className="flex space-x-4">
               <a 
                 href="https://www.instagram.com/goyounjung/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                 title="Go Youn-jung Official Instagram"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917.000-1.417.923A3.927 3.927.000 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.999 0h.002zm-.003 1.444c2.146 0 2.4.01 3.245.048.78.036 1.203.166 1.485.276.374.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.844.047 1.097.047 3.245s-.008 2.381-.047 3.245c-.036.78-.166 1.203-.276 1.485a2.45 2.45 0 0 1-.599.919c-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.096.047-3.245.047s-2.39-.009-3.245-.047c-.78-.036-1.203-.166-1.485-.276a2.473 2.473 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.245 0-2.148.008-2.401.046-3.245.036-.78.166-1.203.276-1.485.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                 </svg>
               </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2024 go youn-jung holicc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
