import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/image_1764777498581.png";

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'loading' | 'pause' | 'logo' | 'fading' | 'done'>('loading');
  const hasCompleted = useRef(false);

  // Phase 1: Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('pause');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Phase 2: Pause - rings collapse/fade
  useEffect(() => {
    if (phase === 'pause') {
      const timer = setTimeout(() => {
        setPhase('logo');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Phase 3: Logo reveal
  useEffect(() => {
    if (phase === 'logo') {
      const timer = setTimeout(() => {
        setPhase('fading');
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Phase 4: Fade out
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
        {/* Outer rotating ring with gradient */}
        <motion.div
          className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent)"
          }}
          initial={{ rotate: 0, scale: 1, opacity: 1 }}
          animate={{ 
            rotate: showOrbit ? 360 : 0,
            scale: phase === 'pause' ? 0 : 1,
            opacity: phase === 'pause' || showLogo ? 0 : 1
          }}
          transition={{ 
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.6, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
        />

        {/* Middle ring - counter rotation */}
        <motion.div
          className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-white/25"
          initial={{ rotate: 0, scale: 1, opacity: 1 }}
          animate={{ 
            rotate: showOrbit ? -360 : 0,
            scale: phase === 'pause' ? 0 : 1,
            opacity: phase === 'pause' || showLogo ? 0 : 1
          }}
          transition={{ 
            rotate: { duration: 6, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.5, ease: "easeInOut" },
            opacity: { duration: 0.4 }
          }}
        />

        {/* Inner pulsing ring */}
        <motion.div
          className="absolute w-40 h-40 md:w-52 md:h-52 rounded-full border-2 border-white/40"
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ 
            scale: phase === 'pause' ? 0 : showOrbit ? [1, 1.08, 1] : 1,
            opacity: phase === 'pause' || showLogo ? 0 : showOrbit ? [0.4, 0.7, 0.4] : 0.4
          }}
          transition={{ 
            scale: showOrbit 
              ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.4 }
          }}
        />

        {/* Orbiting planets - 3 different sizes at different distances */}
        {showOrbit && [
          { size: 4, distance: 140, duration: 3, delay: 0, color: "bg-white" },
          { size: 3, distance: 110, duration: 2.5, delay: 0.5, color: "bg-white/80" },
          { size: 2, distance: 85, duration: 2, delay: 1, color: "bg-white/60" },
          { size: 5, distance: 160, duration: 4, delay: 0.3, color: "bg-white" },
          { size: 2, distance: 130, duration: 3.5, delay: 0.8, color: "bg-white/70" },
        ].map((planet, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ width: planet.distance * 2, height: planet.distance * 2 }}
            initial={{ rotate: planet.delay * 360 }}
            animate={{ 
              rotate: 360 + planet.delay * 360,
              scale: 1,
              opacity: 1
            }}
            transition={{
              rotate: { duration: planet.duration, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.3, ease: "easeOut" },
              opacity: { duration: 0.3 }
            }}
          >
            {/* The orbiting dot */}
            <motion.div
              className={`absolute rounded-full ${planet.color}`}
              style={{
                width: planet.size * 2,
                height: planet.size * 2,
                top: 0,
                left: '50%',
                marginLeft: -planet.size,
                boxShadow: "0 0 10px rgba(255,255,255,0.5)"
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
            {/* Trail effect */}
            <motion.div
              className="absolute rounded-full bg-white/20"
              style={{
                width: planet.size,
                height: planet.size,
                top: 4,
                left: '50%',
                marginLeft: -planet.size / 2 + 8,
              }}
            />
          </motion.div>
        ))}

        {/* Stardust particles */}
        {showOrbit && [...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 80 + Math.random() * 60;
          return (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 rounded-full bg-white/50"
              style={{
                left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Center glow */}
        <motion.div
          className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
            boxShadow: "0 0 60px rgba(255,255,255,0.1)"
          }}
          animate={{ 
            scale: phase === 'pause' ? 0 : showOrbit ? [1, 1.2, 1] : 1,
            opacity: phase === 'pause' || showLogo ? 0 : 1
          }}
          transition={{ 
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.4 }
          }}
        />

        {/* MFA Logo - appears after pause */}
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
            className="w-56 h-auto md:w-72"
            data-testid="loading-logo"
            animate={showLogo ? {
              filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
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
            opacity: showOrbit ? [0.3, 0.7, 0.3] : 0
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
