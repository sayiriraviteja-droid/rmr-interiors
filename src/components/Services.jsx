import React from 'react';
import { HardHat, Paintbrush, ShieldCheck } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-16 bg-[#0e1322] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black tracking-tight text-white">Our Core Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-[#171d2c] p-8 rounded-2xl border border-gray-800">
            <HardHat className="text-[#f46805] mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Building Construction</h3>
            <p className="text-gray-400 text-sm">End-to-end residential and villa structure development engineering.</p>
          </div>
          <div className="bg-[#171d2c] p-8 rounded-2xl border border-gray-800">
            <Paintbrush className="text-[#f46805] mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Interior Designing</h3>
            <p className="text-gray-400 text-sm">Premium false ceilings, customized modular kitchen layouts, and systemic woodwork.</p>
          </div>
          <div className="bg-[#171d2c] p-8 rounded-2xl border border-gray-800">
            <ShieldCheck className="text-[#f46805] mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Turnkey Execution</h3>
            <p className="text-gray-400 text-sm">Complete planning management from mapping layouts up to final painting handover.</p>
          </div>
        </div>
      </div>
    </section>
  );
}