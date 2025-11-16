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

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Swiss Typography */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-6">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-[1.2] tracking-tight">
            Why we're different
          </h2>
        </div>

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
                  className="p-6 bg-black rounded-lg border border-destructive/30 shadow-lg hover-elevate transition-all"
                  data-testid={`comparison-old-${index}`}
                >
                  <p className="text-muted-foreground">{item.old}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2" style={{ color: '#ff6b35' }}>
              <Check className="w-6 h-6" style={{ color: '#ff6b35' }} />
              The MFA Way
            </h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-black rounded-lg shadow-xl hover-elevate transition-all relative"
                  style={{
                    boxShadow: '0 0 30px rgba(255, 107, 53, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                  }}
                  data-testid={`comparison-mfa-${index}`}
                >
                  <p className="font-bold text-lg" style={{ color: '#ff6b35' }}>{item.mfa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
