export default function SwissGrid() {
  return (
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
      {/* Vertical grid lines - Fixed spacing using viewport width */}
      {[...Array(13)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-white"
          style={{ left: `${i * 8.333}vw` }}
        />
      ))}
      
      {/* Horizontal grid lines - Fixed spacing using viewport height to maintain square proportions */}
      {[...Array(Math.ceil(100 / 8.333) + 1)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-white"
          style={{ top: `${i * 8.333}vh` }}
        />
      ))}
    </div>
  );
}
