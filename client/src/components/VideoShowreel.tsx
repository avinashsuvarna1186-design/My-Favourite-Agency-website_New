import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play, Video, ArrowDown } from "lucide-react";
import showreelVideo from "@assets/Logofolio presentation_1763220411848.mp4";

const SHOWREEL_URL = showreelVideo;

export default function VideoShowreel() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const headerAnimation = useScrollAnimation("fade-in");
  const videoAnimation = useScrollAnimation("scale-in");

  const handlePlayClick = () => {
    setIsDialogOpen(true);
  };

  const scrollToContact = () => {
    setIsDialogOpen(false);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 px-4 relative" data-testid="section-video-showreel">
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.className}`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 uppercase spaced-text-lg gradient-wave-text">
            Motion That Moves
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From reels to commercials, we create video content that stops the scroll and starts conversations.
          </p>
        </div>

        <div ref={videoAnimation.ref} className={videoAnimation.className}>
          <Card className="overflow-hidden hover-elevate active-elevate-2 bg-card/50 backdrop-blur-sm" data-testid="card-showreel">
            <CardContent className="p-0">
              <div className="aspect-video relative group">
                <video
                  src={SHOWREEL_URL}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  data-testid="video-showreel-background"
                />
                
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
                
                <div 
                  className="absolute inset-0 z-10 cursor-pointer"
                  onClick={handlePlayClick}
                  data-testid="button-play-showreel"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl p-0" data-testid="dialog-showreel">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle>MFA Showreel</DialogTitle>
              <DialogDescription>
                {SHOWREEL_URL ? "Our latest work in motion" : "Coming soon - Contact us to request access"}
              </DialogDescription>
            </DialogHeader>
            <div className="p-6">
              {SHOWREEL_URL ? (
                <AspectRatio ratio={16 / 9}>
                  <video
                    src={SHOWREEL_URL}
                    controls
                    autoPlay
                    className="w-full h-full rounded-md"
                    data-testid="video-showreel"
                  >
                    Your browser does not support the video tag.
                  </video>
                </AspectRatio>
              ) : (
                <div className="bg-muted rounded-md p-12 text-center" data-testid="div-showreel-placeholder">
                  <div className="bg-primary/10 p-6 rounded-full mb-6 inline-block">
                    <Video className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Showreel Coming Soon</h3>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    We're putting together our best work to show you what we can do. 
                    In the meantime, let's talk about your project.
                  </p>
                  <Button onClick={scrollToContact} className="gap-2" data-testid="button-contact-from-showreel">
                    <span>Get in Touch</span>
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
