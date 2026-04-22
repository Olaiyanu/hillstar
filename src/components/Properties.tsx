import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Expand, BedDouble, Bath, ChevronRight } from 'lucide-react';
import { PROPERTIES } from '../constants';
import { Link } from 'react-router-dom';

const Properties = () => {
  return (
    <section id="properties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our curated selection of high-end residential and commercial developments across Nigeria's most prestigious locations.
            </p>
          </div>
          <Link 
            to="/properties" 
            className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
          >
            <span>See All Properties</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROPERTIES.slice(0, 5).map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 bg-white"
            >
              <Link to={`/properties/${property.id}`} className="block w-full h-full relative">
                {/* Image */}
                <img 
                  src={property.image} 
                  alt={property.location}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Fade Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />

                {/* Top Badge */}
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border border-white/10 ${
                    property.type === 'buy' ? 'bg-primary/90 text-white' : 'bg-gray-900/90 text-white'
                  }`}>
                    For {property.type === 'buy' ? 'Sale' : 'Rent'}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-col items-start gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin size={14} className="text-primary" />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                      {property.location}
                    </span>
                  </div>
                  
                  <div className="w-full flex items-center justify-between gap-4">
                    <span className="text-white font-display font-medium text-lg md:text-xl leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      View Full Details
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white text-gray-900 flex items-center justify-center shadow-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Subtle Border Glow on Hover */}
                <div className="absolute inset-0 rounded-[40px] border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 pointer-events-none" />
              </Link>
            </motion.div>
          ))}

          {/* Last Card CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          className="flex flex-col justify-center items-center h-full min-h-[250px]"
          >
            <Link 
              to="/properties"
            className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-primary/20"
            >
            <span>Browse All Properties</span>
            <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
