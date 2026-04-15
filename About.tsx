
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Legacy</h2>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-900 leading-tight">
              A History of Excellence <br /> and Innovation.
            </h1>
            <div className="space-y-6 text-slate-600 font-light leading-relaxed">
              <p>
                Founded in 1998, go youn-jung holicc began with a simple mission: to provide a sanctuary for learning where intellectual curiosity is nurtured and every student is seen as an individual.
              </p>
              <p>
                Over the decades, we have evolved into a premier institution known for our unique pedagogical approach. We don't just teach subjects; we teach students how to think, how to question, and how to lead with empathy.
              </p>
              <p>
                Our campus, designed with minimalist principles, offers a serene environment that reduces cognitive load and maximizes focus, allowing students to reach their full potential.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-serif font-bold text-indigo-900">25+</p>
                <p className="text-sm text-slate-500">Years of History</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-indigo-900">100%</p>
                <p className="text-sm text-slate-500">College Placement</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/about-img/800/1000" 
              alt="School Architecture" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-50 rounded-3xl -z-0"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center z-20">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
