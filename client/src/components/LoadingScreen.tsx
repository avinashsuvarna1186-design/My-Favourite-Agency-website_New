import { useState, useEffect } from "react";
import logoImage from "@assets/image_1764755371215.png";

interface LoadingScreenProps {
  onLoadComplete?: () => void;
  minDisplayTime?: number;
}

export function LoadingScreen({ onLoadComplete, minDisplayTime = 2000 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onLoadComplete?.();
      }, 600);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime, onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-600 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      data-testid="loading-screen"
    >
      <div className="relative flex flex-col items-center">
        <div className="logo-container relative">
          <div className="logo-glow absolute inset-0 blur-3xl opacity-60" />
          <img 
            src={logoImage} 
            alt="MFA Logo" 
            className="logo-pulse w-32 h-auto md:w-48 relative z-10"
            data-testid="loading-logo"
          />
        </div>
        
        <div className="mt-8 flex items-center gap-2">
          <div className="loading-dot w-2 h-2 rounded-full bg-[#E97451]" style={{ animationDelay: '0ms' }} />
          <div className="loading-dot w-2 h-2 rounded-full bg-white" style={{ animationDelay: '150ms' }} />
          <div className="loading-dot w-2 h-2 rounded-full bg-[#A855F7]" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
