import HeroSection from "@/components/HeroSection";
import WhatYouLearnSection from "@/components/WhatYouLearnSection";
import ForWhoSection from "@/components/ForWhoSection";
import AboutSection from "@/components/AboutSection";
import AfterSection from "@/components/AfterSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatYouLearnSection />
      <ForWhoSection />
      <AboutSection />
      <AfterSection />
      <FinalCTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
