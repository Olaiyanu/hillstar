import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, Globe, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: <Award size={24} />, value: '30+', label: 'Years Experience' },
    { icon: <ShieldCheck size={24} />, value: '150+', label: 'Projects Completed' },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 text-gray-900 font-bold hover:text-primary transition-all mb-12 underline decoration-primary/20 hover:decoration-primary decoration-4 underline-offset-8"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Header & Content */}
          <div className="space-y-12">
            <div>
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">ABOUT US</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-tight tracking-tight">
                Building Nigeria’s Future, One Landmark at a Time
              </h1>
              <div className="w-20 h-1.5 bg-primary rounded-full mt-8" />
            </div>

            <div className="space-y-8 text-gray-600 leading-relaxed text-xl font-light">
              <p>
                Established in 1992, HILLSTAR Nigeria Limited is a leading indigenous infrastructure company providing end-to-end construction, engineering, technology infrastructure, and consultancy solutions to both public and private sector clients across Nigeria. With over three decades of proven experience, we have built a strong reputation for excellence, innovation, and integrity. Operating across key sectors of the Nigerian economy, HILLSTAR is strategically positioned to deliver high-impact, value-driven solutions tailored to the country’s evolving infrastructure demands. From Federal, State, and Local Governments to private enterprises, our clients trust us to transform vision into reality.
              </p>
              <p>
                Through a network of specialized subsidiaries, HILLSTAR delivers end-to-end solutions across General Contracting, Real Estate Development, Telecoms Infrastructure, Renewable Energy, Hospitality, and Procurement Services. Our integrated operating model combines technical precision, commercial efficiency, and long-term sustainability to deliver lasting value on every project.
              </p>
              <blockquote className="border-l-4 border-primary pl-8 py-4 italic text-2xl text-gray-900 font-display">
                "Our unwavering commitment to excellence and integrity has been the bedrock of our success for over 30 years."
              </blockquote>
            </div>
          </div>

          {/* Sidebar Info/Stats */}
          <div className="lg:sticky lg:top-32 space-y-12">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000" 
                alt="Hillstar Corporate" 
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center group hover:bg-primary transition-all duration-500"
                >
                  <div className="mb-4 text-primary group-hover:text-white transition-colors">{stat.icon}</div>
                  <div className="text-3xl font-bold font-display text-gray-900 group-hover:text-white transition-colors">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500 group-hover:text-white/70 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-10 bg-gray-900 rounded-[40px] text-white">
              <h3 className="text-2xl font-bold mb-6">Need expert consultancy?</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Connect with our advisory board to discuss your next large-scale infrastructure project.
              </p>
              <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
