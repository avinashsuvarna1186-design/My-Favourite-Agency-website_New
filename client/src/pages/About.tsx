import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import VisionMissionTeamSection from "@/components/VisionMissionTeamSection";
import Footer from "@/components/Footer";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ParallaxProvider } from "@/contexts/ParallaxContext";

export default function About() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen relative bg-black">
        {/* Galactic video background with dark overlay */}
        <div className="fixed inset-0 z-0 bg-black overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            style={{ filter: "brightness(0.4)" }}
          >
            <source
              src="https://cdn.pixabay.com/video/2022/11/07/137651-769748627_large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10">
          <Header />
          <main className="pt-20">
            {/* Hero section with centered title */}
            <section className="py-32 px-4 relative">
              <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold gradient-flow-text mb-8 tracking-tight leading-[1.1]">
                  ABOUT US
                </h1>
                <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  We're not your typical agency. We're the ones you call when mediocrity isn't an option.
                </p>
              </div>
            </section>

            <ParallaxSection speed={0.42}>
              <AboutSection />
            </ParallaxSection>
            
            <ParallaxSection speed={0.56}>
              <VisionMissionTeamSection />
            </ParallaxSection>
          </main>
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
}
