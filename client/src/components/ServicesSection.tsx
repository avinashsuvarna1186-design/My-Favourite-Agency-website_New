import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Palette, Megaphone, Package, Video, PenTool } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollAnimatedWrapper from "./ScrollAnimatedWrapper";

interface Service {
  title: string;
  description: string;
  icon: typeof Palette;
  deliverables: string[];
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const headerAnimation = useScrollAnimation("fade-in");

  const services: Service[] = [
    {
      title: "Brand & Visual Identity",
      description: "Look & vibe that makes competitors question their choices.",
      icon: Palette,
      deliverables: ["Strategy brief", "Logo & visual system", "Brand guidelines", "Rollout templates"],
    },
    {
      title: "Marketing & Communication",
      description: "Socials, pitch decks and presentations that pop.",
      icon: Megaphone,
      deliverables: ["Social media strategy", "Content calendar", "Pitch deck design", "Marketing collateral"],
    },
    {
      title: "Packaging & Print",
      description: "Packaging so good people keep the box in their vault.",
      icon: Package,
      deliverables: ["Package design concepts", "Print-ready files", "Material specifications", "Production support"],
    },
    {
      title: "Audio & Visual Production",
      description: "From reels to radio — we make brands look and sound great.",
      icon: Video,
      deliverables: ["Video production", "Motion graphics", "Audio branding", "Social media content"],
    },
    {
      title: "Content & Copywriting",
      description: "Scroll-stopping, clever copy that actually says something.",
      icon: PenTool,
      deliverables: ["Brand messaging", "Website copy", "Social media content", "Campaign scripts"],
    },
  ];

  return (
    <>
      <section id="services" className="py-24 px-4" data-testid="section-services">
        <div className="max-w-6xl mx-auto">
          <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.className}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground uppercase">Glow-up Kit</h2>
            <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
              Whether it's a 360 degree makeover or the hunt for a killer outfit, we've got the tools, the taste and the team. From brand identity to copy, pixels to packaging, we are your brand's personal glow-up squad. You get to pick what you need or choose to go full glow-up — you walk out looking and sounding (brand tone) your best self.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollAnimatedWrapper key={index} animationType="scale-in" delay={index * 100}>
                  <Card
                    className="group cursor-pointer hover-elevate active-elevate-2 transition-all h-full"
                    onClick={() => setSelectedService(service)}
                    data-testid={`card-service-${index}`}
                  >
                    <CardContent className="p-6">
                      <div className="bg-primary/10 w-12 h-12 rounded-md flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="w-6 h-6 text-primary transition-all duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimatedWrapper>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl" data-testid="modal-service-details">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <div className="bg-primary/10 w-10 h-10 rounded-md flex items-center justify-center">
                    <selectedService.icon className="w-5 h-5 text-primary" />
                  </div>
                  {selectedService.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <p className="text-lg text-muted-foreground">{selectedService.description}</p>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Deliverables:</h4>
                  <ul className="space-y-2">
                    {selectedService.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground italic pt-4 border-t border-border">
                  Strategy brief, visuals, rollout templates, hand-off package included.
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
