import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ImageIcon, Sparkles } from "lucide-react";

const phrases = [
  "I got accepted!",
  "I am starting BBE",
  "I move to Vienna",
  "I am part of BBE",
  "Everything worked out",
  "I study at WU",
  "I managed that",
  "New chapter began",
];

// Shuffle and create rows
const row1 = [...phrases, ...phrases, ...phrases];
const row2 = [...phrases].reverse().concat([...phrases].reverse(), [...phrases].reverse());
const row3 = [...phrases.slice(4), ...phrases.slice(0, 4), ...phrases.slice(4), ...phrases.slice(0, 4), ...phrases.slice(4), ...phrases.slice(0, 4)];

const CTASection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <div
          ref={titleRef}
          className={`text-center mb-12 opacity-0 ${titleVisible ? 'animate-fade-up' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Your way to{" "}
            <span className="gradient-text">
              BBE
            </span>{" "}
            is already started!
          </h2>
        </div>
      </div>

      {/* Moving oval blocks */}
      <div className="space-y-4 mb-16">
        {/* Row 1 - moves right */}
        <div className="flex gap-4 animate-scroll-right">
          {row1.map((phrase, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 shadow-sm whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">{phrase}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - moves left */}
        <div className="flex gap-4 animate-scroll-left">
          {row2.map((phrase, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 shadow-sm whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">{phrase}</span>
            </div>
          ))}
        </div>

        {/* Row 3 - moves right */}
        <div className="flex gap-4 animate-scroll-right-slow">
          {row3.map((phrase, index) => (
            <div
              key={`row3-${index}`}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 shadow-sm whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">{phrase}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        {/* Photo placeholder */}
        <div
          ref={imageRef}
          className={`opacity-0 ${imageVisible ? 'animate-fade-up' : ''}`}
        >
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-dashed border-primary/30 flex items-center justify-center h-80 md:h-96">
            <div className="text-center text-muted-foreground">
              <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Photo placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
