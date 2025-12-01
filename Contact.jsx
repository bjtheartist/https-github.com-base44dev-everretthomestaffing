import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Section from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/Animations';
import { Card, CardContent } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Seo from '@/components/Seo';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Seo 
        title="Contact Us" 
        description="Get in touch with Everett Home Agency. We're here to answer your questions and help you navigate your care options 24/7." 
      />
      {/* Header */}
      <Section className="pt-32 pb-32 md:pt-48 md:pb-48 text-center relative overflow-hidden">
        <OptimizedImage
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=2000"
            alt="Contact us"
            className="w-full h-full object-cover"
            containerClassName="absolute inset-0 z-0"
            priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/90 via-[#2C3E50]/70 to-[#2C3E50]/90 z-0"></div>
        <FadeIn className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">Get in Touch</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md font-light">
            We're here to answer your questions and help you navigate your care options. No pressure, just support.
          </p>
        </FadeIn>
      </Section>

      {/* Content */}
      <Section background="white" className="pt-0">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info */}
            <FadeIn className="space-y-8">
              <Card className="bg-[#F0F7F7] border-none shadow-none rounded-[2rem]">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-[#2C3E50]">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full text-[#4E8D8C]">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-1">Phone</p>
                        <a href="tel:+15174021891" className="text-lg font-medium text-[#2C3E50] hover:text-[#4E8D8C] transition-colors">(517) 402-1891</a>
                        <p className="text-sm text-gray-500 mt-1">Available 24/7 for urgent needs</p>
                      </div>
                    </div>




                  </div>
                </CardContent>
              </Card>


            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </Section>
    </div>
  );
}