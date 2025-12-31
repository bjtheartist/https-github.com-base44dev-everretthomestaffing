import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';

export default function Navbar({ currentPageName }) {
    const navLinks = [
        { name: 'HOME', path: 'Home' },
        { name: 'SERVICES', path: 'Services' },
        { name: 'RESOURCES', path: 'Resources' },
        { name: 'CONTACT', path: 'Contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-everett-grid h-20 flex items-center transition-all duration-300">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">

                {/* Left: Serif Logotype */}
                <Link to={createPageUrl('Home')} className="flex flex-col group">
                    <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-everett-green leading-none">
                        EVERETT
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-everett-sage uppercase mt-1 group-hover:text-everett-green transition-colors">
                        Home Agency
                    </span>
                </Link>

                {/* Center/Right: Monospace Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={createPageUrl(link.path)}
                            className={`font-mono text-xs tracking-widest hover:text-everett-green transition-colors ${currentPageName === link.path ? 'text-everett-green font-bold underline decoration-1 underline-offset-4' : 'text-everett-sage'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right: Utility Phone Number */}
                <div className="hidden md:flex items-center">
                    <a href="tel:+15174021891" className="font-mono text-lg text-everett-green hover:opacity-70 transition-opacity">
                        (517) 402-1891
                    </a>
                </div>

                {/* Mobile Menu Button (Placeholder for functionality) */}
                <button className="md:hidden font-mono text-xs text-everett-green border border-everett-green px-3 py-2 uppercase tracking-widest hover:bg-everett-green hover:text-white transition-colors">
                    Menu
                </button>

            </div>
        </nav>
    );
}
