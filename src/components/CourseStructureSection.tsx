import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play, Calculator, ArrowDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Custom Big Ben icon for English
const EnglishIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 20 56" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className} 
  >
    {/* Top cross */}
    <line x1="10" y1="0" x2="10" y2="3" />
    <line x1="8" y1="1.5" x2="12" y2="1.5" />
    
    {/* Spire tip */}
    <path d="M 9 3 L 10 3 L 10 5 L 9 5 Z" fill="currentColor" />
    
    {/* Pointed spire roof */}
    <path d="M 6 10 L 10 5 L 14 10" />
    <line x1="6" y1="10" x2="14" y2="10" />
    
    {/* Small decorative tier */}
    <rect x="7" y="10" width="6" height="2" />
    <line x1="8.5" y1="10" x2="8.5" y2="12" />
    <line x1="10" y1="10" x2="10" y2="12" />
    <line x1="11.5" y1="10" x2="11.5" y2="12" />
    
    {/* Clock section with ornate frame */}
    <rect x="5" y="12" width="10" height="12" />
    
    {/* Large clock face */}
    <circle cx="10" cy="18" r="4.5" />
    <circle cx="10" cy="18" r="3.5" />
    
    {/* Clock hands */}
    <line x1="10" y1="18" x2="10" y2="15" strokeWidth="0.8" />
    <line x1="10" y1="18" x2="12.5" y2="18" strokeWidth="0.8" />
    
    {/* Hour markers */}
    <line x1="10" y1="14" x2="10" y2="14.5" strokeWidth="0.5" />
    <line x1="10" y1="21.5" x2="10" y2="22" strokeWidth="0.5" />
    <line x1="6" y1="18" x2="6.5" y2="18" strokeWidth="0.5" />
    <line x1="13.5" y1="18" x2="14" y2="18" strokeWidth="0.5" />
    
    {/* Main tower body */}
    <rect x="4" y="24" width="12" height="28" />
    
    {/* Vertical Gothic columns */}
    <line x1="5.5" y1="24" x2="5.5" y2="52" />
    <line x1="7" y1="24" x2="7" y2="52" />
    <line x1="8.5" y1="24" x2="8.5" y2="52" />
    <line x1="10" y1="24" x2="10" y2="52" />
    <line x1="11.5" y1="24" x2="11.5" y2="52" />
    <line x1="13" y1="24" x2="13" y2="52" />
    <line x1="14.5" y1="24" x2="14.5" y2="52" />
    
    {/* Horizontal tiers */}
    <line x1="4" y1="30" x2="16" y2="30" />
    <line x1="4" y1="38" x2="16" y2="38" />
    <line x1="4" y1="46" x2="16" y2="46" />
    
    {/* Base */}
    <rect x="3" y="52" width="14" height="4" />
  </svg>
);

// Custom Cubic parabola graph icon for Mathematics
const HyperbolaIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5"
    strokeLinecap="round"
    className={className}
  >
    {/* Axes */}
    <line x1="4" y1="24" x2="44" y2="24" strokeOpacity="0.4" />
    <line x1="24" y1="4" x2="24" y2="44" strokeOpacity="0.4" />
    {/* Cubic parabola y = x³ */}
    <path d="M 8 40 C 12 38 16 32 20 26 S 28 22 32 18 C 36 14 40 8 44 4" />
  </svg>
);

const courseSubjects = [
  { 
    icon: Calculator, 
    text: "Economics", 
    isCustom: false,
    description: "We cover all the key topics from your economics textbook and translate the difficult 'economic language' into clear, simple explanations. Along the way, you get focused summaries and plenty of targeted practice so you can confidently handle exam questions.",
    number: "01.",
    questionBank: "Bank of 200+ questions"
  },
  { 
    icon: HyperbolaIcon, 
    text: "Mathematics", 
    isCustom: true,
    description: "For mathematics, our professional tutors who have successfully made it into BBE program explain every relevant topic and solve problems in real time, providing a detailed step-by-step explanation of each solution.",
    number: "02.",
    questionBank: "Bank of 400+ questions"
  },
  { 
    icon: EnglishIcon, 
    text: "English", 
    isCustom: true,
    description: "We provide tailored sets of practice exercises focused on the most tedious yet exam-critical topics, so you can systematically train exactly what is most likely to be tested.",
    number: "03.",
    questionBank: "Bank of 100+ questions"
  },
];

const CourseStructureSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto relative z-10 px-4">
        <div
          ref={titleRef}
          className={`text-center mb-12 opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Course Structure: Everything you need to succeed in one package
          </h2>
          <p className="text-xl md:text-2xl">
            We offer <span className="font-bold">700+</span> practice questions with the most relevant and updated tasks!
          </p>
        </div>
      </div>

      {/* Three columns layout - full width */}
      <div 
        ref={contentRef}
        className={`grid md:grid-cols-3 gap-0 opacity-0 ${contentVisible ? 'animate-fade-up' : ''}`}
      >
        {courseSubjects.map((subject, index) => {
          const Icon = subject.icon;
          
          return (
            <div key={index} className="bg-slate-800 p-8 md:p-12 relative min-h-[400px] flex flex-col">
              {/* Number in top right */}
              <span className="absolute top-6 right-6 text-sm text-slate-400">{subject.number}</span>
              
              {/* Image placeholder area */}
              <div className="h-40 flex items-center justify-center mb-8">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 p-[2px]">
                  <div className="w-full h-full rounded-2xl bg-slate-700 flex items-center justify-center">
                    {subject.isCustom ? (
                      <Icon className="w-12 h-12 text-cyan-400" />
                    ) : (
                      <Icon className="w-12 h-12 text-cyan-400" />
                    )}
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white">{subject.text}</h3>
              
              {/* Description */}
              <p className="text-base leading-relaxed text-slate-300 flex-1">{subject.description}</p>
              
              {/* Question Bank */}
              <p className="text-xl font-bold text-white mt-6">{subject.questionBank}</p>
            </div>
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-4">
        {/* Arrow pointing to video */}
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            More information about the course you can watch in the video
          </p>
          <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
        </div>

        {/* Video section */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-800 aspect-video shadow-2xl max-w-4xl mx-auto">
          {!isPlaying ? (
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
              onClick={handlePlay}
            >
              {/* Play button */}
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/40 flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                </div>
              </div>
              <p className="text-slate-400 mt-6 text-lg">
                YouTube Video: Course Structure Overview
              </p>
            </div>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Course Structure Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Tariff button */}
        <div className="flex justify-center mt-16">
          <Button variant="hero" size="xl" className="text-xl px-16 py-8 font-semibold">
            Tariff Information
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseStructureSection;