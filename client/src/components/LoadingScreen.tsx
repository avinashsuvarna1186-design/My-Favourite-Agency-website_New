import { useState, useEffect, useRef } from "react";
import logoImage from "@assets/image_1764755371215.png";

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(3);
  const [phase, setPhase] = useState<'countdown' | 'logo' | 'fading' | 'done'>('countdown');
  const hasCompleted = useRef(false);

  // Countdown timer
  useEffect(() => {
    if (phase === 'countdown' && count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 700);
      return () => clearTimeout(timer);
    } else if (phase === 'countdown' && count === 0) {
      setPhase('logo');
    }
  }, [count, phase]);

  // Logo display then fade
  useEffect(() => {
    if (phase === 'logo') {
      const timer = setTimeout(() => setPhase('fading'), 1000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Fade out then complete
  useEffect(() => {
    if (phase === 'fading' && !hasCompleted.current) {
      const timer = setTimeout(() => {
        hasCompleted.current = true;
        setPhase('done');
        onLoadComplete?.();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [phase, onLoadComplete]);

  if (phase === 'done') return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        phase === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
      data-testid="loading-screen"
    >
      {/* Countdown numbers */}
      {phase === 'countdown' && count > 0 && (
        <span 
          key={count}
          className="countdown-number text-[10rem] md:text-[14rem] font-bold text-white"
          data-testid="countdown-number"
        >
          {count}
        </span>
      )}

      {/* Logo reveal */}
      {(phase === 'logo' || phase === 'fading') && (
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
