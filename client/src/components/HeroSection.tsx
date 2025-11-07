import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  
  const fullText = "We are MFA — strategy-first, design-obsessed and anti-mediocrity.";

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
      {/* Animated Neon Graphics */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Neon Glow Filters */}
          <filter id="neon-glow-cyan" height="300%" width="300%" x="-75%" y="-75%">
            <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
            <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
            <feFlood floodColor="#00ffff" floodOpacity="1" result="glowColor" />
            <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow" />
            <feMerge>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="neon-glow-magenta" height="300%" width="300%" x="-75%" y="-75%">
            <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
            <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
            <feFlood floodColor="#ff00ff" floodOpacity="1" result="glowColor" />
            <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow" />
            <feMerge>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="neon-glow-yellow" height="300%" width="300%" x="-75%" y="-75%">
            <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
            <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
            <feFlood floodColor="#ffb84d" floodOpacity="1" result="glowColor" />
            <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow" />
            <feMerge>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Animated Neon Lines */}
        <path 
          d="M 100,200 Q 400,100 700,300 T 1300,200" 
          stroke="#00ffff" 
          strokeWidth="3" 
          fill="none" 
          filter="url(#neon-glow-cyan)"
          className="neon-line-1"
        />
        
        <path 
          d="M 1800,400 Q 1500,300 1200,500 T 600,400" 
          stroke="#ff00ff" 
          strokeWidth="3" 
          fill="none" 
          filter="url(#neon-glow-magenta)"
          className="neon-line-2"
        />

        {/* Animated Neon Circles */}
        <circle cx="200" cy="800" r="80" stroke="#ffb84d" strokeWidth="3" fill="none" filter="url(#neon-glow-yellow)" className="neon-circle-1" />
        <circle cx="1700" cy="200" r="60" stroke="#00ffff" strokeWidth="3" fill="none" filter="url(#neon-glow-cyan)" className="neon-circle-2" />
        <circle cx="1600" cy="900" r="100" stroke="#ff00ff" strokeWidth="3" fill="none" filter="url(#neon-glow-magenta)" className="neon-circle-3" />

        {/* Neon Geometric Shapes */}
        <polygon 
          points="300,100 350,50 400,100 350,150" 
          stroke="#00ffff" 
          strokeWidth="2" 
          fill="none" 
          filter="url(#neon-glow-cyan)"
          className="neon-diamond-1"
        />
        
        <polygon 
          points="1500,700 1550,650 1600,700 1550,750" 
          stroke="#ffb84d" 
          strokeWidth="2" 
          fill="none" 
          filter="url(#neon-glow-yellow)"
          className="neon-diamond-2"
        />

        {/* Neon Particles */}
        {[...Array(15)].map((_, i) => (
          <circle 
            key={i}
            cx={Math.random() * 1920}
            cy={Math.random() * 1080}
            r="2"
            fill="#fff"
            filter={`url(#neon-glow-${['cyan', 'magenta', 'yellow'][i % 3]})`}
            className={`neon-particle neon-particle-${i}`}
          />
        ))}
      </svg>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-float"
          style={{
            background: "radial-gradient(circle, rgba(255,184,77,0.6) 0%, transparent 70%)",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-float-delayed"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)",
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse-slow"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating Glass Cards */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 glass rounded-2xl opacity-30 animate-float-slow"
          style={{
            transform: `rotate(${mousePosition.x * 0.5}deg)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div 
          className="absolute bottom-32 right-20 w-40 h-40 glass rounded-3xl opacity-20 animate-float-reverse"
          style={{
            transform: `rotate(${-mousePosition.y * 0.5}deg)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div className="absolute top-1/3 right-10 w-24 h-24 glass rounded-xl opacity-25 animate-float-delayed" />
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
        <div className="mb-8 inline-block glass px-6 py-3 rounded-full">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase animate-pulse-slow">
            Welcome to My Favourite Agency
          </span>
        </div>
        
        <h1 
          className="text-5xl md:text-8xl font-bold mb-6 text-foreground tracking-tight drop-shadow-2xl leading-tight"
          data-testid="text-hero-headline"
        >
          Scroll down.
          <br />
          <span className="text-primary inline-block animate-text-shimmer bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent bg-[length:200%_auto]">
            Things are about
          </span>
          <br />
          to get good.
        </h1>
        
        <p 
          className="text-xl md:text-3xl text-foreground/90 font-medium drop-shadow-lg mb-12 max-w-4xl mx-auto whitespace-nowrap min-h-[3rem]"
          data-testid="text-hero-subtext"
        >
          {typedText.split("anti-mediocrity").map((part, i) => (
            i === 0 ? part : (
              <>
                <span className="text-primary font-bold">anti-mediocrity</span>
                {part}
              </>
            )
          ))}
          {typedText.length < fullText.length && (
            <span className="animate-cursor-blink">|</span>
          )}
        </p>

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
