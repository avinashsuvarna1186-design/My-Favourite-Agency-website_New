import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/image_1764777498581.png";

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'fading' | 'done'>('loading');
  const hasCompleted = useRef(false);

  // Loading animation then reveal logo
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('reveal');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // After logo reveal, start fading
  useEffect(() => {
    if (phase === 'reveal') {
      const timer = setTimeout(() => {
        setPhase('fading');
      }, 1500);
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
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [phase, onLoadComplete]);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      {true && (
        <motion.div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'fading' ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          data-testid="loading-screen"
        >
          {/* Outer rotating ring */}
          <motion.div
            className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/20"
            animate={{ 
              rotate: 360,
              scale: phase === 'reveal' ? 1.2 : 1,
              opacity: phase === 'reveal' ? 0 : 1
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.8, ease: "easeOut" }
            }}
          />

          {/* Second rotating ring - opposite direction */}
          <motion.div
            className="absolute w-52 h-52 md:w-64 md:h-64 rounded-full border border-white/30"
            animate={{ 
              rotate: -360,
              scale: phase === 'reveal' ? 1.3 : 1,
              opacity: phase === 'reveal' ? 0 : 1
            }}
            transition={{ 
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.8, ease: "easeOut" }
            }}
          />

          {/* Inner pulsing ring */}
          <motion.div
            className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-white/40"
            animate={{ 
              scale: phase === 'reveal' ? 1.5 : [1, 1.1, 1],
              opacity: phase === 'reveal' ? 0 : [0.4, 0.8, 0.4]
            }}
            transition={{ 
              scale: phase === 'reveal' 
                ? { duration: 0.8, ease: "easeOut" }
                : { duration: 2, repeat: Infinity, ease: "easeInOut" },
              opacity: phase === 'reveal'
                ? { duration: 0.8, ease: "easeOut" }
                : { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Orbiting dots */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"
              style={{
                transformOrigin: "center",
              }}
              animate={{
                rotate: 360,
                opacity: phase === 'reveal' ? 0 : 1,
              }}
              transition={{
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.75,
                },
                opacity: { duration: 0.5 }
              }}
            >
              <motion.div
                className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"
                style={{
                  transform: `translateX(${100 + i * 10}px)`,
                }}
              />
            </motion.div>
          ))}

          {/* Glowing center circle */}
          <motion.div
            className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/5"
            animate={{ 
              scale: phase === 'reveal' ? 2 : [1, 1.15, 1],
              opacity: phase === 'reveal' ? 0 : 1
            }}
            transition={{ 
              scale: phase === 'reveal' 
                ? { duration: 0.6, ease: "easeOut" }
                : { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.6 }
            }}
            style={{
              boxShadow: "0 0 60px rgba(255,255,255,0.1), 0 0 100px rgba(255,255,255,0.05)"
            }}
          />

          {/* Progress arc */}
          <svg className="absolute w-56 h-56 md:w-72 md:h-72" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeDasharray="283"
              initial={{ strokeDashoffset: 283 }}
              animate={{ 
                strokeDashoffset: phase === 'reveal' ? 0 : 283 * 0.25,
                opacity: phase === 'reveal' ? 0 : 1
              }}
              transition={{ 
                strokeDashoffset: { duration: 2.5, ease: "easeInOut" },
                opacity: { duration: 0.5 }
              }}
              style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
            />
          </svg>

          {/* MFA Logo - appears on reveal */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: phase === 'reveal' || phase === 'fading' ? 1 : 0,
              scale: phase === 'reveal' || phase === 'fading' ? 1 : 0.5
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <img 
              src={logoImage} 
              alt="MFA" 
              className="w-48 h-auto md:w-64"
              data-testid="loading-logo"
            />
          </motion.div>

          {/* Small loading text */}
          <motion.div
            className="absolute bottom-20 md:bottom-24"
            animate={{ 
              opacity: phase === 'loading' ? [0.3, 0.7, 0.3] : 0
            }}
            transition={{ 
              opacity: phase === 'loading' 
                ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.3 }
            }}
          >
            <span className="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase font-light">
              Loading
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
