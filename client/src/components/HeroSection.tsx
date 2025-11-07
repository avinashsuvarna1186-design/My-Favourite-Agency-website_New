import { ChevronDown } from "lucide-react";
import heroBackground from "@assets/generated_images/Hero_banner_background_ec40bff9.png";

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
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80 z-10" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight" data-testid="text-hero-headline">
          Scroll down. Things are about to get good.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium" data-testid="text-hero-subtext">
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
