import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const headerAnimation = useScrollAnimation("fade-in");
  const taglineAnimation = useScrollAnimation("scale-in", { delay: 100 });

  return (
    <section id="about" className="py-24 px-4 relative" data-testid="section-about">
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerAnimation.ref} className={`text-center mb-12 ${headerAnimation.className}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase" data-testid="text-about-heading">
            Who We Are
          </h2>
        </div>

        <div ref={taglineAnimation.ref} className={`${taglineAnimation.className}`}>
          <p className="text-2xl md:text-3xl text-foreground text-center font-semibold leading-relaxed" data-testid="text-tagline">
            We are MFA — <span className="text-primary font-bold">strategy-first</span>, <span className="text-primary font-bold">design-obsessed</span> and <span className="text-primary font-bold">anti-mediocrity</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
