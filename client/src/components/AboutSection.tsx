import { Card, CardContent } from "@/components/ui/card";
import { Target, Compass } from "lucide-react";

export default function AboutSection() {
  const team = [
    {
      name: "Prattyush Nag",
      role: "Founder & Brand Architect",
      tagline: "Gives your brand a soul (and swagger).",
    },
    {
      name: "Avinash Suvarna",
      role: "Founder & Design Architect",
      tagline: "Makes the magic happen.",
    },
    {
      name: "Sajjad Jafri",
      role: "Website Designer Visualizer",
      tagline: "Builds sexy websites fast.",
    },
    {
      name: "Juie Merchant",
      role: "Content & Copy Lead",
      tagline: "Voice behind the brand.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative" data-testid="section-about">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-about-heading">
            Who TF are we?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtext">
            Most agencies wait for the brief. We BUILD the brief with you. Because a successful strategy is only half
            the magic — the other half is killer design that actually speaks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Card className="hover-elevate active-elevate-2" data-testid="card-vision">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Vision</h3>
                  <p className="text-muted-foreground">
                    To be the agency that feels less like a vendor and more like your in-house superpower.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate active-elevate-2" data-testid="card-mission">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Mission</h3>
                  <p className="text-muted-foreground">
                    To solve problems creatively and consistently — design + strategy that actually moves the needle.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-4 text-foreground text-center">Brand Story</h3>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto" data-testid="text-brand-story">
            We flipped the script. Somewhere between a career crisis and a caffeine high, My Favourite Agency was born
            — with rebellion in our blood and design at our core.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-foreground text-center">Meet the Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover-elevate active-elevate-2" data-testid={`card-team-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-1 text-foreground">{member.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground italic">"{member.tagline}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
