import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Section from '../Section';
import { FadeIn } from '../Animations';
import { Card, CardContent } from '../card';
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
      {/* Header */}
      <section className="pt-32 pb-32 md:pt-48 md:pb-48 text-center relative overflow-hidden rounded-2xl">
        <OptimizedImage
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=2000"
            alt="Contact us"
            className="w-full h-full object-cover"
            containerClassName="absolute inset-0 z-0"
            priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/90 via-[#2C3E50]/70 to-[#2C3E50]/90 z-0"></div>
        <FadeIn className="relative z-10 px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-lg bg-everett-accent text-everett-text font-mono font-bold tracking-widest text-xs uppercase mb-4">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-everett-text mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif italic">
              We're here to answer your questions and help you navigate your care options. No pressure, just support.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Content */}
      <Section background="white" className="mt-6">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-6 items-start">

            {/* Contact Info */}
            <FadeIn className="space-y-6">
              <Card className="bg-everett-accent border-none shadow-sm rounded-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                    01 // Contact Info
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-everett-text">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-lg text-everett-text">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wide font-mono font-bold mb-1">Phone</p>
                        <a href="tel:+15174021891" className="text-lg font-sans font-medium text-everett-text hover:text-gray-600 transition-colors">(517) 402-1891</a>
                        <p className="text-sm text-gray-500 mt-1 font-serif italic">Available 24/7 for urgent needs</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.2}>
              <div className="bg-everett-accent rounded-lg p-6">
                <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                  02 // Send a Message
                </div>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </div>
  );
}