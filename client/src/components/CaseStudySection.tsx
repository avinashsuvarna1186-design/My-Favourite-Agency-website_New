import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SwissGrid from "./SwissGrid";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function CaseStudySection() {
  const headerAnimation = useScrollAnimation("fade-in");
  const contentAnimation = useScrollAnimation("fade-in");
  const imageAnimation = useScrollAnimation("fade-in");
  const resultsAnimation = useScrollAnimation("scale-in");

  return (
    <section className="py-24 px-4 relative" data-testid="section-case-study">
      <SwissGrid />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${headerAnimation.className}`}
          ref={headerAnimation.ref}
        >
          <p className="text-[#E97451] uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-bold">
            Case Study
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6 gradient-flow-text leading-[1.2]">
            Dr. Lalit Rajpal Aesthetics
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-[1.6] font-normal">
            Transforming a medical practice into a premium aesthetic brand
          </p>
        </div>

        {/* Overview */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${contentAnimation.className}`}
          ref={contentAnimation.ref}
        >
          <Card className="glass p-8 md:p-12" data-testid="card-case-study-overview">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-[#E97451] uppercase tracking-wider text-sm font-bold mb-2">Client</h3>
                <p className="text-white text-lg">Dr. Lalit Rajpal</p>
                <p className="text-white/60 text-sm">Founder, Dr Lalit Rajpal Aesthetics</p>
              </div>
              <div>
                <h3 className="text-[#E97451] uppercase tracking-wider text-sm font-bold mb-2">Service</h3>
                <p className="text-white text-lg">Complete Brand Identity</p>
              </div>
              <div>
                <h3 className="text-[#E97451] uppercase tracking-wider text-sm font-bold mb-2">Impact</h3>
                <p className="text-white text-lg">70% Client Conversion Increase</p>
              </div>
            </div>
          </Card>
        </div>

        {/* The Challenge */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${contentAnimation.className}`}
        >
          <Card className="glass p-8 md:p-12" data-testid="card-challenge">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-tight">
              The Challenge
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#E97451] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/80 text-lg leading-relaxed">
                  <span className="text-white font-semibold">Poor Visual Design:</span> The existing brand lacked professional design standards, failing to convey the premium nature of aesthetic services.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#E97451] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/80 text-lg leading-relaxed">
                  <span className="text-white font-semibold">Zero Brand Recognition:</span> No established brand identity in a competitive aesthetic medicine market.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#E97451] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/80 text-lg leading-relaxed">
                  <span className="text-white font-semibold">Low Client Conversion:</span> Prospective clients weren't connecting with the brand, resulting in lost business opportunities.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Our Approach */}
        <div
          className={`mb-16 transition-all duration-1000 delay-400 ${contentAnimation.className}`}
        >
          <Card className="glass p-8 md:p-12" data-testid="card-approach">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-tight">
              Our Approach
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#E97451] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Deep Discovery</h4>
                    <p className="text-white/70 leading-relaxed">
                      One-to-one consultation calls to understand Dr. Rajpal's vision, values, and unique positioning in the aesthetic medicine field.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#E97451] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Strategic Onboarding</h4>
                    <p className="text-white/70 leading-relaxed">
                      Comprehensive onboarding process to align expectations and establish clear brand objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#E97451] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Market Research</h4>
                    <p className="text-white/70 leading-relaxed">
                      In-depth competitive analysis and market positioning to identify the perfect niche within aesthetic medicine.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#E97451] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Complete Rebranding</h4>
                    <p className="text-white/70 leading-relaxed">
                      Transformed the entire look and feel—logo design, color palette, typography, and visual language that reflects premium aesthetic services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#E97451] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Design Strategy</h4>
                    <p className="text-white/70 leading-relaxed">
                      Applied proven design principles and strategic thinking to create a logical, thoughtful brand identity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#E97451] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Continuous Review</h4>
                    <p className="text-white/70 leading-relaxed">
                      Regular review calls ensuring fast delivery without compromising quality, keeping the client involved throughout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Results */}
        <div
          className={`mb-16 transition-all duration-1000 delay-500 ${resultsAnimation.className}`}
          ref={resultsAnimation.ref}
        >
          <Card className="glass p-8 md:p-12" data-testid="card-results">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-tight">
              The Results
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold gradient-flow-text mb-2">70%</div>
                <p className="text-white/80 text-lg">Increase in Client Conversion</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#E97451] mb-2">100%</div>
                <p className="text-white/80 text-lg">Premium Brand Recognition</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#A855F7] mb-2">∞</div>
                <p className="text-white/80 text-lg">Enhanced Market Positioning</p>
              </div>
            </div>
            <p className="text-white/70 text-lg leading-relaxed text-center">
              The new brand identity perfectly reflects the nature of Dr. Rajpal's work, establishing his practice as a premium aesthetic medicine destination and dramatically improving client engagement and conversion rates.
            </p>
          </Card>
        </div>

        {/* Testimonial */}
        <div
          className={`transition-all duration-1000 delay-600 ${imageAnimation.className}`}
          ref={imageAnimation.ref}
        >
          <Card className="glass p-8 md:p-12" data-testid="card-testimonial">
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl text-[#E97451] mb-6">"</div>
              <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-4xl">
                My favourite agency (MFA) —just as the name suggests has truly become my go-to for any creative needs. I am Dr. Lalit Rajpal, founder of Dr Lalit Rajpal Aesthetics, and I had an excellent experience working with Mr. Pratyush and Mr. Avinash. They took the time to understand my vision and requirements in depth and put in tremendous effort to design a logo that not only looks amazing but is also created with a logical, thoughtful approach. This final result perfectly reflects the nature of my work. I strongly recommend Team MFA for anyone looking for professional, high-quality creative solutions.
              </blockquote>
              <div className="border-t border-white/20 pt-6 w-full max-w-md">
                <p className="text-white font-bold text-lg">Dr. Lalit Rajpal</p>
                <p className="text-white/60">Founder, Dr Lalit Rajpal Aesthetics</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
