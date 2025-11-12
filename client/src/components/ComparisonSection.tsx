import { X, Check } from "lucide-react";

export default function ComparisonSection() {
  const comparisons = [
    { old: "Designers only execute", mfa: "Designers pitch, own & lead" },
    { old: "Briefs are vague", mfa: "We co-build the brief" },
    { old: "Feedback is chaos", mfa: "Feedback is sacred" },
    { old: "Copy & design separate", mfa: "Copy + design, always paired" },
    { old: "No accountability", mfa: "We own the outcome" },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden" data-testid="section-comparison">
      {/* Option 1: Diagonal Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
      
      {/* Option 2: Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Option 3: Split Color Blocks */}
      <div className="absolute inset-0 flex">
        <div className="flex-1 bg-destructive/5" />
        <div className="flex-1 bg-primary/5" />
      </div>
      
      {/* Subtle overlay to blend everything */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          Why we're different
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-muted-foreground text-center flex items-center justify-center gap-2">
              <X className="w-6 h-6 text-destructive" />
              The Old Way
            </h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-destructive/30 shadow-lg hover-elevate transition-all"
                  data-testid={`comparison-old-${index}`}
                >
                  <p className="text-muted-foreground">{item.old}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary text-center flex items-center justify-center gap-2">
              <Check className="w-6 h-6 text-primary" />
              The MFA Way
            </h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border-2 border-primary shadow-xl hover-elevate transition-all relative"
                  style={{
                    boxShadow: '0 0 30px rgba(255, 184, 77, 0.15), 0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                  }}
                  data-testid={`comparison-mfa-${index}`}
                >
                  <p className="text-foreground font-semibold">{item.mfa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
