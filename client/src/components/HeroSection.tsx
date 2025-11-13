import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroVideo from "@assets/openart-video_e0f71e17_1763050993279_1763056173455.mp4";

const STAR_POSITIONS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  delay: (i * 0.06) % 3,
  opacity: 0.3 + ((i * 17) % 70) / 100,
}));

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  
  const fullText = "Welcome to My Favourite Agency";

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    
    let currentIndex = 0;
    const typingSpeed = 50;

    const typeWriter = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeWriter);
      }
    }, typingSpeed);

    return () => clearInterval(typeWriter);
  }, [isLoaded]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Galactic Video Background with Depth */}
      <div className="absolute inset-0 z-0">
        {/* Background Video Layer - Slower movement for depth */}
        <div 
          className="absolute inset-0 scale-110"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) scale(1.1)`,
            transition: "transform 0.8s ease-out",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source 
              src={heroVideo} 
              type="video/mp4" 
            />
          </video>
        </div>

        {/* Mid-layer with stars - Medium movement */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          <div className="absolute inset-0 opacity-40">
            {STAR_POSITIONS.map((star) => (
              <div
                key={star.id}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  animationDelay: `${star.delay}s`,
                  opacity: star.opacity,
                }}
              />
            ))}
          </div>
        </div>

        {/* Foreground glow orbs - Fastest movement for depth */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
            style={{
              background: "radial-gradient(circle, rgba(138,43,226,0.4) 0%, transparent 70%)",
            }}
          />
          <div 
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 animate-float-delayed"
            style={{
              background: "radial-gradient(circle, rgba(0,191,255,0.4) 0%, transparent 70%)",
            }}
          />
          <div 
            className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-15 animate-pulse-slow"
            style={{
              background: "radial-gradient(circle, rgba(255,20,147,0.3) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />
      </div>

      {/* Main Content */}
      <div 
        className={`relative z-20 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <div className="mb-8">
          <span className="text-primary text-2xl md:text-4xl font-bold tracking-widest uppercase">
            {typedText}
            <span className="typing-cursor">|</span>
          </span>
        </div>
        
        <h1 
          className="text-5xl md:text-8xl font-bold mb-12 text-foreground drop-shadow-2xl leading-tight"
          data-testid="text-hero-headline"
        >
          Scroll Down.
          <br />
          Things are About to{" "}
          <span className="text-primary inline-block animate-text-shimmer bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent bg-[length:200%_auto]">
            Get Good.
          </span>
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={scrollToAbout}
            className="glass px-8 py-4 rounded-full text-foreground font-semibold hover-elevate active-elevate-2 transition-all hover:scale-105"
          >
            Explore Our Work
          </button>
          <a
            href="#contact"
            className="glass px-8 py-4 rounded-full text-foreground font-semibold hover-elevate active-elevate-2 transition-all hover:scale-105"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
