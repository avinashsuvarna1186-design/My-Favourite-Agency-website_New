import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { SiDribbble } from "react-icons/si";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollAnimatedWrapper from "./ScrollAnimatedWrapper";
import SwissGrid from "./SwissGrid";

export default function ContactSection() {
  const headerAnimation = useScrollAnimation("fade-in");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:hello@myfavourite.agency?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919919919301?text=Hi%20MFA%20—%20I'd%20like%20to%20talk%20about%20a%20project",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 px-4 relative" data-testid="section-contact">
      <SwissGrid />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Swiss Typography */}
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.className}`}>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-6">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase gradient-flow-text leading-[1.2] tracking-tight">
            Let's Talk
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-[1.6] font-normal">
            Let's make your brand sabse favourite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollAnimatedWrapper animationType="slide-left" delay={100}>
            <Card className="h-full">
              <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    data-testid="input-message"
                  />
                </div>
                <div className="flex gap-3">
                  <Button type="submit" className="flex-1" data-testid="button-send-email">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={handleWhatsApp}
                    data-testid="button-whatsapp-contact"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          </ScrollAnimatedWrapper>

          <ScrollAnimatedWrapper animationType="slide-right" delay={200}>
            <Card className="h-full">
              <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:hello@myfavourite.agency"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      hello@myfavourite.agency
                    </a>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-3">Social</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-md bg-icon-surface flex items-center justify-center hover-elevate active-elevate-2 transition-colors"
                      data-testid="link-instagram"
                    >
                      <Instagram className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-md bg-icon-surface flex items-center justify-center hover-elevate active-elevate-2 transition-colors"
                      data-testid="link-dribbble"
                    >
                      <SiDribbble className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-md bg-icon-surface flex items-center justify-center hover-elevate active-elevate-2 transition-colors"
                      data-testid="link-linkedin"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </ScrollAnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
