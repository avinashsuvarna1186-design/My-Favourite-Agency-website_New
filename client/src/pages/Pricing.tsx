import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SwissGrid from "@/components/SwissGrid";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "wouter";
import { FloatingParticles, GlowOrbs } from "@/components/PageAnimations";
import { useState, useEffect } from "react";

export default function Pricing() {
  const [, setLocation] = useLocation();
  const headerAnimation = useScrollAnimation("fade-in");
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$5,000",
      description: "Perfect for small projects and first-time collaborations",
      features: [
        "Logo Design or Brand Guidelines",
        "Up to 2 Rounds of Revisions",
        "1 Strategic Discovery Session",
        "2 Weeks Turnaround",
        "Digital Deliverables (PNG, PDF, SVG)",
        "Email Support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      id: "professional",
      name: "Professional",
      price: "$15,000",
      description: "Most popular for complete brand identity projects",
      features: [
        "Complete Brand Identity System",
        "Logo + Brand Guidelines + Color Palette",
        "Up to 4 Rounds of Revisions",
        "2 Strategic Discovery Sessions",
        "Brand Voice & Messaging Document",
        "4 Weeks Turnaround",
        "Digital & Print-Ready Files",
        "Priority Email & Phone Support",
        "Unlimited Minor Tweaks (30 days post-launch)",
      ],
      cta: "Book Consultation",
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      description: "Comprehensive solutions for complex brand ecosystems",
      features: [
        "Full Brand Identity + Environmental Design",
        "Logo System, Guidelines, Applications",
        "Unlimited Revisions",
        "3+ Strategic Discovery Sessions",
        "Brand Voice, Messaging & Tone Guide",
        "Marketing Collateral Design",
        "Website/Digital Experience Strategy",
        "6+ Weeks Timeline (or Custom)",
        "All Deliverables (Digital, Print, Web)",
        "Dedicated Account Manager",
        "Quarterly Strategy Check-ins (1 year)",
      ],
      cta: "Contact Us",
      highlighted: false,
    },
  ];

  const handleBooking = () => {
    setLocation("/?section=contact");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black relative">
        <SwissGrid />
        
        {/* Global animated effects */}
        <GlowOrbs scrollY={scrollY} />
        <FloatingParticles count={16} color="mixed" />

        {/* Hero */}
        <section className="py-24 px-4 relative z-10">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${headerAnimation.className}`}
            ref={headerAnimation.ref}
          >
            <p className="text-[#E97451] uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-bold">
              Pricing
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6 gradient-flow-text leading-[1.2]">
              Transparent Pricing for Creative Excellence
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-[1.6]">
              Choose the package that fits your vision. All plans include strategic thinking, meticulous execution, and our commitment to transforming your brand.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`glass p-8 flex flex-col h-full transition-all duration-300 ${
                    plan.highlighted
                      ? "ring-2 ring-[#E97451] md:scale-105"
                      : "hover-elevate"
                  }`}
                  data-testid={`card-pricing-${plan.id}`}
                >
                  {plan.highlighted && (
                    <div className="bg-[#E97451] text-white px-3 py-1 rounded-full text-sm font-bold w-fit mb-4">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className="text-4xl font-bold text-[#E97451] mb-2">
                      {plan.price}
                    </div>
                    <p className="text-white/60 text-sm">
                      {plan.id === "enterprise"
                        ? "Customized to your scope"
                        : "Fixed price, clear deliverables"}
                    </p>
                  </div>

                  <Button
                    onClick={handleBooking}
                    variant={plan.highlighted ? "default" : "outline"}
                    className={`w-full mb-8 ${
                      plan.highlighted
                        ? "bg-[#E97451] hover:bg-[#E97451]/90 text-white"
                        : ""
                    }`}
                    data-testid={`button-${plan.id}`}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3 flex-1">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3"
                        data-testid={`feature-${plan.id}-${idx}`}
                      >
                        <Check className="w-5 h-5 text-[#E97451] flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto mt-20 pt-12 border-t border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What's included in revisions?",
                    a: "Each plan includes a specific number of revision rounds. We refine based on your feedback until you're satisfied. Additional revisions beyond the included rounds are billed hourly.",
                  },
                  {
                    q: "Do you offer payment plans?",
                    a: "Yes! We can discuss flexible payment terms (50% deposit, 50% on delivery) for all plans. Contact us to arrange this.",
                  },
                  {
                    q: "Can I upgrade mid-project?",
                    a: "Absolutely. If you want to upgrade from Starter to Professional, we'll adjust the investment accordingly.",
                  },
                  {
                    q: "What if I'm not satisfied?",
                    a: "Your satisfaction is our priority. We work until you're happy with the results within your plan's revision limit.",
                  },
                  {
                    q: "How do I get started?",
                    a: "Click 'Book Consultation' or 'Contact Us' to schedule a discovery call. We'll discuss your vision and recommend the right plan.",
                  },
                ].map((faq, idx) => (
                  <div key={idx} data-testid={`faq-${idx}`}>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-white/70">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
