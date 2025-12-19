
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4 glass border-b border-white/5' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center font-black text-2xl text-white shadow-xl shadow-indigo-600/30 group-hover:rotate-12 transition-transform duration-500">
                F
              </div>
              <div className="absolute -inset-1 bg-indigo-500/20 blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="ml-4 overflow-hidden">
                <span className="block text-2xl font-black tracking-tighter text-white font-plus-jakarta leading-none group-hover:text-indigo-400 transition-colors">
                  FinAcquis<span className="text-indigo-500">.</span>
                </span>
                <span className="block text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mt-1">Elite Advisory</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-indigo-400 transition-all hover:translate-y-[-1px]"
              >
                {item.label}
              </a>
            ))}
            <button className="relative px-8 py-3 bg-white text-black rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:bg-indigo-600 hover:text-white shadow-xl hover:shadow-indigo-600/30 active:scale-95">
              Get Valuation
            </button>
          </div>

          <div className="md:hidden">
            <button className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-white active:scale-95 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
