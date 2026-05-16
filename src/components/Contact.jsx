import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0e1322] text-white border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <span className="text-[#f46805] font-bold uppercase tracking-widest text-xs">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1 text-white">Let's Discuss Your Project</h2>
          <p className="text-gray-400 text-sm mt-2">Ready to construct or design? Contact our office headquarters today.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone Info */}
          <a href="tel:+918341946262" className="bg-[#0b0f19] border border-gray-800 p-6 rounded-2xl text-center hover:border-[#f46805] transition-all duration-300 group">
            <Phone className="mx-auto text-[#f46805] mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-bold text-base text-white">Call Owner</h3>
            <p className="text-gray-400 text-sm mt-2 font-mono">+91 8341946262</p>
          </a>

          {/* Email Info */}
          <a href="mailto:rmrinteriors1@gmail.com" className="bg-[#0b0f19] border border-gray-800 p-6 rounded-2xl text-center hover:border-[#f46805] transition-all duration-300 group">
            <Mail className="mx-auto text-[#f46805] mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-bold text-base text-white">Email Us</h3>
            <p className="text-gray-400 text-xs mt-2 break-all font-mono">rmrinteriors1@gmail.com</p>
          </a>

          {/* Address Info */}
          <div className="bg-[#0b0f19] border border-gray-800 p-6 rounded-2xl text-center">
            <MapPin className="mx-auto text-[#f46805] mb-4" size={28} />
            <h3 className="font-bold text-base text-white">Our Location</h3>
            <p className="text-gray-400 text-xs mt-2">Hasanparthy, Hanamkonda, Warangal</p>
          </div>

          {/* Business Timings */}
          <div className="bg-[#0b0f19] border border-gray-800 p-6 rounded-2xl text-center">
            <Clock className="mx-auto text-[#f46805] mb-4" size={28} />
            <h3 className="font-bold text-base text-white">Working Hours</h3>
            <p className="text-gray-400 text-xs mt-2">Mon - Sat: 9:00 AM - 7:00 PM</p>
          </div>

        </div>

        {/* Footer Trademark Brand */}
        <div className="mt-20 pt-8 border-t border-gray-900 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} RMR Interiors & Constructions. All Rights Reserved.
        </div>

      </div>
    </section>
  );
}