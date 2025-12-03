import { useState, useEffect } from "react";
import logoImage from "@assets/image_1764755371215.png";

interface LoadingScreenProps {
  onLoadComplete?: () => void;
  minDisplayTime?: number;
}

function LoadingParticle({ delay, size, x, y }: { delay: number; size: number; x: number; y: number }) {
  const colors = ['#E97451', '#A855F7', '#ffffff'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <div
      className="loading-particle absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        backgroundColor: color,
        animationDelay: `${delay}ms`,
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
    />
  );
}

export function LoadingScreen({ onLoadComplete, minDisplayTime = 3000 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [particles] = useState(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      delay: Math.random() * 2000,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
  );

  useEffect(() => {
    // Start logo reveal after a short delay
    const logoTimer = setTimeout(() => setShowLogo(true), 300);
    
    // Begin fade out sequence
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onLoadComplete?.();
      }, 800);
    }, minDisplayTime);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(fadeTimer);
    };
  }, [minDisplayTime, onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-800 ${
        isFading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
      data-testid="loading-screen"
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <LoadingParticle key={p.id} {...p} />
        ))}
      </div>

      {/* Radial gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-radial from-[#E97451]/10 via-transparent to-[#A855F7]/10" />

      {/* Main logo container */}
      <div className="relative flex flex-col items-center">
        {/* Glow effect behind logo */}
        <div 
          className={`absolute inset-0 blur-3xl transition-all duration-1000 ${
            showLogo ? 'opacity-60 scale-150' : 'opacity-0 scale-100'
          }`}
          style={{
            background: 'radial-gradient(circle, #E97451 0%, #A855F7 50%, transparent 70%)',
          }}
        />

        {/* SVG Draw-on effect container */}
        <div className="relative">
          {/* The actual logo with draw-on reveal */}
          <div 
            className={`logo-draw-container transition-all duration-1500 ${
              showLogo ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={logoImage} 
              alt="MFA Logo" 
              className={`logo-draw w-40 h-auto md:w-56 relative z-10 ${showLogo ? 'animate' : ''}`}
              data-testid="loading-logo"
            />
          </div>

          {/* Scanning line effect */}
          <div 
            className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent scanning-line ${
              showLogo ? 'animate' : ''
            }`}
          />
        </div>
        
        {/* Loading text */}
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-white/60 text-sm tracking-[0.3em] uppercase font-light">
            Creating Brands That Matter
          </p>
        </div>

        {/* Animated dots */}
        <div 
          className={`mt-6 flex items-center gap-2 transition-all duration-700 delay-700 ${
            showLogo ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="loading-dot w-2 h-2 rounded-full bg-[#E97451]" style={{ animationDelay: '0ms' }} />
          <div className="loading-dot w-2 h-2 rounded-full bg-white" style={{ animationDelay: '150ms' }} />
          <div className="loading-dot w-2 h-2 rounded-full bg-[#A855F7]" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20 corner-accent" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20 corner-accent" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20 corner-accent" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20 corner-accent" />
    </div>
  );
}

export default LoadingScreen;
