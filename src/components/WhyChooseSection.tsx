import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ImageIcon } from "lucide-react";

// Custom icon components with gradient backgrounds
const BookIcon = () => (
  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-purple-100 flex items-center justify-center">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  </div>
);

const InstructorIcon = () => (
  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-purple-100 flex items-center justify-center">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  </div>
);

const ScheduleIcon = () => (
  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-purple-100 flex items-center justify-center">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  </div>
);

const ExamIcon = () => (
  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-purple-100 flex items-center justify-center">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  </div>
);

const reasons = [
  {
    IconComponent: BookIcon,
    title: "Comprehensive Curriculum",
    description: "Full coverage of all exam topics including mathematics, economics and english.",
    actionWords: ["LEARN", "REPEAT", "BE PREPARED"],
    imagePlaceholder: true,
    isWide: true,
  },
  {
    IconComponent: InstructorIcon,
    title: "Expert Instructors",
    description: "Learn from BBE alumni and experienced tutors who know exactly what it takes to succeed.",
    actionWords: ["LISTEN", "ASK QUESTIONS", "BE PREPARED"],
    imagePlaceholder: true,
    isWide: false,
  },
  {
    IconComponent: ScheduleIcon,
    title: "Flexible Schedule",
    description: "Study at your own pace with recorded sessions and live Q&A opportunities.",
    actionWords: ["SCHEDULE", "REWATCH", "BE PREPARED"],
    imagePlaceholder: true,
    isWide: false,
  },
  {
    IconComponent: ExamIcon,
    title: "Mock Exams",
    description: "Practice with realistic exam simulations to build confidence and identify weak areas.",
    actionWords: ["PRACTICE", "SIMULATE EXAM", "BE PREPARED"],
    imagePlaceholder: true,
    isWide: false,
  },
];

const WhyChooseSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-5xl mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why choose <span className="gradient-text">BBE Club</span> course preparation?
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {reasons.map((reason, index) => (
          <ReasonCard key={index} reason={reason} index={index} />
        ))}
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
  const IconComponent = reason.IconComponent;
  const isEven = index % 2 === 0;

  // First card (Comprehensive Curriculum) - wide version
  if (index === 0) {
    return (
      <div
        ref={ref}
        className={`opacity-0 ${isVisible ? 'animate-scale-in' : ''}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="grid md:grid-cols-[1fr_1fr] gap-0 items-stretch">
          {/* Wide text card - starts from left edge */}
          <div className="bg-white p-8 md:p-12 hover:shadow-2xl transition-all duration-300 group flex border border-gray-200">
            {/* Left side: Icon + Title + Description */}
            <div className="flex-1 flex flex-col justify-center pr-8">
              <div className="mb-4 group-hover:scale-110 transition-transform">
                <IconComponent />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground text-base">{reason.description}</p>
            </div>
            
            {/* Right side: Action words */}
            <div className="flex flex-col justify-center gap-3 min-w-[160px] pl-8 border-l border-gray-200">
              {reason.actionWords.map((word, i) => (
                <span 
                  key={i} 
                  className="text-base font-semibold text-foreground underline underline-offset-4 decoration-2"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
          
          {/* Image placeholder */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-dashed border-primary/30 flex items-center justify-center min-h-[250px]">
            <div className="text-center text-muted-foreground">
              <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Image placeholder</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Second card (Expert Instructors) - wide version on right side
  if (index === 1) {
    return (
      <div
        ref={ref}
        className={`opacity-0 ${isVisible ? 'animate-scale-in' : ''}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="grid md:grid-cols-[1fr_1fr] gap-0 items-stretch">
          {/* Image placeholder - on left */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-dashed border-primary/30 flex items-center justify-center min-h-[250px]">
            <div className="text-center text-muted-foreground">
              <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Image placeholder</p>
            </div>
          </div>
          
          {/* Wide text card - on right, ends at right edge */}
          <div className="bg-white p-8 md:p-12 hover:shadow-2xl transition-all duration-300 group flex border border-gray-200">
            {/* Left side: Icon + Title + Description */}
            <div className="flex-1 flex flex-col justify-center pr-8">
              <div className="mb-4 group-hover:scale-110 transition-transform">
                <IconComponent />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground text-base">{reason.description}</p>
            </div>
            
            {/* Right side: Action words */}
            <div className="flex flex-col justify-center gap-3 min-w-[160px] pl-8 border-l border-gray-200">
              {reason.actionWords.map((word, i) => (
                <span 
                  key={i} 
                  className="text-base font-semibold text-foreground underline underline-offset-4 decoration-2"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Third card (Flexible Schedule) - wide version like first card
  if (index === 2) {
    return (
      <div
        ref={ref}
        className={`opacity-0 ${isVisible ? 'animate-scale-in' : ''}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="grid md:grid-cols-[1fr_1fr] gap-0 items-stretch">
          {/* Wide text card - starts from left edge */}
          <div className="bg-white p-8 md:p-12 hover:shadow-2xl transition-all duration-300 group flex border border-gray-200">
            {/* Left side: Icon + Title + Description */}
            <div className="flex-1 flex flex-col justify-center pr-8">
              <div className="mb-4 group-hover:scale-110 transition-transform">
                <IconComponent />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground text-base">{reason.description}</p>
            </div>
            
            {/* Right side: Action words */}
            <div className="flex flex-col justify-center gap-3 min-w-[160px] pl-8 border-l border-gray-200">
              {reason.actionWords.map((word, i) => (
                <span 
                  key={i} 
                  className="text-base font-semibold text-foreground underline underline-offset-4 decoration-2"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
          
          {/* Image placeholder */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-dashed border-primary/30 flex items-center justify-center min-h-[250px]">
            <div className="text-center text-muted-foreground">
              <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Image placeholder</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fourth card (Mock Exams) - wide version on right side like Expert Instructors
  if (index === 3) {
    return (
      <div
        ref={ref}
        className={`opacity-0 ${isVisible ? 'animate-scale-in' : ''}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="grid md:grid-cols-[1fr_1fr] gap-0 items-stretch">
          {/* Image placeholder - on left */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-dashed border-primary/30 flex items-center justify-center min-h-[250px]">
            <div className="text-center text-muted-foreground">
              <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Image placeholder</p>
            </div>
          </div>
          
          {/* Wide text card - on right, ends at right edge */}
          <div className="bg-white p-8 md:p-12 hover:shadow-2xl transition-all duration-300 group flex border border-gray-200">
            {/* Left side: Icon + Title + Description */}
            <div className="flex-1 flex flex-col justify-center pr-8">
              <div className="mb-4 group-hover:scale-110 transition-transform">
                <IconComponent />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground text-base">{reason.description}</p>
            </div>
            
            {/* Right side: Action words */}
            <div className="flex flex-col justify-center gap-3 min-w-[160px] pl-8 border-l border-gray-200">
              {reason.actionWords.map((word, i) => (
                <span 
                  key={i} 
                  className="text-base font-semibold text-foreground underline underline-offset-4 decoration-2"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Other cards - original style (fallback)
  return (
    <div
      ref={ref}
      className={`opacity-0 max-w-5xl mx-auto px-4 ${isVisible ? 'animate-scale-in' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`grid md:grid-cols-2 gap-6 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
        {/* Text block - left for even, right for odd */}
        <div className={`glass-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 group ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="mb-4 group-hover:scale-110 transition-transform">
            <IconComponent />
          </div>
          <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
          <p className="text-muted-foreground text-sm">{reason.description}</p>
        </div>
        
        {/* Image placeholder - right for even, left for odd */}
        <div className={`rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-dashed border-primary/30 flex items-center justify-center h-48 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <div className="text-center text-muted-foreground">
            <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Image placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
