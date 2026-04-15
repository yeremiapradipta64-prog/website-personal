
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hello! I'm the digital assistant for go youn-jung holicc. How can I help you today? You can ask me about our curriculum, legacy, or school hours." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the helpful, polite, and professional AI Assistant for go youn-jung holicc. 
          School Facts: 
          - Name: go youn-jung holicc
          - Established: 1998
          - School Hours: 7:30 AM to 3:30 PM
          - Curriculum: Hybrid International (Classical + Modern STEM)
          - Values: Empathy, Curiosity, Excellence.
          - Principal: Dr. Elena Vance.
          Answer questions about the school elegantly and concisely. If you don't know an answer, suggest they contact us via the contact page or email yeremiapradiptaputra64@gmail.com.`,
          temperature: 0.7,
        },
      });

      const aiText = response.text || "I apologize, I'm having trouble connecting right now.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "I'm sorry, I'm currently unavailable. Please try again later or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-indigo-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-700 rounded-full flex items-center justify-center mr-3 animate-pulse">
                <span className="text-xs">✨</span>
              </div>
              <div>
                <p className="font-bold text-sm">GY-J Holicc AI</p>
                <p className="text-[10px] text-indigo-300">Always active</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-sm' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl rounded-tl-none border border-slate-100 text-slate-400 text-xs flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex items-center space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-grow text-sm border border-slate-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 disabled:bg-slate-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-indigo-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 transition-transform duration-500 ${isOpen ? 'rotate-90' : 'group-hover:rotate-12'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
        )}
      </button>
    </div>
  );
};
