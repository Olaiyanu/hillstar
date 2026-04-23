import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Clock, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Let's Build Something Extraordinary
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Whether you're looking to acquire property or seeking engineering expertise, our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-primary transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2 group-hover:text-white/80 transition-colors">Free Call</h4>
                  <p className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors">+234 916 687 6907</p>
                  <p className="text-sm text-gray-500 group-hover:text-white/60 transition-colors mt-1 flex items-center gap-2">
                    <Clock size={14} /> 24/7 Customer Support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-primary transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2 group-hover:text-white/80 transition-colors">Our Location</h4>
                  <p className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors leading-tight">
                    25 Kayode Otitoju, Off Admiralty Way, Lekki, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Connect with us</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/hillstarng?igsh=MWN5M2pmemxmdTE4aw==" 
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1 shadow-lg"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.tiktok.com/@hillstar_development?_r=1&_t=ZS-95kXI0hGiLU" 
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1 shadow-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                  </svg>
                </a>
                <a 
                href="https://www.facebook.com/share/1EE5hP3TCC/?mibextid=wwXIfr" 
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1 shadow-lg"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-white rounded-[40px] shadow-2xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Service Required</label>
                <select className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option>General Contracting</option>
                  <option>Real Estate Development</option>
                  <option>Telecoms Infrastructure</option>
                  <option>Renewable Energy</option>
                  <option>Procurement Services</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_10px_30px_rgba(254,0,0,0.3)] active:scale-[0.98]">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
