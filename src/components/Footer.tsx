import React from 'react';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

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
                className="h-28 md:h-32 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/hillstarng?igsh=MWN5M2pmemxmdTE4aw=="
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.tiktok.com/@hillstar_development?_r=1&_t=ZS-95kXI0hGiLU" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Offers/Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Our Services', href: '/#services' },
                { name: 'Our Projects', href: '/properties' },
                { name: 'Contact Us', href: '/#contact' },
                { name: 'Terms & Conditions', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {[
                { name: 'General Contracting', href: '/services/general-contracting' },
                { name: 'Real Estate Development', href: '/services/real-estate-development' },
                { name: 'Telecoms Infrastructure', href: '/services/telecoms-infrastructure' },
                { name: 'Renewable Energy', href: '/services/renewable-energy' },
                { name: 'Hospitality', href: '/services/hospitality' },
                { name: 'Procurement Services', href: '/services/procurement-services' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
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
        <div className="pt-10 flex flex-col md:flex-row justify-center items-center gap-4 text-xs tracking-wider text-gray-500 uppercase font-medium">
          <p>© 2026 Hillstar Nigeria Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
