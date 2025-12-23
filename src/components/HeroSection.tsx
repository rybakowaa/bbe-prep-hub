import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col px-4 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/telegram-cloud-document-2-5325729343614258315.jpg)' }}
      />
      {/* White overlay for transparency */}
      <div className="absolute inset-0 bg-white/85" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full pt-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left side - BBE and subtitle */}
          <div>
            <div className="animate-fade-up">
              <span className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none">
                <span className="font-black text-slate-900">BBE</span>
                <span className="font-light text-slate-900 ml-4 md:ml-6">CLUB</span>
              </span>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.15em] text-slate-900 mt-4 animate-fade-up font-bold whitespace-nowrap" style={{ animationDelay: '0.1s' }}>
              Preparation course for BBE Entrance Exam
            </p>

            {/* Overview - moved under BBE info */}
            <div className="mt-24 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Overview
              </h2>
              <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
                A step-by-step course preparation for the Bachelor program in Business and Economics at WU
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-16 animate-fade-up flex gap-4 flex-wrap" style={{ animationDelay: '0.4s' }}>
              <Button
                variant="hero"
                size="lg"
                className="shadow-xl rounded-full"
                onClick={scrollToNext}
              >
                More Information
              </Button>
              <Link to="/pricing">
                <Button
                  variant="hero"
                  size="lg"
                  className="shadow-xl rounded-full"
                >
                  Enrolment
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - What is included */}
          <div className="animate-fade-up md:pt-[245px] md:pl-32 lg:pl-48" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
              What is included
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                <span className="text-lg text-slate-800">Live sessions</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                <span className="text-lg text-slate-800">Practice tasks</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                <span className="text-lg text-slate-800">Updated materials</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                <span className="text-lg text-slate-800">Exclusive insights</span>
              </li>
            </ul>

            {/* Thin line above button */}
            <div className="w-full h-[1px] bg-slate-300 mt-8 mb-6"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <div className="relative z-10 pb-8 flex justify-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
        <button
          onClick={scrollToNext}
          className="text-slate-400 hover:text-slate-600 transition-colors"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
