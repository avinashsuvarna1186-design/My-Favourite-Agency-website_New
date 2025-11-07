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
    <section className="py-24 px-4 relative" data-testid="section-comparison">
      <div className="absolute inset-0 bg-card/30 backdrop-blur-sm" />
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
                  className="p-4 bg-background rounded-md border border-destructive/20"
                  data-testid={`comparison-old-${index}`}
                >
                  <p className="text-muted-foreground">{item.old}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground text-center flex items-center justify-center gap-2">
              <Check className="w-6 h-6 text-primary" />
              The MFA Way
            </h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-background rounded-md border border-primary/30"
                  data-testid={`comparison-mfa-${index}`}
                >
                  <p className="text-foreground font-medium">{item.mfa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
