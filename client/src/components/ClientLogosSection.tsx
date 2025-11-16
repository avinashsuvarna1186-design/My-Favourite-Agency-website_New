import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ClientLogosSection() {
  const animation = useScrollAnimation("fade-in", { delay: 100 });

  const clients = [
    "Airbnb", "Stripe", "Google", "Netflix", "Spotify",
    "Adobe", "Microsoft", "Apple", "Amazon", "Meta",
    "Tesla", "Nike", "Adidas", "Samsung", "Sony",
    "Coca-Cola", "Pepsi", "Uber", "Lyft", "Shopify",
  ];

  return (
    <section className="py-24 px-4 relative" data-testid="section-clients">
      {/* Swiss Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* Vertical grid lines - 12 column grid */}
        {[...Array(13)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-white"
            style={{ left: `${(i / 12) * 100}%` }}
          />
        ))}
        
        {/* Horizontal grid lines - 8 row grid */}
        {[...Array(9)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-white"
            style={{ top: `${(i / 8) * 100}%` }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={animation.ref} className={animation.className}>
          {/* Swiss Typography */}
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-6">
              Our Clients
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] tracking-tight mb-4">
              Trusted By Brands That Matter
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-[1.6] font-normal">
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
