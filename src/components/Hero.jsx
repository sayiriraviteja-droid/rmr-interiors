import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

const luxurySlides = [
  { 
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80', 
    alt: 'Luxury Living Room with Premium Woodwork' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80', 
    alt: 'Modern Modular Kitchen' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=80', 
    alt: 'Premium Master Bedroom Suite' 
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % luxurySlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[95vh] flex items-center bg-[#070a13] overflow-hidden select-none pt-28 sm:pt-32">
      
      {/* 1. Ultra-Luxury 4K Background Slideshow Layer */}
      <div className="absolute inset-0 z-0">
        {luxurySlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out transform scale-100 hover:scale-105 ${
              idx === currentSlide ? 'opacity-40 z-10' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url('${slide.url}')` }}
          />
        ))}
      </div>
      
      {/* 2. Overlays & Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070a13] via-[#070a13]/95 sm:via-[#070a13]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-transparent to-[#070a13]/50 pointer-events-none z-10" />
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#f46805]/10 rounded-full blur-[140px] pointer-events-none z-10" />

      {/* 3. Main Text Frame */}
      <div className="relative max-w-6xl mx-auto px-6 z-20 w-full">
        <div className="max-w-3xl text-left">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-black leading-[1.15] text-white tracking-tight">
            Transform Your <span className="text-[#f46805] bg-gradient-to-r from-[#f46805] via-[#ff8426] to-[#ffaa66] bg-clip-text text-transparent">Dream Space</span> <br />
            Into Living Reality.
          </h1>
          
          <p className="text-gray-300 mt-6 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
            From heavy structural civil execution to high-end false ceilings, luxury custom woodwork, and elite marble finishes. We build landmarks across Warangal.
          </p>

          {/* Action Call Array */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a 
              href="tel:+918341946262" 
              className="bg-[#f46805] hover:bg-[#d55b04] text-white font-extrabold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-orange-600/30 text-sm tracking-wide"
            >
              <Phone size={15} fill="currentColor" /> Contact Now
            </a>
            
            <a 
              href="https://wa.me/918341946262"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-800 hover:border-gray-500 bg-[#0e1322]/50 backdrop-blur-md text-gray-200 hover:text-white font-bold px-7 py-4 rounded-full inline-flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-1"
            >
              Consult On WhatsApp 
              <ArrowUpRight size={15} className="text-gray-500 group-hover:text-[#f46805] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Luxury Metric Panel Featuring Owner Detail */}
          <div className="mt-14 pt-8 border-t border-gray-900/60 grid grid-cols-3 gap-6 max-w-lg text-left">
            <div>
              <p className="text-lg sm:text-xl font-black text-white tracking-tight truncate">M. Rajender</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#f46805] mt-1">Founder & Owner</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-white tracking-tight">Premium</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-1">Raw Materials</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-white tracking-tight">Warangal</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-1">Local Experts</p>
            </div>
          </div>

        </div>
      </div>

      {/* Slide Navigation Dashes */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-2">
        {luxurySlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-[#f46805]' : 'w-2 bg-gray-700 hover:bg-gray-500'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}