import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "MFA transformed our brand — strategic, creative and fast. They felt like our in-house team.",
      client: "Client X",
    },
    {
      quote: "The design and copy were spot on. The team actually owned the outcome.",
      client: "Client Y",
    },
  ];

  return (
    <section className="py-24 px-4 relative" data-testid="section-testimonials">
      <div className="absolute inset-0 bg-card/30 backdrop-blur-sm" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What our clients say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate active-elevate-2" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-lg text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <p className="text-sm text-muted-foreground font-medium">— {testimonial.client}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
