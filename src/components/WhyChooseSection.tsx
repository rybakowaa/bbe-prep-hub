import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, Users, Clock, FileCheck } from "lucide-react";

const reasons = [
  {
    Icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Full coverage of all exam topics including mathematics, economics and english.",
    number: "01",
  },
  {
    Icon: Users,
    title: "Expert Instructors",
    description: "Learn from students who got into BBE and experienced tutors who know exactly what it takes to succeed.",
    number: "02",
  },
  {
    Icon: Clock,
    title: "Flexible Schedule",
    description: "Study at your own pace with recorded sessions and live Q&A opportunities.",
    number: "03",
  },
  {
    Icon: FileCheck,
    title: "Mock Exams",
    description: "Practice with realistic exam simulations to build confidence and identify weak areas.",
    number: "04",
  },
];

const WhyChooseSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div ref={sectionRef} className={`grid md:grid-cols-12 gap-16 md:gap-24 opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}>
          
          {/* Left Column - Title */}
          <div className="md:col-span-4 lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-6">
              Why choose <br/> <span className="gradient-text">BBE Club?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-sm">
              We focus on what truly matters for the entrance exam, cutting through the noise.
            </p>
          </div>

          {/* Right Column - List */}
          <div className="md:col-span-8 lg:col-span-7">
            <div className="space-y-12">
              {reasons.map((reason, index) => {
                const Icon = reason.Icon;
                return (
                  <div key={index} className="flex flex-col md:flex-row md:items-start gap-6 border-b border-white/10 pb-12 last:border-0 last:pb-0 group">
                    <div className="flex-shrink-0">
                         <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/10">
                            <Icon className="w-6 h-6 text-white" />
                         </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium mb-3">{reason.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-lg max-w-lg">
                            {reason.description}
                        </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
