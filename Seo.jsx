import React, { useEffect } from 'react';

export default function Seo({ title, description }) {
  useEffect(() => {
    // Update title
    document.title = `${title} | Everett Home Agency`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    return () => {
      // Cleanup not strictly necessary for SPA navigation usually, 
      // but good practice would be to reset or let the next page overwrite.
    };
  }, [title, description]);

  return null;
}