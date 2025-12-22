import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);
  const { ref: blocksRef, isVisible: blocksVisible } = useScrollAnimation(0.5);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full px-4">
        {/* Title centered at top */}
        <div
          ref={titleRef}
          className={`text-center mb-12 opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What is <span className="gradient-text">BBE Club</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Your guide to success in the BBE entrance exam.
          </p>
        </div>
        
        {/* Three blocks in a row with purple top border */}
        <div 
          ref={blocksRef}
          className={`grid md:grid-cols-3 gap-0 opacity-0 ${blocksVisible ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: '0.3s' }}
        >
          {/* Block 1 */}
          <div className="bg-white p-8 border-t-4 border-t-slate-700 border-l border-b border-r border-gray-200 flex flex-col">
            <span className="text-sm text-gray-400 mb-4">About us</span>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Student-Led Initiative</h3>
            <p className="text-gray-600 leading-relaxed flex-1">
              BBE Club was founded by <span className="font-bold">current BBE students</span> who have successfully passed the entrance exam. We understand the challenges and know exactly what it takes to succeed.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-8 border-t-4 border-t-slate-700 border-l border-b border-r border-gray-200 flex flex-col">
            <span className="text-sm text-gray-400 mb-4">Our mission</span>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Guiding Future Students</h3>
            <p className="text-gray-600 leading-relaxed flex-1">
              We navigate prospective students through the BBE entrance exam preparation with <span className="font-bold">structured materials, practice tests, and expert guidance</span> to maximize your chances of admission.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-white p-8 border-t-4 border-t-slate-700 border-l border-b border-r border-gray-200 flex flex-col">
            <span className="text-sm text-gray-400 mb-4">Our approach</span>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Proven Success</h3>
            <p className="text-gray-600 leading-relaxed flex-1">
              Our preparation course has helped <span className="font-bold">dozens of students</span> get into the BBE program. We offer live sessions, updated materials, and a supportive community to guide you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
