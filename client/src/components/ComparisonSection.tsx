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
          <p className="text-3xl md:text-4xl uppercase tracking-[0.15em] text-white/60 font-medium mb-6">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-flow-text leading-[1.2] tracking-tight">
            Why we're different
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-center">
          {/* Old Way Column - Fade and Scale */}
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
                    isVisible ? "animate-competitive-fade" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                  data-testid={`comparison-old-${index}`}
                >
                  <p className="text-muted-foreground">{item.old}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MFA Way Column - Fade, Scale with Orange Glow Pulse */}
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
                    isVisible ? "animate-competitive-fade-glow" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
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
        @keyframes competitiveFade {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          60% {
            transform: scale(1.02);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes competitiveFadeGlow {
          0% {
            opacity: 0;
            transform: scale(0.9);
            box-shadow: 0 0 0 rgba(255, 107, 53, 0), 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          }
          40% {
            box-shadow: 0 0 50px rgba(255, 107, 53, 0.5), 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          }
          60% {
            transform: scale(1.05);
            box-shadow: 0 0 60px rgba(255, 107, 53, 0.6), 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          }
          80% {
            box-shadow: 0 0 40px rgba(255, 107, 53, 0.35), 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 30px rgba(255, 107, 53, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          }
        }

        .animate-competitive-fade {
          animation: competitiveFade 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-competitive-fade-glow {
          animation: competitiveFadeGlow 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-competitive-fade,
          .animate-competitive-fade-glow {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
