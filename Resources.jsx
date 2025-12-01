import React from 'react';
import Section from '@/components/ui/Section';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { FileText, BookOpen, Heart, ExternalLink, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Seo from '@/components/Seo';

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
      <Section className="pt-32 pb-32 md:pt-48 md:pb-48 text-center relative overflow-hidden">
        <OptimizedImage
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=2000"
            alt="Peaceful reading"
            className="w-full h-full object-cover"
            containerClassName="absolute inset-0 z-0"
            priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/80 via-[#2C3E50]/60 to-[#2C3E50]/80 z-0"></div>
        <FadeIn className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">Caregiver Resources</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md font-light">
            Helpful guides, articles, and tools for families navigating the care journey.
          </p>
        </FadeIn>
      </Section>

      <Section background="white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {resources.map((section, idx) => (
              <StaggerItem key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg shadow-[#2C3E50]/5">
                <div className="w-12 h-12 bg-[#2C3E50] rounded-xl flex items-center justify-center text-white mb-6">
                  <section.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#2C3E50] mb-6">{section.category}</h3>
                <ul className="space-y-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="group">
                      <a href={item.link} className="block">
                        <div className="flex items-start justify-between mb-1">
                          <span className="font-bold text-[#2C3E50] group-hover:text-[#4E8D8C] transition-colors">{item.title}</span>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#4E8D8C] transition-colors" />
                        </div>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <Section className="bg-[#2C3E50] text-white text-center py-16">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6">Need personalized advice?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Every situation is unique. Speak with one of our care coordinators for guidance specific to your family's needs.
            </p>
            <Button className="bg-white text-[#2C3E50] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-bold">
              <Phone className="w-5 h-5 mr-2" />
              Call (517) 402-1891
            </Button>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}