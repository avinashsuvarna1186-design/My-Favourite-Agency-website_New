import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import prattyushPhoto from "@assets/Gemini_Generated_Image_txklxktxklxktxkl_1762517928496.png";
import avinashPhoto from "@assets/Gemini_Generated_Image_hmkgtuhmkgtuhmkg_1762517890408.png";
import SwissGrid from "./SwissGrid";

export default function FoundersSection() {
  const animation = useScrollAnimation("fade-in", { delay: 100 });

  const founders = [
    {
      name: "Prattyush Nag",
      role: "Founder & Brand Architect",
      image: prattyushPhoto,
      imagePosition: "center -10%",
      description: "Gives your brand a soul (and swagger).",
    },
    {
      name: "Avinash Suvarna",
      role: "Founder & Design Architect",
      image: avinashPhoto,
      imagePosition: "center 20%",
      description: "Makes the magic happen.",
    },
  ];

  return (
    <section className="py-24 px-4 relative" data-testid="section-founders">
      <SwissGrid />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={animation.ref} className={animation.className}>
          {/* Swiss Typography */}
          <div className="text-center mb-16">
            <p className="text-3xl md:text-4xl uppercase tracking-[0.15em] text-white/60 font-medium mb-6">
              Leadership
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-flow-text leading-[1.2] tracking-tight mb-4">
              We Are
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="text-center group"
                data-testid={`founder-${index}`}
              >
                <Avatar className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <AvatarImage
                    src={founder.image}
                    alt={founder.name}
                    className="scale-110 object-cover"
                    style={{ objectPosition: founder.imagePosition }}
                  />
                  <AvatarFallback className="bg-icon-surface text-4xl font-bold text-primary">
                    {founder.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                  {founder.name}
                </h3>
                <p className="text-primary font-medium mb-3">{founder.role}</p>
                <p className="text-muted-foreground italic text-lg">
                  "{founder.description}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
