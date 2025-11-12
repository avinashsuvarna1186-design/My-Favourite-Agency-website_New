import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MassiveText from "@/components/MassiveText";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 bg-black overflow-hidden">
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
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ComparisonSection />
          <MassiveText>SERVICES</MassiveText>
          <ServicesSection />
          <MassiveText>WORK</MassiveText>
          <WorkSection />
          <HowWeWorkSection />
          <MassiveText>TESTIMONIALS</MassiveText>
          <TestimonialsSection />
          <MassiveText>CONTACT</MassiveText>
          <ContactSection />
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
