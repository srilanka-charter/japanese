import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ContactSection from "@/components/sections/ContactSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WorriesSection from "@/components/sections/WorriesSection";
import PlansSection from "@/components/sections/PlansSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FaqSection from "@/components/sections/FaqSection";
import CompanySection from "@/components/sections/CompanySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <ContactSection />
      <FeaturesSection />
      <WorriesSection />
      <PlansSection />
      <DestinationsSection />
      <ReviewsSection />
      <HowItWorksSection />
      <FaqSection />
      <CompanySection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
