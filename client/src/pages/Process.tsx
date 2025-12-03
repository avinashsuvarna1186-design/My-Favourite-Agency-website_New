import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ParallaxProvider, useParallaxContext } from "@/contexts/ParallaxContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MassiveText from "@/components/MassiveText";
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Rocket, 
  MessageSquare,
  Target,
  PenTool,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    description: "We dive deep into your brand's DNA. Through strategic conversations and research, we uncover what makes your business unique, identify your target audience, and understand your competitive landscape.",
    icon: Search,
    deliverables: ["Brand Audit", "Competitor Analysis", "Audience Research", "Goals Definition"],
    duration: "1-2 Weeks",
    color: "from-coral-500 to-orange-400"
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Crafting The Blueprint",
    description: "With insights in hand, we develop a comprehensive brand strategy. This becomes the foundation for every creative decision, ensuring your brand communicates with purpose and resonates with your audience.",
    icon: Target,
    deliverables: ["Brand Positioning", "Messaging Framework", "Visual Direction", "Content Strategy"],
    duration: "1-2 Weeks",
    color: "from-purple-500 to-violet-400"
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Bringing Ideas To Life",
    description: "This is where magic happens. Our designers translate strategy into stunning visuals—logos, color palettes, typography, and complete brand systems that capture your essence and stand out in the market.",
    icon: Palette,
    deliverables: ["Logo Design", "Color System", "Typography", "Brand Guidelines"],
    duration: "2-4 Weeks",
    color: "from-coral-500 to-orange-400"
  },
  {
    number: "04",
    title: "Refinement",
    subtitle: "Perfecting Every Detail",
    description: "Great design is in the details. We present concepts, gather your feedback, and iterate until every element feels perfect. This collaborative process ensures the final result exceeds expectations.",
    icon: PenTool,
    deliverables: ["Concept Presentations", "Feedback Sessions", "Design Iterations", "Final Approval"],
    duration: "1-2 Weeks",
    color: "from-purple-500 to-violet-400"
  },
  {
    number: "05",
    title: "Delivery",
    subtitle: "Launch Ready Assets",
    description: "We package everything you need for a successful launch. From print-ready files to digital assets, plus comprehensive guidelines that ensure brand consistency across all touchpoints.",
    icon: Rocket,
    deliverables: ["Asset Library", "Brand Guidelines", "File Formats", "Usage Documentation"],
    duration: "1 Week",
    color: "from-coral-500 to-orange-400"
  },
  {
    number: "06",
    title: "Support",
    subtitle: "Your Ongoing Partner",
    description: "Our relationship doesn't end at delivery. We're here to support your brand's evolution with ongoing consultations, additional design needs, and strategic guidance as your business grows.",
    icon: MessageSquare,
    deliverables: ["Priority Support", "Brand Evolution", "Additional Design", "Strategic Consulting"],
    duration: "Ongoing",
    color: "from-purple-500 to-violet-400"
  }
];

const whyOurProcess = [
  {
    icon: Lightbulb,
    title: "Strategy-First Approach",
    description: "Every design decision is rooted in research and strategy, not just aesthetics."
  },
  {
    icon: MessageSquare,
    title: "Collaborative Partnership",
    description: "You're involved at every stage. Your insights shape the final outcome."
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description: "We obsess over the little things that make big differences."
  },
  {
    icon: CheckCircle2,
    title: "Results-Driven",
    description: "We measure success by the impact on your business, not just beautiful designs."
  }
];

function ProcessStep({ step, index }: { step: typeof processSteps[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation("fade-in", { threshold: 0.2 });
  const isEven = index % 2 === 0;
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline connector */}
      {index < processSteps.length - 1 && (
        <div className="absolute left-1/2 top-full w-px h-16 md:h-24 bg-gradient-to-b from-white/20 to-transparent -translate-x-1/2 hidden md:block" />
      )}
      
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
        {/* Step Number & Icon */}
        <div className="flex-shrink-0 relative">
          <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${step.color} p-1`}>
            <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold text-white/90">{step.number}</span>
              <Icon className="w-6 h-6 md:w-8 md:h-8 text-white/70 mt-1" />
            </div>
          </div>
          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20 blur-2xl -z-10`} />
        </div>

        {/* Content Card */}
        <div className="flex-1 max-w-2xl">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                {step.title}
              </h3>
              <span className="text-sm text-white/40 bg-white/5 px-3 py-1 rounded-full">
                {step.duration}
              </span>
            </div>
            <p className="text-lg text-white/60 mb-2">{step.subtitle}</p>
            <p className="text-white/70 leading-relaxed mb-6">{step.description}</p>
            
            {/* Deliverables */}
            <div className="border-t border-white/10 pt-4">
              <p className="text-sm text-white/40 mb-3">Key Deliverables:</p>
              <div className="flex flex-wrap gap-2">
                {step.deliverables.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm bg-white/5 text-white/70 px-3 py-1.5 rounded-full border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyCard({ item, index }: { item: typeof whyOurProcess[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation("fade-in", { threshold: 0.2 });
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-coral-500/30 transition-all duration-500 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coral-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-coral-400" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
      <p className="text-white/60">{item.description}</p>
    </div>
  );
}

function ProcessContent() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation("fade-in", { threshold: 0.1 });
  const { scrollY } = useParallaxContext();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/11/07/137651-769748627_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6">
          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-coral-400 text-sm md:text-base uppercase tracking-widest mb-4">
              Our Methodology
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                A Process Built For
              </span>
              <br />
              <span className="bg-gradient-to-r from-coral-400 to-purple-400 bg-clip-text text-transparent">
                Exceptional Results
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Every great brand is born from a thoughtful process. Ours is designed to 
              uncover your unique story and transform it into a visual identity that 
              connects, inspires, and converts.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-coral-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
      </section>

      {/* Massive Text */}
      <MassiveText>PROCESS</MassiveText>

      {/* Process Steps */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-coral-400 text-sm uppercase tracking-widest mb-4">
              The MFA Difference
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Our Process Works
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We've refined our methodology over years of working with ambitious brands, 
              ensuring every project delivers transformative results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyOurProcess.map((item, index) => (
              <WhyCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-coral-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-16 border border-white/10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
                Let's discuss how our process can transform your brand into 
                something extraordinary.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
                data-testid="link-start-project"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Process() {
  return (
    <ParallaxProvider>
      <ProcessContent />
    </ParallaxProvider>
  );
}
