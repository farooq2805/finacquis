
import React, { useState, useRef, useEffect } from 'react';
import { getAdvisorResponse } from '../services/geminiService';

const ExitAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([
    {role: 'ai', content: "M&A Advisory Session Active. I am your Strategic Lead. My intelligence is current on late-2024 multiples and buyer sentiment. How can I assist in optimizing your enterprise value or structuring your liquidity event?"}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', content: userMsg}]);
    setIsLoading(true);

    const advisorResponse = await getAdvisorResponse(userMsg);
    setMessages(prev => [...prev, {role: 'ai', content: advisorResponse}]);
    setIsLoading(false);
  };

  const suggestions = [
    "SaaS Multiples 2024",
    "Asset vs Stock Deals",
    "Earn-out Structuring",
    "VDR Audit Hygiene"
  ];

  return (
    <section id="advisor" className="py-32 bg-slate-950 relative border-t border-white/5">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/5 blur-[160px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
            <div className="inline-block px-5 py-2 mb-8 text-[9px] font-black tracking-[0.4em] text-indigo-400 uppercase bg-indigo-500/5 rounded-full border border-indigo-500/10">
              Institutional Intelligence
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-plus-jakarta tracking-tighter">
                Exit <span className="gradient-text">Simulator</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                Test your exit thesis against current institutional standards. Instant modeling for the world's most sophisticated entrepreneurs.
            </p>
        </div>

        <div className="glass rounded-[2.5rem] overflow-hidden border-white/10 flex flex-col lg:flex-row h-[750px] shadow-[0_50px_100px_rgba(0,0,0,0.6)] reveal">
          {/* Dashboard Sidebar */}
          <div className="w-full lg:w-80 bg-slate-900/40 p-10 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col">
            <div className="flex items-center space-x-3 mb-12">
                <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Strategic Engine On</span>
            </div>
            
            <p className="text-[9px] text-slate-500 mb-8 font-black uppercase tracking-[0.4em]">Sector Pathways</p>
            <div className="space-y-4 flex-1">
              {suggestions.map((s, idx) => (
                <button 
                  key={idx}
                  onClick={() => setInput(s)}
                  className="w-full text-left px-6 py-5 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-bold text-slate-300 border border-white/5 transition-all hover:border-indigo-500/40 group active:scale-95"
                >
                  <span className="group-hover:text-indigo-400 transition-colors uppercase tracking-widest">{s}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-indigo-600/5 rounded-[2rem] border border-indigo-500/10">
                <p className="text-[9px] text-indigo-300/60 leading-relaxed font-medium tracking-tight">
                    ANALYSIS NOTE: Our models reflect current private equity buy-box criteria and corporate dev appetite.
                </p>
            </div>
          </div>

          {/* Terminal View */}
          <div className="flex-1 flex flex-col bg-slate-950/20">
            <div ref={scrollRef} className="flex-1 p-10 overflow-y-auto space-y-8 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-7 rounded-[2.5rem] shadow-2xl ${
                    msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-slate-900/80 text-slate-100 rounded-tl-none border border-white/5 backdrop-blur-md'
                  }`}>
                    <div className="prose prose-invert prose-sm leading-relaxed whitespace-pre-wrap font-medium text-[15px]">
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-900/80 p-6 rounded-[2rem] rounded-tl-none border border-white/5">
                    <div className="flex space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-10 bg-slate-900/60 border-t border-white/5">
              <div className="flex space-x-4 items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Analyze deal structure, multiples, or buyer profiles..."
                  className="flex-1 bg-slate-950/80 border border-white/10 rounded-[1.8rem] px-10 py-5 text-[15px] text-white focus:outline-none focus:border-indigo-500/50 transition-all shadow-inner placeholder:text-slate-600 font-medium"
                />
                <button 
                  onClick={handleSend}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white p-6 rounded-[1.8rem] transition-all shadow-2xl shadow-indigo-600/40 group active:scale-95"
                >
                  <svg className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExitAdvisor;
