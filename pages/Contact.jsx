import React from 'react';
import { Phone, MapPin, EnvelopeSimple, Clock } from '@phosphor-icons/react';
import { FadeIn, ScaleIn } from '../Animations';
import OptimizedImage from '../OptimizedImage';
import Seo from '../Seo';
import ContactForm from '../ContactForm';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Seo
        title="Contact Us"
        description="Get in touch with Everett Home Agency. We're here to answer your questions and help you navigate your care options 24/7."
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center bg-elite-cream pt-20 md:pt-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="text-eyebrow block mb-6">
                Contact Us
              </span>

              <h1 className="text-display font-display font-light text-elite-navy leading-[0.95] tracking-tight mb-8">
                Get in<br />
                <span className="italic text-elite-taupe">Touch</span>
              </h1>

              <p className="text-body-lg text-elite-charcoal max-w-lg mb-10 leading-relaxed">
                We're here to answer your questions and help you navigate your care options. No pressure, just support.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <a href="tel:+15174021891" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-elite-beige to-elite-sand flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <Phone size={20} weight="thin" className="text-elite-charcoal" />
                  </div>
                  <div>
                    <p className="text-sm text-elite-taupe">Phone</p>
                    <span className="font-heading font-medium text-elite-navy group-hover:text-elite-charcoal transition-colors">(517) 402-1891</span>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-elite-beige to-elite-sand flex items-center justify-center shadow-sm">
                    <MapPin size={20} weight="thin" className="text-elite-charcoal" />
                  </div>
                  <div>
                    <p className="text-sm text-elite-taupe">Location</p>
                    <span className="font-heading font-medium text-elite-navy">Greater Lansing Area, Michigan</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-elite-beige to-elite-sand flex items-center justify-center shadow-sm">
                    <Clock size={20} weight="thin" className="text-elite-charcoal" />
                  </div>
                  <div>
                    <p className="text-sm text-elite-taupe">Availability</p>
                    <span className="font-heading font-medium text-elite-navy">24/7 for urgent needs</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <ScaleIn>
              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=2000"
                    alt="Contact us"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                    priority={true}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-elite-sage/50 rounded-lg -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-elite-gold/30 rounded-lg -z-10" />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-16 md:py-24 bg-elite-sand section-textured">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-eyebrow block mb-6">
                Send a Message
              </span>
              <h2 className="text-h2 font-display font-light text-elite-navy leading-[1.1] mb-4">
                Let's start a<br />
                <span className="italic">conversation.</span>
              </h2>
              <div className="divider-accent mx-auto" />
            </div>
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-elite-sage/10">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
