import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { FadeIn, ScaleIn } from '../Animations';
import {
  Phone,
  ChatCircle,
  Question,
  ShieldCheck,
  UsersThree,
  Clock,
  ArrowUpRight,
  ArrowRight
} from '@phosphor-icons/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import OptimizedImage from '../OptimizedImage';
import Seo from '../Seo';

export default function FAQ() {
  const faqs = [
    {
      category: "Services & Care",
      icon: Question,
      questions: [
        {
          q: "What types of home care services do you provide?",
          a: "We provide a comprehensive range of non-medical home care services including personal care (bathing, grooming), companionship, meal preparation, light housekeeping, medication reminders, and transportation."
        },
        {
          q: "Do you provide care in assisted living facilities?",
          a: "Yes, we can provide supplemental one-on-one care for residents in assisted living facilities, nursing homes, or hospitals to ensure they receive the dedicated attention they need."
        },
        {
          q: "Can services be changed if my needs change?",
          a: "Absolutely. We understand that care needs evolve. Your care plan is flexible and can be adjusted at any time to increase or decrease hours or add different types of support."
        }
      ]
    },
    {
      category: "Caregivers & Safety",
      icon: ShieldCheck,
      questions: [
        {
          q: "Are your caregivers insured and bonded?",
          a: "Yes, absolutely. All our caregivers are fully insured, bonded, and undergo rigorous background checks including criminal history and driving records. We take the safety and security of our clients very seriously."
        },
        {
          q: "How do you select your caregivers?",
          a: "We have a strict hiring process where we select less than 5% of applicants. We look for relevant experience, compassion, and reliability. All caregivers undergo multiple interviews, reference checks, and background screenings."
        },
        {
          q: "What if my caregiver is sick or goes on vacation?",
          a: "We have a large team of qualified caregivers. In the event your regular caregiver is unavailable, we will arrange for a qualified substitute who is briefed on your specific care plan."
        }
      ]
    },
    {
      category: "Scheduling & Costs",
      icon: Clock,
      questions: [
        {
          q: "Do you require a long-term contract?",
          a: "No, we do not require long-term contracts. Our services are flexible. You can adjust the schedule or cancel services with appropriate notice, typically 24-48 hours."
        },
        {
          q: "How quickly can services start?",
          a: "In many cases, we can start services within 24 to 48 hours of your initial consultation. For urgent needs, we do our best to accommodate same-day requests when possible."
        },
        {
          q: "How are services billed?",
          a: "We bill on a weekly or bi-weekly basis depending on your preference. We accept private pay and long-term care insurance. We handle all the paperwork for long-term care insurance claims."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      <Seo
        title="FAQ"
        description="Find answers to common questions about our home care services, caregivers, scheduling, and costs."
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center bg-elite-cream pt-20 md:pt-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="text-eyebrow block mb-6">
                Support Center
              </span>

              <h1 className="text-display font-display font-light text-elite-navy leading-[0.95] tracking-tight mb-8">
                Frequently Asked<br />
                <span className="italic text-elite-taupe">Questions</span>
              </h1>

              <p className="text-body-lg text-elite-charcoal max-w-lg mb-10 leading-relaxed">
                Find answers to common questions about our care services, team, and processes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl('Contact')}>
                  <button className="group flex items-center justify-center gap-2 bg-elite-navy text-elite-cream px-8 py-4 text-[13px] font-medium uppercase tracking-[0.08em] rounded-[2px] hover:bg-elite-charcoal transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-elite-navy/15">
                    Contact Us
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
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"
                    alt="Support and guidance"
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

      {/* FAQ SECTIONS */}
      <section className="py-16 md:py-24 bg-elite-sand section-textured">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
          {faqs.map((section, idx) => (
            <FadeIn key={idx}>
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-elite-sage/30">
                <div className="icon-contained !w-14 !h-14 !mb-0">
                  <section.icon size={24} weight="thin" />
                </div>
                <div>
                  <h2 className="text-h3 font-display font-light text-elite-navy">{section.category}</h2>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {section.questions.map((faq, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    value={`item-${idx}-${qIdx}`}
                    className="border border-elite-sage/20 rounded-lg px-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-lg font-heading font-medium text-elite-navy hover:text-elite-navy py-6 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-elite-charcoal leading-relaxed pb-6 text-base">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 md:py-24 bg-elite-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <div className="icon-contained mx-auto">
              <ChatCircle size={32} weight="thin" />
            </div>

            <span className="text-eyebrow block mb-6">
              Get in Touch
            </span>

            <h2 className="text-h2 font-display font-light text-elite-navy mb-4">
              Still have<br />
              <span className="italic">questions?</span>
            </h2>

            <div className="divider-accent mx-auto" />

            <p className="text-elite-charcoal text-lg mb-10 mt-6">
              We're happy to answer any other questions you might have. Our team is available 24/7 to assist you.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+15174021891">
                <button className="group flex items-center justify-center gap-2 bg-elite-navy text-elite-cream px-8 py-4 text-[13px] font-medium uppercase tracking-[0.08em] rounded-[2px] hover:bg-elite-charcoal transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-elite-navy/15 w-full sm:w-auto">
                  <Phone size={16} weight="bold" />
                  Call (517) 402-1891
                </button>
              </a>
              <Link to={createPageUrl('Contact')}>
                <button className="group flex items-center justify-center gap-2 bg-transparent text-elite-navy px-8 py-4 text-[13px] font-medium uppercase tracking-[0.08em] rounded-[2px] border-[1.5px] border-elite-navy hover:bg-elite-navy hover:text-elite-cream transition-all duration-300 w-full sm:w-auto">
                  Send a Message
                  <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
