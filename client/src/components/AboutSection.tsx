import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";
import aboutBg from "@assets/60c94c0f49222bf21cb50e38b10bd013 (1)_1763281322852.jpg";

export default function AboutSection() {
  const headerAnimation = useScrollAnimation("fade-in");
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingRef = useRef<HTMLDivElement>(null);

  const fullText = "We are MFA — strategy-first, design-obsessed and anti-mediocrity.";
  const highlightWords = ["strategy-first", "design-obsessed", "anti-mediocrity"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTyping) {
            setIsTyping(true);
            let currentIndex = 0;
            
            const typingInterval = setInterval(() => {
              if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
              } else {
                clearInterval(typingInterval);
              }
            }, 50);

            return () => clearInterval(typingInterval);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (typingRef.current) {
      observer.observe(typingRef.current);
    }

    return () => {
      if (typingRef.current) {
        observer.unobserve(typingRef.current);
      }
    };
  }, [isTyping]);

  const renderTextWithHighlights = (text: string) => {
    let result = text;
    let parts: Array<{ text: string; highlight: boolean }> = [];
    let lastIndex = 0;

    highlightWords.forEach((word) => {
      const index = result.indexOf(word, lastIndex);
      if (index !== -1 && index < text.length) {
        if (index > lastIndex) {
          parts.push({ text: text.slice(lastIndex, index), highlight: false });
        }
        parts.push({ text: word, highlight: true });
        lastIndex = index + word.length;
      }
    });

    if (lastIndex < text.length) {
      parts.push({ text: text.slice(lastIndex), highlight: false });
    }

    return (
      <>
        {parts.map((part, idx) =>
          part.highlight ? (
            <span key={idx} className="text-primary font-bold">
              {part.text}
            </span>
          ) : (
            <span key={idx}>{part.text}</span>
          )
        )}
        <span className="typing-cursor">|</span>
      </>
    );
  };

  return (
    <section id="about" className="py-24 px-4 relative" data-testid="section-about">
      <div className="absolute inset-0 z-0 bg-[#1a1a1a]" />
      
      {/* Swiss Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Vertical grid lines - 12 column grid */}
        {[...Array(13)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-white"
            style={{ left: `${(i / 12) * 100}%` }}
          />
        ))}
        
        {/* Horizontal grid lines - 8 row grid */}
        {[...Array(9)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-white"
            style={{ top: `${(i / 8) * 100}%` }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.className}`}>
          <p className="text-[30px] text-white font-bold max-w-4xl mx-auto leading-relaxed mb-8">
            Most agencies wait for the brief. We BUILD the brief with you.
          </p>
          <p className="text-[30px] text-white font-bold max-w-4xl mx-auto leading-relaxed">
            Because we know — a successful strategy is only half the magic. The other half? Killer design that actually speaks.
          </p>
        </div>

        <div ref={typingRef}>
          <p className="text-2xl md:text-3xl text-foreground text-center font-semibold leading-relaxed" data-testid="text-tagline">
            {renderTextWithHighlights(displayedText)}
          </p>
        </div>
      </div>
    </section>
  );
}
