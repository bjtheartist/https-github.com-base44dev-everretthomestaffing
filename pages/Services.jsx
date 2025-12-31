import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '../Animations';
import {
  Heart,
  Clock,
  House,
  HandHeart,
  Pill,
  Car,
  Coffee,
  Brain,
  Phone,
  CalendarBlank,
  UserCircleCheck,
  ClipboardText,
  ArrowRight,
  ArrowUpRight,
  CheckCircle
} from '@phosphor-icons/react';
import OptimizedImage from '../OptimizedImage';
import Seo from '../Seo';

export default function Services() {
  const services = [
    {
      id: 'personal-care',
      title: "Personal Care",
      icon: HandHeart,
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
      icon: Heart,
      image: "https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/2052f9b92_image.png",
      description: "Nutritious, home-cooked meals tailored to specific dietary needs and preferences.",
      features: ["Menu Planning", "Grocery Shopping", "Cooking & Plating", "Dietary Monitoring", "Kitchen Cleanup"]
    },
    {
      id: 'homemaking',
      title: "Light Housekeeping",
      icon: House,
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
      icon: Clock,
      image: "https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/d03bea649_image.png",
      description: "Temporary relief for family caregivers to rest, recharge, and attend to their own needs.",
      features: ["Flexible Hours", "Overnight Care", "Weekend Support", "Vacation Coverage", "Emergency Backup"]
    }
  ];

  const processSteps = [
    { title: "Reach Out", icon: Phone, desc: "Contact us for a free, no-obligation consultation." },
    { title: "Assessment", icon: ClipboardText, desc: "We meet to understand your specific needs and preferences." },
    { title: "The Match", icon: UserCircleCheck, desc: "We select the perfect caregiver for your personality." },
    { title: "Care Begins", icon: CalendarBlank, desc: "Services start with ongoing monitoring and support." }
  ];

  return (
    <div className="flex flex-col">
      <Seo
        title="Services"
        description="Explore our home care services including personal care, companionship, meal preparation, medication reminders, and specialized dementia care."
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center bg-elite-cream pt-20 md:pt-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="text-eyebrow block mb-6">
                Our Services
              </span>

              <h1 className="text-display font-display font-light text-elite-navy leading-[0.95] tracking-tight mb-8">
                Home Care<br />
                <span className="italic text-elite-taupe">Staffing Services</span>
              </h1>

              <p className="text-body-lg text-elite-charcoal max-w-lg mb-10 leading-relaxed">
                Professional staffing solutions designed to help your loved one maintain independence at home. We provide non-medical assistance tailored to your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl('Contact')}>
                  <button className="group flex items-center justify-center gap-2 bg-elite-navy text-elite-cream px-8 py-4 text-[13px] font-medium uppercase tracking-[0.08em] rounded-[2px] hover:bg-elite-charcoal transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-elite-navy/15">
                    Schedule Consultation
                    <ArrowUpRight size={16} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <ScaleIn>
              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2000"
                    alt="Caring hands"
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

      {/* SERVICES GRID */}
      <section className="py-16 md:py-24 bg-elite-sand section-textured">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <FadeIn className="mb-16 md:mb-20 max-w-2xl">
            <span className="text-eyebrow block mb-6">
              What We Offer
            </span>
            <h2 className="text-h2 font-display font-light text-elite-navy leading-[1.1] mb-4">
              Comprehensive care<br />
              <span className="italic">services.</span>
            </h2>
            <div className="divider-accent" />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <StaggerItem
                key={service.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-48 md:h-56 overflow-hidden relative">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elite-navy/80 to-transparent opacity-60 z-10" />
                  <div className="absolute bottom-4 left-4 md:left-6 flex items-center gap-3 text-white z-20">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <service.icon size={24} weight="thin" className="text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-medium">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-elite-charcoal mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-elite-taupe">
                        <CheckCircle size={16} weight="thin" className="text-elite-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 md:py-24 bg-elite-cream">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <span className="text-eyebrow block mb-6">
              The Process
            </span>
            <h2 className="text-h2 font-display font-light text-elite-navy mb-4">
              Your journey<br />
              <span className="italic">to care.</span>
            </h2>
            <div className="divider-accent mx-auto" />
            <p className="text-elite-charcoal text-lg max-w-2xl mx-auto mt-6">
              We've streamlined our process to make getting the help you need simple, transparent, and stress-free.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, i) => (
              <FadeIn key={i} className="text-center group">
                <div className="icon-contained mx-auto">
                  <step.icon size={32} weight="thin" />
                </div>
                <h3 className="text-lg font-heading font-medium text-elite-navy mb-2">{step.title}</h3>
                <p className="text-elite-charcoal text-sm leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-28 bg-elite-navy text-elite-cream">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-elite-gold mb-8 block">
              Get Started
            </span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light leading-[1.4] text-elite-cream/95 mb-8">
              Not sure what type of care you need? Our care coordinators are experts at guiding families through their options.
            </h2>

            <div className="mt-10 flex justify-center">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-elite-gold/50 to-transparent mb-10" />
            </div>

            <Link to={createPageUrl('Contact')}>
              <button className="group flex items-center justify-center gap-2 mx-auto bg-elite-gold text-elite-navy px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] rounded-[2px] hover:bg-elite-gold/80 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-elite-gold/20">
                Schedule a Free Consultation
                <ArrowUpRight size={16} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
