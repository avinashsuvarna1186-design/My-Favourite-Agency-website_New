import { useState, useEffect } from "react";
import { Link, useLocation, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import logoImage from "@assets/My Favourite Agency Final logo-01_1762515488908.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle pending scroll after navigation
  useEffect(() => {
    if (pendingScroll && location === "/") {
      setTimeout(() => {
        const element = document.getElementById(pendingScroll);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        setPendingScroll(null);
      }, 100);
    }
  }, [location, pendingScroll]);

  // Handle hash navigation on mount
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && location === "/") {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (location === "/") {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page, then scroll
      setPendingScroll(sectionId);
      navigate("/");
    }
  };

  const navItems = [
    { label: "Home", path: "/", isLink: true },
    { label: "About", path: "/about", isLink: true },
    { label: "Work", path: "/work", isLink: true },
    { label: "Process", path: "/process", isLink: true },
    { label: "Pricing", path: "/pricing", isLink: true },
    { label: "Services", id: "services", isLink: false },
    { label: "Contact", id: "contact", isLink: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
      data-testid="header-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2" data-testid="link-logo">
            <img src={logoImage} alt="My Favourite Agency Logo" className="h-[98px] object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.label}
                  href={item.path!}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 rounded-md transition-colors"
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id!)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 rounded-md transition-colors"
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              )
            ))}
            <a
              href="https://wa.me/919919919301"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp-header"
            >
              <Button variant="default" size="sm" className="ml-2 gap-2" style={{ backgroundColor: '#E97451', borderColor: '#E97451' }}>
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.label}
                    href={item.path!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 rounded-md"
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id!)}
                    className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 rounded-md"
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </button>
                )
              ))}
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
                data-testid="button-whatsapp-mobile"
              >
                <Button variant="default" size="sm" className="w-full gap-2" style={{ backgroundColor: '#E97451', borderColor: '#E97451' }}>
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
