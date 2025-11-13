import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";

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
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerAnimation.ref} className={`text-center mb-12 ${headerAnimation.className}`}>
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 gradient-wave-text" data-testid="text-about-heading">
            About Us
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
            Most agencies wait for the brief. We BUILD the brief with you.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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
