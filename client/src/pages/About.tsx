import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import VisionMissionTeamSection from "@/components/VisionMissionTeamSection";
import Footer from "@/components/Footer";
import MassiveText from "@/components/MassiveText";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ParallaxProvider } from "@/contexts/ParallaxContext";
import neonAbstractBg1 from "@assets/60c94c0f49222bf21cb50e38b10bd013 (1)_1763044119195.jpg";
import neonAbstractBg2 from "@assets/7113f7aa21fdc70241aa2fa6591744c9 (1)_1763044119197.jpg";
import neonAbstractBg3 from "@assets/e69d34eafa5254648e4642661bbed974 (1)_1763044119197.jpg";

export default function About() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 bg-black overflow-hidden">
        <ParallaxSection speed={0.35}>
          <div 
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: `url(${neonAbstractBg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </ParallaxSection>
        <ParallaxSection speed={0.5}>
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url(${neonAbstractBg2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              mixBlendMode: 'screen',
            }}
          />
        </ParallaxSection>
        <ParallaxSection speed={0.28}>
          <div className="absolute inset-0 opacity-30" style={{
            background: `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%)`
          }} />
        </ParallaxSection>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="pt-20">
          <ParallaxSection speed={0.28}>
            <MassiveText>ABOUT</MassiveText>
          </ParallaxSection>
          <ParallaxSection speed={0.42}>
            <AboutSection />
          </ParallaxSection>
          <ParallaxSection speed={0.56}>
            <VisionMissionTeamSection />
          </ParallaxSection>
        </main>
        <Footer />
      </div>
      
      <style>{`
        @keyframes gradientFlow {
          0%, 100% {
            opacity: 0.6;
            transform: rotate(0deg) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: rotate(5deg) scale(1.1);
          }
        }
        
        @keyframes gradientFlowAlt {
          0%, 100% {
            opacity: 0.5;
            transform: translate(0, 0) scale(1);
          }
          33% {
            opacity: 0.7;
            transform: translate(5%, 5%) scale(1.05);
          }
          66% {
            opacity: 0.6;
            transform: translate(-5%, 3%) scale(1.08);
          }
        }
        
        .gradient-flow {
          animation: gradientFlow 20s ease-in-out infinite;
        }
        
        .gradient-flow-alt {
          animation: gradientFlowAlt 25s ease-in-out infinite;
        }
      `}</style>
    </div>
    </ParallaxProvider>
  );
}
