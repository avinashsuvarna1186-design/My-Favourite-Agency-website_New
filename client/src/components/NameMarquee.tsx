interface NameMarqueeProps {
  names: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function NameMarquee({ names, direction = "left", speed = 14.04 }: NameMarqueeProps) {
  const duplicatedNames = [...names, ...names, ...names];
  
  return (
    <div className="overflow-hidden py-2.5 flex items-center justify-center">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {duplicatedNames.map((name, index) => (
          <span
            key={index}
            className="inline-block px-6 text-xl md:text-2xl font-bold lowercase"
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
