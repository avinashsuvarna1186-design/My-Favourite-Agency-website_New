import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import SwissGrid from "@/components/SwissGrid";

export default function AnimationDemo() {
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);

  const animations = [
    {
      id: "gradient-flow",
      name: "Gradient Flow (Headers)",
      description: "Animated gradient used on all major section headers",
      className: "gradient-flow-text",
    },
    {
      id: "gradient-wave",
      name: "Gradient Wave",
      description: "Smooth gradient animation that flows left to right",
      className: "gradient-wave-text",
    },
    {
      id: "text-shimmer",
      name: "Text Shimmer",
      description: "Shimmering light effect moving across text",
      className: "animate-text-shimmer bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent bg-[length:200%_auto]",
    },
    {
      id: "fade-in",
      name: "Fade In",
      description: "Gentle fade-in animation",
      className: "animate-fade-in",
    },
    {
      id: "slide-left",
      name: "Slide From Left",
      description: "Content slides in from the left",
      className: "animate-slide-left",
    },
    {
      id: "slide-right",
      name: "Slide From Right",
      description: "Content slides in from the right",
      className: "animate-slide-right",
    },
    {
      id: "scale-in",
      name: "Scale In",
      description: "Content scales up from center",
      className: "animate-scale-in",
    },
    {
      id: "bounce",
      name: "Bounce",
      description: "Bouncing animation",
      className: "animate-bounce",
    },
    {
      id: "pulse",
      name: "Pulse",
      description: "Pulsing scale animation",
      className: "animate-pulse",
    },
    {
      id: "spin",
      name: "Spin",
      description: "Continuous rotation",
      className: "animate-spin",
    },
    {
      id: "ping",
      name: "Ping",
      description: "Expanding ping effect",
      className: "animate-ping",
    },
    {
      id: "typing-cursor",
      name: "Typing Cursor",
      description: "Blinking cursor effect",
      className: "typing-cursor",
    },
  ];

  const resetAnimation = (id: string) => {
    setActiveAnimation(null);
    setTimeout(() => setActiveAnimation(id), 50);
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Galactic video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover opacity-20 z-0"
        style={{ filter: "brightness(0.3)" }}
      >
        <source
          src="https://cdn.pixabay.com/video/2022/11/07/137651-769748627_large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0" />
      
      <SwissGrid />

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link href="/">
              <Button variant="ghost" className="gap-2 mb-6" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold gradient-flow-text mb-4 tracking-tight">
              Animation Showcase
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl">
              Preview all available text animations used throughout the website. Click any card to replay the animation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animations.map((animation) => (
              <Card
                key={animation.id}
                className="cursor-pointer hover-elevate active-elevate-2 transition-all"
                onClick={() => resetAnimation(animation.id)}
                data-testid={`card-animation-${animation.id}`}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{animation.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6">
                    {animation.description}
                  </p>
                  <div className="min-h-[80px] flex items-center justify-center bg-icon-surface rounded-md">
                    <div
                      key={activeAnimation === animation.id ? "active" : "inactive"}
                      className={`text-3xl font-bold ${animation.className}`}
                    >
                      {animation.id === "typing-cursor" ? "|" : animation.id === "spin" || animation.id === "ping" ? "●" : "Sample Text"}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <code className="text-xs text-muted-foreground break-all">
                      {animation.className}
                    </code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
