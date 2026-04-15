
import React from 'react';

export const Academics: React.FC = () => {
  const levels = [
    {
      title: 'Early Years',
      age: 'Ages 3-5',
      desc: 'Focus on play-based learning and social-emotional development.',
      image: 'https://i.pinimg.com/736x/c1/12/fe/c112fe519bdf32f53e3bd169162bf0ed.jpg',
      link: 'https://www.netflix.com/watch/81697769?source=35'
    },
    {
      title: 'Primary School',
      age: 'Grades 1-5',
      desc: 'Building strong foundations in literacy, numeracy, and inquiry.',
      image: 'https://picsum.photos/seed/primary/600/400',
      link: '#'
    },
    {
      title: 'Middle School',
      age: 'Grades 6-8',
      desc: 'Developing critical thinking and subject-specific expertise.',
      image: 'https://picsum.photos/seed/middle/600/400',
      link: '#'
    },
    {
      title: 'High School',
      age: 'Grades 9-12',
      desc: 'Advanced placements and college preparatory pathways.',
      image: 'https://picsum.photos/seed/high/600/400',
      link: '#'
    }
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900">Academic Programs</h1>
          <p className="text-slate-500 font-light">We offer a comprehensive educational journey that adapts to each child's developmental stage, preparing them for the complexities of the 21st century.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {levels.map((level, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-64 overflow-hidden relative">
                <img src={level.image} alt={level.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-indigo-900 uppercase">
                  {level.age}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-3">{level.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-6">{level.desc}</p>
                <a 
                  href={level.link}
                  target={level.link !== '#' ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-bold text-sm inline-flex items-center hover:underline cursor-pointer"
                >
                  View Curriculum
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
