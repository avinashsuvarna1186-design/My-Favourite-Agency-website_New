import { useState, useEffect } from "react";
import logoImage from "@assets/image_1764755371215.png";

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(5);
  const [showLogo, setShowLogo] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 600);
      return () => clearTimeout(timer);
    } else if (count === 0 && !showLogo) {
      setShowLogo(true);
      
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsVisible(false);
          onLoadComplete?.();
        }, 600);
      }, 1200);
      
      return () => clearTimeout(fadeTimer);
    }
  }, [count, showLogo, onLoadComplete]);

  if (!isVisible) return null;

  const circumference = 2 * Math.PI * 90;
  const progress = ((5 - count) / 5) * circumference;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-600 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      data-testid="loading-screen"
    >
      {/* Film grain overlay */}
      <div className="absolute inset-0 film-grain opacity-10" />
      
      {/* Countdown */}
      {count > 0 && (
        <div className="relative flex items-center justify-center">
          {/* Outer static ring */}
          <svg className="absolute w-56 h-56 md:w-72 md:h-72" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            {/* Tick marks */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 15 - 90) * (Math.PI / 180);
              const x1 = 100 + 82 * Math.cos(angle);
              const y1 = 100 + 82 * Math.sin(angle);
              const x2 = 100 + 90 * Math.cos(angle);
              const y2 = 100 + 90 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={i % 6 === 0 ? "2" : "1"}
                />
              );
            })}
          </svg>

          {/* Progress ring */}
          <svg className="absolute w-56 h-56 md:w-72 md:h-72 -rotate-90" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              className="transition-all duration-500 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E97451" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Spinning line indicator */}
          <div 
            className="absolute w-56 h-56 md:w-72 md:h-72 spinner-line"
            style={{ 
              animationDuration: '0.6s',
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-white to-transparent" />
          </div>

          {/* Center circle */}
          <div className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full bg-black/80 border border-white/20" />

          {/* Number */}
          <span 
            key={count}
            className="countdown-number relative text-7xl md:text-8xl font-bold text-white"
            data-testid="countdown-number"
          >
            {count}
          </span>

          {/* Corner crosshairs */}
          <div className="absolute w-56 h-56 md:w-72 md:h-72">
            <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-white/40" />
            <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-white/40" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-white/40" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-white/40" />
          </div>
        </div>
      )}

      {/* Logo reveal */}
      {showLogo && (
        <div className="flex flex-col items-center logo-reveal">
          <div 
            className="absolute blur-3xl opacity-40"
            style={{
              width: '300px',
              height: '200px',
              background: 'radial-gradient(circle, #E97451 0%, #A855F7 50%, transparent 70%)',
            }}
          />
          
          <img 
            src={logoImage} 
            alt="MFA Logo" 
            className="w-40 md:w-56 h-auto relative z-10"
            data-testid="loading-logo"
          />
        </div>
      )}
    </div>
  );
}

export default LoadingScreen;
