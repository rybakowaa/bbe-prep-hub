import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, Users, Target, Clock, Award, Sparkles } from "lucide-react";

const courseFeatures = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Full coverage of all exam topics including mathematics, logic, and text comprehension.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from BBE alumni and experienced tutors who know exactly what it takes to succeed.",
  },
  {
    icon: Target,
    title: "Proven Strategies",
    description: "Master time management and question-solving techniques that maximize your score.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Study at your own pace with recorded sessions and live Q&A opportunities.",
  },
  {
    icon: Award,
    title: "Mock Exams",
    description: "Practice with realistic exam simulations to build confidence and identify weak areas.",
  },
  {
    icon: Sparkles,
    title: "Personal Feedback",
    description: "Receive individualized guidance to optimize your preparation journey.",
  },
];

const CourseSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Introducing <span className="gradient-text">Our Course</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive preparation program designed to give you the competitive edge 
            you need to secure your spot in the BBE program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  feature, 
  index 
}: { 
  feature: typeof courseFeatures[0]; 
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? 'animate-scale-in' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="glass-card rounded-2xl p-6 h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 group">
        <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-foreground" />
        </div>
        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
        <p className="text-muted-foreground">{feature.description}</p>
      </div>
    </div>
  );
};

export default CourseSection;
