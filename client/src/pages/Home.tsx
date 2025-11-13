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
import neonAbstractBg1 from "@assets/60c94c0f49222bf21cb50e38b10bd013 (1)_1763044119195.jpg";
import neonAbstractBg2 from "@assets/7113f7aa21fdc70241aa2fa6591744c9 (1)_1763044119197.jpg";
import neonAbstractBg3 from "@assets/e69d34eafa5254648e4642661bbed974 (1)_1763044119197.jpg";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 bg-black overflow-hidden">
        <ParallaxSection speed={0.35}>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${neonAbstractBg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.9,
            }}
          />
        </ParallaxSection>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          
          <ParallaxSection speed={0.42}>
            <StatsSection />
          </ParallaxSection>

          <NameMarquee 
            names={["prattyush", "avinash", "sajjad", "juie", "strategy", "design", "content", "branding"]} 
            direction="left"
          />
          
          <ParallaxSection speed={0.42}>
            <AboutSection />
          </ParallaxSection>

          <NameMarquee 
            names={["brand identity", "visual design", "creative strategy", "digital experiences"]} 
            direction="right"
          />
          
          <ParallaxSection speed={0.56}>
            <ComparisonSection />
          </ParallaxSection>

          <ParallaxSection speed={0.56}>
            <HowWeWorkSection />
          </ParallaxSection>

          <ParallaxSection speed={0.42}>
            <FoundersSection />
          </ParallaxSection>

          <DepartmentShowcase />
          
          <ParallaxSection speed={0.7}>
            <ServicesSection />
          </ParallaxSection>

          <NameMarquee 
            names={["The people you call when the deadline's weird and the brief's weirder", "The people you call when the deadline's weird and the brief's weirder", "The people you call when the deadline's weird and the brief's weirder"]} 
            direction="right"
          />
          
          <EnhancedWorkSection />

          <VideoShowreel />

          <NameMarquee 
            names={["discover", "define", "design", "deliver", "delight"]} 
            direction="left"
          />

          <ParallaxSection speed={0.42}>
            <ClientLogosSection />
          </ParallaxSection>

          <NameMarquee 
            names={["our clients", "our partners", "our collaborators", "our friends"]} 
            direction="right"
          />
          
          <ParallaxSection speed={0.28}>
            <MassiveText>TESTIMONIALS</MassiveText>
          </ParallaxSection>
          
          <ParallaxSection speed={0.7}>
            <TestimonialsSection />
          </ParallaxSection>

          <NameMarquee 
            names={["let's talk", "let's collaborate", "let's create", "let's build"]} 
            direction="left"
          />
          
          <ParallaxSection speed={0.28}>
            <MassiveText>CONTACT</MassiveText>
          </ParallaxSection>
          
          <ParallaxSection speed={0.56}>
            <EnhancedContactForm />
          </ParallaxSection>

          <ParallaxSection speed={0.42}>
            <ContactSection />
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
