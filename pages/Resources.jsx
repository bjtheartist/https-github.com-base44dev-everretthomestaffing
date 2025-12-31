import React from 'react';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '../Animations';
import {
  FileText,
  BookOpen,
  Heart,
  ArrowSquareOut,
  Phone,
  ArrowUpRight
} from '@phosphor-icons/react';
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

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center bg-elite-cream pt-20 md:pt-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="text-eyebrow block mb-6">
                Resources
              </span>

              <h1 className="text-display font-display font-light text-elite-navy leading-[0.95] tracking-tight mb-8">
                Caregiver<br />
                <span className="italic text-elite-taupe">Resources</span>
              </h1>

              <p className="text-body-lg text-elite-charcoal max-w-lg mb-10 leading-relaxed">
                Helpful guides, articles, and tools for families navigating the care journey.
              </p>
            </FadeIn>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <ScaleIn>
              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=2000"
                    alt="Peaceful reading"
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

      {/* RESOURCES GRID */}
      <section className="py-16 md:py-24 bg-elite-sand section-textured">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <FadeIn className="mb-16 md:mb-20 max-w-2xl">
            <span className="text-eyebrow block mb-6">
              Helpful Information
            </span>
            <h2 className="text-h2 font-display font-light text-elite-navy leading-[1.1] mb-4">
              Guides &<br />
              <span className="italic">articles.</span>
            </h2>
            <div className="divider-accent" />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {resources.map((section, idx) => (
              <StaggerItem key={idx} className="card-bordered hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="icon-contained">
                  <section.icon size={32} weight="thin" />
                </div>

                <h3 className="text-xl font-heading font-medium text-elite-navy mb-2">
                  {section.category}
                </h3>

                <div className="w-8 h-[1px] bg-elite-gold/40 mb-6" />

                <ul className="space-y-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="group">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex items-start justify-between mb-1">
                          <span className="font-heading font-medium text-elite-navy group-hover:text-elite-charcoal transition-colors">
                            {item.title}
                          </span>
                          <ArrowSquareOut size={16} weight="thin" className="text-elite-taupe group-hover:text-elite-navy transition-colors mt-1" />
                        </div>
                        <p className="text-sm text-elite-taupe leading-relaxed">{item.desc}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-28 bg-elite-navy text-elite-cream">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-elite-gold mb-8 block">
              Get Help
            </span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light leading-[1.4] text-elite-cream/95 mb-8">
              Every situation is unique. Speak with one of our care coordinators for guidance specific to your family's needs.
            </h2>

            <div className="mt-10 flex justify-center">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-elite-gold/50 to-transparent mb-10" />
            </div>

            <a href="tel:+15174021891">
              <button className="group flex items-center justify-center gap-2 mx-auto bg-elite-gold text-elite-navy px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] rounded-[2px] hover:bg-elite-gold/80 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-elite-gold/20">
                <Phone size={18} weight="bold" />
                Call (517) 402-1891
              </button>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
