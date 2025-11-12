import { useEffect, useRef, useState } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ children, speed = 0.5, className = '' }: ParallaxSectionProps) {
  const { scrollY, reducedMotion } = useParallax();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || reducedMotion) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementHeight = rect.height;
    const viewportHeight = window.innerHeight;

    const scrollRange = elementHeight + viewportHeight;
    const scrollProgress = (scrollY + viewportHeight - elementTop) / scrollRange;

    if (scrollProgress >= 0 && scrollProgress <= 1) {
      const parallaxOffset = (scrollProgress - 0.5) * 100 * speed;
      setOffset(parallaxOffset);
    }
  }, [scrollY, speed, reducedMotion]);

  return (
    <div ref={sectionRef} className={className}>
      <div
        style={{
          transform: reducedMotion ? 'none' : `translate3d(0, ${offset}px, 0)`,
          willChange: reducedMotion ? 'auto' : 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
