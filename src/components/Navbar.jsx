import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-[#070a13]/95 border-b border-gray-900/50 backdrop-blur-md py-2 shadow-lg shadow-black/20' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center gap-4">
        
        {/* Overlapping Custom RMR Premium Logo Design */}
        <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl px-4 py-2 sm:px-5 sm:py-2.5 transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-3 group cursor-pointer shrink-0">
          <div className="relative flex items-center justify-center select-none">
            <span className="text-white text-2xl sm:text-3xl font-black tracking-tight leading-none">R</span>
            <span className="text-[#f46805] text-2xl sm:text-3xl font-black tracking-tight leading-none -mx-0.5">M</span>
            <span className="text-white text-2xl sm:text-3xl font-black tracking-tight leading-none">R</span>
          </div>

          <div className="h-6 sm:h-8 w-px bg-white/20" />

          <div className="leading-none text-left">
            <h1 className="text-sm sm:text-base font-extrabold tracking-tight text-white uppercase">
              RMR Interiors
            </h1>
            <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#f46805] font-bold mt-1">
              & Constructions
            </p>
          </div>
        </div>

        {/* Streamlined Navigation Links — Visible across all screen layouts directly */}
        <div className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold text-gray-300">
          {['Home', 'Services', 'Projects', 'About'].map((item) => (
            <a 
              key={item}
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
              className="relative py-1 hover:text-[#f46805] transition-colors duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f46805] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Clean Call Conversion Action (No hamburger icon button companion) */}
        <div className="flex items-center shrink-0">
          <a 
            href="tel:+918341946262" 
            className={`text-xs font-black px-4 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
              isScrolled
                ? 'bg-[#f46805] text-white shadow-md hover:bg-[#d55b04]'
                : 'bg-white/10 border border-white/20 text-white hover:bg-[#f46805] hover:border-[#f46805]'
            }`}
          >
            <Phone size={12} fill="currentColor" /> Call Now
          </a>
        </div>

      </div>
    </nav>
  );
}