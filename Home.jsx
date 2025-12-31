
import React from 'react';
import SplitHero from './SplitHero';
import ServiceGrid from './ServiceGrid';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { createPageUrl } from './utils';
import ContactForm from './ContactForm';

// Restoring the "Previous Design" structure which used modular components.
const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <SplitHero />

      <ServiceGrid />

      {/* Hiring / Pathways Section (Reconstructed from general knowledge of previous flow) */}
      <section className="bg-concierge-white rounded-2xl p-12 md:p-24 text-center shadow-sm">
        <h2 className="font-serif text-4xl text-concierge-navy mb-6">Join Our Care Team</h2>
        <p className="font-sans text-concierge-navy/70 mb-8 max-w-2xl mx-auto">
          We are always looking for compassionate professionals to join the Everett family.
        </p>
        <Link to={createPageUrl('Contact')}>
          <Button variant="default" size="lg" className="rounded-full">
            Apply Now
          </Button>
        </Link>
      </section>

      {/* Contact Section */}
      <section className="bg-concierge-bone rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl text-concierge-navy mb-4">Get in Touch</h2>
          <p className="text-concierge-navy/60 font-sans">We are here to answer your questions.</p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;