import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
      <section id="services" className="py-32 px-4" data-testid="section-services">
        <div className="max-w-6xl mx-auto">
          <div ref={headerAnimation.ref} className={`mb-20 ${headerAnimation.className}`}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 uppercase spaced-text-lg gradient-wave-text">
              Your Brand's Glow-up Kit
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-5xl leading-relaxed">
              Whether it's a 360 degree makeover or the hunt for a killer outfit, we've got the tools, the taste and the team. From brand identity to copy, pixels to packaging, we are your brand's personal glow-up squad. You get to pick what you need or choose to go full glow-up — you walk out looking and sounding (brand tone) your best self.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto pb-16"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <ScrollAnimatedWrapper animationType="scale-in" delay={index * 100}>
                      <Card
                        className="service-card cursor-pointer hover-elevate active-elevate-2 transition-all h-full shadow-none"
                        onClick={() => setSelectedService(service)}
                        data-testid={`card-service-${index}`}
                      >
                        <CardContent className="p-6">
                          <div className="service-icon-wrapper bg-primary/10 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </Card>
                    </ScrollAnimatedWrapper>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Navigation arrows at bottom */}
            <div className="absolute bottom-0 right-0 flex gap-2">
              <CarouselPrevious className="static translate-y-0" data-testid="button-carousel-prev" />
              <CarouselNext className="static translate-y-0" data-testid="button-carousel-next" />
            </div>
          </Carousel>
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
                <DialogDescription>
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
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
