
import React, { useState, useRef, useEffect } from 'react';
import { getAdvisorResponse } from '../services/geminiService';

const ExitAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([
    {role: 'ai', content: "Secure advisory session established. I am your Lead M&A Strategist. Please feel free to inquire about sector-specific EBITDA multiples, revenue expansion drivers, or due diligence preparedness. How may I assist in optimizing your exit strategy today?"}
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
    "Typical SaaS multiples for 2024?",
    "Pre-exit audit checklist",
    "Asset vs Stock deal pros/cons",
    "How to structure an earn-out?"
  ];

  return (
    <section id="advisor" className="py-32 bg-slate-950 relative border-t border-white/5">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/5 blur-[160px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-purple-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
            <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-indigo-400 uppercase bg-indigo-500/5 rounded-full border border-indigo-500/10">
              Instant Strategic Insights
            </div>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 font-plus-jakarta tracking-tighter">
                Exit <span className="gradient-text">Simulator</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                Experience institutional-grade advisory in real-time. No gatekeepers, just raw market intelligence trained on top-tier M&A methodologies.
            </p>
        </div>

        <div className="glass rounded-[3rem] overflow-hidden border-white/10 flex flex-col lg:flex-row h-[750px] shadow-3xl shadow-black/80 reveal">
          {/* Sidebar */}
          <div className="w-full lg:w-80 bg-slate-900/40 p-10 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col">
            <div className="flex items-center space-x-3 mb-10">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Advisor Online</span>
            </div>
            
            <p className="text-[10px] text-slate-500 mb-6 font-black uppercase tracking-[0.3em]">Knowledge Pathways</p>
            <div className="space-y-4 flex-1">
              {suggestions.map((s, idx) => (
                <button 
                  key={idx}
                  onClick={() => setInput(s)}
                  className="w-full text-left p-5 bg-white/5 hover:bg-white/10 rounded-2xl text-[11px] font-bold text-slate-300 border border-white/5 transition-all hover:border-indigo-500/30 group active:scale-95"
                >
                  <span className="group-hover:text-indigo-400 transition-colors">{s}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-10 p-5 bg-indigo-600/5 rounded-[2rem] border border-indigo-500/10">
                <p className="text-[10px] text-indigo-300/60 leading-relaxed font-medium">
                    *Strategic guidance only. Consult legal/tax advisors for actual transactions.
                </p>
            </div>
          </div>

          {/* Chat */}
          <div className="flex-1 flex flex-col bg-slate-950/20">
            <div ref={scrollRef} className="flex-1 p-10 overflow-y-auto space-y-8 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-6 rounded-[2rem] shadow-2xl ${
                    msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-slate-900/60 text-slate-100 rounded-tl-none border border-white/5 backdrop-blur-md'
                  }`}>
                    <div className="prose prose-invert prose-sm leading-relaxed whitespace-pre-wrap font-medium">
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-900/60 p-6 rounded-[2rem] rounded-tl-none border border-white/5">
                    <div className="flex space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 bg-slate-900/40 border-t border-white/5">
              <div className="flex space-x-4 items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about sector multiples, LoI structure, or VDR readiness..."
                  className="flex-1 bg-slate-950 border border-white/10 rounded-[1.5rem] px-8 py-5 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-all shadow-inner placeholder:text-slate-600"
                />
                <button 
                  onClick={handleSend}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white p-5 rounded-[1.5rem] transition-all shadow-xl shadow-indigo-600/30 group active:scale-95"
                >
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
