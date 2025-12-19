
import React, { useState, useRef, useEffect } from 'react';
// Corrected import name from getAIAdvisorResponse to getAdvisorResponse
import { getAdvisorResponse } from '../services/geminiService';

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([
    {role: 'ai', content: "Strategic Analysis Initialized. I'm your M&A Strategist. Ask me about **EBITDA multiples**, **Revenue expansion factors**, or **Due Diligence hygiene**. How can I help maximize your exit value today?"}
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

    // Updated the function call to use the correct name
    const aiResponse = await getAdvisorResponse(userMsg);
    setMessages(prev => [...prev, {role: 'ai', content: aiResponse}]);
    setIsLoading(false);
  };

  const suggestions = [
    "Typical SaaS multiples for 2024?",
    "Pre-exit audit checklist",
    "Asset vs Stock deal pros/cons"
  ];

  return (
    <section id="ai-advisor" className="py-32 bg-slate-950 relative">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-plus-jakarta tracking-tight">
                AI <span className="gradient-text">Exit Simulator</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                Get instant institutional-grade strategic advice. No gatekeepers, just raw market intelligence.
            </p>
        </div>

        <div className="glass rounded-[2rem] overflow-hidden border-indigo-500/10 flex flex-col lg:flex-row h-[700px] shadow-3xl shadow-black/50 reveal">
          {/* Chat Sidebar */}
          <div className="w-full lg:w-80 bg-slate-900/60 p-8 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col">
            <div className="flex items-center space-x-3 mb-8">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">System Online</span>
            </div>
            <h3 className="text-xl font-bold mb-6 font-plus-jakarta text-white">Knowledge Hub</h3>
            <p className="text-xs text-slate-500 mb-8 leading-relaxed uppercase tracking-widest">Suggested Queries</p>
            <div className="space-y-3 flex-1">
              {suggestions.map((s, idx) => (
                <button 
                  key={idx}
                  onClick={() => setInput(s)}
                  className="w-full text-left p-4 bg-slate-800/40 hover:bg-slate-800 rounded-2xl text-xs text-slate-300 border border-slate-700/50 transition-all hover:border-indigo-500/50"
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="mt-8 p-4 bg-indigo-600/10 rounded-2xl border border-indigo-500/20">
                <p className="text-[10px] text-indigo-300 leading-tight">
                    *Our AI provides strategic guidance based on current market trends. Always consult with your legal/financial team for specific transaction finality.
                </p>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="flex-1 flex flex-col bg-slate-950/40">
            <div ref={scrollRef} className="flex-1 p-8 overflow-y-auto space-y-6 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-5 rounded-3xl ${
                    msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-600/20' 
                    : 'bg-slate-800/80 text-slate-100 rounded-tl-none border border-slate-700/50 backdrop-blur-sm shadow-xl'
                  }`}>
                    <div className="prose prose-invert prose-sm leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800/80 p-5 rounded-3xl rounded-tl-none border border-slate-700/50">
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-slate-900/80 border-t border-slate-800/50">
              <div className="flex space-x-3 items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire about valuation, multiples, or deal structure..."
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors shadow-inner"
                />
                <button 
                  onClick={handleSend}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-2xl transition-all shadow-lg shadow-indigo-600/30 group active:scale-95"
                >
                  <svg className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default AIAdvisor;
