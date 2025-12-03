import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";
import BookingModal from "./BookingModal";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const heroElement = document.querySelector("main > section:first-child");
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      contactSection.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed bottom-8 right-8 z-50 animate-in fade-in slide-in-from-bottom-4 flex flex-col gap-3"
        data-testid="floating-cta"
      >
        <Button 
          size="lg"
          variant="outline"
          onClick={() => setBookingOpen(true)}
          className="backdrop-blur-md bg-background/80 shadow-lg shadow-primary/10 gap-2 group border-2"
          data-testid="button-book-call"
        >
          <CalendarDays className="w-4 h-4" />
          <span>Book a Call</span>
        </Button>
        <Button 
          size="lg"
          variant="outline"
          onClick={scrollToContact}
          className="backdrop-blur-md bg-background/80 shadow-lg shadow-primary/10 gap-2 group border-2"
          data-testid="button-floating-cta"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
