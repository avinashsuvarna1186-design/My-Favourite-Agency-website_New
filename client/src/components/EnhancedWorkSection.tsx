import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollAnimatedWrapper from "./ScrollAnimatedWrapper";
import enlightenedLogo from "@assets/Enlightened_connections_Final_logo_1767169840894.png";
import guidePage1 from "@assets/EC_Guide_Book_Page_1_1767173414598.jpg";
import guidePage2 from "@assets/EC_Guide_Book_Page_2_1767173414599.jpg";
import guidePage3 from "@assets/EC_Guide_Book_Page_3_1767173414599.jpg";
import guidePage4 from "@assets/EC_Guide_Book_Page_4_1767173414600.jpg";
import guidePage7 from "@assets/EC_Guide_Book_Page_7_1767173414600.jpg";
import guidePage8 from "@assets/EC_Guide_Book_Page_8_1767173414601.jpg";
import guidePage9 from "@assets/EC_Guide_Book_page_9_1767173414601.jpg";
import guidePage10 from "@assets/EC_Guide_Book_Page_10_1767173414602.jpg";
import guidePage15 from "@assets/EC_Guide_Book_Page_15_1767173414602.jpg";
import guidePage20 from "@assets/EC_Guide_Book_Page_20_1767173414602.jpg";
import guidePage21 from "@assets/EC_Guide_Book_Page_21_1767173414602.jpg";
import cardMockup from "@assets/Card-Mockup_1767175630227.jpg";
import capMockup from "@assets/Free_Cap_Mockup_1767175630228.jpg";
import tshirtMockup from "@assets/Front-Back-T-shirt-Mockup_1767175630229.jpg";
import magazineMockup from "@assets/Magazine_Mockup_1767175630230.jpg";
import ticketMockup from "@assets/Ticket_1767175630230.jpg";
import visitingCardMockup from "@assets/Vistng-card_1767175630231.jpg";
import vglLogo from "@assets/VGL_final_logo-01_1767192141176.png";
import vglBuildingMockup from "@assets/VGL_MOck-up_1767192141183.jpg";
import teeMockup from "@assets/generated_images/tee_steel_brand_mockup.png";
import mindspaMockup from "@assets/generated_images/mindspa_wellness_brand_mockup.png";
import { Badge } from "@/components/ui/badge";
import SwissGrid from "./SwissGrid";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Project {
  title: string;
  client: string;
  services: string[];
  description: string;
  image: string;
  gallery?: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export default function EnhancedWorkSection() {
  const headerAnimation = useScrollAnimation("fade-in");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const enlightenedGallery = [
    enlightenedLogo,
    visitingCardMockup,
    tshirtMockup,
    capMockup,
    ticketMockup,
    cardMockup,
    magazineMockup,
    guidePage1,
    guidePage2,
    guidePage3,
    guidePage4,
    guidePage7,
    guidePage8,
    guidePage9,
    guidePage10,
    guidePage15,
    guidePage20,
    guidePage21,
  ];

  const projects: Project[] = [
    {
      title: "Complete Brand Identity",
      client: "Enlightened Connections",
      services: ["Logo Design", "Stationery", "Guidebook"],
      description: "Crafted a complete brand identity for a purposeful travel company offering immersive Morocco experiences, blending adventure with cultural connection and community impact.",
      image: guidePage1,
      gallery: enlightenedGallery,
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
      image: vglBuildingMockup,
      gallery: [vglLogo, vglBuildingMockup],
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

  const openLightbox = (images: string[], startIndex: number) => {
    setLightboxImages(images);
    setCurrentImageIndex(startIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  return (
    <>
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
                    {/* Main Image */}
                    <div 
                      className="aspect-video overflow-hidden bg-muted cursor-pointer relative group"
                      onClick={() => project.gallery ? openLightbox(project.gallery, 0) : openLightbox([project.image], 0)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {project.gallery && project.gallery.length > 1 && (
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                          +{project.gallery.length - 1} more
                        </div>
                      )}
                    </div>

                    {/* Gallery Thumbnails for Enlightened Connections */}
                    {project.gallery && project.gallery.length > 1 && (
                      <div className="flex gap-2 p-3 overflow-x-auto bg-muted/30">
                        {project.gallery.slice(0, 6).map((img, idx) => (
                          <div
                            key={idx}
                            className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary transition-colors"
                            onClick={() => openLightbox(project.gallery!, idx)}
                          >
                            <img
                              src={img}
                              alt={`${project.title} ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        {project.gallery.length > 6 && (
                          <div
                            className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden cursor-pointer bg-primary/20 flex items-center justify-center text-primary text-sm font-medium"
                            onClick={() => openLightbox(project.gallery!, 6)}
                          >
                            +{project.gallery.length - 6}
                          </div>
                        )}
                      </div>
                    )}

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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 backdrop-blur-sm transition-colors z-10"
            data-testid="button-lightbox-close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          {lightboxImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 backdrop-blur-sm transition-colors z-10"
              data-testid="button-lightbox-prev"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Image */}
          <div 
            className="max-w-4xl max-h-[85vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImages[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Next Button */}
          {lightboxImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 backdrop-blur-sm transition-colors z-10"
              data-testid="button-lightbox-next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          {/* Image Counter */}
          {lightboxImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {lightboxImages.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
