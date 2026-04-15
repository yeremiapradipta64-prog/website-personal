
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { firstName, lastName, email, message } = formData;
    const recipient = "yeremiapradiptaputra64@gmail.com";
    const subject = encodeURIComponent(`Pesan dari ${firstName} ${lastName} via Website GY-J Holicc`);
    const body = encodeURIComponent(
      `Nama Lengkap: ${firstName} ${lastName}\n` +
      `Email Pengirim: ${email}\n\n` +
      `Isi Pesan:\n${message}`
    );

    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-900">Get in Touch</h1>
            <p className="text-slate-500 font-light mb-12">Apakah Anda orang tua calon siswa, alumni, atau hanya ingin tahu lebih banyak tentang kami? Kami siap mendengar dari Anda.</p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Utama</h4>
                  <p className="text-slate-500 font-light text-sm">yeremiapradiptaputra64@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telepon</h4>
                  <p className="text-slate-500 font-light text-sm">0878-9631-8703<br />0819-3213-3505</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                    placeholder="Jane" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                  placeholder="jane@example.com" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                  placeholder="Bagaimana kami bisa membantu Anda?"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:bg-slate-400 disabled:shadow-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Membuka Email...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
