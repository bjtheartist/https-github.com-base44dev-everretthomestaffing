import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Section from '../Section';
import { FadeIn } from '../Animations';
import { Button } from '../button';
import { CheckCircle2, Clock, Home, Heart, Pill, Car, Coffee, Sparkles, Brain, Phone, Calendar, UserCheck, ClipboardCheck } from 'lucide-react';
import OptimizedImage from '../OptimizedImage';
import Seo from '../Seo';

export default function Services() {
  const services = [
    {
      id: 'personal-care',
      title: "Personal Care",
      icon: Heart,
      image: "https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/1d4f551fd_image.png",
      description: "Respectful assistance with daily living activities to maintain hygiene and dignity.",
      features: ["Bathing & Showering Assistance", "Dressing & Grooming", "Toileting & Incontinence Care", "Mobility Assistance", "Oral Hygiene"]
    },
    {
      id: 'companionship',
      title: "Companionship",
      icon: Coffee,
      image: "https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/9c1c901f8_image.png",
      description: "Meaningful social interaction to combat loneliness and enhance emotional well-being.",
      features: ["Friendly Conversation", "Reading & Games", "Accompaniment on Walks", "Hobby Engagement", "Light Exercise"]
    },
    {
      id: 'meal-prep',
      title: "Meal Preparation",
      icon: UtensilsIcon,
      image: "https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/2052f9b92_image.png",
      description: "Nutritious, home-cooked meals tailored to specific dietary needs and preferences.",
      features: ["Menu Planning", "Grocery Shopping", "Cooking & Plating", "Dietary Monitoring", "Kitchen Cleanup"]
    },
    {
      id: 'homemaking',
      title: "Light Housekeeping",
      icon: Home,
      image: "https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/f42a37b33_image.png",
      description: "Keeping the home safe, clean, and organized to prevent falls and reduce stress.",
      features: ["Laundry & Linens", "Dusting & Vacuuming", "Pet Care Assistance", "Plant Care", "Organizing Clutter"]
    },
    {
      id: 'medication',
      title: "Medication Reminders",
      icon: Pill,
      image: "https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/53495e6c1_image.png",
      description: "Ensuring medications are taken on time and prescriptions are refilled.",
      features: ["Timely Reminders", "Prescription Pickup", "Monitoring Side Effects", "Hydration Reminders", "Family Updates"]
    },
    {
      id: 'transportation',
      title: "Transportation",
      icon: Car,
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
      description: "Safe, reliable transportation to keep seniors active and connected to their community.",
      features: ["Doctor Appointments", "Social Events", "Religious Services", "Beauty Salon Visits", "Errands & Shopping"]
    },
    {
      id: 'dementia',
      title: "Dementia Care",
      icon: Brain,
      image: "https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/e805ce009_image.png",
      description: "Specialized support for those living with Alzheimer's and other forms of dementia.",
      features: ["Memory Exercises", "Wandering Prevention", "Calming Techniques", "Routine Maintenance", "Respite for Family"]
    },
    {
      id: 'respite',
      title: "Respite Care",
      icon: Sparkles,
      image: "https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/d03bea649_image.png",
      description: "Temporary relief for family caregivers to rest, recharge, and attend to their own needs.",
      features: ["Flexible Hours", "Overnight Care", "Weekend Support", "Vacation Coverage", "Emergency Backup"]
    }
  ];

  return (
    <div className="flex flex-col">
      <Seo 
        title="Services" 
        description="Explore our home care services including personal care, companionship, meal preparation, medication reminders, and specialized dementia care." 
      />
      {/* Header */}
      <section className="pt-32 pb-32 md:pt-48 md:pb-48 text-center relative overflow-hidden rounded-2xl">
        <OptimizedImage
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2000"
            alt="Caring hands"
            className="w-full h-full object-cover"
            containerClassName="absolute inset-0 z-0"
            priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/90 via-[#2C3E50]/70 to-[#2C3E50]/90 z-0"></div>
        <FadeIn className="relative z-10 px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-lg bg-everett-accent text-everett-text font-mono font-bold tracking-widest text-xs uppercase mb-4">
              Our Services
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-everett-text mb-6">Home Care Staffing Services</h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-serif italic">
              Professional staffing solutions designed to help your loved one maintain independence at home. We provide non-medical assistance tailored to your needs.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Main Grid */}
      <section className="py-16 md:py-24 mt-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 0.05} className="flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group bg-white h-full">
                 <div className="h-48 md:h-56 overflow-hidden relative">
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-everett-text/80 to-transparent opacity-60 z-10"></div>
                    <div className="absolute bottom-4 left-4 md:left-6 flex items-center gap-3 text-white z-20">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                            <service.icon className="w-5 md:w-6 h-5 md:h-6 text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-sans font-bold">{service.title}</h3>
                    </div>
                 </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                    {String(idx + 1).padStart(2, '0')} // {service.title}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed font-serif italic">{service.description}</p>
                  <ul className="space-y-3 mt-auto">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-500">
                        <CheckCircle2 className="w-4 h-4 text-everett-text" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - User Journey */}
      <Section background="white" className="mt-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-lg bg-everett-accent text-everett-text font-mono font-bold tracking-widest text-xs uppercase mb-4">
              The Process
            </div>
            <h2 className="text-2xl md:text-5xl font-sans font-bold text-everett-text mb-4 md:mb-6">Your Journey to Care</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-serif italic">
                We've streamlined our process to make getting the help you need simple, transparent, and stress-free.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Reach Out", icon: Phone, desc: "Contact us for a free, no-obligation consultation." },
              { step: "02", title: "Assessment", icon: ClipboardCheck, desc: "We meet to understand your specific needs and preferences." },
              { step: "03", title: "The Match", icon: UserCheck, desc: "We select the perfect caregiver for your personality." },
              { step: "04", title: "Care Begins", icon: Calendar, desc: "Services start with ongoing monitoring and support." }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.2} className="text-center group bg-everett-accent rounded-lg p-6 hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 relative">
                  <div className="absolute -top-2 -right-2 bg-everett-text text-white text-xs font-mono font-bold px-2 py-1 rounded-lg">
                      {step.step}
                  </div>
                  <step.icon className="w-7 h-7 text-everett-text" />
                </div>
                <h3 className="text-lg font-sans font-bold text-everett-text mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-serif italic">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-[#2C3E50] text-white text-center py-20 relative overflow-hidden rounded-2xl mt-6">
        <FadeIn className="relative z-10 px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-lg bg-everett-accent text-everett-text font-mono font-bold tracking-widest text-xs uppercase mb-4">
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 text-everett-text">Not sure what type of care you need?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed font-serif italic">
              Our care coordinators are experts at guiding families through their options. Let's have a conversation about how we can support you.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-everett-text text-white hover:bg-[#0d1a12] h-12 md:h-14 px-6 md:px-10 rounded-lg font-bold text-base md:text-lg shadow-sm transition-all hover:-translate-y-1">
                Schedule a Free Consultation
              </Button>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

// Helper for the missing icon import
const UtensilsIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
);