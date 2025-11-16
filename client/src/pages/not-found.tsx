import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";
import SwissGrid from "@/components/SwissGrid";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      {/* Galactic video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        style={{ filter: "brightness(0.3)" }}
      >
        <source
          src="https://cdn.pixabay.com/video/2022/11/07/137651-769748627_large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0" />
      
      <SwissGrid />

      <div className="relative z-10 w-full max-w-2xl mx-4">
        <Card className="text-center">
          <CardContent className="pt-12 pb-12 px-8">
            <div className="flex justify-center mb-6">
              <div className="bg-icon-surface w-20 h-20 rounded-md flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-primary" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold gradient-flow-text mb-4 tracking-tight">
              404
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like you've wandered into the void. The page you're looking for doesn't exist.
            </p>

            <Link href="/">
              <Button size="lg" className="gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
