import logoImage from "@assets/My Favourite Agency Final logo-01_1762515488908.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-border" data-testid="footer-main">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <img src={logoImage} alt="My Favourite Agency Logo" className="h-12 object-contain" />
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              The people you call when the deadline's weird and the brief's weirder.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-work"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-services"
            >
              Services
            </button>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-privacy"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-terms"
            >
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2024 My Favourite Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
