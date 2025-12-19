
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FounderProblems from './components/FounderProblems';
import Process from './components/Process';
import ExitAdvisor from './components/ExitAdvisor';
import SEOContent from './components/SEOContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Initial check for all reveal elements
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    // Fallback for Hero (sometimes observer misses immediate visibility)
    const heroElements = document.querySelectorAll('.hero-reveal');
    heroElements.forEach(el => el.classList.add('active'));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        
        <FounderProblems />

        <Process />
        
        <ExitAdvisor />
        
        {/* Transaction Stats */}
        <section className="py-24 bg-indigo-600/90 backdrop-blur-md relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay grid-pattern"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              <div className="reveal">
                <div className="text-6xl font-black mb-2 font-plus-jakarta tracking-tighter">$2.4B+</div>
                <div className="text-indigo-100 text-sm font-bold uppercase tracking-widest opacity-80">Aggregate Deal Value</div>
              </div>
              <div className="reveal">
                <div className="text-6xl font-black mb-2 font-plus-jakarta tracking-tighter">140+</div>
                <div className="text-indigo-100 text-sm font-bold uppercase tracking-widest opacity-80">Full Liquid Exits</div>
              </div>
              <div className="reveal">
                <div className="text-6xl font-black mb-2 font-plus-jakarta tracking-tighter">32%</div>
                <div className="text-indigo-100 text-sm font-bold uppercase tracking-widest opacity-80">Average Deal Alpha</div>
              </div>
              <div className="reveal">
                <div className="text-6xl font-black mb-2 font-plus-jakarta tracking-tighter">12w</div>
                <div className="text-indigo-100 text-sm font-bold uppercase tracking-widest opacity-80">Avg. LoI Speed</div>
              </div>
            </div>
          </div>
        </section>
        
        <SEOContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
