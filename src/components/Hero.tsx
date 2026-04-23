import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Home, Building } from 'lucide-react';
import { HERO_SLIDES } from '../constants';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white pt-32 pb-20 md:pt-48 md:pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-6">
              <span>Infrastructure Excellence Since 1992</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              {HERO_SLIDES[0].title}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              From concept to completion, we deliver high-quality residential 
              and commercial construction tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigate('/properties?type=completed')}
                className="group flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/30 hover:-translate-y-1 active:scale-95"
              >
                <Home size={20} />
                <span>Completed Projects</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => navigate('/properties?type=ongoing')}
                className="group flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-xl font-bold transition-all shadow-sm hover:-translate-y-1 active:scale-95"
              >
                <Building size={20} />
                <span>Ongoing Projects</span>
              </button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:order-first"
          >
            <img 
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2000"
              alt="Modern welcoming home"
              className="w-full h-full object-cover rounded-3xl shadow-xl aspect-[16/9]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
<<<<<<< HEAD
=======

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
>>>>>>> dbeff68a247ddc24d89f1cd94fad8308df2c5d47
    </section>
  );
};

export default Hero;
