import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, TrendingUp, Heart, Shield } from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Highest Success Rate",
    description: "Our students consistently achieve acceptance rates far above the average.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Methods",
    description: "We analyze past exams to deliver the most relevant and effective preparation.",
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "Join a network of motivated students and alumni who support each other.",
  },
  {
    icon: Shield,
    title: "Trusted by Hundreds",
    description: "Years of experience helping students achieve their academic dreams.",
  },
];

const WhyChooseSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">BBE Club?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            What sets us apart from the rest
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReasonCard = ({ 
  reason, 
  index 
}: { 
  reason: typeof reasons[0]; 
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const Icon = reason.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? (isEven ? 'animate-slide-right' : 'animate-slide-left') : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex gap-5 p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300 group">
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
