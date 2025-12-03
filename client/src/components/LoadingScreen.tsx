import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/image_1764777498581.png";

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'loading' | 'pause' | 'logo' | 'fading' | 'done'>('loading');
  const hasCompleted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('pause');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === 'pause') {
      const timer = setTimeout(() => {
        setPhase('logo');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'logo') {
      const timer = setTimeout(() => {
        setPhase('fading');
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

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

  const showOrbit = phase === 'loading';
  const showLogo = phase === 'logo' || phase === 'fading';

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'fading' ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        data-testid="loading-screen"
      >
        {/* Outer ring */}
        <motion.div
          className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full border border-white/10"
          initial={{ rotate: 0, scale: 1, opacity: 1 }}
          animate={{ 
            rotate: showOrbit ? 360 : 0,
            scale: phase === 'pause' ? 0.5 : 1,
            opacity: phase === 'pause' || showLogo ? 0 : 0.5
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.6, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
        />

        {/* Double helix orbits - clean solid dots */}
        {showOrbit && [...Array(2)].map((_, helixIndex) => (
          <motion.div
            key={`helix-${helixIndex}`}
            className="absolute w-64 h-64 md:w-80 md:h-80"
            animate={{ rotate: helixIndex === 0 ? 360 : -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * 360;
              const yOffset = Math.sin((i / 8) * Math.PI * 2) * 20;
              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-4px',
                    marginTop: '-4px',
                    transform: `rotate(${angle}deg) translateX(${helixIndex === 0 ? 120 : 140}px) translateY(${yOffset}px)`,
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </motion.div>
        ))}

        {/* Comet trails - clean dots */}
        {showOrbit && [...Array(3)].map((_, i) => (
          <motion.div
            key={`comet-${i}`}
            className="absolute"
            style={{ width: 200 + i * 40, height: 200 + i * 40 }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 3 + i * 0.5, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 0.3
            }}
          >
            <motion.div
              className="absolute rounded-full bg-white"
              style={{
                width: 6 - i,
                height: 6 - i,
                top: 0,
                left: '50%',
                marginLeft: -(3 - i/2),
              }}
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity
              }}
            />
            {/* Tail dots */}
            {[...Array(4)].map((_, j) => (
              <motion.div
                key={j}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.max(1, 4 - i - j),
                  height: Math.max(1, 4 - i - j),
                  top: 2,
                  left: `calc(50% + ${8 + j * 6}px)`,
                  opacity: 0.4 - j * 0.1
                }}
              />
            ))}
          </motion.div>
        ))}

        {/* Pulsing core ring */}
        <motion.div
          className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full border border-white/20"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ 
            scale: phase === 'pause' ? 0 : showOrbit ? [1, 1.1, 1] : 1,
            opacity: phase === 'pause' || showLogo ? 0 : [0.2, 0.4, 0.2]
          }}
          transition={{ 
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Inner spinning particles - clean */}
        {showOrbit && (
          <motion.div
            className="absolute w-36 h-36 md:w-44 md:h-44"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(6)].map((_, i) => {
              const angle = (i / 6) * 360;
              return (
                <motion.div
                  key={`inner-${i}`}
                  className="absolute w-1.5 h-1.5 rounded-full bg-white"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-3px',
                    marginTop: '-3px',
                    transform: `rotate(${angle}deg) translateX(70px)`,
                  }}
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15
                  }}
                />
              );
            })}
          </motion.div>
        )}

        {/* Stardust particles - clean */}
        {showOrbit && [...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const baseRadius = 60;
          return (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, Math.cos(angle) * baseRadius, Math.cos(angle) * (baseRadius + 40), 0],
                y: [0, Math.sin(angle) * baseRadius, Math.sin(angle) * (baseRadius + 40), 0],
                opacity: [0, 0.8, 0.3, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          );
        })}

        {/* Center glow - subtle */}
        <motion.div
          className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          }}
          animate={{ 
            scale: phase === 'pause' ? 0 : showOrbit ? [1, 1.3, 1] : 1,
            opacity: phase === 'pause' || showLogo ? 0 : 1
          }}
          transition={{ 
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
        />

        {/* MFA Logo */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ 
            opacity: showLogo ? 1 : 0,
            scale: showLogo ? 1 : 0.3
          }}
          transition={{ 
            duration: 1, 
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.img 
            src={logoImage} 
            alt="MFA" 
            className="w-[270px] h-auto md:w-[320px]"
            data-testid="loading-logo"
            animate={showLogo ? {
              opacity: [0.9, 1, 0.9]
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="absolute bottom-16 md:bottom-20"
          animate={{ 
            opacity: showOrbit ? [0.3, 0.6, 0.3] : 0
          }}
          transition={{ 
            opacity: showOrbit 
              ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.3 }
          }}
        >
          <span className="text-white/50 text-xs tracking-[0.4em] uppercase font-light">
            Loading
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default LoadingScreen;
