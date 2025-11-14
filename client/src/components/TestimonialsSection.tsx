import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollAnimatedWrapper from "./ScrollAnimatedWrapper";

export default function TestimonialsSection() {
  const headerAnimation = useScrollAnimation("fade-in");

  const testimonials = [
    {
      name: "Dr. Pratip Nag",
      title: "Founder, Enlightened Connection",
      quote: "Enlightened Connections is a unique company. We were searching for an agency who could help us capture the essence of our mission and vision. After doing a lot of research we decided to engage with My Favourite Agency (MFA) to develop our Corporate Identity. Avinash and Pratyush were just the right people to understand our this vision. They took the time to understand our values and what we were trying to build and communicate in our branding. The agency spent a lot of time to develop innovative and unique logos and other collaterals for our company. They were meticulous in their design and did an exceptional job in helping us develop all our collaterals. They were timely and cost effective. This team was truly caring and helped Enlightened Connections launch in our industry. I would strongly recommend this agency to anyone who is looking for a state of the art and innovative team who truly cares about your success!",
    },
    {
      name: "Dr. Lalit Rajpal",
      title: "Founder, Dr Lalit Rajpal Aesthetics",
      quote: "My favourite agency (MFA) —just as the name suggests has truly become my go-to for any creative needs. I am Dr. Lalit Rajpal, founder of Dr Lalit Rajpal Aesthetics, and I had an excellent experience working with Mr. Pratyush and Mr. Avinash. They took the time to understand my vision and requirements in depth and put in tremendous effort to design a logo that not only looks amazing but is also created with a logical, thoughtful approach. This final result perfectly reflects the nature of my work. I strongly recommend Team MFA for anyone looking for professional, high-quality creative solutions",
    },
    {
      name: "Prateek Maan",
      title: "Founder, Dreamland Hotels & Resorts",
      quote: "My Favorite Agency is my trusted partner for branding, social media, and creative design. Their expertise and eye for detail are unmatched, and they truly understand client needs. The logo they created for my hotel brand was spot-on and beyond my expectations, which elevated the presence of my brand tremendously. They also manage social media for my hotels and other brands, and I've no to understand and track progress.",
    },
    {
      name: "Manisha Ahuja Jaggi",
      title: "Founder, Mind Spa by Manisha",
      quote: "Working with Avinash to create my Mind Spa by Manisha logo was an absolute delight. He truly understood my vision and translated it into a design that perfectly reflects the calm, healing, and nurturing energy my brand represents. His creativity, attention to detail, and ability to capture the essence of my brand in a simple yet impactful way were remarkable. I would highly recommend MFA (My Favorite Agency) to anyone looking for a creative agency who blends art with genuine passion.",
    },
  ];

  return (
    <section className="py-24 px-4 relative" data-testid="section-testimonials">
      <div className="absolute inset-0 bg-card/30 backdrop-blur-sm" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.className}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase gradient-wave-text">Client Love</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => {
            const animationType = index % 2 === 0 ? "slide-left" : "slide-right";
            return (
              <ScrollAnimatedWrapper key={index} animationType={animationType} delay={(index + 1) * 100}>
                <Card 
                  className="hover-elevate active-elevate-2 h-full border-none" 
                  data-testid={`card-testimonial-${index}`}
                  style={{
                    background: 'linear-gradient(90deg, #000000 0%, #ff6d00 100%)',
                  }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-white/90 mb-4">{testimonial.title}</p>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-white text-white" />
                      ))}
                    </div>
                    
                    <p className="text-white/95 text-sm leading-relaxed">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              </ScrollAnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
