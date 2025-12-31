import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SwissGrid from "./SwissGrid";

export default function ClientLogosSection() {
  const animation = useScrollAnimation("fade-in", { delay: 100 });

  const clients = [
    "Airbnb", "Stripe", "Google", "Netflix", "Spotify",
    "Adobe", "Microsoft", "Apple", "Amazon", "Meta",
    "Tesla", "Nike", "Adidas", "Samsung", "Sony",
    "Coca-Cola", "Pepsi", "Uber", "Lyft", "Shopify",
  ];

  return (
    <section className="py-24 px-4 relative hidden" data-testid="section-clients">
      <SwissGrid />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={animation.ref} className={animation.className}>
          {/* Swiss Typography */}
          <div className="text-center mb-12">
            <p className="text-3xl md:text-4xl uppercase tracking-[0.15em] text-white/60 font-medium mb-6">
              Our Clients
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-flow-text leading-[1.2] tracking-tight mb-4">
              Trusted By Brands That Matter
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-[1.6] font-normal whitespace-nowrap">
              We've partnered with industry leaders to create exceptional brand experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 group cursor-pointer hover-elevate active-elevate-2 rounded-lg transition-all"
                data-testid={`client-logo-${index}`}
              >
                <span className="text-xl md:text-2xl font-bold text-muted-foreground/40 group-hover:text-foreground transition-colors duration-300">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
