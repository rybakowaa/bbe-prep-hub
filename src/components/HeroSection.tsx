import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-secondary/5" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-lg md:text-xl font-medium text-muted-foreground mb-8 animate-fade-up">
          Preparation & Entrance Exam by BBE Club
        </h1>
        
        {/* BBE Logo */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-8xl md:text-9xl font-extrabold gradient-text tracking-tight">
            BBE
          </span>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Your Gateway to Vienna University of Economics and Business
        </p>
        
        {/* CTA Button */}
        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="xl" className="shadow-2xl">
            Get More Information
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
