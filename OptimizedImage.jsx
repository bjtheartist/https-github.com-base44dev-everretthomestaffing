import React, { useState, useRef, useEffect } from 'react';
import { cn } from './utils';

export default function OptimizedImage({ src, alt, className, containerClassName, priority = false }) {
  const [isLoaded, setIsLoaded] = useState(priority); // If priority, assume loaded state logic handling immediately
  const [isInView, setIsInView] = useState(priority); // If priority, skip intersection observer
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' } // Preload when close to viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden bg-gray-100", containerClassName)}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
        />
      )}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
      )}
    </div>
  );
}