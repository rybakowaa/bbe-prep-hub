import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Eva",
    role: "BBE Student",
    rank: "2025",
    text: "The practice tests were incredibly similar to the real exam, so I felt fully prepared. They helped me manage my time, spot recurring question types, and stay calm on exam day.",
    image: "/images/telegram-cloud-document-2-5321377974807727749.jpg",
  },
  {
    name: "Johannes",
    role: "BBE Student",
    rank: "2024",
    text: "The BBE Club Prep Course was key to getting into the program. The high-quality materials, connecting with others, and being able to ask questions made it possible for me!",
    image: "/images/telegram-cloud-document-2-5325729343614258341.jpg",
  },
  {
    name: "Carlotta",
    role: "BBE Student",
    rank: "2025",
    text: "BBE Club gave me a clear exam strategy and helped me focus on what really matters. The structured materials and practical tips made studying more efficient and boosted my confidence.",
    image: "/images/telegram-cloud-document-2-5325729343614258348.jpg",
  },
];

const photoReviews = [
  { title: "Student Review 1", image: "/images/telegram-cloud-document-2-5321377974807727749.jpg", scale: 1 },
  { title: "Student Review 2", image: "/images/telegram-cloud-document-2-5325729343614258341.jpg", scale: 1.15 },
  { title: "Student Review 3", image: "/images/telegram-cloud-document-2-5325729343614258348.jpg", scale: 1 },
];

const TestimonialsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Student Experiences: Hear from those who made it into <span className="gradient-text">BBE</span>
          </h2>
        </div>

        {/* Photo Reviews */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {photoReviews.map((photo, index) => (
            <PhotoReviewCard key={index} photo={photo} index={index} />
          ))}
        </div>

        {/* Text Reviews */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-24">
          <Link to="/pricing" state={{ from: "testimonials" }}>
            <Button variant="hero" size="xl" className="shadow-xl">
              Pricing and Enrolment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const PhotoReviewCard = ({
  photo,
  index
}: {
  photo: typeof photoReviews[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="rounded-2xl aspect-square overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300">
        <img
          src={photo.image}
          alt={photo.title}
          className="w-full h-full object-cover"
          style={{ transform: `scale(${photo.scale})` }}
        />
      </div>
    </div>
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
      <div className="bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-black fill-black" />
          ))}
        </div>

        <p className="text-foreground mb-6 italic leading-relaxed">
          "{testimonial.text}"
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full border-2 border-slate-700 bg-slate-800 text-white text-sm font-medium">
            {testimonial.rank}
          </span>
        </div>

              </div>
    </div>
  );
};

export default TestimonialsSection;
