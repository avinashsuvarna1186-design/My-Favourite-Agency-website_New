import { useState, useEffect } from "react";
import logoImage from "@assets/image_1764755371215.png";

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(3);
  const [showLogo, setShowLogo] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 800);
      return () => clearTimeout(timer);
    } else if (count === 0 && !showLogo) {
      // Show logo after countdown
      setShowLogo(true);
      
      // Start fade out after logo reveal
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsVisible(false);
          onLoadComplete?.();
        }, 600);
      }, 1500);
      
      return () => clearTimeout(fadeTimer);
    }
  }, [count, showLogo, onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-600 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      data-testid="loading-screen"
    >
      {/* Countdown numbers */}
      {count > 0 && (
        <div className="relative">
          <span 
            key={count}
            className="countdown-number text-[12rem] md:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#E97451] to-[#A855F7]"
            data-testid="countdown-number"
          >
            {count}
          </span>
          
          {/* Glow ring around number */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="countdown-ring w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-[#E97451]/30" />
          </div>
        </div>
      )}

      {/* Logo reveal */}
      {showLogo && (
        <div className="flex flex-col items-center logo-reveal">
          {/* Glow behind logo */}
          <div 
            className="absolute blur-3xl opacity-50"
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
