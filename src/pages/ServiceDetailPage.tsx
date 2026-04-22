import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Building2, Home, TowerControl, Sun, Palmtree, 
  ShoppingCart, ArrowLeft, CheckCircle2, ArrowRight
} from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  Building2,
  Home,
  TowerControl,
  Sun,
  Palmtree,
  ShoppingCart
};

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Service Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="bg-primary text-white px-8 py-4 rounded-xl font-bold"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const Icon = iconMap[service.icon];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 text-gray-900 font-bold hover:text-primary transition-all mb-12 underline decoration-primary/20 hover:decoration-primary decoration-4 underline-offset-8"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          <span>Back to Expertise</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Main Info */}
          <div className="space-y-12">
            <div>
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Icon size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-tight tracking-tight mb-6">
                {service.title}
              </h1>
              <p className="text-2xl text-gray-500 font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="space-y-8 text-gray-600 leading-relaxed text-xl font-light">
              <p className="whitespace-pre-wrap">
                {service.fullDetails}
              </p>
              
              <div className="pt-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Key Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Technical Precision',
                    'Economic Value',
                    'Long-term Sustainability',
                    'Innovative Solutions',
                    'Regulatory Compliance',
                    'Project Excellence'
                  ].map((cap, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span className="font-bold text-gray-700">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Visualization / CTA */}
          <div className="lg:sticky lg:top-32 space-y-12">

            <div className="p-10 bg-white rounded-[40px] border-2 border-primary/10 shadow-2xl space-y-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-gray-900">Get Expert Insight</h4>
                <p className="text-gray-500">Contact our {service.title} specialized division.</p>
              </div>

              <div className="space-y-4">
                 <button 
                   onClick={() => navigate('/#contact')}
                   className="w-full flex items-center justify-center gap-3 bg-primary text-white py-5 rounded-2xl font-bold text-lg transition-all hover:bg-primary-dark shadow-[0_10px_30px_rgba(254,0,0,0.2)]"
                 >
                   <span>Inquire Now</span>
                   <ArrowRight size={20} />
                 </button>
                 <button className="w-full py-5 text-gray-600 font-bold hover:text-gray-900 transition-colors">
                   View Portfolio Projects
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
