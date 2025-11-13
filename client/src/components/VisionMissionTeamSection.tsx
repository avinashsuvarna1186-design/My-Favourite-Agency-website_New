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
      aka: "The one who gives your brand a soul (and swagger, if you want some)",
      bio: "Prattyush creates…ooopppsss…is your brand's blueprint. He sashays confidently into your brand's existential crisis and walks out giving it a confident personality. He defines your brand's voice, position and purpose much before a single pixel is put in place. Look at it like this; if your brand were a human getting onto Tinder, he'd be the one to give it a face, tone and a killer bio!",
      masterOf: "Brand strategy and positioning magic. He tells you 'what your brand really wants to say.'",
      vibe: "Breathes brands, drinks black coffee and asks questions.",
      image: prattyushPhoto,
      imagePosition: "center -10%",
    },
    {
      name: "Avinash Suvarna",
      role: "Founder & Design Architect",
      aka: "The one who makes the magic happen (without losing his sanity)",
      bio: "Once the brand vision is approved and locked, Avinash steps in to bring it to life; with style, with precisions and with a teeny-weeny bit of team chaos control. He leads the visuals, shapes the design language, freezes the vibe and ensures everything from colour to pixel is on point. Look at it like this; he's the bridge between the idea and execution. But he's also the one who says, 'yeh accha hai, but can we push it more or make it better?'",
      masterOf: "Visual storytelling, creative direction and getting sh*t done!",
      vibe: "Runs on timelines, teamwork and the right amount of client drama.",
      image: avinashPhoto,
      imagePosition: "center 20%",
    },
    {
      name: "Sajjad Jafri",
      role: "Website Designer Visualizer",
      aka: "The guy who builds sexy websites while you are still writing the brief",
      bio: "Sajjad turns websites around faster than you can say 'I want a website for my brand.' He's the one who brings ideas and visualization to life, turning them into slick, scrollable and responsive beauties; always aligned with the visual identity and brand vibe. He works hand-in-mouse with Avinash to ensure synchronicity and alignment with all of the brand's marketing communication.",
      masterOf: "Websites that wow and woo, UI that glues you and visuals that vibe.",
      vibe: "Moves fast, designs faster and always on brand.",
      image: sajjadPhoto,
      imagePosition: "center 10%",
    },
    {
      name: "Juie Merchant",
      role: "Content & Copy Lead",
      aka: "The voice behind the brand (and the sass too)",
      bio: "Everything we design that speaks — starts with Juie. From gossiping to deep dives with clients and dissecting the brand DNA, Juie crafts a copy that feels just right. Every angle of the copy; tone, voice and messaging — crafted with precision. It uncannily feels like your brand's inner voice has just connected to Wi-Fi.",
      masterOf: "Brand voice & bold headlines. Clean copy with purpose and punch.",
      vibe: "Deep thinker, passionate writer and your favourite strategist.",
      image: juiePhoto,
      imagePosition: "center 10%",
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
                      To solve problems creatively and consistently; whether it's a design problem or a full-blown existential crisis (for your brand, of course).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div ref={storyAnimation.ref} className={`mb-16 ${storyAnimation.className}`}>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">We Decided to Flip the Script</h3>
          <div className="max-w-4xl space-y-4" data-testid="text-brand-story">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We were working jobs, drinking bad chai and questioning everything; especially the mediocrity around us.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We felt a deep itch to create something better, something that's ours and something bold.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Because the truth is, we weren't built to just punch ideas or for that matter the time; we were built to build something right, something great and something different.
            </p>
            <p className="text-lg md:text-xl text-foreground font-semibold leading-relaxed border-l-4 border-primary pl-4">
              And so, somewhere between a career crisis and a caffeine high, My Favourite Agency was born — with rebellion in our blood and design at our core.
            </p>
          </div>
        </div>

        <div ref={teamAnimation.ref} className={teamAnimation.className}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">The MFA Crew</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover-elevate active-elevate-2" data-testid={`card-team-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-16 h-16 flex-shrink-0">
                      {member.image && (
                        <AvatarImage 
                          src={member.image} 
                          alt={member.name} 
                          className="scale-110 object-cover"
                          style={{ objectPosition: member.imagePosition }}
                        />
                      )}
                      <AvatarFallback className="bg-primary/10 text-xl font-bold text-primary">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
                      <p className="text-sm font-medium text-muted-foreground mb-2">{member.role}</p>
                      <p className="text-xs text-muted-foreground italic">A.K.A: {member.aka}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 border-t border-border pt-4">
                    <div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                    </div>
                    
                    <div className="border-t border-border/50 pt-3">
                      <p className="text-xs font-semibold text-foreground mb-1">Master of:</p>
                      <p className="text-xs text-muted-foreground">{member.masterOf}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Vibe:</p>
                      <p className="text-xs text-muted-foreground italic">{member.vibe}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
