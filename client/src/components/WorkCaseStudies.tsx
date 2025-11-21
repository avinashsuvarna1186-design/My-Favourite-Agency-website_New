import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SwissGrid from "./SwissGrid";
import logoStructure from "@assets/Artboard 11@3x_1763649557544.png";
import lollipopSignage from "@assets/Artboard 15@3x_1763649557545.png";
import buildingWall from "@assets/Artboard 16@3x_1763649557546.png";
import receptionArea from "@assets/Artboard 17@3x_1763649557546.png";
import receptionArea1 from "@assets/Reception_Area_1763661363746.png";
import receptionArea2 from "@assets/Reception_Area_2_1763661363745.png";
import passageWall from "@assets/Artboard 18@3x_1763649557546.png";
import roadBanner from "@assets/Artboard 19@3x_1763649557547.png";
import stationary from "@assets/Artboard 20@3x_1763649557547.png";
import businessCard from "@assets/Artboard 21@3x_1763649557547.png";
import brochure from "@assets/Artboard 22@3x_1763649557547.png";
import folder from "@assets/Artboard 23@3x_1763649557548.png";
import testimonialWall from "@assets/Artboard 24@3x_1763649557548.png";

import dreamlikeVisualIdentity from "@assets/Artboard 4@3x_1763714125561.png";
import dreamlikeLogoExplanation from "@assets/Artboard 5@3x_1763714125561.png";
import dreamlikeVisualRepresentation from "@assets/Artboard 6@3x_1763714125561.png";
import dreamlikeStorefront from "@assets/Artboard 7@3x_1763714125561.png";
import dreamlikeSignage from "@assets/Artboard 8@3x_1763714125562.png";
import dreamlikeBag from "@assets/Artboard 9@3x_1763714125562.png";
import dreamlikeMug from "@assets/Artboard 10@3x_1763714125562.png";
import dreamlikeStationery from "@assets/Artboard 11@3x_1763714125563.png";
import dreamlikeDoorHanger from "@assets/Artboard 12@3x_1763714125563.png";
import dreamlikeTag from "@assets/Artboard 13@3x_1763714125563.png";
import dreamlikeSubBrands from "@assets/Artboard 14@3x_1763714125563.png";
import dreamlikeBrandPattern from "@assets/Artboard 15@3x_1763714217692.png";

interface CaseStudyChallenge {
  title: string;
  description: string;
}

interface CaseStudyApproach {
  title: string;
  description: string;
}

interface CaseStudyImage {
  src: string;
  alt: string;
  testId: string;
}

