import { useState, useEffect, useRef } from "react";
import { X, Check } from "lucide-react";
import SwissGrid from "./SwissGrid";

export default function ComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const comparisons = [
    { old: "Designers only execute", mfa: "Designers pitch, own & lead" },
    { old: "Briefs are vague", mfa: "We co-build the brief" },
    { old: "Feedback is chaos", mfa: "Feedback is sacred" },
    { old: "Copy & design separate", mfa: "Copy + design, always paired" },
    { old: "No accountability", mfa: "We own the outcome" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden" 
      data-testid="section-comparison"
    >
      <SwissGrid />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Swiss Typography */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-6">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-flow-text leading-[1.2] tracking-tight">
            Why we're different
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way Column - Slower, Red Destructive Tint */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-muted-foreground text-center flex items-center justify-center gap-2">
              <X className="w-6 h-6 text-destructive" />
              The Old Way
            </h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 bg-black rounded-lg border border-destructive/30 shadow-lg hover-elevate transition-all ${
                    isVisible ? "animate-slide-up-slow" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards'
                  }}
                  data-testid={`comparison-old-${index}`}
                >
                  <p className="text-muted-foreground">{item.old}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MFA Way Column - Faster, Orange Victory Glow */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2" style={{ color: '#ff6b35' }}>
              <Check className="w-6 h-6" style={{ color: '#ff6b35' }} />
              The MFA Way
            </h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 bg-black rounded-lg shadow-xl hover-elevate transition-all relative ${
                    isVisible ? "animate-slide-up-fast" : "opacity-0"
                  }`}
                  style={{
                    boxShadow: '0 0 30px rgba(255, 107, 53, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                    animationDelay: `${index * 120}ms`,
                    animationFillMode: 'forwards'
                  }}
                  data-testid={`comparison-mfa-${index}`}
                >
                  <p className="font-bold text-lg" style={{ color: '#ff6b35' }}>{item.mfa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUpSlow {
          0% {
            opacity: 0;
            transform: translateY(50px);
            filter: brightness(0.7) contrast(1.2);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: brightness(1) contrast(1);
          }
        }

        @keyframes slideUpFast {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
            filter: brightness(1.2);
            box-shadow: 0 0 40px rgba(255, 107, 53, 0.4), 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          }
          50% {
            filter: brightness(1.3);
            box-shadow: 0 0 50px rgba(255, 107, 53, 0.5), 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: brightness(1);
            box-shadow: 0 0 30px rgba(255, 107, 53, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          }
        }

        .animate-slide-up-slow {
          animation: slideUpSlow 1s ease-out;
        }

        .animate-slide-up-fast {
          animation: slideUpFast 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-slide-up-slow,
          .animate-slide-up-fast {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
