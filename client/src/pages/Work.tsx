import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCaseStudies from "@/components/WorkCaseStudies";
import EnhancedWorkSection from "@/components/EnhancedWorkSection";
import NameMarquee from "@/components/NameMarquee";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ParallaxProvider, useParallaxContext } from "@/contexts/ParallaxContext";
import { FloatingParticles, GlowOrbs } from "@/components/PageAnimations";

function WorkContent() {
  const { scrollY } = useParallaxContext();
  
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 bg-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          style={{
            filter: 'brightness(0.6) saturate(1.2)',
          }}
        >
          <source src="https://cdn.pixabay.com/video/2022/11/07/137651-769748627_large.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Global animated effects */}
      <GlowOrbs scrollY={scrollY} />
      <FloatingParticles count={16} color="mixed" />

      <div className="relative z-10">
          <Header />
          <main>
            <section className="py-32 px-4 relative">
              <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6 gradient-flow-text leading-[1.2]">
                  Our Work
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-[1.6] font-normal">
                  Explore the transformative projects that define our agency
                </p>
              </div>
            </section>

            <NameMarquee
              names={["portfolio", "case studies", "success stories", "client work"]}
              direction="left"
            />

            <ParallaxSection speed={0.5}>
              <EnhancedWorkSection />
            </ParallaxSection>

            <NameMarquee
              names={["design excellence", "strategic thinking", "creative solutions", "measurable results"]}
              direction="right"
            />

            <ParallaxSection speed={0.42}>
              <WorkCaseStudies />
            </ParallaxSection>

            <NameMarquee
              names={["let's create together", "start your project", "transform your brand", "make an impact"]}
              direction="left"
            />
          </main>
          <Footer />
        </div>
      </div>
  );
}

export default function Work() {
  return (
    <ParallaxProvider>
      <WorkContent />
    </ParallaxProvider>
  );
}