interface CaseStudyData {
  id: string;
  client: string;
  tagline: string;
  overview: {
    clientName: string;
    clientRole: string;
    service: string;
    impact: string;
  };
  challenges: CaseStudyChallenge[];
  approach: CaseStudyApproach[];
  visualDeliverables?: {
    foundation?: CaseStudyImage[];
    environmental?: CaseStudyImage[];
    print?: CaseStudyImage[];
  };
  results: {
    metrics: {
      value: string;
      label: string;
      color?: string;
    }[];
    description: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

const caseStudies: CaseStudyData[] = [
  {
    id: "dr-lalit-rajpal",
    client: "Dr. Lalit Rajpal Aesthetics",
    tagline: "Transforming a medical practice into a premium aesthetic brand",
    overview: {
      clientName: "Dr. Lalit Rajpal",
      clientRole: "Founder, Dr Lalit Rajpal Aesthetics",
      service: "Complete Brand Identity",
      impact: "70% Client Conversion Increase",
    },
    challenges: [
      {
        title: "Poor Visual Design",
        description:
          "The existing brand lacked professional design standards, failing to convey the premium nature of aesthetic services.",
      },
      {
        title: "Zero Brand Recognition",
        description:
          "No established brand identity in a competitive aesthetic medicine market.",
      },
      {
        title: "Low Client Conversion",
        description:
          "Prospective clients weren't connecting with the brand, resulting in lost business opportunities.",
      },
    ],
    approach: [
      {
        title: "Deep Discovery",
        description:
          "One-to-one consultation calls to understand Dr. Rajpal's vision, values, and unique positioning in the aesthetic medicine field.",
      },
      {
        title: "Strategic Onboarding",
        description:
          "Comprehensive onboarding process to align expectations and establish clear brand objectives.",
      },
      {
        title: "Market Research",
        description:
          "In-depth competitive analysis and market positioning to identify the perfect niche within aesthetic medicine.",
      },
      {
        title: "Complete Rebranding",
        description:
          "Transformed the entire look and feel—logo design, color palette, typography, and visual language that reflects premium aesthetic services.",
      },
      {
        title: "Design Strategy",
        description:
          "Applied proven design principles and strategic thinking to create a logical, thoughtful brand identity.",
      },
      {
        title: "Continuous Review",
        description:
          "Regular review calls ensuring fast delivery without compromising quality, keeping the client involved throughout.",
      },
    ],
    visualDeliverables: {
      foundation: [
        {
          src: logoStructure,
          alt: "Logo Structure and Design Grid",
          testId: "card-logo-structure",
        },
      ],
      environmental: [
        {
          src: lollipopSignage,
          alt: "Lollipop Signage Design",
          testId: "card-lollipop-signage",
        },
        {
          src: buildingWall,
          alt: "Building Wall Signage",
          testId: "card-building-wall",
        },
        {
          src: receptionArea,
          alt: "Reception Area Branding",
          testId: "card-reception-area",
        },
        {
          src: receptionArea1,
          alt: "Reception Area with Certificate Wall Display",
          testId: "card-reception-area-1",
        },
        {
          src: receptionArea2,
          alt: "Reception Desk with Waiting Area",
          testId: "card-reception-area-2",
        },
        {
          src: passageWall,
          alt: "Passage Wall with Neon Signage",
          testId: "card-passage-wall",
        },
        {
          src: roadBanner,
          alt: "Road Banner Design",
          testId: "card-road-banner",
        },
        {
          src: testimonialWall,
          alt: "Testimonial Wall Design",
          testId: "card-testimonial-wall",
        },
      ],
      print: [
        {
          src: stationary,
          alt: "Complete Stationery Set - Letterhead, Website, Business Cards",
          testId: "card-stationary",
        },
        {
          src: businessCard,
          alt: "Business Card Design",
          testId: "card-business-card",
        },
        {
          src: brochure,
          alt: "Brochure Design",
          testId: "card-brochure",
        },
        {
          src: folder,
          alt: "Folder Design",
          testId: "card-folder",
        },
      ],
    },
    results: {
      metrics: [
        { value: "70%", label: "Increase in Client Conversion", color: "gradient" },
        { value: "100%", label: "Premium Brand Recognition", color: "coral" },
        { value: "∞", label: "Enhanced Market Positioning", color: "purple" },
      ],
      description:
        "The new brand identity perfectly reflects the nature of Dr. Rajpal's work, establishing his practice as a premium aesthetic medicine destination and dramatically improving client engagement and conversion rates.",
    },
    testimonial: {
      quote:
        'My favourite agency (MFA) —just as the name suggests has truly become my go-to for any creative needs. I am Dr. Lalit Rajpal, founder of Dr Lalit Rajpal Aesthetics, and I had an excellent experience working with Mr. Pratyush and Mr. Avinash. They took the time to understand my vision and requirements in depth and put in tremendous effort to design a logo that not only looks amazing but is also created with a logical, thoughtful approach. This final result perfectly reflects the nature of my work. I strongly recommend Team MFA for anyone looking for professional, high-quality creative solutions.',
      author: "Dr. Lalit Rajpal",
      role: "Founder, Dr Lalit Rajpal Aesthetics",
    },
  },
  {
    id: "dreamlike",
    client: "Dreamlike",
    tagline: "Building a premium mountain resort brand from the ground up",
    overview: {
      clientName: "Prateek Maan",
      clientRole: "Founder & Partner, Dreamlike",
      service: "Complete Brand Identity",
      impact: "80% Brand Awareness Achievement",
    },
    challenges: [
      {
        title: "New Market Entry",
        description:
          "A completely new business entering the competitive hospitality and resort market without any existing brand presence.",
      },
      {
        title: "Standing Out From Competitors",
        description:
          "Needed to differentiate from established mountain resorts and holiday homes with a unique brand identity.",
      },
      {
        title: "Premium Positioning",
        description:
          "Required a sophisticated brand image to position Dreamlike as a premium mountain resort destination.",
      },
    ],
    approach: [
      {
        title: "Strategic Onboarding",
        description:
          "Comprehensive onboarding process to understand the vision for a premium mountain resort experience.",
      },
      {
        title: "Market Research",
        description:
          "In-depth analysis of the hospitality and resort industry to identify opportunities for differentiation.",
      },
      {
        title: "Color Theory Application",
        description:
          "Applied color psychology principles to create a palette that evokes luxury, nature, and tranquility.",
      },
      {
        title: "Strategic Planning",
        description:
          "Developed a comprehensive brand strategy to position Dreamlike as a standout premium destination.",
      },
      {
        title: "Complete Branding",
        description:
          "Created the entire brand identity from scratch—logo, typography, color palette, and visual language.",
      },
    ],
    visualDeliverables: {
      foundation: [
        {
          src: dreamlikeVisualIdentity,
          alt: "Dreamlike Visual Identity with Logo Design",
          testId: "card-dreamlike-visual-identity",
        },
        {
          src: dreamlikeLogoExplanation,
          alt: "Logo Explanation - Roman Window, Mountains, Trees, Sea",
          testId: "card-dreamlike-logo-explanation",
        },
        {
          src: dreamlikeSubBrands,
          alt: "Dreamlike Sub-brand Variations - Chailton, Chailscape, Chailstone",
          testId: "card-dreamlike-sub-brands",
        },
        {
          src: dreamlikeBrandPattern,
          alt: "Brand Pattern Elements - Trees, Mountains, Waves, Stars, Sun",
          testId: "card-dreamlike-brand-pattern",
        },
      ],
      environmental: [
        {
          src: dreamlikeStorefront,
          alt: "Storefront Branding with Logo Display",
          testId: "card-dreamlike-storefront",
        },
        {
          src: dreamlikeSignage,
          alt: "Street Signage Design",
          testId: "card-dreamlike-signage",
        },
      ],
      print: [
        {
          src: dreamlikeBag,
          alt: "Shopping Bag Design",
          testId: "card-dreamlike-bag",
        },
        {
          src: dreamlikeMug,
          alt: "Branded Coffee Mug",
          testId: "card-dreamlike-mug",
        },
        {
          src: dreamlikeStationery,
          alt: "Complete Stationery Set",
          testId: "card-dreamlike-stationery",
        },
        {
          src: dreamlikeDoorHanger,
          alt: "Door Hanger Design",
          testId: "card-dreamlike-door-hanger",
        },
        {
          src: dreamlikeTag,
          alt: "Product Tag Design",
          testId: "card-dreamlike-tag",
        },
      ],
    },
    results: {
      metrics: [
        { value: "60%", label: "Brand Awareness", color: "gradient" },
        { value: "2x", label: "Engagement Rate", color: "coral" },
        { value: "100%", label: "Premium Brand Recognition", color: "purple" },
      ],
      description:
        "The new brand identity successfully launched Dreamlike as a premium mountain resort, establishing strong brand awareness and positioning it as a standout destination in the competitive hospitality market.",
    },
    testimonial: {
      quote:
        "My favourite agency (MFA) transformed our vision into a stunning brand identity. Their strategic approach and attention to detail helped us launch Dreamlike with a strong, premium presence in the market. The team truly understood our vision for a luxury mountain resort experience.",
      author: "Prateek Maan",
      role: "Founder & Partner, Dreamlike",
    },
  },
];

function CaseStudyContent({ caseStudy }: { caseStudy: CaseStudyData }) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [isLightboxLocked, setIsLightboxLocked] = useState(false);
  const contentAnimation = useScrollAnimation("fade-in");
  const imageAnimation = useScrollAnimation("fade-in");
  const resultsAnimation = useScrollAnimation("scale-in");

  // Build array of all images
  const allImages = [
    ...(caseStudy.visualDeliverables?.foundation || []),
    ...(caseStudy.visualDeliverables?.environmental || []),
    ...(caseStudy.visualDeliverables?.print || []),
  ];

  const handleImageHover = (image: { src: string; alt: string }) => {
    if (!isLightboxLocked) {
      const index = allImages.findIndex(img => img.src === image.src);
      setCurrentImageIndex(index);
      setIsLightboxLocked(true);
    }
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
    setIsLightboxLocked(false);
  };

  const goToNext = () => {
    if (currentImageIndex !== null && currentImageIndex < allImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const currentImage = currentImageIndex !== null ? allImages[currentImageIndex] : null;

  return (
    <>
    <Dialog open={currentImageIndex !== null} onOpenChange={closeLightbox}>
      <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-black/95 border-white/10">
        <DialogTitle className="sr-only">Image Gallery</DialogTitle>
        <DialogDescription className="sr-only">
          Viewing image {currentImageIndex !== null ? currentImageIndex + 1 : 0} of {allImages.length}
        </DialogDescription>
        <div className="relative w-full h-full flex items-center justify-center p-4">
          {currentImage && (
            <>
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Navigation Buttons */}
              <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                {/* Previous Button */}
                {currentImageIndex !== null && currentImageIndex > 0 && (
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={goToPrevious}
                    className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                    data-testid="button-lightbox-previous"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </Button>
                )}
                <div className="flex-1" />
                {/* Next Button */}
                {currentImageIndex !== null && currentImageIndex < allImages.length - 1 && (
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={goToNext}
                    className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                    data-testid="button-lightbox-next"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </Button>
                )}
              </div>
              
              {/* Image Counter */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <p className="text-white text-sm font-medium">
                  {currentImageIndex !== null ? currentImageIndex + 1 : 0} / {allImages.length}
                </p>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
    
    <div className="space-y-16">
      {/* Overview */}
      <div
        className={`transition-all duration-1000 ${contentAnimation.className}`}
        ref={contentAnimation.ref}
      >
        <Card className="glass p-8 md:p-12" data-testid="card-case-study-overview">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[#E97451] uppercase tracking-wider text-sm font-bold mb-2">
                Client
              </h3>
              <p className="text-white text-lg">{caseStudy.overview.clientName}</p>
              <p className="text-white/60 text-sm">{caseStudy.overview.clientRole}</p>
            </div>
            <div>
              <h3 className="text-[#E97451] uppercase tracking-wider text-sm font-bold mb-2">
                Service
              </h3>
              <p className="text-white text-lg">{caseStudy.overview.service}</p>
            </div>
            <div>
              <h3 className="text-[#E97451] uppercase tracking-wider text-sm font-bold mb-2">
                Impact
              </h3>
              <p className="text-white text-lg">{caseStudy.overview.impact}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* The Challenge */}
      <div className={`transition-all duration-1000 delay-100 ${contentAnimation.className}`}>
        <Card className="glass p-8 md:p-12" data-testid="card-challenge">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-tight">
            The Challenge
          </h3>
          <div className="space-y-4">
            {caseStudy.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#E97451] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/80 text-lg leading-relaxed">
                  <span className="text-white font-semibold">{challenge.title}:</span>{" "}
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Our Approach */}
      <div className={`transition-all duration-1000 delay-200 ${contentAnimation.className}`}>
        <Card className="glass p-8 md:p-12" data-testid="card-approach">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-tight">
            Our Approach
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.approach.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#E97451] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Visual Deliverables */}
      {caseStudy.visualDeliverables && (
        <div
          className={`transition-all duration-1000 delay-300 ${imageAnimation.className}`}
          ref={imageAnimation.ref}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tight">
              Visual Deliverables
            </h3>
            <p className="text-white/70 text-lg">
              A comprehensive brand identity system brought to life
            </p>
          </div>

          {/* Featured Hero Images - Brand Foundation */}
          {caseStudy.visualDeliverables.foundation && (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {caseStudy.visualDeliverables.foundation.map((image, index) => (
                <Card
                  key={index}
                  className="glass p-0 overflow-hidden cursor-pointer hover-elevate transition-all duration-300"
                  data-testid={image.testId}
                  onMouseEnter={() => handleImageHover({ src: image.src, alt: image.alt })}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover aspect-video" 
                  />
                </Card>
              ))}
            </div>
          )}

          {/* Compact Grid - Remaining Deliverables */}
          {(caseStudy.visualDeliverables.environmental || caseStudy.visualDeliverables.print) && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Environmental Branding */}
              {caseStudy.visualDeliverables.environmental?.map((image, index) => (
                <Card
                  key={`env-${index}`}
                  className="glass p-0 overflow-hidden cursor-pointer hover-elevate transition-all duration-300"
                  data-testid={image.testId}
                  onMouseEnter={() => handleImageHover({ src: image.src, alt: image.alt })}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover aspect-square" 
                  />
                </Card>
              ))}

              {/* Print & Stationery */}
              {caseStudy.visualDeliverables.print?.map((image, index) => (
                <Card
                  key={`print-${index}`}
                  className="glass p-0 overflow-hidden cursor-pointer hover-elevate transition-all duration-300"
                  data-testid={image.testId}
                  onMouseEnter={() => handleImageHover({ src: image.src, alt: image.alt })}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover aspect-square" 
                  />
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Results */}
      <div
        className={`transition-all duration-1000 delay-400 ${resultsAnimation.className}`}
        ref={resultsAnimation.ref}
      >
        <Card className="glass p-8 md:p-12" data-testid="card-results">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-tight">
            The Results
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {caseStudy.results.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-5xl md:text-6xl font-bold mb-2 ${
                    metric.color === "gradient"
                      ? "gradient-flow-text"
                      : metric.color === "coral"
                        ? "text-[#E97451]"
                        : metric.color === "purple"
                          ? "text-[#A855F7]"
                          : "text-white"
                  }`}
                  data-testid={`metric-value-${index}`}
                >
                  {metric.value}
                </div>
                <p className="text-white/80 text-lg" data-testid={`metric-label-${index}`}>{metric.label}</p>
              </div>
            ))}
          </div>
          <p className="text-white/70 text-lg leading-relaxed text-center">
            {caseStudy.results.description}
          </p>
        </Card>
      </div>

      {/* Testimonial */}
      <div className={`transition-all duration-1000 delay-500 ${imageAnimation.className}`}>
        <Card className="glass p-8 md:p-12" data-testid="card-testimonial">
          <div className="flex flex-col items-center text-center">
            <div className="text-6xl text-[#E97451] mb-6">"</div>
            <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-4xl">
              {caseStudy.testimonial.quote}
            </blockquote>
            <div className="border-t border-white/20 pt-6 w-full max-w-md">
              <p className="text-white font-bold text-lg">{caseStudy.testimonial.author}</p>
              <p className="text-white/60">{caseStudy.testimonial.role}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
    </>
  );
}

export default function WorkCaseStudies() {
  const headerAnimation = useScrollAnimation("fade-in");

  return (
    <section className="py-24 px-4 relative" data-testid="section-work-case-studies">
      <SwissGrid />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${headerAnimation.className}`}
          ref={headerAnimation.ref}
        >
          <p className="text-[#E97451] uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-bold">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6 gradient-flow-text leading-[1.2]">
            Success Stories
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-[1.6] font-normal">
            Deep dives into the transformative work we've done for our clients
          </p>
        </div>

        {/* Tabbed Case Studies */}
        <Tabs defaultValue={caseStudies[0].id} className="w-full">
          <TabsList className="glass mb-12 w-full md:w-auto flex-wrap justify-center gap-2 h-auto p-2" data-testid="tabs-case-studies">
            {caseStudies.map((caseStudy) => (
              <TabsTrigger
                key={caseStudy.id}
                value={caseStudy.id}
                className="data-[state=active]:bg-[#E97451] data-[state=active]:text-white px-6 py-3"
                data-testid={`tab-${caseStudy.id}`}
              >
                {caseStudy.client}
              </TabsTrigger>
            ))}
          </TabsList>

          {caseStudies.map((caseStudy) => (
            <TabsContent key={caseStudy.id} value={caseStudy.id} data-testid={`tab-content-${caseStudy.id}`}>
              <div className="mb-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {caseStudy.client}
                </h3>
                <p className="text-xl text-white/70">{caseStudy.tagline}</p>
              </div>
              <CaseStudyContent caseStudy={caseStudy} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
