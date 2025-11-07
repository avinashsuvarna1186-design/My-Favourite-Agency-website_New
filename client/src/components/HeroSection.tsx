import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 opacity-80" style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(255, 0, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 30% 80%, rgba(0, 255, 157, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 90% 50%, rgba(255, 255, 0, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)
          `
        }} />
        <div className="absolute inset-0" style={{
          background: `
            linear-gradient(to bottom right, transparent 0%, rgba(0, 255, 255, 0.1) 25%, transparent 50%, rgba(255, 0, 255, 0.1) 75%, transparent 100%)
          `,
          animation: 'gradientFlow 15s ease infinite',
        }} />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60 z-10" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight drop-shadow-lg" data-testid="text-hero-headline">
          Scroll down. Things are about to get good.
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 font-medium drop-shadow-md" data-testid="text-hero-subtext">
          We are MFA — strategy-first, design-obsessed and anti-mediocrity.
        </p>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce hover-elevate active-elevate-2 rounded-full p-3"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
      
      <style>{`
        @keyframes gradientFlow {
          0%, 100% {
            opacity: 0.6;
            transform: rotate(0deg) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: rotate(5deg) scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
