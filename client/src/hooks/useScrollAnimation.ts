import { useEffect, useRef, useState } from "react";

export type AnimationType = 
  | "fade-in" 
  | "slide-left" 
  | "slide-right" 
  | "scale-in";

interface UseScrollAnimationOptions {
  threshold?: number;
  delay?: number;
}

export function useScrollAnimation(
  animationType: AnimationType = "fade-in",
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, delay = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold, delay]);

  const className = `scroll-${animationType} ${isVisible ? 'visible' : ''}`;

  return { ref, className, isVisible };
}
