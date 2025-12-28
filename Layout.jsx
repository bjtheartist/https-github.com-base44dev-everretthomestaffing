
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Heart, Phone, MapPin, Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Button } from './button';

export default function Layout({ children, currentPageName }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: 'Home' },
    { name: 'Services', path: 'Services' },
    { name: 'FAQ', path: 'FAQ' },
    { name: 'Resources', path: 'Resources' },
    { name: 'Contact', path: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-texture-waves font-sans text-[#2C3E50]">
      
      {/* Top Bar - Trust & Contact */}
      <div className="bg-[#2C3E50] text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center gap-4 opacity-90">
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-[#4E8D8C]" />
              Serving the Greater Lansing Community
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+15174021891" className="flex items-center gap-2 hover:text-[#4E8D8C] transition-colors">
              <Phone className="w-3 h-3" />
              <span className="font-medium tracking-wide">(517) 402-1891</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#4E8D8C]/10 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold leading-none tracking-tight text-[#2C3E50]">EVERETT</span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#4E8D8C] font-medium">Home Agency</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={createPageUrl(link.path)}
                className={`text-sm font-medium tracking-wide hover:text-[#2C3E50] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#2C3E50] after:transition-all after:duration-300 hover:after:w-full ${currentPageName === link.path ? 'text-[#2C3E50] font-bold after:w-full' : 'text-[#2C3E50]'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-[#2C3E50] hover:bg-[#1a252f] text-white rounded-full px-6 shadow-lg shadow-[#2C3E50]/20 transition-all duration-300 transform hover:-translate-y-0.5">
                Free Consultation
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-[#2C3E50]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={createPageUrl(link.path)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-[#2C3E50] py-2 border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <Link to={createPageUrl('Contact')} onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-[#2C3E50] text-white rounded-full mt-2">
                Free Consultation
              </Button>
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#4E8D8C]" fill="currentColor" />
              <span className="font-serif text-lg font-bold">EVERETT</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Compassionate, non-medical home care tailored to your family's needs. Helping seniors live with dignity in the comfort of their own homes.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#4E8D8C]">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link to={createPageUrl('Home')} className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to={createPageUrl('Services')} className="hover:text-white transition-colors">Care Services</Link></li>
              <li><Link to={createPageUrl('FAQ')} className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to={createPageUrl('Resources')} className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link to={createPageUrl('Contact')} className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#4E8D8C]">Services</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Personal Care & Hygiene</li>
              <li>Companionship</li>
              <li>Meal Preparation</li>
              <li>Medication Reminders</li>
              <li>Light Housekeeping</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#4E8D8C]">Contact Us</h4>
            <ul className="space-y-4 text-gray-300 text-sm">

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#4E8D8C] shrink-0" />
                <a href="tel:+15174021891" className="hover:text-white transition-colors">(517) 402-1891</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Everett Home Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
