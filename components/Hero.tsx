
import React from 'react';

const Hero: React.FC = () => {
  const logos = [
    { 
      name: 'Y Combinator', 
      src: 'https://www.vectorlogo.zone/logos/ycombinator/ycombinator-ar21.svg', 
      height: 'h-8 md:h-12' 
    },
    { 
      name: 'Techstars', 
      src: 'https://www.vectorlogo.zone/logos/techstars/techstars-ar21.svg', 
      height: 'h-6 md:h-9' 
    },
    { 
      name: 'Andreessen Horowitz', 
      src: 'https://www.vectorlogo.zone/logos/a16z/a16z-official.svg', 
      height: 'h-5 md:h-8' 
    },
    { 
      name: 'Accel', 
      src: 'https://www.vectorlogo.zone/logos/accel/accel-ar21.svg', 
      height: 'h-6 md:h-9' 
    },
    { 
      name: 'Forbes', 
      src: 'https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg', 
      height: 'h-8 md:h-11' 
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
      
      {/* Precision Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] bg-indigo-600/5 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="hero-reveal reveal active">
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 mb-12 text-[9px] font-black tracking-[0.5em] text-indigo-400 uppercase bg-indigo-500/5 rounded-full border border-indigo-500/10 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Unlocking Multiples for Elite Tech Founders</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black leading-[0.9] mb-12 font-plus-jakarta tracking-tighter text-white hero-title-shadow">
            The Science of <br />
            <span className="gradient-text italic font-serif">The Perfect Exit.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Founders build value; we capture it. FinAcquis merges institutional M&A expertise with proprietary network intelligence to secure exits that define legacies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
            <button className="group relative w-full sm:w-auto px-14 py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all shadow-[0_20px_50px_rgba(99,102,241,0.4)] overflow-hidden active:scale-95">
              <span className="relative z-10">Request Private Briefing</span>
              <div className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 bg-white/10 transition-transform"></div>
            </button>
            <button className="w-full sm:w-auto px-14 py-6 bg-slate-900/40 hover:bg-slate-900/60 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all border border-slate-800/80 backdrop-blur-md active:scale-95">
              Review Track Record
            </button>
          </div>

          <div className="reveal active transition-all duration-1000 delay-700">
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.6em] mb-12">Institutional Grade Partnerships</p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 md:gap-x-12 px-4">
              {logos.map((logo, index) => (
                <div key={index} className="group cursor-default flex flex-col items-center">
                  <div className="bg-white px-5 py-4 md:px-8 md:py-6 rounded-2xl border border-white/5 group-hover:border-indigo-500/30 group-hover:bg-indigo-50/10 transition-all duration-500 shadow-2xl flex items-center justify-center min-w-[130px] md:min-w-[170px] h-16 md:h-20 overflow-hidden relative">
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className={`${logo.height} w-auto object-contain transition-all duration-700 group-hover:scale-105`}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.closest('.group')?.querySelector('.fallback-text') as HTMLElement;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <span className="fallback-text hidden text-[9px] font-black text-slate-800 uppercase tracking-widest text-center px-2">
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
