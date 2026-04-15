
import React from 'react';

export const Film: React.FC = () => {
  const works = [
    {
      title: 'Can This Love Be Translated?',
      type: 'Netflix Original / Upcoming',
      desc: 'Drama romantis yang sangat dinantikan, menceritakan kisah cinta tak terduga antara seorang penerjemah multibahasa jenius dan seorang aktris papan atas global yang memiliki cara berkomunikasi yang sangat berbeda.',
      image: 'https://i.pinimg.com/736x/b1/9b/13/b19b1373aded5a325500c97915bbc4ce.jpg',
      link: 'https://www.netflix.com/title/81697769'
    },
    {
      title: 'Alchemy of Souls',
      type: 'tvN / Netflix',
      desc: 'Penampilan memukau sebagai Nak-su, pembunuh bayaran legendaris yang jiwanya terperangkap dalam tubuh yang lemah.',
      image: 'https://i.pinimg.com/736x/34/09/29/340929b4254948b2300fc8eef4fe21dd.jpg',
      link: 'https://www.netflix.com/watch/81517188?source=35'
    },
    {
      title: 'Resident Playbook',
      type: 'tvN / Netflix / Upcoming',
      desc: 'Membintangi drama medis yang sangat dinantikan, menceritakan kehidupan dan perjuangan para residen obstetri dan ginekologi di pusat medis Universitas Jongno, sebuah spin-off dari seri populer Hospital Playlist.',
      image: 'https://i.pinimg.com/736x/1a/51/e4/1a51e48635d4fb3f8630916834d1e8ab.jpg',
      link: 'https://www.netflix.com/watch/81739042?source=35'
    },
    {
      title: 'Moving',
      type: 'Disney+ / Hulu',
      desc: 'Berperan sebagai Jang Hui-soo, seorang siswi SMA dengan kekuatan super regenerasi instan dalam serial aksi superhero yang meraih kesuksesan global besar-besaran.',
      image: 'https://i.pinimg.com/736x/2d/e4/1c/2de41c7c403d2a04bea917f59f80a815.jpg',
      link: 'https://www.imdb.com/title/tt24640580/'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-[10px] bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 mb-4 inline-block">
            Cinematic Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900">Film & Television</h1>
          <p className="text-slate-500 font-light">Jelajahi perjalanan sinematik Go Youn-jung melalui berbagai peran ikonik yang telah memikat penonton secara global.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {works.map((work, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
              <div className="h-[28rem] overflow-hidden relative">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-indigo-900 uppercase tracking-widest pointer-events-none">
                  {work.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 pointer-events-none">
                   <p className="text-white text-sm font-light italic">"{work.desc}"</p>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-serif font-bold mb-3 text-slate-900">{work.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm">{work.desc.substring(0, 100)}...</p>
                <a 
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-indigo-900 text-white font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-800 transition-all shadow-lg shadow-indigo-100"
                >
                  Watch Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 p-12 bg-indigo-900 rounded-[3rem] text-center text-white relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-4">Ingin tahu lebih banyak tentang peran lainnya?</h2>
              <p className="text-indigo-200 font-light mb-8 max-w-xl mx-auto">Silakan hubungi tim administrasi kami untuk informasi lebih lanjut mengenai filmografi lengkap Go Youn-jung atau kunjungi galeri kami.</p>
              <button className="bg-white text-indigo-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-xl">
                 Explore Gallery
              </button>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};
