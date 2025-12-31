
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Phone, MapPin, List, X, ArrowUpRight } from '@phosphor-icons/react';
import { Button } from './button';

export default function Layout({ children, currentPageName }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'Home' },
    { name: 'Services', path: 'Services' },
    { name: 'FAQ', path: 'FAQ' },
    { name: 'Resources', path: 'Resources' },
    { name: 'Contact', path: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-elite-cream font-sans text-elite-navy">

      {/* Elite Header - Area 17 Style */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-elite-cream/95 backdrop-blur-lg border-b border-black/5 shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 md:h-24 flex justify-between items-center">

          {/* Logo - Display Font */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-2 group">
            <span className="font-display text-2xl md:text-3xl font-normal tracking-tight text-elite-navy">
              Everett
            </span>
          </Link>

          {/* Desktop Nav - Minimalist */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={createPageUrl(link.path)}
                className={`text-[13px] font-medium uppercase tracking-[0.1em] link-underline transition-colors duration-300 ${
                  currentPageName === link.path
                    ? 'text-elite-navy'
                    : 'text-elite-charcoal hover:text-elite-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Sharp Elegant */}
          <div className="hidden md:block">
            <Link to={createPageUrl('Contact')}>
              <button className="group flex items-center gap-2 bg-elite-navy text-elite-cream px-6 py-3 text-[13px] font-medium uppercase tracking-[0.08em] rounded-[2px] hover:bg-elite-charcoal transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-elite-navy/15">
                Schedule Consultation
                <ArrowUpRight size={16} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-elite-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
          </button>
        </div>

        {/* Mobile Nav - Full Screen Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-elite-cream z-40 flex flex-col px-6 py-12">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.path)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display text-elite-navy py-3 border-b border-elite-sage/30"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-10">
              <Link to={createPageUrl('Contact')} onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-elite-navy text-elite-cream py-4 text-[13px] font-medium uppercase tracking-[0.08em] rounded-[2px]">
                  Schedule Consultation
                </button>
              </Link>
            </div>
            <div className="mt-auto pt-10 border-t border-elite-sage/30">
              <a href="tel:+15174021891" className="flex items-center gap-3 text-elite-charcoal">
                <Phone size={20} weight="thin" className="text-elite-green" />
                <span className="text-lg">(517) 402-1891</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content - No spacer, hero extends behind transparent header */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - Elite Design */}
      <footer className="bg-elite-navy text-elite-cream pt-24 pb-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">

          {/* Top Section - Large Brand Statement */}
          <div className="mb-20">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] max-w-3xl">
              Compassionate care,<br />
              <span className="italic text-elite-sage">delivered with dignity.</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

            {/* Brand Col */}
            <div className="space-y-6 md:col-span-1">
              <span className="font-display text-2xl">Everett</span>
              <p className="text-elite-sage/80 text-sm leading-relaxed max-w-xs">
                Premium senior care services in the Greater Lansing area. We honor independence and prioritize well-being.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[11px] font-medium uppercase tracking-[0.15em] text-elite-taupe mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to={createPageUrl('Home')} className="text-elite-sage/80 hover:text-elite-cream transition-colors">Home</Link></li>
                <li><Link to={createPageUrl('Services')} className="text-elite-sage/80 hover:text-elite-cream transition-colors">Services</Link></li>
                <li><Link to={createPageUrl('FAQ')} className="text-elite-sage/80 hover:text-elite-cream transition-colors">FAQ</Link></li>
                <li><Link to={createPageUrl('Resources')} className="text-elite-sage/80 hover:text-elite-cream transition-colors">Resources</Link></li>
                <li><Link to={createPageUrl('Contact')} className="text-elite-sage/80 hover:text-elite-cream transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[11px] font-medium uppercase tracking-[0.15em] text-elite-taupe mb-8">Services</h4>
              <ul className="space-y-4 text-sm text-elite-sage/80">
                <li>Personal Care</li>
                <li>Companionship</li>
                <li>Respite Care</li>
                <li>Live-in Care</li>
                <li>Meal Preparation</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[11px] font-medium uppercase tracking-[0.15em] text-elite-taupe mb-8">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="tel:+15174021891" className="text-elite-sage/80 hover:text-elite-cream transition-colors flex items-center gap-2">
                    <Phone size={16} weight="thin" />
                    (517) 402-1891
                  </a>
                </li>
                <li className="flex items-start gap-2 text-elite-sage/80">
                  <MapPin size={16} weight="thin" className="mt-0.5 shrink-0" />
                  <span>Greater Lansing Area<br />Michigan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-elite-sage/60 tracking-wide">
              &copy; {new Date().getFullYear()} Everett Home Agency. All rights reserved.
            </p>
            <div className="flex gap-8 text-[12px] text-elite-sage/60">
              <a href="#" className="hover:text-elite-cream transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-elite-cream transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
