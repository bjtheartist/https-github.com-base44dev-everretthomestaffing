import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Section from '../Section';
import { FadeIn } from '../Animations';
import { Button } from '../button';
import { Phone, MessageCircle, HelpCircle, ShieldCheck, Users, Clock } from 'lucide-react';
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
      icon: HelpCircle,
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
      {/* Hero Header */}
      <div className="relative bg-[#2C3E50] py-24 overflow-hidden rounded-2xl">
         <div className="absolute inset-0 opacity-20">
            <OptimizedImage
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"
                alt="Background"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
                priority={true}
            />
         </div>
         <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/90 to-[#2C3E50]/80"></div>

         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <FadeIn>
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                    <div className="inline-block px-4 py-1 rounded-lg bg-everett-accent text-everett-text font-mono font-bold tracking-widest text-xs uppercase mb-4">
                        Support Center
                    </div>
                    <h1 className="text-4xl md:text-5xl font-sans font-bold text-everett-text mb-4">Frequently Asked Questions</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif italic">
                        Find answers to common questions about our care services, team, and processes.
                    </p>
                </div>
            </FadeIn>
         </div>
      </div>

      {/* FAQ Sections */}
      <Section background="white" className="mt-6">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-12">
          {faqs.map((section, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                    <div className="bg-everett-accent p-3 rounded-lg">
                        <section.icon className="w-6 h-6 text-everett-text" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-1">
                        {String(idx + 1).padStart(2, '0')} // {section.category}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-sans font-bold text-everett-text">{section.category}</h2>
                    </div>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  {section.questions.map((faq, qIdx) => (
                    <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`} className="border border-gray-100 rounded-lg px-6 bg-everett-accent shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                      <AccordionTrigger className="text-left text-lg font-sans font-medium text-everett-text hover:text-everett-text py-6 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base font-serif italic">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section background="white" className="text-center mt-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="w-14 h-14 bg-everett-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-7 h-7 text-everett-text" />
            </div>
            <div className="inline-block px-4 py-1 rounded-lg bg-everett-accent text-everett-text font-mono font-bold tracking-widest text-xs uppercase mb-4">
              Get in Touch
            </div>
            <h2 className="text-3xl font-sans font-bold text-everett-text mb-4">Still have questions?</h2>
            <p className="text-gray-600 text-lg mb-8 font-serif italic">
              We're happy to answer any other questions you might have. Our team is available 24/7 to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:+15174021891">
                    <Button className="bg-everett-text text-white hover:bg-[#0d1a12] h-12 px-8 rounded-lg font-bold shadow-sm hover:-translate-y-1 transition-all w-full sm:w-auto">
                        <Phone className="w-4 h-4 mr-2" />
                        Call (517) 402-1891
                    </Button>
                </a>
                <Link to={createPageUrl('Contact')}>
                    <Button variant="outline" className="border-everett-text text-everett-text hover:bg-everett-accent h-12 px-8 rounded-lg font-bold hover:-translate-y-1 transition-all w-full sm:w-auto">
                        Send a Message
                    </Button>
                </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}