import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'dots' | 'fading' | 'done'>('dots');
  const hasCompleted = useRef(false);

  // Auto-complete after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('fading');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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

  // Create dots in a circular pattern
  const dotCount = 12;
  const dots = Array.from({ length: dotCount }, (_, i) => i);

  const isVisible = phase === 'dots' || phase === 'fading';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'fading' ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          data-testid="loading-screen"
        >
          {/* Central rotating dots container */}
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Outer ring of dots */}
            {dots.map((i) => {
              const angle = (i / dotCount) * 360;
              const delay = i * 0.1;
              
              return (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 w-3 h-3 md:w-4 md:h-4"
                  style={{
                    marginLeft: '-6px',
                    marginTop: '-6px',
                  }}
                  initial={{ 
                    rotate: angle,
                    x: 0,
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{ 
                    rotate: [angle, angle + 360],
                    x: [0, 56, 56, 0],
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    delay: delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.3, 0.7, 1]
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white" />
                </motion.div>
              );
            })}

            {/* Inner pulsing ring */}
            <motion.div
              className="absolute inset-4 md:inset-6 rounded-full border-2 border-white/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Center dot */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-4 h-4 md:w-5 md:h-5 -ml-2 -mt-2 md:-ml-2.5 md:-mt-2.5 rounded-full bg-white"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Floating ambient particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-white/40"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
