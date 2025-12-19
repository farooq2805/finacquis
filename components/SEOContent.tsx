
import React from 'react';
import { BLOG_POSTS } from '../constants';

const SEOContent: React.FC = () => {
  return (
    <section id="resources" className="py-32 bg-slate-950 border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl reveal">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-plus-jakarta tracking-tight">The Exit <span className="gradient-text underline decoration-indigo-500/20">Blueprint</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed font-light">
              Master the art of the transaction with proprietary insights for the world's top 1% of founders.
            </p>
          </div>
          <button className="reveal text-indigo-400 font-bold flex items-center group py-2">
            Explore All Resources
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post, idx) => (
            <article 
              key={post.id} 
              className="reveal flex flex-col h-full glass rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group border-slate-800/50"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img 
                  src={`https://images.unsplash.com/photo-${idx === 0 ? '1551288049-bebda4e38f71' : idx === 1 ? '1460925895917-afdab827c52f' : '1553729459-efe14ef6055d'}?auto=format&fit=crop&q=80&w=800`} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-black bg-indigo-600 text-white rounded-lg uppercase tracking-widest shadow-lg">{post.category}</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">{post.readTime} reading time</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-100 group-hover:text-indigo-400 transition-colors leading-tight">
                  <a href={`#blog/${post.slug}`} className="hover:underline underline-offset-4 decoration-indigo-500/30">
                    {post.title}
                  </a>
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed font-light">
                  {post.excerpt}
                </p>
                <div className="pt-6 border-t border-slate-800/50">
                  <a href={`#blog/${post.slug}`} className="text-sm font-black text-indigo-400 inline-flex items-center group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                    Read Report
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
