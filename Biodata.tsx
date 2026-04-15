
import React, { useState } from 'react';

export const Biodata: React.FC = () => {
  const [imageUrl] = useState<string>("https://i.pinimg.com/736x/31/38/c2/3138c28d94149d7ee78a48f01996e696.jpg");

  return (
    <div className="pt-32 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-[10px] bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 mb-4 inline-block">
            Distinguished Alumni Profile
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-6xl md:text-9xl font-serif font-bold text-slate-900 leading-none">
                고윤정
              </h1>
              <div className="mt-4">
                <p className="text-2xl md:text-4xl text-slate-400 font-serif font-light tracking-wide">Go Youn-jung</p>
                <p className="text-lg text-indigo-900/60 font-serif italic mt-1">Seni Kontemporer & Ekspresi Kreatif</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="prose prose-slate prose-lg font-light text-slate-600 leading-relaxed text-justify mb-12">
              <p>
                <strong>Go Youn-jung</strong> (lahir 22 April 1996) adalah seorang aktris dan model asal Korea Selatan di bawah naungan MAA Entertainment. Ia dikenal luas sebagai figur yang menggabungkan kecerdasan intelektual dengan bakat seni yang luar biasa, menjadikannya salah satu alumni paling inspiratif di <strong>go youn-jung holicc</strong>.
              </p>
              
              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Latar Belakang Pendidikan</h3>
              <p>
                Sebelum terjun ke dunia seni peran, Youn-jung menempuh pendidikan di <strong>Seoul Woman's University</strong> dengan fokus pada <strong>Contemporary Art (Seni Kontemporer)</strong>. Latar belakang seni ini memberikan dimensi unik pada setiap karakter yang ia perankan, di mana ia sering dipuji karena kemampuannya dalam menyampaikan emosi melalui ekspresi wajah yang halus namun kuat.
              </p>

              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Perjalanan Karier</h3>
              <p>
                Ia memulai debut aktingnya pada tahun 2019 dalam serial <em>He Is Psychometric</em>. Popularitasnya melonjak tajam setelah membintangi serial Netflix <em>Sweet Home</em> (2020), di mana ia menunjukkan sisi tangguh dan kemanusiaan yang mendalam. Kesuksesannya berlanjut melalui peran-peran ikonik dalam <em>Law School</em>, <em>Alchemy of Souls</em>, dan drama aksi superhero <em>Moving</em> yang mendapatkan pujian kritis secara global.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-b border-slate-100">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Nama Lengkap</p>
                <p className="text-lg font-serif font-bold text-slate-900">Go Youn-jung</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Tanggal Lahir</p>
                <p className="text-lg font-serif font-bold text-slate-900">22 April 1996</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Pendidikan</p>
                <p className="text-lg font-serif font-bold text-slate-900">Contemporary Art</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Agensi</p>
                <p className="text-lg font-serif font-bold text-slate-900">MAA Ent.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 sticky top-32">
            <div className="relative z-10 overflow-hidden rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(79,70,229,0.25)] border-[16px] border-slate-50 transition-all duration-1000">
              <img 
                src={imageUrl} 
                alt="Go Youn-jung Profile" 
                className="w-full object-cover aspect-[3/4] transition-transform duration-[3s] ease-out hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent opacity-40"></div>
            </div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-100 rounded-full -z-10 blur-[100px] opacity-60"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-100 rounded-[3rem] -z-10 rotate-[15deg]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
