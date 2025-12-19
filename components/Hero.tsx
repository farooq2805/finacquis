
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"></div>
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="hero-reveal reveal active">
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Advisor to the Top 1% of Founders
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 font-plus-jakarta tracking-tighter text-white">
            Maximize Your <br />
            <span className="gradient-text italic">Founder Legacy.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            You built the future. Now secure your transition. FinAcquis provides the institutional firepower and strategic network tech entrepreneurs need to exit at a premium.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-indigo-600/40 overflow-hidden active:scale-95">
              <span className="relative z-10">Request Private Briefing</span>
              <div className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 bg-white/10 transition-transform"></div>
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-slate-800/50 hover:bg-slate-800 text-white rounded-2xl font-bold text-lg transition-all border border-slate-700 backdrop-blur-sm active:scale-95">
              View Exit Track Record
            </button>
          </div>

          <div className="mt-24 reveal active transition-all duration-1000 delay-300">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-12">Trusted by founders from elite networks</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10 md:gap-x-12 px-4">
              {logos.map((logo, index) => (
                <div key={index} className="group cursor-default flex flex-col items-center">
                  <div className="bg-white p-4 md:p-6 rounded-2xl border border-white/10 group-hover:bg-indigo-50 transition-all duration-500 shadow-xl flex items-center justify-center min-w-[140px] md:min-w-[180px] h-20 md:h-24">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className={`${logo.height} w-auto object-contain transition-all duration-500 group-hover:scale-110`}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.closest('.group')?.querySelector('.fallback-text') as HTMLElement;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <span className="fallback-text hidden text-[10px] font-black text-slate-900 uppercase tracking-widest text-center px-2">
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
