import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, Clock } from "lucide-react";
import SwissGrid from "./SwissGrid";

export default function HowWeWorkSection() {
  const workPoints = [
    {
      icon: Users,
      title: "Direct designer → client",
      description: "No middlemen. No lost messages. Real-time sketches, real talk.",
    },
    {
      icon: MessageSquare,
      title: "Feedback is sacred",
      description: "We marinate in feedback and use it to make work better (not slower).",
    },
    {
      icon: Clock,
      title: "Transparent updates",
      description: "You'll always know what's cooking — sneak peeks, honest opinions and more chai.",
    },
  ];

  return (
    <section className="py-24 px-4 relative" data-testid="section-how-we-work">
      <SwissGrid />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Swiss Typography */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-6">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-[1.2] tracking-tight">
            How we work our magic.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="hover-elevate active-elevate-2 card-flip opacity-50" data-testid={`card-work-point-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="bg-icon-surface w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
