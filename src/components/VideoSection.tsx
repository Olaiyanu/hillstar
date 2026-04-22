import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 uppercase tracking-tight">
            Modern House Video
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hillstar is uniquely positioned to deliver high-impact solutions tailored to the nation’s dynamic infrastructure needs.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl bg-gray-100 group"
        >
          {/* Default Placeholder Backdrop */}
          <div className="absolute inset-0 bg-linear-to-tr from-gray-900/80 via-gray-900/20 to-transparent flex flex-col items-center justify-center p-6 text-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer relative z-10 mb-6"
            >
              <Play fill="currentColor" size={32} className="ml-1" />
            </motion.div>
            
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/80 font-bold uppercase tracking-[0.3em] text-xs relative z-10"
            >
              Play Experience
            </motion.span>

            {/* Animated Pulses */}
            <div className="absolute w-24 h-24 bg-primary/40 rounded-full animate-ping" />
            <div className="absolute w-32 h-32 bg-primary/20 rounded-full animate-pulse" />
          </div>

          <img 
            src="https://images.unsplash.com/photo-1541913057-94797a8c0d3b?q=80&w=2000" 
            alt="Video Preview" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          {/* Actual Video Frame (Hidden until user adds link, or just iframe) */}
          {/* 
          <iframe 
            src="YOUR_VIDEO_URL_HERE" 
            className="absolute inset-0 w-full h-full z-20 hidden"
            title="Vision Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> 
          */}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
