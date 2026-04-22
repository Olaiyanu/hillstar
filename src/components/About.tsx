import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: <Award size={24} />, value: '30+', label: 'Years Experience' },
    { icon: <Users size={24} />, value: '1,000+', label: 'Clients Worldwide' },
    { icon: <ShieldCheck size={24} />, value: '500+', label: 'Projects Completed' },
    { icon: <Globe size={24} />, value: '36', label: 'Registered States' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white hidden lg:block skew-x-[-12deg] translate-x-24" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image & Stats */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="rounded-[40px] overflow-hidden shadow-2xl relative z-20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000" 
                  alt="Modern Building" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              {/* Stats Grid Overlay */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 absolute -bottom-10 right-0 left-0 md:left-auto md:-right-10 z-30 px-6 md:px-0">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="p-4 md:p-6 bg-primary rounded-3xl text-white shadow-xl flex flex-col items-center justify-center text-center"
                  >
                    <div className="mb-2 text-white/80 scale-75 md:scale-100">{stat.icon}</div>
                    <div className="text-xl md:text-2xl font-bold font-display">{stat.value}</div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest font-medium text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">Since 1992</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
              Building Nigeria’s Future, One Landmark at a Time
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-10" />
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                Established in 1992, Hillstar Nigeria Limited is a pioneering indigenous infrastructure company delivering comprehensive construction, engineering, and consultancy solutions to both public and private sectors across Nigeria.
              </p>
              <p>
                With over three decades of proven expertise, we are recognized for our unwavering commitment to excellence, innovation, and integrity. Operating across vital sectors of the Nigerian economy, Hillstar is uniquely positioned...
              </p>
            </div>

            <Link 
              to="/about"
              className="mt-12 inline-block bg-gray-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl active:scale-95"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
