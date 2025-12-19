
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
      height: 'h-6 md:h-9' 
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="hero-reveal reveal active">
          <div className="inline-flex items-center space-x-2 px-5 py-2 mb-10 text-[10px] font-black tracking-[0.4em] text-indigo-400 uppercase bg-indigo-500/5 rounded-full border border-indigo-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Advisor to the Top 1% of Technology Founders
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black leading-[0.95] mb-10 font-plus-jakarta tracking-tight text-white">
            Own Your <br />
            <span className="gradient-text italic font-serif">Final Chapter.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-400 mb-14 max-w-4xl mx-auto leading-relaxed font-light">
            Don't just sell. Exit with leverage. We provide the institutional firepower and strategic network elite tech entrepreneurs need to secure maximum value.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <button className="group relative w-full sm:w-auto px-12 py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-indigo-600/40 overflow-hidden active:scale-95">
              <span className="relative z-10">Request Private Briefing</span>
              <div className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 bg-white/10 transition-transform"></div>
            </button>
            <button className="w-full sm:w-auto px-12 py-6 bg-slate-900/50 hover:bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all border border-slate-800 backdrop-blur-md active:scale-95">
              Review Track Record
            </button>
          </div>

          <div className="reveal active transition-all duration-1000 delay-500">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] mb-10">Trusted by founders from elite networks</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 md:gap-x-10 px-4">
              {logos.map((logo, index) => (
                <div key={index} className="group cursor-default flex flex-col items-center">
                  <div className="bg-white p-4 md:p-5 rounded-3xl border border-white/10 group-hover:border-indigo-500/20 group-hover:bg-indigo-50/5 transition-all duration-500 shadow-2xl flex items-center justify-center min-w-[140px] md:min-w-[180px] h-20 md:h-24">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className={`${logo.height} w-auto object-contain transition-all duration-500 group-hover:scale-105 filter group-hover:brightness-110`}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.closest('.group')?.querySelector('.fallback-text') as HTMLElement;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <span className="fallback-text hidden text-[10px] font-black text-white uppercase tracking-widest text-center px-2">
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
