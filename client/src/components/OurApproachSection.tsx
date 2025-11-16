import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function OurApproachSection() {
  const animation = useScrollAnimation("scale-in", { delay: 100 });

  return (
    <section className="py-16 px-4 relative" data-testid="section-our-approach">
      <div className="max-w-5xl mx-auto relative z-10">
        <div ref={animation.ref} className={animation.className}>
          <Card className="backdrop-blur-md bg-card/60 border-white/10 opacity-60 hover-elevate overflow-visible" data-testid="card-our-approach">
            <CardContent className="p-10 md:p-16">
              <p className="text-2xl md:text-3xl text-foreground text-center font-medium leading-relaxed">
                Most agencies wait for the brief. We <span className="text-primary font-bold">BUILD the brief</span> with you. 
                Because a successful strategy is only half the magic — the other half is <span className="text-primary font-bold">killer design</span> that actually speaks.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
