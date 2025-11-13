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
      <div className="max-w-6xl mx-auto">
        <div ref={animation.ref} className={animation.className}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Trusted By Brands That Matter
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We've partnered with industry leaders to create exceptional brand experiences.
          </p>

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
