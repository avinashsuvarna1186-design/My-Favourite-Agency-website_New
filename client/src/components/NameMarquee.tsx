interface NameMarqueeProps {
  names: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function NameMarquee({ names, direction = "left", speed = 18 }: NameMarqueeProps) {
  const duplicatedNames = [...names, ...names, ...names];
  
  return (
    <div className="overflow-hidden py-4 bg-background/50">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {duplicatedNames.map((name, index) => (
          <span
            key={index}
            className="inline-block px-6 text-sm md:text-base font-medium lowercase"
            style={{ color: '#ff6d00' }}
          >
            {name}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
