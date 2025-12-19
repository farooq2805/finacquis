
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { num: '01', title: 'Audit', desc: 'Financial hygiene and cap table cleanup for maximum defensibility.' },
    { num: '02', title: 'Valuation', desc: 'Multi-method modeling to find the true strategic premium.' },
    { num: '03', title: 'Marketing', desc: 'Discreet outreach to our global network of 500+ strategic buyers.' },
    { num: '04', title: 'Closing', desc: 'Relentless negotiation to secure the best deal terms and structure.' },
  ];

  return (
    <section id="process" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-plus-jakarta tracking-tight">
            Our Relentless <span className="text-indigo-500 underline decoration-indigo-500/30">Process</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl">
            We handle the complexities of the deal so you can stay focused on the business metrics that drive valuation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="reveal group" style={{transitionDelay: `${idx * 0.15}s`}}>
              <div className="glass p-8 h-full rounded-3xl hover:bg-slate-900/40 transition-all border-slate-800/50 hover:border-indigo-500/40">
                <div className="text-5xl font-black text-slate-800 group-hover:text-indigo-600/20 transition-colors mb-6 font-plus-jakarta">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
