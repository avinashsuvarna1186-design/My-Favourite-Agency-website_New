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
      className={`relative overflow-hidden py-8 ${className}`}
      data-testid="massive-text-section"
      aria-hidden="true"
    >
      {/* Animated glow orbs behind text */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className={`absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-coral-500/20 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ animation: isVisible ? 'pulse-glow 4s ease-in-out infinite' : 'none' }}
        />
        <div 
          className={`absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ animation: isVisible ? 'pulse-glow 4s ease-in-out infinite 1s' : 'none' }}
        />
      </div>
      
      {/* Main text with shimmer effect */}
      <div className={`massive-text text-center ${isVisible ? 'massive-text-animate massive-text-shimmer' : ''}`}>
        {children}
      </div>
      
      {/* Floating particles */}
      {isVisible && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-coral-400/60 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                animation: `float-particle 3s ease-in-out infinite ${i * 0.5}s`,
                top: '50%',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
