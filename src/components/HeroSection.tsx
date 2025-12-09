import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/wu-building.jpg)' }}
      />
      {/* White overlay for transparency */}
      <div className="absolute inset-0 bg-white/80" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-primary/5 to-secondary/5" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-medium text-foreground mb-8 animate-fade-up">
          Preparation course for BBE Entrance Exam
          <br />
          <span className="text-2xl md:text-3xl">by BBE Club</span>
        </h1>
        
        {/* BBE Logo */}
        <div className="mb-12 animate-fade-up" style={{
        animationDelay: '0.2s'
      }}>
          <span className="text-8xl md:text-9xl font-extrabold gradient-text tracking-tight">
            BBE
          </span>
        </div>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-4xl font-medium text-foreground mb-10 animate-fade-up" style={{
        animationDelay: '0.4s'
      }}>
          Your Gateway to Vienna University of Economics and Business
        </p>        {/* CTA Button */}
        <div className="animate-fade-up" style={{
        animationDelay: '0.6s'
      }}>
          <Button variant="hero" size="xl" className="shadow-2xl" onClick={scrollToNext}>
            Get More Information
            <ChevronDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;