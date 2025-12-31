import React from 'react';
import { DollarSign, Building, Users, ArrowRight } from 'lucide-react';
import Section from './Section';
import { FadeIn } from './Animations';

export default function PathwaysSection() {
  return (
    <Section className="py-24" background="white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <FadeIn>
            {/* BureauGrid Container */}
            <div className="border-t border-b border-chi-grid">
            
            {/* Grid Columns */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-chi-grid">
                
                {/* CARD 01: CAPITAL */}
                <div className="group relative p-8 h-full flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="font-mono text-sm tracking-wider text-gray-500 group-hover:text-gray-400">[90+ ACTIVE]</span>
                            <span className="font-mono text-sm font-bold text-gray-400 group-hover:text-gray-500">01</span>
                        </div>
                        
                        <div className="mb-4">
                            <DollarSign className="w-8 h-8 mb-4 stroke-1" />
                            <h3 className="font-mono font-bold text-xl tracking-wide mb-2">CAPITAL</h3>
                        </div>
                        
                        <p className="font-sans text-lg leading-relaxed text-gray-600 group-hover:text-gray-300">
                            Access the directory. Filter by stage, check size, and thesis.
                        </p>
                    </div>
                    
                    <div className="pt-12 mt-auto">
                        <button className="font-mono text-sm tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                            ACCESS DATABASE
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* CARD 02: SPACES */}
                <div className="group relative p-8 h-full flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="font-mono text-sm tracking-wider text-gray-500 group-hover:text-gray-400">[18+ HUBS]</span>
                            <span className="font-mono text-sm font-bold text-gray-400 group-hover:text-gray-500">02</span>
                        </div>
                        
                        <div className="mb-4">
                            <Building className="w-8 h-8 mb-4 stroke-1" />
                            <h3 className="font-mono font-bold text-xl tracking-wide mb-2">SPACES</h3>
                        </div>
                        
                        <p className="font-sans text-lg leading-relaxed text-gray-600 group-hover:text-gray-300">
                            Find your HQ. Co-working spaces, accelerators, and labs.
                        </p>
                    </div>
                    
                    <div className="pt-12 mt-auto">
                        <button className="font-mono text-sm tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                            LOCATE HQ
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* CARD 03: COMMUNITY */}
                <div className="group relative p-8 h-full flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="font-mono text-sm tracking-wider text-gray-500 group-hover:text-gray-400">[22+ GROUPS]</span>
                            <span className="font-mono text-sm font-bold text-gray-400 group-hover:text-gray-500">03</span>
                        </div>
                        
                        <div className="mb-4">
                            <Users className="w-8 h-8 mb-4 stroke-1" />
                            <h3 className="font-mono font-bold text-xl tracking-wide mb-2">COMMUNITY</h3>
                        </div>
                        
                        <p className="font-sans text-lg leading-relaxed text-gray-600 group-hover:text-gray-300">
                            Join the network. Founder communities and builder collectives.
                        </p>
                    </div>
                    
                    <div className="pt-12 mt-auto">
                        <button className="font-mono text-sm tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                            INITIATE UPLINK
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </div>
            
            {/* Updates Section - Terminal Input */}
            <div className="border-t border-chi-grid">
                <div className="flex flex-col md:flex-row items-center w-full">
                    <div className="px-8 py-4 border-b md:border-b-0 md:border-r border-chi-grid bg-gray-50 w-full md:w-auto">
                        <span className="font-mono text-sm font-bold tracking-wider text-gray-600">[INTEL: WEEKLY_BRIEF]</span>
                    </div>
                    <div className="flex-1 w-full relative group">
                        <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="ENTER_EMAIL_ADDRESS_FOR_ACCESS..." 
                                className="w-full bg-transparent px-8 py-4 font-mono text-sm focus:outline-none focus:bg-gray-50 transition-colors uppercase placeholder:text-gray-400"
                            />
                            <button 
                                type="submit" 
                                className="px-8 py-4 font-mono text-sm font-bold hover:bg-black hover:text-white transition-colors border-l border-chi-grid"
                            >
                                [SUBMIT]
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            </div>
        </FadeIn>

      </div>
    </Section>
  );
}
