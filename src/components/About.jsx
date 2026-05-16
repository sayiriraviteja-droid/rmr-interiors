import React from 'react';
import { HardHat, Compass, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#070a13] border-t border-gray-900/40 text-white relative overflow-hidden">
      
      {/* Ambient background studio glow */}
      <div className="absolute top-[50%] right-[-10%] w-[400px] h-[400px] bg-[#f46805]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Editorial Typography */}
        <div className="md:col-span-5 text-left">
          <span className="text-[#f46805] font-black text-xs uppercase tracking-widest block mb-3">
            About Our Studio
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white">
            Crafting Elite Structural Landmarks & Luxury Spaces.
          </h2>
          <p className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed">
            Based locally in Warangal, RMR Interiors bridges the gap between rock-solid structural engineering and elite, artistic interior spaces. Whether laying a high-durability foundation or texturing a custom feature wall, our signature palette blends perfection with premium raw materials.
          </p>
        </div>

        {/* Right Side: Visual Feature Pillars */}
        <div className="md:col-span-7 grid sm:grid-cols-2 gap-4 text-left">
          
          <div className="bg-[#0e1322]/40 border border-gray-900/60 p-6 rounded-2xl backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-[#f46805]/10 border border-[#f46805]/20 flex items-center justify-center text-[#f46805] mb-4">
              <HardHat size={20} />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">Turnkey Engineering</h3>
            <p className="text-gray-400 text-xs mt-2 leading-relaxed">Heavy structural civil setups built with rigorous standards and uncompromised raw components.</p>
          </div>

          <div className="bg-[#0e1322]/40 border border-gray-900/60 p-6 rounded-2xl backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <Compass size={20} />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">Luxury Interior Layouts</h3>
            <p className="text-gray-400 text-xs mt-2 leading-relaxed">Bespoke multi-layer false ceilings, rich woodworking setups, and modern modular modular designs.</p>
          </div>

          <div className="bg-[#0e1322]/40 border border-gray-900/60 p-6 rounded-2xl backdrop-blur-sm sm:col-span-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">Premium Painting & Custom Art Textures</h3>
            <p className="text-gray-400 text-xs mt-2 leading-relaxed">Curation of premium paint variants, royal wall finishes, and bespoke texture art layouts customized perfectly for modern spaces.</p>
          </div>

        </div>

      </div>
    </section>
  );
}