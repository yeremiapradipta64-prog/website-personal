
import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-slate-50 flex flex-col items-center justify-center animate-in fade-in duration-500">
      <div className="relative flex flex-col items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl mb-8 animate-pulse">
          <img 
            src="https://i.pinimg.com/736x/15/8c/34/158c340cbcb41c73d8ca67d820843472.jpg" 
            alt="School Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center">
          <h1 className="font-serif font-bold text-2xl md:text-3xl tracking-widest text-slate-900 uppercase">
            GO YOUN-JUNG
          </h1>
          <div className="flex items-center justify-center space-x-3 mt-1">
            <span className="h-[1px] w-8 bg-indigo-600/30"></span>
            <p className="text-xs uppercase tracking-[0.5em] text-indigo-600 font-bold">
              HOLICC
            </p>
            <span className="h-[1px] w-8 bg-indigo-600/30"></span>
          </div>
        </div>

        <div className="absolute bottom-[-100px] flex flex-col items-center">
          <div className="w-48 h-[2px] bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-600 animate-loading"></div>
          </div>
          <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
            Transitioning...
          </p>
        </div>
      </div>
    </div>
  );
};
