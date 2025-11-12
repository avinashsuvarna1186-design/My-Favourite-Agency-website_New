import { createContext, useContext, useEffect, useState, useRef, ReactNode } from 'react';

interface ParallaxState {
  scrollY: number;
  progress: number;
  reducedMotion: boolean;
}

const ParallaxContext = createContext<ParallaxState | undefined>(undefined);

export function useParallaxContext() {
  const context = useContext(ParallaxContext);
  if (context === undefined) {
    throw new Error('useParallaxContext must be used within a ParallaxProvider');
  }
  return context;
}

export function ParallaxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ParallaxState>({
    scrollY: 0,
    progress: 0,
    reducedMotion: false,
  });
  const rafRef = useRef<number>();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setState(prev => ({ ...prev, reducedMotion: true }));
      return;
    }

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? scrollY / documentHeight : 0;

      setState({
        scrollY,
        progress,
        reducedMotion: false,
      });
    };

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <ParallaxContext.Provider value={state}>
      {children}
    </ParallaxContext.Provider>
  );
}
