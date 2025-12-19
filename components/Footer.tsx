
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-white">
                F
              </div>
              <span className="text-xl font-bold text-white font-plus-jakarta">FinAcquis</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              FinAcquis is a premium M&A advisory platform dedicated to maximizing the outcome for the world's most innovative founders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Crunchbase</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-indigo-400">Exit Advisory</a></li>
              <li><a href="#" className="hover:text-indigo-400">Strategic Valuations</a></li>
              <li><a href="#" className="hover:text-indigo-400">Buyer Matching</a></li>
              <li><a href="#" className="hover:text-indigo-400">Due Diligence Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-indigo-400">Our Methodology</a></li>
              <li><a href="#" className="hover:text-indigo-400">Success Stories</a></li>
              <li><a href="#" className="hover:text-indigo-400">Referral Program</a></li>
              <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Alpha Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">Get curated exit strategies and market multiples directly in your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="founder@startup.com" 
                className="bg-slate-900 border border-slate-800 rounded-l-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg text-sm font-bold transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          <p>© 2024 FinAcquis Elite Advisory. All rights reserved. Securities transactions handled through registered broker-dealers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
