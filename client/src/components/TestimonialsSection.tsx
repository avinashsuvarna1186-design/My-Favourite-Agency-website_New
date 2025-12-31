import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollAnimatedWrapper from "./ScrollAnimatedWrapper";
import { useState, useRef } from "react";
import SwissGrid from "./SwissGrid";

export default function TestimonialsSection() {
  const headerAnimation = useScrollAnimation("fade-in");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 400; // w-96 + gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    scrollToCard(newIndex);
  };

  return (
    <section className="py-24 px-4 relative" data-testid="section-testimonials">
      <div className="absolute inset-0 bg-black backdrop-blur-sm" />
      
      <SwissGrid />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Swiss Typography */}
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.className}`}>
          <p className="text-3xl md:text-4xl uppercase tracking-[0.15em] text-white/60 font-medium mb-6">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-flow-text leading-[1.2] tracking-tight">
            Clients who already call us their favourite
          </h2>
        </div>

        <div className="relative">
          {/* Minimal Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 -translate-y-1/2 z-20 text-white/10 hover:text-white/30 transition-colors"
            style={{ left: '-50px' }}
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 z-20 text-white/10 hover:text-white/30 transition-colors"
            style={{ right: '-50px' }}
            data-testid="button-carousel-next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide"
          >
            {testimonials.map((testimonial, index) => {
              const animationType = index % 2 === 0 ? "slide-left" : "slide-right";
              return (
                <ScrollAnimatedWrapper key={index} animationType={animationType} delay={(index + 1) * 100}>
                  <Card 
                    className="hover-elevate active-elevate-2 flex-shrink-0 w-96 h-[500px] snap-center" 
                    data-testid={`card-testimonial-${index}`}
                    style={{
                      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(233, 116, 81, 0.6) 100%)',
                    }}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                      <p className="text-sm text-white/90 mb-4">{testimonial.title}</p>
                      
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5" style={{ fill: '#E97451', color: '#E97451' }} />
                        ))}
                      </div>
                      
                      <div className="flex-1 overflow-auto">
                        <p className="text-white/95 text-sm leading-relaxed">{testimonial.quote}</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimatedWrapper>
              );
            })}
          </div>

          {/* Minimal Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white/30 w-6' : 'bg-white/10 w-1.5'
                }`}
                data-testid={`button-carousel-dot-${index}`}
              />
            ))}
          </div>
        </div>
        
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
}
