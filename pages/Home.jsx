import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  HeartStraight,
  ClockClockwise,
  House,
  HandHeart,
  CurrencyDollar,
  CalendarBlank,
  UsersThree,
  ArrowUpRight,
  ArrowRight
} from '@phosphor-icons/react';
import OptimizedImage from '../OptimizedImage';
import Seo from '../Seo';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '../Animations';
import ContactForm from '../ContactForm';

// Hero image
const heroImage = "https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/4853e8c4c_image.png";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Seo
        title="Home"
        description="Everett Home Agency provides compassionate, non-medical home care in the Greater Lansing area. We help seniors live with dignity in the comfort of their own homes."
      />

      {/* HERO SECTION - Elite Editorial Style (extends behind header) */}
      <section className="relative min-h-screen flex items-center bg-elite-cream pt-20 md:pt-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="text-eyebrow block mb-6">
                Premium Senior Care
              </span>

              <h1 className="text-display font-display font-light text-elite-navy leading-[0.95] tracking-tight mb-8">
                Compassionate Care<br />
                <span className="italic text-elite-taupe">Delivered with Dignity</span>
              </h1>

              <p className="text-body-lg text-elite-charcoal max-w-lg mb-10 leading-relaxed">
                Everett Home Agency provides personalized senior care services
                that honor independence and prioritize well-being in the comfort of home.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl('Contact')}>
                  <button className="group flex items-center justify-center gap-2 bg-elite-navy text-elite-cream px-8 py-4 text-[13px] font-medium uppercase tracking-[0.08em] rounded-[2px] hover:bg-elite-charcoal transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-elite-navy/15">
                    Schedule Consultation
                    <ArrowUpRight size={16} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </Link>
                <Link to={createPageUrl('Services')}>
                  <button className="group flex items-center justify-center gap-2 bg-transparent text-elite-navy px-8 py-4 text-[13px] font-medium uppercase tracking-[0.08em] rounded-[2px] border-[1.5px] border-elite-navy hover:bg-elite-navy hover:text-elite-cream transition-all duration-300">
                    Our Services
                    <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
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
                  <img
                    src={heroImage}
                    alt="Compassionate home care"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-elite-sage/50 rounded-lg -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-elite-gold/30 rounded-lg -z-10" />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* PROMISE METRICS - Honest Trust Signals */}
      <section className="py-10 md:py-12 bg-white border-y border-elite-sage/20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-0">
            {[
              { icon: "✓", label: "Certified Caregivers" },
              { icon: "♥", label: "Serving Greater Lansing" },
              { icon: "✦", label: "Personalized Care Plans" },
              { icon: "24/7", label: "Care Available" }
            ].map((item, idx) => (
              <FadeIn key={idx} className="flex items-center gap-3 px-4">
                <span className="text-elite-gold text-xl font-display">{item.icon}</span>
                <span className="text-elite-charcoal text-sm font-medium tracking-wide">{item.label}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION - Color Block Background */}
      <section className="py-16 md:py-24 bg-elite-sand section-textured">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-16 items-center">

            {/* Left - Image (2 cols) */}
            <div className="lg:col-span-2">
              <ScaleIn>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                  <OptimizedImage
                    src="https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/996c2aba0_image.png"
                    alt="Caregiver with elderly woman"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>
              </ScaleIn>
            </div>

            {/* Right - Content (3 cols) */}
            <div className="lg:col-span-3">
              <FadeIn>
                <span className="text-eyebrow block mb-6">
                  About Everett
                </span>

                <h2 className="text-h2 font-display font-light text-elite-navy mb-4 leading-[1.1]">
                  Dedicated to premium<br />
                  <span className="italic">in-home care.</span>
                </h2>

                <div className="divider-accent" />

                <div className="space-y-6 text-elite-charcoal text-lg leading-relaxed max-w-xl">
                  <p>
                    Our team of professional caregivers is committed to providing 24-hour support to address your specific needs. We are dedicated to delivering premium in-home care with a passion for enhancing the quality of life for seniors.
                  </p>
                  <p>
                    Whether you require medication reminders, hands-on assistance for staying active, or companionship, we will craft a flexible plan specifically tailored to you or your loved ones.
                  </p>
                </div>

                <div className="mt-10">
                  <Link to={createPageUrl('About')} className="link-luxury">
                    <span className="group inline-flex items-center gap-2 text-elite-navy text-[13px] font-medium uppercase tracking-[0.08em]">
                      Learn More About Us
                      <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID - Museum Quality Cards with Phosphor Icons */}
      <section className="py-16 md:py-24 bg-elite-cream">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">

          {/* Section Header */}
          <FadeIn className="mb-16 md:mb-20 max-w-2xl">
            <span className="text-eyebrow block mb-6">
              Our Services
            </span>
            <h2 className="text-h2 font-display font-light text-elite-navy leading-[1.1] mb-4">
              Customized care<br />
              <span className="italic">for your needs.</span>
            </h2>
            <div className="divider-accent" />
          </FadeIn>

          {/* Services Grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Companionship",
                icon: HeartStraight,
                desc: "Friendly conversation, emotional support, and engagement in hobbies and activities."
              },
              {
                title: "Respite Care",
                icon: ClockClockwise,
                desc: "Temporary relief for family caregivers, available for a few hours or days."
              },
              {
                title: "Live-in Care",
                icon: House,
                desc: "Around-the-clock support for peace of mind and constant safety."
              },
              {
                title: "Personal Care",
                icon: HandHeart,
                desc: "Assistance with bathing, dressing, grooming, and hygiene needs."
              }
            ].map((service, idx) => (
              <StaggerItem
                key={idx}
                className="group card-bordered hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="icon-contained">
                  <service.icon size={32} weight="thin" />
                </div>

                <h3 className="text-xl font-heading font-medium text-elite-navy mb-2">
                  {service.title}
                </h3>

                <div className="w-8 h-[1px] bg-elite-gold/40 mb-4" />

                <p className="text-elite-charcoal text-[15px] leading-relaxed">
                  {service.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* View All Button */}
          <div className="mt-16 text-center">
            <Link to={createPageUrl('Services')}>
              <button className="group flex items-center justify-center gap-2 mx-auto bg-elite-navy text-elite-cream px-10 py-4 text-[13px] font-medium uppercase tracking-[0.08em] rounded-[2px] hover:bg-elite-charcoal transition-all duration-300 hover:-translate-y-0.5">
                View All Services
                <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* VISION STATEMENT - Brand Manifesto */}
      <section className="py-20 md:py-28 bg-elite-navy text-elite-cream">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-elite-gold mb-8 block">
              Our Vision
            </span>

            <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light leading-[1.4] text-elite-cream/95">
              To redefine senior care by blending professional excellence with the warmth of family—ensuring every individual ages with
              <span className="italic text-elite-gold"> dignity </span>
              and
              <span className="italic text-elite-gold"> grace </span>
              in the home they love.
            </p>

            <div className="mt-10 flex justify-center">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-elite-gold/50 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* HIRING CTA SECTION */}
      <section className="py-16 md:py-24 bg-elite-beige section-textured">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <ScaleIn>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                  <OptimizedImage
                    src="https://aqyefuonagwwxjxfllcz.supabase.co/storage/v1/object/public/everett%20home%20staffing2/1d4f551fd_image.png"
                    alt="Join our team"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>
              </ScaleIn>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <FadeIn>
                <span className="text-eyebrow block mb-6">
                  Careers
                </span>

                <h2 className="text-h2 font-display font-light text-elite-navy mb-4 leading-[1.1]">
                  We are actively<br />
                  <span className="italic">hiring.</span>
                </h2>

                <div className="divider-accent" />

                <p className="text-elite-charcoal text-lg leading-relaxed mb-10 max-w-lg">
                  Are you passionate about providing care for seniors? Join a company that prioritizes both your well-being and professional development.
                </p>

                <div className="space-y-5 mb-10">
                  {[
                    { icon: CurrencyDollar, text: "Competitive Pay & Benefits" },
                    { icon: CalendarBlank, text: "Flexible Scheduling" },
                    { icon: UsersThree, text: "Supportive Team Culture" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-elite-beige to-elite-sand flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                        <item.icon size={24} weight="thin" className="text-elite-charcoal" />
                      </div>
                      <span className="text-elite-charcoal font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link to={`${createPageUrl('Contact')}?subject=Job%20Application`}>
                  <button className="group flex items-center gap-2 bg-elite-gold text-elite-navy px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] rounded-[2px] hover:bg-elite-gold/80 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-elite-gold/20">
                    Apply Now
                    <ArrowUpRight size={16} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-16 md:py-24 bg-elite-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-eyebrow block mb-6">
                Get in Touch
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
