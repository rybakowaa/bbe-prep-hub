import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CourseStructureSection from "@/components/CourseStructureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="min-h-screen overflow-x-hidden relative bg-background">
      <div className="relative z-10">
        <HeroSection />
        <div className="relative">
          <AboutSection />
          <WhyChooseSection />
          <CourseStructureSection />
          <TestimonialsSection />
          <CTASection />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Index;
