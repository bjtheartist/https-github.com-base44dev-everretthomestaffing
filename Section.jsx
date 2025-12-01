import React from 'react';
import { cn } from '@/components/utils';

const Section = ({ className, children, background = 'white' }) => {
  const bgClasses = {
    white: 'bg-white',
    soft: 'bg-[#FAF9F6]',
    peach: 'bg-[#FFF5F3]',
    teal: 'bg-[#F0F7F7]',
    primary: 'bg-[#4E8D8C]',
    navy: 'bg-[#2C3E50]',
  };

  return (
    <section className={cn(`py-16 md:py-24 relative overflow-hidden ${bgClasses[background]}`, className)}>
      {children}
    </section>
  );
};

export default Section;