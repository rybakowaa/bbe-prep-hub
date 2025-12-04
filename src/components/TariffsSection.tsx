import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Calendar, Video, FileText, Users, MessageCircle } from "lucide-react";

const courseDetails = [
  { icon: Calendar, text: "Flexible course schedules" },
  { icon: Video, text: "Live sessions & recordings" },
  { icon: FileText, text: "Comprehensive study materials" },
  { icon: Users, text: "Small group learning" },
  { icon: MessageCircle, text: "Direct instructor access" },
];

const TariffsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Course <span className="gradient-text">Information</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to succeed in one package
          </p>
        </div>

        <div
          ref={cardRef}
          className={`opacity-0 ${cardVisible ? 'animate-scale-in' : ''}`}
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Complete BBE Preparation Package
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto text-left">
              {courseDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{detail.text}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We offer various packages tailored to your needs and timeline. 
              Get in touch to find the perfect option for you.
            </p>

            <Button variant="hero" size="xl">
              Get More Information About Tariffs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TariffsSection;
