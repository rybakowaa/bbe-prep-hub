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
    <section className="relative min-h-screen flex flex-col justify-between px-6 py-8 md:px-12 md:py-12 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg-2.jpg)' }}
      />
      {/* Dark overlay for transparency */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Spacer */}
      <div className="relative z-10 flex-1" />

      {/* Bottom Content - Title & Subtitle */}
      <div className="relative z-10 mt-auto pt-12 md:pt-0">
          <p className="text-xl md:text-2xl text-white font-bold tracking-[0.15em] uppercase mb-2 md:mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Preparation course for BBE Entrance Exam
          </p>
          <h1 className="text-[10vw] md:text-[11vw] font-black text-white leading-[0.8] tracking-tighter animate-fade-up">
            BBE CLUB. COURSE
          </h1>
      </div>

      {/* Scroll Indicator - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-10 animate-fade-up hidden md:block" style={{ animationDelay: '0.5s' }}>
         <button onClick={scrollToNext} className="text-white/80 hover:text-white transition-colors">
           <ChevronDown className="w-10 h-10 animate-bounce" />
         </button>
      </div>
    </section>
  );
};

export default HeroSection;
