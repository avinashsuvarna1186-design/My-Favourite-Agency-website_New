import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import VisionMissionTeamSection from "@/components/VisionMissionTeamSection";
import Footer from "@/components/Footer";
import MassiveText from "@/components/MassiveText";
import { ParallaxSection } from "@/components/ParallaxSection";

export default function About() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 bg-black overflow-hidden">
        <ParallaxSection speed={0.2}>
          <div className="absolute inset-0 opacity-70" style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(255, 0, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 30% 80%, rgba(0, 255, 157, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 90% 50%, rgba(255, 255, 0, 0.3) 0%, transparent 50%),
              linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)
            `
          }} />
          <div className="absolute inset-0 gradient-flow" style={{
            background: `
              linear-gradient(to bottom right, transparent 0%, rgba(0, 255, 255, 0.1) 25%, transparent 50%, rgba(255, 0, 255, 0.1) 75%, transparent 100%)
            `,
          }} />
          <div className="absolute inset-0 gradient-flow-alt" style={{
            background: `
              radial-gradient(circle at 40% 40%, rgba(138, 43, 226, 0.3) 0%, transparent 60%),
              radial-gradient(circle at 60% 60%, rgba(0, 255, 157, 0.3) 0%, transparent 60%)
            `,
          }} />
        </ParallaxSection>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="pt-20">
          <ParallaxSection speed={0.2}>
            <MassiveText>ABOUT</MassiveText>
          </ParallaxSection>
          <ParallaxSection speed={0.3}>
            <AboutSection />
          </ParallaxSection>
          <ParallaxSection speed={0.4}>
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
  );
}
