import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants';
import { useNavigate } from 'react-router-dom';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2000",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000"
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden bg-gray-100">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img 
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            src={HERO_IMAGES[currentImageIndex]}
            alt="Modern welcoming home"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
      </div>

      {/* Light Overlay */}
      <div className="absolute inset-0 z-10 bg-white/40" />
      
      {/* Centered Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center px-6 mt-24 md:mt-32"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm text-primary text-sm font-bold tracking-wide mb-6">
          <span>Infrastructure Excellence Since 1992</span>
        </div>
        
        <p className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-semibold mb-10 leading-snug max-w-4xl drop-shadow-sm">
          {HERO_SLIDES[0].description}
        </p>

        <button 
          onClick={() => navigate('/properties')}
          className="group flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/30 hover:-translate-y-1 active:scale-95 text-base tracking-wider"
        >
          <span>Explore Our Projects</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
