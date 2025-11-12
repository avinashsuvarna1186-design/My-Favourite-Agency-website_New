import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import work1 from "@assets/generated_images/Packaging_and_Identity_work_c57574ad.png";
import work2 from "@assets/generated_images/Website_and_Launch_work_5d61a7ac.png";
import work3 from "@assets/generated_images/Campaign_and_Motion_work_06e62a4b.png";
import work4 from "@assets/generated_images/Identity_and_Copy_work_1002e25b.png";

export default function WorkSection() {
  const headerAnimation = useScrollAnimation("fade-in");
  const projectAnimations = [
    useScrollAnimation("slide-left", { delay: 0 }),
    useScrollAnimation("slide-right", { delay: 100 }),
    useScrollAnimation("slide-left", { delay: 200 }),
    useScrollAnimation("slide-right", { delay: 300 }),
  ];

  const projects = [
    { title: "Brand A", type: "Packaging & Identity", image: work1 },
    { title: "Brand B", type: "Website & Launch", image: work2 },
    { title: "Brand C", type: "Campaign & Motion", image: work3 },
    { title: "Brand D", type: "Identity & Copy", image: work4 },
  ];

  return (
    <section id="work" className="py-24 px-4 relative" data-testid="section-work">
      <div className="absolute inset-0 bg-card/30 backdrop-blur-sm" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.className}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground spaced-text uppercase">
            Real Brands. Real Results.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const animation = projectAnimations[index];
            return (
              <div key={index} ref={animation.ref} className={animation.className}>
                <Card
                  className="overflow-hidden hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-work-${index}`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
