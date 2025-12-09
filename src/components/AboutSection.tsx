import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);
  const { ref: blocksRef, isVisible: blocksVisible } = useScrollAnimation(0.5);

  return (
    <section id="about" className="min-h-screen py-24 px-4 relative overflow-hidden flex items-center">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left side - Title */}
          <div 
            ref={titleRef}
            className={`opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is <span className="gradient-text">BBE</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore why this program changes lives.
            </p>
          </div>
          
          {/* Right side - 3 white blocks */}
          <div 
            ref={blocksRef}
            className={`space-y-4 opacity-0 ${blocksVisible ? 'animate-fade-up' : ''}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Entrance Exam</h3>
              <p className="text-gray-600">BBE (Business, Economics & Social Sciences) is an entrance exam required for admission to WU Vienna's bachelor programs.</p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Three Subjects</h3>
              <p className="text-gray-600">The exam tests your knowledge in Economics, Mathematics, and English — all essential for success in business education.</p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Your Path to WU</h3>
              <p className="text-gray-600">Passing BBE opens doors to one of Europe's top business schools with over 23,000 students from around the world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
