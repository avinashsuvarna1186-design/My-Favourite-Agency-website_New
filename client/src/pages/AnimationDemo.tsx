import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnimationDemo() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Text Animation Options</h1>
          <p className="text-muted-foreground text-lg">Choose your favorite animation style</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Fade In */}
          <Card>
            <CardHeader>
              <CardTitle>1. Fade In</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold animate-fade-in">
                Your Amazing Text
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Smooth opacity transition</p>
            </CardContent>
          </Card>

          {/* Slide Up */}
          <Card>
            <CardHeader>
              <CardTitle>2. Slide Up</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold animate-slide-up">
                Your Amazing Text
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Slides from bottom to top</p>
            </CardContent>
          </Card>

          {/* Slide Left */}
          <Card>
            <CardHeader>
              <CardTitle>3. Slide Left</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold animate-slide-left">
                Your Amazing Text
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Slides from right to left</p>
            </CardContent>
          </Card>

          {/* Scale In */}
          <Card>
            <CardHeader>
              <CardTitle>4. Scale In (Zoom)</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold animate-scale-in">
                Your Amazing Text
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Zooms in from center</p>
            </CardContent>
          </Card>

          {/* Bounce */}
          <Card>
            <CardHeader>
              <CardTitle>5. Bounce In</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold animate-bounce-in">
                Your Amazing Text
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Bouncy entrance effect</p>
            </CardContent>
          </Card>

          {/* Rotate In */}
          <Card>
            <CardHeader>
              <CardTitle>6. Rotate In</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold animate-rotate-in">
                Your Amazing Text
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Rotates while fading in</p>
            </CardContent>
          </Card>

          {/* Blur In */}
          <Card>
            <CardHeader>
              <CardTitle>7. Blur to Clear</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold animate-blur-in">
                Your Amazing Text
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Starts blurry, becomes sharp</p>
            </CardContent>
          </Card>

          {/* Glitch */}
          <Card>
            <CardHeader>
              <CardTitle>8. Glitch Effect</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold animate-glitch">
                Your Amazing Text
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Digital glitch animation</p>
            </CardContent>
          </Card>

          {/* Wave */}
          <Card>
            <CardHeader>
              <CardTitle>9. Wave (Letter by Letter)</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold">
                <span className="inline-block animate-wave" style={{ animationDelay: '0s' }}>Y</span>
                <span className="inline-block animate-wave" style={{ animationDelay: '0.1s' }}>o</span>
                <span className="inline-block animate-wave" style={{ animationDelay: '0.2s' }}>u</span>
                <span className="inline-block animate-wave" style={{ animationDelay: '0.3s' }}>r</span>
                <span className="inline-block animate-wave" style={{ animationDelay: '0.4s' }}> </span>
                <span className="inline-block animate-wave" style={{ animationDelay: '0.5s' }}>T</span>
                <span className="inline-block animate-wave" style={{ animationDelay: '0.6s' }}>e</span>
                <span className="inline-block animate-wave" style={{ animationDelay: '0.7s' }}>x</span>
                <span className="inline-block animate-wave" style={{ animationDelay: '0.8s' }}>t</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Each letter bounces in sequence</p>
            </CardContent>
          </Card>

          {/* Gradient Shift */}
          <Card>
            <CardHeader>
              <CardTitle>10. Gradient Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-gradient">
                Your Amazing Text
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Animated gradient colors</p>
            </CardContent>
          </Card>

          {/* Typewriter */}
          <Card>
            <CardHeader>
              <CardTitle>11. Typewriter</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-primary">
                Your Amazing Text
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Types out character by character</p>
            </CardContent>
          </Card>

          {/* Flip In */}
          <Card>
            <CardHeader>
              <CardTitle>12. Flip In</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold animate-flip-in">
                Your Amazing Text
              </h2>
              <p className="text-sm text-muted-foreground mt-2">3D flip animation</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes rotate-in {
          from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes blur-in {
          from {
            opacity: 0;
            filter: blur(10px);
          }
          to {
            opacity: 1;
            filter: blur(0);
          }
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
            opacity: 1;
          }
          20% {
            transform: translate(-2px, 2px);
            opacity: 0.8;
          }
          40% {
            transform: translate(2px, -2px);
            opacity: 0.9;
          }
          60% {
            transform: translate(-2px, -2px);
            opacity: 0.85;
          }
          80% {
            transform: translate(2px, 2px);
            opacity: 0.95;
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes flip-in {
          from {
            opacity: 0;
            transform: perspective(400px) rotateX(-90deg);
          }
          to {
            opacity: 1;
            transform: perspective(400px) rotateX(0deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 1s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out;
        }

        .animate-rotate-in {
          animation: rotate-in 0.8s ease-out;
        }

        .animate-blur-in {
          animation: blur-in 1s ease-out;
        }

        .animate-glitch {
          animation: glitch 0.5s ease-in-out infinite;
        }

        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-typewriter {
          animation: typewriter 2s steps(20) forwards;
        }

        .animate-flip-in {
          animation: flip-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
