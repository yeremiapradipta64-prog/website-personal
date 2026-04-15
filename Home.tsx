
import React from 'react';
import { Page } from '../types';
import { About } from './About';
import { Academics } from './Academics';
import { Admissions } from './Admissions';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/736x/9e/76/7f/9e767f3b1eaa5812077c3c7418b3a3ea.jpg" 
            alt="Go Youn-jung - Global Ambassador" 
            className="w-full h-full object-cover brightness-[0.85] object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-4 py-1.5 bg-indigo-600/90 backdrop-blur-md text-[10px] font-bold tracking-[0.3em] uppercase rounded-full mb-8 border border-white/20">
              Established Since 1998
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-[1.1] drop-shadow-2xl">
              Shaping Minds, <br />
              <span className="italic font-normal opacity-90">Inspiring Futures.</span>
            </h1>
            <p className="text-xl text-slate-100 mb-10 font-light leading-relaxed max-w-lg drop-shadow-md">
              Empower your potential at <span className="font-semibold text-white underline decoration-indigo-500 decoration-2 underline-offset-4">go youn-jung holicc</span>. A sanctuary for academic excellence and artistic expression.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-indigo-900 px-10 py-5 rounded-full font-bold hover:bg-indigo-50 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
              >
                Join Us Today
              </button>
              <button 
                onClick={() => onNavigate('biodata')}
                className="border-2 border-white/40 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all hover:-translate-y-1 active:translate-y-0"
              >
                Our Legacy
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 right-12 hidden lg:block animate-bounce">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl rotate-3">
             <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">Global Icon</p>
             <p className="text-sm font-serif text-white">Go Youn-jung</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <a 
                href="https://www.google.com/maps/place/Seoul+Women's+University+(SWU)/data=!4m2!3m1!1s0x0:0x14cb14d89b7450a7?sa=X&ved=1t:2428&ictx=111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-indigo-900 transition-all duration-500 group-hover:rotate-12 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </a>
              <h3 className="font-serif text-2xl font-bold mb-1 text-slate-900">서울여자대학교</h3>
              <p className="text-indigo-600 font-bold text-sm mb-4">Seoul Women's University (SWU)</p>
              <p className="text-slate-500 font-light leading-relaxed italic text-sm">Seoul Yeoja Daehakgyo</p>
            </div>
            
            <div className="group">
              <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-indigo-900 transition-all duration-500 group-hover:-rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">Global Community</h3>
              <p className="text-slate-500 font-light leading-relaxed">Representing over 30 nationalities, fostering a truly international perspective.</p>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-indigo-900 transition-all duration-500 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">Creative Excellence</h3>
              <p className="text-slate-500 font-light leading-relaxed">Extensive programs in contemporary art and performance to unlock every student's innate genius.</p>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Academics />
      <Admissions />
    </div>
  );
};
