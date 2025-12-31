import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { ArrowRight } from 'lucide-react';

export default function SplitHero() {
    return (
        <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/4853e8c4c_image.png"
                    alt="Compassionate care"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-everett-ink/90 via-everett-ink/40 to-transparent"></div>
            </div>

            {/* Content Stack */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20">
                <span className="font-sans text-sm tracking-[0.2em] uppercase opacity-80 mb-6 block">
                    Established 2025 // Lansing, MI
                </span>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-medium tracking-tight">
                    The best care,<br />
                    <span className="italic">right at home.</span>
                </h1>

                <p className="font-sans text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
                    Comprehensive nursing and companionship with world-class caregivers.
                    Experience the difference of concierge-level support.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to={createPageUrl('Contact')}>
                        <button className="bg-everett-clay text-white hover:bg-white hover:text-everett-ink px-10 py-5 rounded-full font-sans font-medium text-sm tracking-widest uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                            Start Your Journey
                        </button>
                    </Link>
                    <Link to={createPageUrl('Services')}>
                        <button className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-everett-ink px-10 py-5 rounded-full font-sans font-medium text-sm tracking-widest uppercase transition-all backdrop-blur-sm">
                            Our Services
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    );
}
