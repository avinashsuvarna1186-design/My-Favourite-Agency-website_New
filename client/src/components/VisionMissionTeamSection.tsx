import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Target, Compass } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import avinashPhoto from "@assets/Gemini_Generated_Image_hmkgtuhmkgtuhmkg_1762517890408.png";
import prattyushPhoto from "@assets/Gemini_Generated_Image_txklxktxklxktxkl_1762517928496.png";
import sajjadPhoto from "@assets/Gemini_Generated_Image_veag3aveag3aveag_1762518004845.png";
import juiePhoto from "@assets/Gemini_Generated_Image_Juiee_1762518049953.png";

export default function VisionMissionTeamSection() {
  const visionAnimation = useScrollAnimation("slide-left", { delay: 200 });
  const missionAnimation = useScrollAnimation("slide-right", { delay: 300 });
  const storyAnimation = useScrollAnimation("fade-in", { delay: 100 });
  const teamAnimation = useScrollAnimation("scale-in", { delay: 200 });
  
  const team = [
    {
      name: "Prattyush Nag",
      role: "Founder & Brand Architect",
      tagline: "Gives your brand a soul (and swagger).",
      image: prattyushPhoto,
      imagePosition: "center 20%",
    },
    {
      name: "Avinash Suvarna",
      role: "Founder & Design Architect",
      tagline: "Makes the magic happen.",
      image: avinashPhoto,
      imagePosition: "center 20%",
    },
    {
      name: "Sajjad Jafri",
      role: "Website Designer Visualizer",
      tagline: "Builds sexy websites fast.",
      image: sajjadPhoto,
      imagePosition: "center 20%",
    },
    {
      name: "Juie Merchant",
      role: "Content & Copy Lead",
      tagline: "Voice behind the brand.",
      image: juiePhoto,
      imagePosition: "center 20%",
    },
  ];

  return (
    <section className="py-24 px-4 relative" data-testid="section-vision-mission-team">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div ref={visionAnimation.ref} className={visionAnimation.className}>
            <Card className="hover-elevate active-elevate-2 h-full" data-testid="card-vision">
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
          </div>

          <div ref={missionAnimation.ref} className={missionAnimation.className}>
            <Card className="hover-elevate active-elevate-2 h-full" data-testid="card-mission">
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
        </div>

        <div ref={storyAnimation.ref} className={`mb-16 ${storyAnimation.className}`}>
          <h3 className="text-3xl font-bold mb-4 text-foreground text-center">Brand Story</h3>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto" data-testid="text-brand-story">
            We flipped the script. Somewhere between a career crisis and a caffeine high, My Favourite Agency was born
            — with rebellion in our blood and design at our core.
          </p>
        </div>

        <div ref={teamAnimation.ref} className={teamAnimation.className}>
          <h3 className="text-3xl font-bold mb-8 text-foreground text-center">Meet the Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover-elevate active-elevate-2" data-testid={`card-team-${index}`}>
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    {member.image && (
                      <AvatarImage 
                        src={member.image} 
                        alt={member.name} 
                        className="scale-110 object-cover"
                        style={{ objectPosition: member.imagePosition }}
                      />
                    )}
                    <AvatarFallback className="bg-primary/10 text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
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
