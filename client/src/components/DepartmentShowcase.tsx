import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollAnimatedWrapper from "./ScrollAnimatedWrapper";
import { Target, Palette, PenTool, Monitor } from "lucide-react";
import NameMarquee from "./NameMarquee";
import SwissGrid from "./SwissGrid";

interface Department {
  name: string;
  icon: typeof Target;
  philosophy: string;
  teamMembers: string[];
  direction: "left" | "right";
}

export default function DepartmentShowcase() {
  const headerAnimation = useScrollAnimation("fade-in");

  const departments: Department[] = [
    {
      name: "Brand Strategy",
      icon: Target,
      philosophy: "The core of any agency starts here. We think, make decisions, build brands and define what your brand should be. We understand people, the audience, and their feelings. Why, what, where, how — have these questions about your brand? With the right strategy, you'll have an answer for everything. Don't worry about the rules, we don't follow them, we make them.",
      teamMembers: ["prattyush", "strategic minds", "brand architects", "positioning experts"],
      direction: "left",
    },
    {
      name: "Visual Design",
      icon: Palette,
      philosophy: "Design is the only language you don't need words to understand. It's universal and can be understood by everyone, everywhere. It can tell a story using very little to no words. We speak through pixels, colors, and compositions — creating visual languages that resonate across cultures and markets.",
      teamMembers: ["avinash", "visual storytellers", "design thinkers", "pixel perfectionists"],
      direction: "right",
    },
    {
      name: "Content & Copy",
      icon: PenTool,
      philosophy: "Content is king. Your brand should be everywhere and make the noise it deserves. From the communication of your brand to the language and emotions, we make sure the words match the essence of the brand. Every headline, every line — crafted with precision and punch. Did we woo you with our words? Well, that's content for you.",
      teamMembers: ["juie", "wordsmith wizards", "storytellers", "brand voices"],
      direction: "left",
    },
    {
      name: "Web & Digital",
      icon: Monitor,
      philosophy: "We build digital experiences that are slick, scrollable, and responsive — always aligned with the visual identity and brand vibe. From concept to launch, we turn ideas into interactive realities that engage, convert, and wow. Every click, every scroll, every interaction is designed to delight.",
      teamMembers: ["sajjad", "web architects", "UI masters", "digital craftsmen"],
      direction: "right",
    },
  ];

  return (
    <section className="py-24 px-4 relative" data-testid="section-departments">
      <SwissGrid />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Swiss Typography */}
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.className}`}>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-6">
            Our Structure
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6 gradient-flow-text leading-[1.2]">
            How We're Organized
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-[1.6] font-normal">
            Four departments, one mission: to make your brand unforgettable.
          </p>
        </div>

        <div className="space-y-16">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div key={index}>
                <ScrollAnimatedWrapper animationType="fade-in" delay={index * 100}>
                  <Card className="hover-elevate relative" data-testid={`card-department-${index}`}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-md" />
                    <CardContent className="p-8 md:p-10">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="bg-icon-surface p-4 rounded-md flex-shrink-0">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase spaced-text">
                            {dept.name}
                          </h3>
                          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {dept.philosophy}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimatedWrapper>
                
                <div className="mt-4">
                  <NameMarquee 
                    names={dept.teamMembers} 
                    direction={dept.direction}
                    speed={25}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
