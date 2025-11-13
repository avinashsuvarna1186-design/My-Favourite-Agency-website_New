import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play, Video } from "lucide-react";

export default function VideoShowreel() {
  const headerAnimation = useScrollAnimation("fade-in");
  const videoAnimation = useScrollAnimation("scale-in");

  return (
    <section className="py-32 px-4 relative" data-testid="section-video-showreel">
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.className}`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground uppercase spaced-text-lg">
            Motion That Moves
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From reels to commercials, we create video content that stops the scroll and starts conversations.
          </p>
        </div>

        <div ref={videoAnimation.ref} className={videoAnimation.className}>
          <Card className="overflow-hidden hover-elevate active-elevate-2 bg-card/50 backdrop-blur-sm" data-testid="card-showreel">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-muted to-primary/10 relative group">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="bg-primary/10 p-6 rounded-full mb-6 group-hover:scale-110 transition-transform">
                    <Video className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Watch Our Showreel
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                    See how we transform ideas into compelling visual stories that engage, inspire, and convert.
                  </p>
                  <button 
                    className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover-elevate active-elevate-2 transition-all"
                    data-testid="button-play-showreel"
                  >
                    <Play className="w-5 h-5" />
                    <span>Play Showreel</span>
                  </button>
                </div>
                
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(255, 184, 77, 0.1) 2px,
                    rgba(255, 184, 77, 0.1) 4px
                  )`
                }} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="hover-elevate" data-testid="card-video-stat-0">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Videos Produced
              </div>
            </CardContent>
          </Card>
          <Card className="hover-elevate" data-testid="card-video-stat-1">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">10M+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Total Views
              </div>
            </CardContent>
          </Card>
          <Card className="hover-elevate" data-testid="card-video-stat-2">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Client Satisfaction
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
