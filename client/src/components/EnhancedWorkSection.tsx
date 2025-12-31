import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollAnimatedWrapper from "./ScrollAnimatedWrapper";
import enlightenedMockup from "@assets/Enlightened_connections_Final_logo_1767169840894.png";
import teeMockup from "@assets/generated_images/tee_steel_brand_mockup.png";
import vglMockup from "@assets/generated_images/vgl_event_branding_mockup.png";
import mindspaMockup from "@assets/generated_images/mindspa_wellness_brand_mockup.png";
import { Badge } from "@/components/ui/badge";
import SwissGrid from "./SwissGrid";

interface Project {
  title: string;
  client: string;
  services: string[];
  description: string;
  image: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export default function EnhancedWorkSection() {
  const headerAnimation = useScrollAnimation("fade-in");

  const projects: Project[] = [
    {
      title: "Complete Brand Identity",
      client: "Enlightened Connections",
      services: ["Logo Design", "Stationery", "Guidebook"],
      description: "Crafted a complete brand identity for a purposeful travel company offering immersive Morocco experiences, blending adventure with cultural connection and community impact.",
      image: enlightenedMockup,
      stats: [
        { label: "Business Growth", value: "+100%" },
        { label: "Brand Recognition", value: "Top Tier" },
      ],
    },
    {
      title: "Brand Identity",
      client: "Tee",
      services: ["Logo Design"],
      description: "Developed a bold, industrial brand identity for a steel sheet manufacturing business, reflecting strength, precision, and reliability.",
      image: teeMockup,
      stats: [
        { label: "Business Growth", value: "+100%" },
        { label: "Market Position", value: "Industry Leader" },
      ],
    },
    {
      title: "Complete Event Project",
      client: "VGL",
      services: ["Logo Design"],
      description: "Created comprehensive event branding for a steel business, delivering impactful visual identity across all event touchpoints.",
      image: vglMockup,
      stats: [
        { label: "Growth Achieved", value: "+100%" },
        { label: "Event Impact", value: "High" },
      ],
    },
    {
      title: "Mind Wellness",
      client: "Mindspa with Manisha",
      services: ["Logo Design"],
      description: "Designed a serene and calming brand identity for a Reiki and therapy wellness center, evoking peace, healing, and mindfulness.",
      image: mindspaMockup,
      stats: [
        { label: "Business Growth", value: "+100%" },
        { label: "Client Trust", value: "Exceptional" },
      ],
    },
  ];

  return (
    <section id="work" className="py-32 px-4 relative" data-testid="section-enhanced-work">
      <SwissGrid />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Swiss Typography */}
        <div ref={headerAnimation.ref} className={`text-center mb-20 ${headerAnimation.className}`}>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-6">
            Our Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-tight gradient-flow-text leading-[1.2]">
            Real Brands. Real Impact.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-[1.6] font-normal">
            We don't just create pretty visuals. We build brands that move markets, change perceptions, and drive results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const animationType = index % 2 === 0 ? "slide-left" : "slide-right";
            return (
              <ScrollAnimatedWrapper key={index} animationType={animationType} delay={index * 100}>
                <Card
                  className="overflow-hidden hover-elevate active-elevate-2 transition-all h-full"
                  data-testid={`card-enhanced-work-${index}`}
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      </div>
                      <p className="text-sm font-medium text-primary mb-3">{project.client}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.services.map((service, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {project.stats && (
                      <div className="border-t border-border pt-4">
                        <div className="grid grid-cols-2 gap-4">
                          {project.stats.map((stat, idx) => (
                            <div key={idx}>
                              <div className="text-2xl font-bold text-primary">{stat.value}</div>
                              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </ScrollAnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
