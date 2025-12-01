import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Users, Clock, Home as HomeIcon, Heart, Star, UserCheck, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import ContactForm from '@/components/ContactForm';

const heroImages = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692c778e052cbaedc9609d3e/4853e8c4c_image.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692c778e052cbaedc9609d3e/4e27aeb92_image.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692c778e052cbaedc9609d3e/4a3475697_image.png"
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <div className="flex flex-col">
      <Seo 
        title="Home" 
        description="Everett Home Agency provides compassionate, non-medical home care in the Greater Lansing area. We help seniors live with dignity in the comfort of their own homes." 
      />
      
      {/* HERO SECTION WITH CAROUSEL */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`Caregiver slide ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <FadeIn>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
              Customized services to suit your individual needs
            </h1>
            <p className="text-base sm:text-xl md:text-2xl mb-6 md:mb-10 max-w-2xl mx-auto font-light drop-shadow-md opacity-90 px-2">
              Everett Home Agency offers compassionate assistance to seniors requiring support with daily living, enabling them to stay in the cherished comfort of their homes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <Link to={createPageUrl('Services')}>
                <Button className="h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-[#2C3E50] hover:bg-[#1a252f] text-white text-base sm:text-lg font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#2C3E50] text-base sm:text-lg font-bold transition-all duration-300 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <Section background="white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-block px-4 py-1 rounded-full bg-[#E8EDEF] text-[#2C3E50] font-bold tracking-widest text-sm mb-6">
                WHO WE ARE
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C3E50] mb-6">
                Dedicated to premium in-home care.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our team of professional caregivers is committed to providing 24-hour support to address your specific needs. We are dedicated to delivering premium in-home care with a passion for enhancing the quality of life for seniors.
                </p>
                <p>
                  Whether you require medication reminders, hands-on assistance for staying active, or companionship, we will craft a flexible plan specifically tailored to you or your loved ones.
                </p>
              </div>
              <div className="mt-10">
                <Link to={createPageUrl('About')}>
                  <Button className="bg-[#2C3E50] hover:bg-[#1a252f] text-white rounded-full px-8 py-6 text-lg">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </FadeIn>

            <ScaleIn className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <OptimizedImage 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692c778e052cbaedc9609d3e/996c2aba0_image.png" 
                  alt="Caregiver with elderly woman" 
                  className="w-full h-[400px] md:h-[600px] object-cover"
                  containerClassName="w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                  <div className="text-white font-serif text-2xl">"Compassion in every action."</div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </Section>

      {/* SERVICES GRID SECTION */}
      <Section background="soft">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <FadeIn className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2C3E50] mb-6">
              Our services are customized to suit your individual needs
            </h2>
            <p className="text-gray-600 text-xl">
              We offer a wide range of specialized care options designed to ensure comfort, safety, and dignity.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Companionship",
                icon: Heart,
                desc: "Friendly conversation, emotional support, and engagement in hobbies.",
                image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692c778e052cbaedc9609d3e/830ef18e9_image.png"
              },
              {
                title: "Respite Care",
                icon: Clock,
                desc: "Temporary relief for family caregivers, available for a few hours or days.",
                image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692c778e052cbaedc9609d3e/531b13f99_image.png"
              },
              {
                title: "Live-in Care",
                icon: HomeIcon,
                desc: "Around-the-clock support for peace of mind and constant safety.",
                image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692c778e052cbaedc9609d3e/4a3475697_image.png"
              },
              {
                title: "Personal Care",
                icon: UserCheck,
                desc: "Assistance with bathing, dressing, grooming, and hygiene needs.",
                image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692c778e052cbaedc9609d3e/996c2aba0_image.png"
              }
            ].map((service, idx) => (
              <StaggerItem key={idx} className="group relative rounded-[2rem] overflow-hidden h-96 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 via-[#2C3E50]/40 to-transparent group-hover:from-[#2C3E50] transition-colors duration-500" />
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-left">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl w-fit mb-4 text-white group-hover:bg-white group-hover:text-[#2C3E50] transition-all duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {service.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <div className="mt-12">
            <Link to={createPageUrl('Services')}>
              <Button variant="outline" className="border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white rounded-full px-10 py-6 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* HIRING CTA SECTION */}
      <Section className="py-0 bg-[#2C3E50] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0 min-h-[500px] md:min-h-[600px]">
            <div className="relative h-full min-h-[400px] md:min-h-full order-2 md:order-1">
                <OptimizedImage 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692c778e052cbaedc9609d3e/1d4f551fd_image.png" 
                    alt="Join our team" 
                    className="w-full h-full object-cover"
                    containerClassName="absolute inset-0"
                    priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/90 via-[#2C3E50]/20 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50] via-transparent to-transparent opacity-50"></div>
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
            </div>
            
            <div className="flex items-center justify-center p-8 md:p-20 order-1 md:order-2 bg-[#2C3E50] text-white relative">
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 opacity-10 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                
                <FadeIn className="relative z-10 max-w-lg">
                    <div className="flex items-center gap-2 text-[#4E8D8C] font-bold tracking-widest uppercase text-sm mb-6">
                        <Sparkles className="w-5 h-5" />
                        <span>Join Our Team</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6 leading-tight">
                        We are actively hiring!
                    </h2>
                    
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Are you passionate about providing care for seniors? Join a company that prioritizes both your well-being and professional development.
                    </p>
                    
                    <div className="grid gap-6 mb-10">
                        {[
                            { icon: Star, text: "Competitive Pay & Benefits" },
                            { icon: Clock, text: "Flexible Scheduling" },
                            { icon: Users, text: "Supportive Team Culture" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-full text-[#4E8D8C]">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-lg">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <Link to={`${createPageUrl('Contact')}?subject=Job%20Application`}>
                        <Button className="bg-[#4E8D8C] text-white hover:bg-[#3A6D6C] rounded-full px-10 py-6 text-lg font-bold shadow-lg transition-all hover:scale-105 w-full md:w-auto">
                            Apply Now
                        </Button>
                    </Link>
                </FadeIn>
            </div>
        </div>
      </Section>

      {/* CONTACT FORM SECTION */}
      <Section background="soft">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2C3E50] mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-xl">
                Have questions? We're here to help you find the right care for your loved ones.
              </p>
            </div>
            <ContactForm />
          </FadeIn>
        </div>
      </Section>

    </div>
  );
}