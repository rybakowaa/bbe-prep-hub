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
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why choose <span className="gradient-text">BBE Club</span> course preparation?
          </h2>
        </div>

        {/* 2x2 Grid of cards */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-6 opacity-0 ${cardsVisible ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.Icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Number badge */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-gray-100 select-none">
                  {reason.number}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 p-[2px]">
                      <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
