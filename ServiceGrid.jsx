import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        id: '01',
        title: 'COMPANIONSHIP',
        description: 'Meaningful connection and emotional support for mental well-being.',
        link: 'Services',
        tag: '[FREQ: DAILY/WEEKLY]'
    },
    {
        id: '02',
        title: 'PERSONAL CARE',
        description: 'Dignified assistance with bathing, grooming, and daily hygiene.',
        link: 'Services',
        tag: '[TYPE: 1-ON-1 SUPPORT]'
    },
    {
        id: '03',
        title: 'HOME SUPPORT',
        description: 'Light housekeeping, meal prep, and maintaining a safe environment.',
        link: 'Services',
        tag: '[SCOPE: FULL HOME]'
    },
    {
        id: '04',
        title: '24/7 LIVE-IN',
        description: 'Around-the-clock specialized support for peace of mind.',
        link: 'Services',
        tag: '[COVERAGE: 24/7]'
    }
];

export default function ServiceGrid() {
    <section className="bg-concierge-bone w-full max-w-7xl mx-auto py-20 px-4 md:px-8">
        <div className="border-t border-concierge-stone mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">

            <div className="md:col-span-1">
                <span className="font-sans text-sm font-bold tracking-widest text-concierge-navy/40 uppercase block mb-4">
                    Our Expertise
                </span>
                <h2 className="font-serif text-4xl text-concierge-navy leading-tight">
                    Clinical excellence,<br />
                    delivered with <span className="italic">grace</span>.
                </h2>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {services.map((service) => (
                    <Link
                        key={service.id}
                        to={createPageUrl(service.link)}
                        className="group block border-b border-concierge-stone pb-8 hover:border-concierge-navy transition-colors duration-500"
                    >
                        <div className="flex justify-between items-baseline mb-4">
                            <h3 className="font-serif text-2xl text-concierge-navy group-hover:translate-x-2 transition-transform duration-300">
                                {service.title}
                            </h3>
                            <ArrowUpRight className="w-5 h-5 text-concierge-navy/30 group-hover:text-concierge-navy transition-colors" />
                        </div>
                        <p className="font-sans text-concierge-navy/60 leading-relaxed text-sm max-w-xs">
                            {service.description}
                        </p>
                    </Link>
                ))}
            </div>

        </div>
    </section>
}
