import React from 'react';
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Hillstar Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              With deep market Knowledge, Integrity and Passion for Service, we turn property goals to lasting realities.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Offers/Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['Home', 'About', 'Our Services', 'Our Work', 'Contact Us', 'Terms & Conditions'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['General Contracting', 'Real Estate Development', 'Telecoms Infrastructure', 'Renewable Energy', 'Hospitality', 'Procurement'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Questions */}
          <div>
            <h4 className="text-lg font-bold mb-6">Have a Question?</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span className="text-sm text-gray-400">25 Kayode Otitoju, Off Admiralty Way, Lekki, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-sm text-gray-400">+234 916 687 6907</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="text-sm text-gray-400">info@hillstar.com.ng</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-gray-500 uppercase font-medium">
          <p>© 2026 Hillstar Nigeria Ltd. All Rights Reserved.</p>
          <p>Built with excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
