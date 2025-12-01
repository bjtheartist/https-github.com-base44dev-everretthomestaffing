import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Section from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/Animations';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, HelpCircle, ShieldCheck, Users, Clock } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OptimizedImage from '@/components/ui/OptimizedImage';
import Seo from '@/components/Seo';

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
      <div className="relative bg-[#2C3E50] py-24 overflow-hidden">
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
                <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                    <HelpCircle className="w-5 h-5 text-[#4E8D8C] mr-2" />
                    <span className="text-white font-bold tracking-wider uppercase text-sm">Support Center</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Frequently Asked Questions</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                    Find answers to common questions about our care services, team, and processes.
                </p>
            </FadeIn>
         </div>
      </div>

      {/* FAQ Sections */}
      <Section background="white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-16">
          {faqs.map((section, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                    <div className="bg-[#E8F1F1] p-3 rounded-xl">
                        <section.icon className="w-6 h-6 text-[#4E8D8C]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2C3E50]">{section.category}</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {section.questions.map((faq, qIdx) => (
                    <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`} className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                      <AccordionTrigger className="text-left text-lg font-medium text-[#2C3E50] hover:text-[#4E8D8C] py-6 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
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
      <Section background="soft" className="text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-12 shadow-xl shadow-[#2C3E50]/5 border border-gray-100">
            <div className="w-16 h-16 bg-[#E8F1F1] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-[#4E8D8C]" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#2C3E50] mb-4">Still have questions?</h2>
            <p className="text-gray-600 text-lg mb-8">
              We're happy to answer any other questions you might have. Our team is available 24/7 to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:+15174021891">
                    <Button className="bg-[#2C3E50] text-white hover:bg-[#1a252f] h-12 px-8 rounded-full font-bold shadow-lg w-full sm:w-auto">
                        <Phone className="w-4 h-4 mr-2" />
                        Call (517) 402-1891
                    </Button>
                </a>
                <Link to={createPageUrl('Contact')}>
                    <Button variant="outline" className="border-[#2C3E50] text-[#2C3E50] hover:bg-[#E8F1F1] h-12 px-8 rounded-full font-bold w-full sm:w-auto">
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