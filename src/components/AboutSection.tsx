import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const infoBoxes = [
  "Want to get into a top university with a 7% acceptance rate?",
  "The WU BBE program is one of Europe's most prestigious business degrees.",
  "Thousands of applicants compete for just 240 spots each year.",
  "Success requires strategic preparation and expert guidance.",
  "Our students consistently outperform with proven strategies.",
  "something else",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What is <span className="gradient-text">BBE?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover why this program changes lives
          </p>
        </div>
        
        <div className="space-y-8">
          {infoBoxes.map((text, index) => (
            <InfoBox key={index} text={text} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const InfoBox = ({ text, index }: { text: string; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const isEven = index % 2 === 0;
  
  return (
    <div
      ref={ref}
      className={`
        ${isEven ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}
        max-w-xl
        opacity-0
        ${isVisible ? (isEven ? 'animate-slide-right' : 'animate-slide-left') : ''}
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="glass-card rounded-2xl p-6 md:p-8 hover:scale-[1.02] transition-transform duration-300">
        <p className="text-lg md:text-xl font-medium text-foreground">
          {text}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
