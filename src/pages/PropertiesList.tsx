import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, Filter, BedDouble, Expand, ChevronRight } from 'lucide-react';
import { PROPERTIES } from '../constants';
import { Link, useSearchParams } from 'react-router-dom';

const PropertiesList = () => {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'completed' || type === 'ongoing') {
      setFilter(type);
    }
  }, [searchParams]);

  const filteredProperties = PROPERTIES.filter(p => {
    const matchesType = filter === 'all' || p.type === filter;
    const matchesSearch = p.location.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            All Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Browse our complete portfolio of premium listings. From modern urban apartments to sprawling luxury villas.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center bg-white p-4 md:p-6 rounded-[32px] shadow-sm mb-12 gap-6 border border-gray-100">
          <div className="flex flex-wrap gap-2">
            {(['all', 'completed', 'ongoing'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`flex-1 md:flex-none px-4 md:px-8 py-3 rounded-2xl font-bold transition-all text-[11px] md:text-sm uppercase tracking-widest whitespace-nowrap ${
                  filter === t 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {t === 'all' ? 'Projects' : t === 'completed' ? 'Completed' : 'On going'}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-primary transition-all text-sm"
            />
          </div>
        </div>

        {/* Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-[16/9] rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 bg-white"
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
                    property.type === 'completed' ? 'bg-primary/90 text-white' : 'bg-gray-900/90 text-white'
                  }`}>
                    {property.type === 'completed' ? 'Completed' : 'On going'}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-col items-start gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-start gap-3 text-white/90">
                    <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] leading-snug text-left">
                      {property.location}
                    </span>
                  </div>
                  
                  <div className="w-full flex items-center justify-between gap-4">
                    <span className="text-white font-display font-medium text-lg md:text-xl leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      Explore Full Detail
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
        </div>
      </div>
    </div>
  );
};

export default PropertiesList;
