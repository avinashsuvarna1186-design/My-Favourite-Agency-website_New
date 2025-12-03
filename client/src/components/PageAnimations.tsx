interface FloatingParticlesProps {
  count?: number;
  color?: "coral" | "purple" | "mixed";
}

export function FloatingParticles({ count = 12, color = "mixed" }: FloatingParticlesProps) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(count)].map((_, i) => {
        const particleColor = color === "mixed" 
          ? (i % 2 === 0 ? "bg-coral-400/40" : "bg-purple-400/40")
          : color === "coral" ? "bg-coral-400/40" : "bg-purple-400/40";
        return (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 ${particleColor} rounded-full`}
            style={{
              left: `${5 + (i * (90 / count))}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animation: `float-particle ${3 + (i % 3)}s ease-in-out infinite ${i * 0.3}s`,
            }}
          />
        );
      })}
    </div>
  );
}

interface GlowOrbsProps {
  scrollY?: number;
}

export function GlowOrbs({ scrollY = 0 }: GlowOrbsProps) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div 
        className="absolute top-20 left-10 w-64 h-64 bg-coral-500/20 rounded-full blur-3xl"
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)`,
          animation: 'pulse-glow 4s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
        style={{ 
          transform: `translateY(${scrollY * -0.1}px)`,
          animation: 'pulse-glow 4s ease-in-out infinite 1s'
        }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-coral-500/10 rounded-full blur-3xl"
        style={{ 
          transform: `translateY(${scrollY * 0.15}px)`,
          animation: 'pulse-glow 5s ease-in-out infinite 2s'
        }}
      />
      <div 
        className="absolute bottom-10 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        style={{ 
          transform: `translateY(${scrollY * -0.12}px)`,
          animation: 'pulse-glow 4.5s ease-in-out infinite 0.5s'
        }}
      />
    </div>
  );
}

export function SectionParticles({ count = 8, color = "coral" }: FloatingParticlesProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => {
        const particleColor = color === "mixed" 
          ? (i % 2 === 0 ? "bg-coral-400/30" : "bg-purple-400/30")
          : color === "coral" ? "bg-coral-400/30" : "bg-purple-400/30";
        return (
          <div
            key={i}
            className={`absolute w-1 h-1 ${particleColor} rounded-full`}
            style={{
              left: `${10 + (i * (80 / count))}%`,
              top: `${30 + Math.cos(i) * 25}%`,
              animation: `float-particle ${2.5 + (i % 2)}s ease-in-out infinite ${i * 0.4}s`,
            }}
          />
        );
      })}
    </div>
  );
}

interface ShimmerCardProps {
  children: React.ReactNode;
  className?: string;
}

export function ShimmerCard({ children, className = "" }: ShimmerCardProps) {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ animation: 'shimmer-sweep 2s ease-in-out infinite' }}
      />
      {children}
    </div>
  );
}

export function AnimatedGradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`shimmer-text-hero ${className}`}>
      {children}
    </span>
  );
}
