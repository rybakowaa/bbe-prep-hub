import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

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
    questionCount: "200+"
  },
  {
    icon: HyperbolaIcon,
    text: "Mathematics",
    isCustom: true,
    description: "For mathematics, our professional tutors who have successfully made it into BBE program explain every relevant topic and solve problems in real time, providing a detailed step-by-step explanation of each solution.",
    number: "02.",
    questionCount: "400+"
  },
  {
    icon: EnglishIcon,
    text: "English",
    isCustom: true,
    description: "We provide tailored sets of practice exercises focused on the most tedious yet exam-critical topics, so you can systematically train exactly what is most likely to be tested.",
    number: "03.",
    questionCount: "100+"
  },
];

const pricingPlans = [
  {
    id: "standard" as const,
    name: "Standard",
    price: "70",
    description: "A clear, step-by-step BBE entrance exam preparation with platform practice.",
    features: [
      "Full access to the platform (questions + solutions)",
      "Structured study plan (weekly roadmap)",
      "Live group session (Q&A)",
      "Access to recorded question walkthroughs",
      "General guidance notes + key tips",
      "Basic exam toolkit (checklist + time-management tips)",
    ],
    recommended: false,
    accentColor: "cyan",
  },
  {
    id: "plus" as const,
    name: "Plus",
    price: "100",
    description: "Intensive prep to maximize your chances of getting into the BBE program, with extra guidance and support.",
    features: [
      "Everything in Standard",
      "One full exam simulation under real test conditions, including time limits and structure identical to the actual exam",
      "Private question access to a tutor with responses within 48 hours",
      "Additional live sessions for guided problem solving and exam strategy",
      "Exclusive tips from tutors on timing, common traps, and test-day strategy",
    ],
    recommended: true,
    accentColor: "gradient",
  },
];

const CourseStructureSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  const { ref: pricingRef, isVisible: pricingVisible } = useScrollAnimation(0.2);
  const [selectedPlan, setSelectedPlan] = useState<"standard" | "plus">("plus");

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto relative z-10 px-4">
        <div
          ref={titleRef}
          className={`text-center mb-12 opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Course Structure: Everything you need to succeed
          </h2>
          <p className="text-xl md:text-2xl">
            We offer <span className="font-bold gradient-text text-2xl md:text-3xl">700+</span> practice questions with the most relevant and updated tasks!
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
            <div key={index} className="bg-slate-900 p-8 md:p-12 relative min-h-[400px] flex flex-col items-center text-center">
              {/* Image placeholder area */}
              <div className="h-40 flex items-center justify-center mb-8">
                <div className="w-24 h-24 rounded-2xl p-[2px]" style={{ background: 'linear-gradient(135deg, hsl(199, 95%, 81%) 0%, hsl(291, 95%, 80%) 100%)' }}>
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white">{subject.text}</h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-slate-300 flex-1">{subject.description}</p>

              {/* Question Bank */}
              <p className="text-xl font-bold text-white mt-6">
                Bank of <span className="gradient-text text-2xl">{subject.questionCount}</span> questions
              </p>
            </div>
          );
        })}
      </div>

      {/* Pricing Section */}
      <div
        ref={pricingRef}
        className={`max-w-5xl mx-auto relative z-10 px-4 mt-16 opacity-0 ${pricingVisible ? 'animate-fade-up' : ''}`}
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Plan
          </h3>
          <p className="text-lg text-muted-foreground">
            Start your journey to BBE success today
          </p>
        </div>

        {/* Switcher */}
        <div className="flex justify-center mb-12">
          <div className="relative flex items-center gap-1 p-1.5 rounded-full bg-white border border-gray-200">
            {pricingPlans.map((plan) => (
              <motion.button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                whileTap={{ scale: 0.96 }}
                className="relative px-8 py-3 rounded-full text-sm font-semibold focus:outline-none"
              >
                {selectedPlan === plan.id && (
                  <motion.div
                    layoutId="switcher-bg"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: plan.accentColor === "cyan"
                        ? "white"
                        : "linear-gradient(135deg, hsl(199, 95%, 81%) 0%, hsl(291, 95%, 80%) 100%)",
                      border: plan.accentColor === "cyan" ? "2px solid #22d3ee" : "none"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${
                  selectedPlan === plan.id ? 'text-slate-900 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}>
                  {plan.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {pricingPlans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const isCyan = plan.accentColor === "cyan";

            return (
              <motion.div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                animate={{
                  scale: isSelected ? 1.05 : 0.95,
                  opacity: isSelected ? 1 : 0.4,
                  filter: isSelected ? "grayscale(0)" : "grayscale(1)",
                }}
                whileHover={!isSelected ? { scale: 1, opacity: 0.7 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  opacity: { duration: 0.3 },
                  filter: { duration: 0.3 }
                }}
                className="relative cursor-pointer"
              >
                {/* Card with border */}
                <motion.div
                  className="relative rounded-2xl p-[2px] w-full"
                  animate={{
                    boxShadow: isSelected ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "none"
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: isSelected
                      ? isCyan
                        ? "#22d3ee"
                        : "linear-gradient(135deg, hsl(199, 95%, 81%) 0%, hsl(291, 95%, 80%) 100%)"
                      : "#d1d5db"
                  }}
                >
                  {/* Recommended badge - on the border, centered */}
                  {plan.recommended && isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -top-3 inset-x-0 flex justify-center z-10"
                    >
                      <span className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-slate-900 rounded-full gradient-bg shadow-lg">
                        Recommended
                      </span>
                    </motion.div>
                  )}
                  <div className="w-full h-full rounded-2xl bg-white p-8 flex flex-col min-h-[420px]">

                    {/* Price info */}
                    <div className="text-center mb-6 mt-2">
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                        <span className="text-2xl font-medium text-slate-500">€</span>
                      </div>
                      <p className={`text-sm mt-3 px-2 ${plan.id === "standard" ? "text-slate-500 leading-relaxed" : "text-slate-400"}`}>
                        {plan.description}
                      </p>
                    </div>

                    {/* Features - always visible */}
                    <div className="flex-1">
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            {/* Circle checkmark - cyan for Standard, gradient for Plus */}
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{
                                background: isCyan
                                  ? '#22d3ee'
                                  : 'linear-gradient(135deg, hsl(199, 89%, 70%) 0%, hsl(280, 85%, 65%) 100%)'
                              }}
                            >
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button */}
                    <div className="mt-auto">
                      <Link to="/pricing">
                        <Button
                          className={`w-full font-semibold py-6 text-lg rounded-lg transition-all duration-300 ${
                            isSelected
                              ? 'bg-slate-900 hover:bg-slate-950 text-white'
                              : 'bg-gray-300 text-gray-500'
                          }`}
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseStructureSection;