import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MassiveText from "@/components/MassiveText";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ParallaxProvider } from "@/contexts/ParallaxContext";
import StatsSection from "@/components/StatsSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import NameMarquee from "@/components/NameMarquee";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import FoundersSection from "@/components/FoundersSection";
import DepartmentShowcase from "@/components/DepartmentShowcase";
import EnhancedWorkSection from "@/components/EnhancedWorkSection";
import VideoShowreel from "@/components/VideoShowreel";
import FloatingCTA from "@/components/FloatingCTA";
import neonAbstractBg from "@assets/60c94c0f49222bf21cb50e38b10bd013 (1)_1763043607768.jpg";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 bg-black overflow-hidden">
        <ParallaxSection speed={0.4}>
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `url(${neonAbstractBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </ParallaxSection>
        <ParallaxSection speed={0.28}>
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
        <main>
          <HeroSection />
          
          <ParallaxSection speed={0.42}>
            <div className="bg-background/95">
              <StatsSection />
            </div>
          </ParallaxSection>

          <NameMarquee 
            names={["prattyush", "avinash", "sajjad", "juie", "strategy", "design", "content", "branding"]} 
            direction="left"
          />
          
          <ParallaxSection speed={0.42}>
            <div className="bg-background/90">
              <AboutSection />
            </div>
          </ParallaxSection>

          <NameMarquee 
            names={["brand identity", "visual design", "creative strategy", "digital experiences"]} 
            direction="right"
          />
          
          <ParallaxSection speed={0.56}>
            <div className="bg-background/95">
              <ComparisonSection />
            </div>
          </ParallaxSection>

          <ParallaxSection speed={0.42}>
            <div className="bg-background/90">
              <FoundersSection />
            </div>
          </ParallaxSection>

          <div className="bg-background/95">
            <DepartmentShowcase />
          </div>
          
          <ParallaxSection speed={0.7}>
            <div className="bg-background/95">
              <ServicesSection />
            </div>
          </ParallaxSection>

          <NameMarquee 
            names={["The people you call when the deadline's weird and the brief's weirder", "The people you call when the deadline's weird and the brief's weirder", "The people you call when the deadline's weird and the brief's weirder"]} 
            direction="right"
          />
          
          <div className="bg-background/85">
            <EnhancedWorkSection />
          </div>

          <div className="bg-background/90 backdrop-blur-sm">
            <VideoShowreel />
          </div>

          <NameMarquee 
            names={["discover", "define", "design", "deliver", "delight"]} 
            direction="left"
          />
          
          <ParallaxSection speed={0.56}>
            <div className="bg-background/95">
              <HowWeWorkSection />
            </div>
          </ParallaxSection>

          <ParallaxSection speed={0.42}>
            <div className="bg-background/90">
              <ClientLogosSection />
            </div>
          </ParallaxSection>

          <NameMarquee 
            names={["our clients", "our partners", "our collaborators", "our friends"]} 
            direction="right"
          />
          
          <ParallaxSection speed={0.28}>
            <MassiveText>TESTIMONIALS</MassiveText>
          </ParallaxSection>
          
          <ParallaxSection speed={0.7}>
            <div className="bg-background/95">
              <TestimonialsSection />
            </div>
          </ParallaxSection>

          <NameMarquee 
            names={["let's talk", "let's collaborate", "let's create", "let's build"]} 
            direction="left"
          />
          
          <ParallaxSection speed={0.28}>
            <MassiveText>CONTACT</MassiveText>
          </ParallaxSection>
          
          <ParallaxSection speed={0.56}>
            <div className="bg-background/90">
              <EnhancedContactForm />
            </div>
          </ParallaxSection>

          <ParallaxSection speed={0.42}>
            <div className="bg-background/95">
              <ContactSection />
            </div>
          </ParallaxSection>
        </main>
        <Footer />
        <FloatingCTA />
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
