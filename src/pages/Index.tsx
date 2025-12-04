import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CourseSection from "@/components/CourseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TariffsSection from "@/components/TariffsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <CourseSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <TariffsSection />
      <Footer />
    </main>
  );
};

export default Index;
