import React from 'react';
import { cn } from './utils';

const Section = ({ className, children, background = 'cream' }) => {
  const bgClasses = {
    // Elite Design System Backgrounds
    cream: 'bg-elite-cream',
    beige: 'bg-elite-beige',
    sand: 'bg-elite-sand',
    navy: 'bg-elite-navy text-elite-cream',
    sage: 'bg-elite-sage',
    white: 'bg-white',
    // Legacy
    bone: 'bg-elite-cream',
    primary: 'bg-elite-navy text-elite-cream',
    transparent: '',
  };

  return (
    <section className={cn(`py-24 md:py-32 relative overflow-hidden ${bgClasses[background]}`, className)}>
      {children}
    </section>
  );
};

export default Section;