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
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight drop-shadow-2xl" data-testid="text-hero-headline">
          Scroll down. Things are about to get good.
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 font-medium drop-shadow-lg" data-testid="text-hero-subtext">
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
    </section>
  );
}
