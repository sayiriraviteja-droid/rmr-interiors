import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, HardHat, Paintbrush, Sparkles } from 'lucide-react';

const categoryMapping = {
  ceilings: [2, 6, 13, 18, 22],
  textures: [4, 14, 20, 25],
};

// Set right back to 25 to match your exact folder sequence
const totalImagesCount = 25; 

const rmrProjects = Array.from({ length: totalImagesCount }, (_, i) => {
  const imageNumber = i + 1;
  
  let title = `Independent Residential Build - Project ${imageNumber}`;
  let service = "Construction";
  let icon = <HardHat className="w-4 h-4" />;

  if (categoryMapping.ceilings.includes(imageNumber)) {
    title = `Modern Multi-Layer False Ceiling Layout ${imageNumber}`;
    service = "Interior Designing";
    icon = <Paintbrush className="w-4 h-4" />;
  } else if (categoryMapping.textures.includes(imageNumber)) {
    title = `Premium Custom Texture & Wall Art Style ${imageNumber}`;
    service = "Interior Decor";
    icon = <Sparkles className="w-4 h-4" />;
  } else {
    if (imageNumber === 8) title = `Premium Elevation Structure Execution 8`;
    else if (imageNumber % 3 === 0) title = `Premium Front Elevation Structural Execution ${imageNumber}`;
    else if (imageNumber % 5 === 0) title = `Turnkey Residential Villa Site Construction ${imageNumber}`;
  }

  return {
    url: `/projects/project${imageNumber}.jpg`,
    title: title,
    service: service,
    icon: icon,
    id: imageNumber
  };
});

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => { handleNext(); }, 5000);
    return () => clearInterval(slideTimer);
  }, [index]);

  const handleNext = () => setIndex((prev) => (prev + 1) % rmrProjects.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + rmrProjects.length) % rmrProjects.length);

  return (
    <section id="projects" className="py-16 bg-[#0b0f19] text-white">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="text-center mb-10">
          <span className="text-[#f46805] font-bold uppercase tracking-widest text-xs">Our Work Portfolio</span>
          <h2 className="text-3xl font-black tracking-tight mt-1 text-white">Featured Project Showcase</h2>
          <p className="text-gray-400 text-sm mt-2">Real site updates across Warangal and Hanamkonda</p>
        </div>

        <div className="relative h-[350px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-[#0e1322]">
          
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={rmrProjects[index]?.url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full h-full object-contain p-3"
              alt="RMR Project Work"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

          <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 border border-gray-800 hover:border-[#f46805] hover:text-[#f46805] text-white z-10">
            <ChevronLeft size={20} />
          </button>
          <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 border border-gray-800 hover:border-[#f46805] hover:text-[#f46805] text-white z-10">
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-4 right-4 bg-[#0b0f19]/80 border border-gray-800 backdrop-blur-md p-4 rounded-xl z-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-[#f46805] text-white font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1">
                  {rmrProjects[index]?.icon} {rmrProjects[index]?.service}
                </span>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white line-clamp-1">
                  {rmrProjects[index]?.title}
                </h3>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-mono font-bold bg-gray-900/60 px-3 py-1 rounded-full border border-gray-800 text-[#f46805]">
                  {index + 1} / {rmrProjects.length}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}