
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Heart, Phone, MapPin } from 'lucide-react';
import { Button } from './button';
import Navbar from './Navbar';

export default function Layout({ children, currentPageName }) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);



  return (
    <div className="min-h-screen bg-everett-canvas p-4 md:p-6 font-sans text-everett-ink overflow-x-hidden transition-colors duration-500">

      {/* Mat Board Wrapper */}
      <div className="mx-auto max-w-[1600px] min-h-[calc(100vh-3rem)] bg-everett-card rounded-2xl shadow-2xl flex flex-col overflow-hidden relative border border-everett-ink/5">

        {/* Navbar */}
        <Navbar currentPageName={currentPageName} />

        {/* Main Content */}
        <main className="flex-grow flex flex-col">
          {children}
        </main>

        {/* Sanctuary Footer */}
        <footer className="bg-everett-ink text-everett-canvas pt-20 pb-10 px-6 md:px-20 mt-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 max-w-7xl mx-auto">

            {/* Brand Col */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl text-everett-canvas">EVERETT</span>
              </div>
              <p className="text-everett-canvas/60 text-sm leading-relaxed max-w-xs font-sans">
                Compassionate, non-medical home care tailored to your family's needs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-sans font-bold text-xs mb-6 text-everett-canvas/40 uppercase tracking-widest">Company</h4>
              <ul className="space-y-3 text-everett-canvas/60 text-sm font-sans">
                <li><Link to={createPageUrl('Home')} className="hover:text-everett-canvas transition-colors">Home</Link></li>
                <li><Link to={createPageUrl('Services')} className="hover:text-everett-canvas transition-colors">Services</Link></li>
                <li><Link to={createPageUrl('Contact')} className="hover:text-everett-canvas transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-sans font-bold text-xs mb-6 text-everett-canvas/40 uppercase tracking-widest">Care</h4>
              <ul className="space-y-3 text-everett-canvas/60 text-sm font-sans">
                <li>Companionship</li>
                <li>Nursing</li>
                <li>Memory Care</li>
                <li>24/7 Support</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-sans font-bold text-xs mb-6 text-everett-canvas/40 uppercase tracking-widest">Connect</h4>
              <ul className="space-y-4 text-everett-canvas/60 text-sm font-sans">
                <li className="flex items-center gap-3">
                  <a href="tel:+15174021891" className="hover:text-everett-canvas transition-colors">(517) 402-1891</a>
                </li>
                <li>Serving Greater Lansing</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-everett-canvas/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-everett-canvas/40 font-mono uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Everett Home Agency.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-everett-canvas transition-colors">Privacy</a>
              <a href="#" className="hover:text-everett-canvas transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
