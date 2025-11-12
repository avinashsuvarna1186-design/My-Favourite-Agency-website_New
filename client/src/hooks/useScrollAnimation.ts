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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  const className = `scroll-${animationType} ${isVisible ? 'visible' : ''}`;

  return { ref, className, isVisible };
}
