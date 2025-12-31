import React from 'react';
import Section from '../Section';
import { FadeIn, StaggerContainer, StaggerItem } from '../Animations';
import { FileText, BookOpen, Heart, ExternalLink, Phone } from 'lucide-react';
import { Button } from '../button';
import OptimizedImage from '../OptimizedImage';
import Seo from '../Seo';

export default function Resources() {
  const resources = [
    {
      category: "Caregiver Guides",
      icon: BookOpen,
      items: [
        { title: "Understanding Home Care Options", desc: "A complete guide to non-medical / in-home care & other supports.", link: "https://www.nia.nih.gov/health/long-term-care/what-long-term-care" },
        { title: "Signs Your Parent Needs Help", desc: "Key indicators it might be time for assistance.", link: "https://www.agingcare.com/articles/parents-in-denial-about-needing-home-care-143228.htm" },
        { title: "Aging in Place Guide", desc: "How to get home and family ready for staying at home safely.", link: "https://www.nia.nih.gov/health/aging-place/aging-place-growing-older-home" }
      ]
    },
    {
      category: "Health & Wellness",
      icon: Heart,
      items: [
        { title: "Nutrition for Seniors", desc: "Healthy diet tips for older adults.", link: "https://medlineplus.gov/nutritionforolderadults.html" },
        { title: "Fall Prevention Checklist", desc: "Practical home safety checklist.", link: "https://www.cdc.gov/steadi/pdf/steadi-brochure-checkforsafety-508.pdf" },
        { title: "Staying Active at Home", desc: "Safe exercises for limited mobility / at-home movement.", link: "https://sharenetworkchicago.org/resources/detail/at-home-exercises-for-older-adults-nih-go-4-life" }
      ]
    },
    {
      category: "Financial Planning",
      icon: FileText,
      items: [
        { title: "Paying for Long-Term Care", desc: "Overview of payment options & programs.", link: "https://www.nia.nih.gov/health/long-term-care/paying-long-term-care" },
        { title: "Veterans Benefits (Aid & Attendance)", desc: "Explanation of Aid & Attendance and Housebound benefits.", link: "https://www.va.gov/pension/aid-attendance-housebound/" },
        { title: "Long-Term Care Insurance", desc: "How to understand and use an LTC policy.", link: "https://www.ncoa.org/article/what-is-long-term-care-insurance/" }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      <Seo 
        title="Resources" 
        description="Helpful resources for caregivers and families, including guides on home care options, health & wellness, and financial planning." 
      />
      <section className="pt-32 pb-32 md:pt-48 md:pb-48 text-center relative overflow-hidden rounded-2xl">
        <OptimizedImage
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=2000"
            alt="Peaceful reading"
            className="w-full h-full object-cover"
            containerClassName="absolute inset-0 z-0"
            priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/80 via-[#2C3E50]/60 to-[#2C3E50]/80 z-0"></div>
        <FadeIn className="relative z-10 px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-lg bg-everett-accent text-everett-text font-mono font-bold tracking-widest text-xs uppercase mb-4">
              Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-everett-text mb-4">Caregiver Resources</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif italic">
              Helpful guides, articles, and tools for families navigating the care journey.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="py-16 md:py-24 mt-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {resources.map((section, idx) => (
              <StaggerItem key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-everett-accent rounded-lg flex items-center justify-center text-everett-text mb-6">
                  <section.icon className="w-6 h-6" />
                </div>
                <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                  {String(idx + 1).padStart(2, '0')} // {section.category}
                </div>
                <h3 className="text-2xl font-sans font-bold text-everett-text mb-6">{section.category}</h3>
                <ul className="space-y-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="group">
                      <a href={item.link} className="block">
                        <div className="flex items-start justify-between mb-1">
                          <span className="font-sans font-bold text-everett-text group-hover:text-gray-600 transition-colors">{item.title}</span>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-everett-text transition-colors" />
                        </div>
                        <p className="text-sm text-gray-500 font-serif italic">{item.desc}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-[#2C3E50] text-white text-center py-16 rounded-2xl mt-6">
        <FadeIn>
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="inline-block px-4 py-1 rounded-lg bg-everett-accent text-everett-text font-mono font-bold tracking-widest text-xs uppercase mb-4">
                Get Help
              </div>
              <h2 className="text-3xl font-sans font-bold mb-4 text-everett-text">Need personalized advice?</h2>
              <p className="text-lg text-gray-600 mb-8 font-serif italic">
                Every situation is unique. Speak with one of our care coordinators for guidance specific to your family's needs.
              </p>
              <Button className="bg-everett-text text-white hover:bg-[#0d1a12] rounded-lg px-8 py-6 text-lg font-bold shadow-sm hover:-translate-y-1 transition-all">
                <Phone className="w-5 h-5 mr-2" />
                Call (517) 402-1891
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}