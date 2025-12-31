import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollAnimatedWrapper from "./ScrollAnimatedWrapper";
import work1 from "@assets/generated_images/Packaging_and_Identity_work_c57574ad.png";
import work2 from "@assets/generated_images/Website_and_Launch_work_5d61a7ac.png";
import work3 from "@assets/generated_images/Campaign_and_Motion_work_06e62a4b.png";
import work4 from "@assets/generated_images/Identity_and_Copy_work_1002e25b.png";
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
      title: "Complete Brand Transformation",
      client: "Premium Lifestyle Brand",
      services: ["Brand Strategy", "Visual Identity", "Packaging Design"],
      description: "A complete brand overhaul from positioning to packaging, creating a cohesive identity that resonates with modern consumers.",
      image: work1,
      stats: [
        { label: "Brand Recognition", value: "+185%" },
        { label: "Market Position", value: "Top 3" },
      ],
    },
    {
      title: "Digital Experience Reimagined",
      client: "Tech Startup",
      services: ["Website Design", "UX/UI", "Motion Design"],
      description: "A dark, sophisticated website that showcases innovation while maintaining exceptional usability and conversion optimization.",
      image: work2,
      stats: [
        { label: "Conversion Rate", value: "+240%" },
        { label: "User Engagement", value: "+320%" },
      ],
    },
    {
      title: "Launch Campaign",
      client: "Consumer Electronics",
      services: ["Campaign Strategy", "Motion Graphics", "Social Media"],
      description: "Bold, attention-grabbing campaign that cut through the noise and established market presence from day one.",
      image: work3,
      stats: [
        { label: "Social Reach", value: "2M+" },
        { label: "Engagement Rate", value: "8.5%" },
      ],
    },
    {
      title: "Identity & Positioning",
      client: "Boutique Hotel Group",
      services: ["Brand Identity", "Copywriting", "Print Collateral"],
      description: "Elegant brand system that communicates luxury and authenticity across all touchpoints, from signage to stationery.",
      image: work4,
      stats: [
        { label: "Brand Perception", value: "+210%" },
        { label: "Booking Inquiries", value: "+175%" },
      ],
    },
  ];

  return (
    <section id="work" className="py-32 px-4 relative hidden" data-testid="section-enhanced-work">
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
