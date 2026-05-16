import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import { MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a13] text-white select-none scroll-smooth antialiased relative">
      
      {/* Fixed Floating Header Pane */}
      <Navbar />
      
      {/* Main Structural Render Flow (Single entry loops) */}
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
      </main>

      {/* Persistent Ultra-Premium Floating WhatsApp Chat Hub */}
      <a
        href="https://wa.me/918341946262"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#00b04c] hover:bg-[#00913e] text-white p-4 rounded-full shadow-2xl shadow-green-600/30 transition-all duration-300 transform hover:-translate-y-1.5 active:scale-95 group flex items-center gap-2"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} fill="currentColor" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-black uppercase tracking-wider block whitespace-nowrap">
          Chat With Us
        </span>
      </a>

    </div>
  );
}