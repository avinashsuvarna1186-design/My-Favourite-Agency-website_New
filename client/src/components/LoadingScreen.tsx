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
      const timer = setTimeout(() => setCount(count - 1), 700);
      return () => clearTimeout(timer);
    } else if (count === 0 && !showLogo) {
      setShowLogo(true);
      
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsVisible(false);
          onLoadComplete?.();
        }, 500);
      }, 1000);
      
      return () => clearTimeout(fadeTimer);
    }
  }, [count, showLogo, onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      data-testid="loading-screen"
    >
      {/* Countdown numbers */}
      {count > 0 && (
        <span 
          key={count}
          className="countdown-number text-[10rem] md:text-[14rem] font-bold text-white"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          data-testid="countdown-number"
        >
          {count}
        </span>
      )}

      {/* Logo reveal */}
      {showLogo && (
        <div className="logo-reveal">
          <img 
            src={logoImage} 
            alt="MFA Logo" 
            className="w-36 md:w-48 h-auto"
            data-testid="loading-logo"
          />
        </div>
      )}
    </div>
  );
}

export default LoadingScreen;
