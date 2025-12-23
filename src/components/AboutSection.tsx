import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);
  const { ref: blocksRef, isVisible: blocksVisible } = useScrollAnimation(0.5);

  return (
    <section id="about" data-theme="light" className="py-32 relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto relative z-10 w-full px-6 md:px-12">
        {/* Title & Intro */}
        <div
          ref={titleRef}
          className={`grid md:grid-cols-12 gap-12 mb-24 opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
        >
          <div className="md:col-span-5">
             <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-none">
              About the <br/> <span className="gradient-text">Club.</span>
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col justify-end">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
               We are a student-led initiative helping prospective students navigate the BBE entrance exam at WU. Founded by students who passed, we know the path.
            </p>
          </div>
        </div>

        {/* Three blocks in a row - Clean */}
        <div
          ref={blocksRef}
          className={`grid md:grid-cols-3 gap-8 md:gap-12 opacity-0 ${blocksVisible ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: '0.3s' }}
        >
          {/* Block 1 */}
          <div className="group flex flex-col space-y-4 cursor-pointer transition-transform duration-300 hover:scale-105">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Who we are</span>
            <h3 className="text-2xl font-medium text-slate-900 group-hover:gradient-text transition-all duration-300">Student-Led</h3>
            <p className="text-slate-500 leading-relaxed text-lg">
              Founded by current BBE students who have successfully passed the exam. We understand the challenges firsthand.
            </p>
          </div>

          {/* Block 2 */}
          <div className="group flex flex-col space-y-4 cursor-pointer transition-transform duration-300 hover:scale-105">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Mission</span>
            <h3 className="text-2xl font-medium text-slate-900 group-hover:gradient-text transition-all duration-300">Expert Guidance</h3>
            <p className="text-slate-500 leading-relaxed text-lg">
              We provide structured materials, practice tests, and expert guidance to maximize your admission chances.
            </p>
          </div>

          {/* Block 3 */}
          <div className="group flex flex-col space-y-4 cursor-pointer transition-transform duration-300 hover:scale-105">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Results</span>
            <h3 className="text-2xl font-medium text-slate-900 group-hover:gradient-text transition-all duration-300">Proven Success</h3>
            <p className="text-slate-500 leading-relaxed text-lg">
              Helping dozens of students get into the BBE program every year through live sessions and community support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
