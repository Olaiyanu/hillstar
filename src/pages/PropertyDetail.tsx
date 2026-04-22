import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ArrowLeft, Calendar, Phone, Mail, Share2 } from 'lucide-react';
import { PROPERTIES } from '../constants';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = PROPERTIES.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Property Not Found</h2>
        <Link to="/properties" className="bg-primary text-white px-8 py-4 rounded-xl font-bold">
          Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back and Actions */}
        <div className="flex flex-wrap justify-between items-center mb-12 gap-6">
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 text-gray-900 font-bold hover:text-primary transition-all underline decoration-primary/20 hover:decoration-primary decoration-4 underline-offset-8"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            <span>Back to Explorer</span>
          </button>
          
          <div className="flex gap-4">
            <button className="p-3 rounded-full bg-gray-50 text-gray-600 hover:text-primary transition-colors border border-gray-100">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Info (Left) */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[40px] overflow-hidden shadow-2xl relative"
              >
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full aspect-[16/10] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 left-8">
                  <span className="px-6 py-2 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-widest shadow-xl">
                    {property.type === 'completed' ? 'Completed' : 'On going'}
                  </span>
                </div>
              </motion.div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  property.image,
                  `/properties/${property.id}-gallery-1.jpg`,
                  `/properties/${property.id}-gallery-2.jpg`,
                  `/properties/${property.id}-gallery-3.jpg`,
                  `/properties/${property.id}-gallery-4.jpg`,
                ].map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-3xl overflow-hidden aspect-video shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-gray-100"
                  >
                    <img 
                      src={img} 
                      alt={`Gallery ${i}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 border-b border-gray-100 pb-12">
              <div>
                <div className="flex flex-wrap items-center gap-4 text-primary font-bold text-sm tracking-widest uppercase mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="shrink-0" />
                    <span className="break-words">{property.location}</span>
                  </div>
                  {property.projectPeriod && (
                    <>
                      <span className="text-gray-300 hidden sm:block">|</span>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} className="shrink-0" />
                        <span className="break-words">Project Period: {property.projectPeriod}</span>
                      </div>
                    </>
                  )}
                  {property.projectStart && (
                    <>
                      <span className="text-gray-300 hidden sm:block">|</span>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} className="shrink-0" />
                        <span className="break-words">Started: {property.projectStart}</span>
                      </div>
                    </>
                  )}
                  {property.estimatedCompletionTime && (
                    <>
                      <span className="text-gray-300 hidden sm:block">|</span>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} className="shrink-0" />
                        <span className="break-words">Est. Completion: {property.estimatedCompletionTime}</span>
                      </div>
                    </>
                  )}
                  {property.projectType && (
                    <>
                      <span className="text-gray-300 hidden sm:block">|</span>
                      <div className="flex items-center gap-2 text-gray-500">
                        <span className="break-words">Type: {property.projectType}</span>
                      </div>
                    </>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight break-words">
                  {property.name}
                </h1>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Property Description</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light break-words">
                {property.description}
              </p>
              <p className="text-gray-600 leading-relaxed break-words">
                Experience unparalleled luxury and sophistication in this meticulously designed property by Hillstar Nigeria Limited. 
                Every detail has been crafted with precision, from the high-end finishes to the integration of smart home technologies.
                Located in a secure and tranquil environment, this residence offers the perfect blend of privacy and accessibility.
              </p>
            </div>

          </div>

          {/* Sidebar / Contact (Right) */}
          <div className="space-y-10">
            <div className="sticky top-32 p-10 bg-gray-50 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Inquire Now</h4>
                <p className="text-sm text-gray-500">Contact our dedicated agent for this listing.</p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                <div>
                  <h5 className="font-bold text-gray-900">Hillstar Sales Team</h5>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Direct Contact</p>
                </div>
              </div>

              <div className="space-y-3">
                <a href="tel:09166876907" className="w-full flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-xl font-bold transition-all hover:bg-primary-dark shadow-lg shadow-primary/20">
                  <Phone size={18} />
                  <span>Call Agent</span>
                </a>
                <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 border border-gray-200 py-4 rounded-xl font-bold transition-all hover:bg-gray-100">
                  <Mail size={18} />
                  <span>Send Message</span>
                </button>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs text-center text-gray-400 italic">
                  * All transactions are subject to legal verification by Hillstar Nig Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
