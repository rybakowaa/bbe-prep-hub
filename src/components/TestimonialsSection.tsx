import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anna M.",
    program: "BBE 2024",
    text: "The BBE Club course was a game-changer. The mock exams were incredibly similar to the real test, and the strategies I learned helped me manage my time perfectly.",
  },
  {
    name: "Maximilian K.",
    program: "BBE 2024",
    text: "I was overwhelmed by the competition until I joined BBE Club. The instructors broke everything down and made me believe I could do it. Now I'm studying at WU!",
  },
  {
    name: "Sophie L.",
    program: "BBE 2023",
    text: "The personalized feedback was invaluable. They identified my weaknesses early and helped me turn them into strengths. I couldn't have done it without them.",
  },
];

const TestimonialsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Student <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from those who made it into BBE
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  testimonial, 
  index 
}: { 
  testimonial: typeof testimonials[0]; 
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="glass-card rounded-2xl p-8 h-full relative hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 group">
        {/* Quote icon */}
        <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full gradient-bg flex items-center justify-center opacity-80">
          <Quote className="w-5 h-5 text-foreground" />
        </div>
        
        <p className="text-foreground mb-6 italic leading-relaxed">
          "{testimonial.text}"
        </p>
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
            <span className="text-lg font-bold text-foreground">
              {testimonial.name[0]}
            </span>
          </div>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.program}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
