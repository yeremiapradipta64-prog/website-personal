
import React from 'react';

export const Admissions: React.FC = () => {
  const steps = [
    { number: '01', title: 'Inquiry', desc: 'Contact our admissions team to express interest and request a prospectus.' },
    { number: '02', title: 'Campus Tour', desc: 'Schedule a visit to experience our environment and meet the faculty.' },
    { number: '03', title: 'Application', desc: 'Submit the application form along with necessary documentation.' },
    { number: '04', title: 'Assessment', desc: 'Students participate in a friendly placement assessment.' },
    { number: '05', title: 'Enrollment', desc: 'Welcome to the go youn-jung holicc family!' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between mb-20 overflow-hidden relative">
          <div className="max-w-xl relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Start Your Journey</h1>
            <p className="text-indigo-100 font-light mb-8">We are now accepting applications for the 2024/2025 academic year. Join a community where your child's potential is our priority at go youn-jung holicc.</p>
            <button className="bg-white text-indigo-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors">
              Download Application Pack
            </button>
          </div>
          <div className="mt-12 md:mt-0 relative z-10">
            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
               <span className="text-8xl">✨</span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800 skew-x-12 translate-x-1/4 z-0"></div>
        </div>

        <h2 className="text-3xl font-serif font-bold mb-12 text-center">Admission Process</h2>
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <p className="text-6xl font-serif font-bold text-slate-100 absolute -top-10 left-0 -z-0">
                {step.number}
              </p>
              <div className="relative z-10 pt-4">
                <h3 className="text-xl font-serif font-bold mb-4 text-indigo-900">{step.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
