
import React from 'react';
import { FOUNDER_PROBLEMS } from '../constants.tsx';

const FounderProblems: React.FC = () => {
  return (
    <section id="solutions" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-indigo-400 uppercase bg-indigo-500/5 rounded-full border border-indigo-500/10">
            Addressing Structural Challenges
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-plus-jakarta tracking-tight">
            The Founder's <span className="gradient-text">Dilemma</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Exit execution is a distinct discipline. We resolve the systemic friction points that typically erode deal value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {FOUNDER_PROBLEMS.map((problem, idx) => (
            <div 
              key={problem.id} 
              className="reveal flex flex-col h-full glass p-10 rounded-[2.5rem] border-slate-800/50 hover:border-indigo-500/30 transition-all duration-500 group relative"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/[0.02] rounded-[2.5rem] transition-colors pointer-events-none"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-3xl mb-8 border border-slate-800 group-hover:scale-110 group-hover:border-indigo-500/30 transition-all duration-500 shadow-xl">
                  {problem.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-indigo-400 transition-colors font-plus-jakarta">
                  {problem.title}
                </h3>
                
                <p className="text-slate-400 mb-10 leading-relaxed font-light text-lg">
                  {problem.description}
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-slate-800/80">
                <div className="inline-flex items-center px-3 py-1 mb-4 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                    The Alpha Edge
                  </span>
                </div>
                <p className="text-slate-200 font-medium leading-relaxed">
                  {problem.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderProblems;
