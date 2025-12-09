import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Play } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Anna M.",
    role: "BBE Student",
    rank: "Top 3%",
    text: "The practice tests were incredibly similar to the real exam. I felt completely prepared!",
  },
  {
    name: "Markus K.",
    role: "BBE Student",
    rank: "Top 5%",
    text: "The strategy sessions changed everything. I learned how to manage my time effectively.",
  },
  {
    name: "Sophie L.",
    role: "BBE Student",
    rank: "Top 7%",
    text: "Without BBE Club, I wouldn't have made it. The instructors truly care about your success.",
  },
];

const videoReviews = [
  { title: "Student Review 1" },
  { title: "Student Review 2" },
  { title: "Student Review 3" },
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

        {/* Video Reviews */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {videoReviews.map((video, index) => (
            <VideoReviewCard key={index} video={video} index={index} />
          ))}
        </div>

        {/* Text Reviews */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoReviewCard = ({
  video,
  index
}: {
  video: typeof videoReviews[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="bg-slate-800 rounded-2xl aspect-video flex flex-col items-center justify-center cursor-pointer group hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center">
            <Play className="w-6 h-6 text-primary fill-primary ml-1" />
          </div>
        </div>
        <p className="text-slate-400 mt-4 text-sm">{video.title}</p>
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
      <div className="bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-primary fill-primary" />
          ))}
        </div>
        
        <p className="text-foreground mb-6 italic leading-relaxed">
          "{testimonial.text}"
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">
                {testimonial.name[0]}
              </span>
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
