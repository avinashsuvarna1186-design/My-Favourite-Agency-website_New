import { useEffect, useRef, useState } from "react";

interface MassiveTextProps {
  children: string;
  className?: string;
}

export default function MassiveText({ children, className = "" }: MassiveTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
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
  }, []);

  return (
    <div 
      ref={ref}
      className={`relative py-20 overflow-hidden ${className}`}
      data-testid="massive-text-section"
    >
      <div className={`massive-text text-center ${isVisible ? 'massive-text-animate' : ''}`}>
        {children}
      </div>
    </div>
  );
}
