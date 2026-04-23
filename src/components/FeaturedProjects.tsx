import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FEATURED_PROPERTIES } from '../constants';
import { MapPin, ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of our landmark projects, showcasing our commitment to quality and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {FEATURED_PROPERTIES.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/properties/${property.id}`} className="group block">
                <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full object-cover aspect-[16/9] group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-display text-gray-900 mb-2 truncate">
                      {property.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin size={16} className="mr-2 shrink-0" />
                      <span className="truncate">{property.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        property.type === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {property.type === 'completed' ? 'Completed' : 'On-going'}
                      </span>
                      <div className="flex items-center text-primary font-bold text-sm">
                        <span>View Project</span>
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/properties"
            className="inline-block bg-white text-gray-800 px-8 py-4 rounded-xl font-bold border border-gray-200 hover:bg-gray-100 transition-all shadow-sm"
          >
            Browse All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;