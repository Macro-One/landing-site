'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-macro-cream py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center md:text-left">

        <h2 className="text-2xl font-bold uppercase tracking-widest mb-12 text-neutral-500">
          Strictly Private. <br />
          <span className="text-macro-cream">Institutional Access Only.</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Links */}
          <div className="flex flex-col md:flex-row gap-8 text-sm font-medium tracking-wide">
            <a href="#" className="hover:text-macro-orange transition-colors">Investor Login</a>
            <a href="#" className="hover:text-macro-orange transition-colors">Request Deck</a>
            <a href="#" className="hover:text-macro-orange transition-colors">Careers</a>
          </div>

          {/* Contact Info */}
          <div className="text-sm text-neutral-500 font-mono space-y-2 text-right w-full md:w-auto">
            <p>Guillermo González Camarena 800, Mexico City.</p>
            <p><a href="mailto:investors@macro.one" className="text-macro-cream hover:underline">investors@macro.one</a></p>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex justify-between text-xs text-neutral-600 uppercase tracking-widest">
          <span>Macro.One &copy; 2024</span>
          <span>Brutally Honest Capital.</span>
        </div>

      </div>
    </footer>
  );
};