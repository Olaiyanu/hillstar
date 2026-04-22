import React from 'react';
import { motion } from 'motion/react';
import { Building2, Home, TowerControl, Sun, Palmtree, ShoppingCart, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link, useNavigate } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Building2,
  Home,
  TowerControl,
  Sun,
  Palmtree,
  ShoppingCart
};

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
            >
              Discover Our Expertise
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              From large-scale infrastructure projects to high-end real estate developments, 
              Hillstar Nigeria Limited delivers excellence across multiple sectors of the economy.
            </motion.p>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <div className="w-4 h-1 bg-primary/20 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => navigate(`/services/${service.id}`)}
                className="group p-10 bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 flex flex-col items-start relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] transition-all group-hover:bg-primary group-hover:scale-150 duration-500" />
                
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-white group-hover:text-primary transition-colors duration-500 relative z-10">
                  <Icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-white/80 transition-colors duration-500 relative z-10 line-clamp-2">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase group-hover:text-white transition-colors duration-500 relative z-10">
                  <span>View Details</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
