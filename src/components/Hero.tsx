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
    </section>
  );
};

export default Hero;
