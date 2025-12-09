import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CourseStructureSection from "@/components/CourseStructureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <CourseStructureSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
