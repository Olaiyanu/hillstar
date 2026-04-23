import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Home, Building } from 'lucide-react';
import { HERO_SLIDES } from '../constants';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-gray-950">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(254,0,0,0.25),transparent_80%)] animated-gradient opacity-60" />
        <div className="absolute inset-0 bg-linear-to-b from-gray-950/40 via-gray-950/70 to-gray-950" />
        
        {/* Dynamic Abstract Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -right-[5%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[150px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 60, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-[15%] -left-[10%] w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[120px]"
          />
        </div>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-primary text-[9px] font-bold tracking-[0.15em] uppercase mb-6 whitespace-nowrap"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse flex-shrink-0" />
            <span>Infrastructure Excellence Since 1992</span>
          </motion.div>
          
          
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light max-w-2xl"
          >
            From concept to completion, we deliver high-quality residential 
            and commercial construction tailored to your needs.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row flex-wrap gap-5"
          >
            <button 
              onClick={() => navigate('/properties?type=completed')}
              className="group flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 md:px-10 py-4 rounded-2xl font-bold transition-all shadow-[0_15px_40px_rgba(254,0,0,0.3)] hover:-translate-y-1 active:scale-95"
            >
              <Home size={22} className="group-hover:scale-110 transition-transform" />
              <span>Completed Projects</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => navigate('/properties?type=ongoing')}
              className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 md:px-10 py-4 rounded-2xl font-bold transition-all hover:-translate-y-1 active:scale-95"
            >
              <Building size={22} className="group-hover:scale-110 transition-transform" />
              <span>Ongoing Projects</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
    </section>
  );
};

export default Hero;
