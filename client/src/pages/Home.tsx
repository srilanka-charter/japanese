import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import FloatingCTA from "@/components/FloatingCTA";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ContactSection from "@/components/sections/ContactSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WorriesSection from "@/components/sections/WorriesSection";
import PlansSection from "@/components/sections/PlansSection";
import VehiclesPreviewSection from "@/components/sections/VehiclesPreviewSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import ModelCourseSection from "@/components/sections/ModelCourseSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CompanySection from "@/components/sections/CompanySection";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "スリランカタクシーチャーターサービス（SLTCS）",
  "url": "https://sltcs.srilanka-charter.com/",
  "description": "スリランカ全土を日本語対応の専属ドライバーと巡る完全プライベートチャーターサービス。シーギリヤ・キャンディ・ゴール・ヌワラエリヤなど主要観光地への送迎を提供。",
  "areaServed": {
    "@type": "Country",
    "name": "Sri Lanka"
  },
  "availableLanguage": [
    { "@type": "Language", "name": "Japanese" },
    { "@type": "Language", "name": "English" }
  ],
  "openingHours": "Mo-Su 00:00-24:00",
  "sameAs": [
    "https://sltcs.srilanka-charter.com/"
  ]
};

export default function Home() {
  useSEO({
    title: "スリランカタクシーチャーターならSLTCS｜日本語対応の貸切専用車で自由に周遊",
    description: "スリランカ全土を日本語対応の専属ドライバーと巡る完全プライベートチャーターサービス。シーギリヤ・キャンディ・ゴール・ヌワラエリヤなど主要観光地への送迎を提供。政府公認ドライバーによる安心のチャーター。",
    path: "/",
    ogImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/sigiriya_rock_hero-WvSdEsM6SGKw7D3K9DXp8D.webp",
    jsonLdList: [localBusinessJsonLd],
    jsonLdIdPrefix: "home",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <ContactSection />
      <FeaturesSection />
      <WorriesSection />
      <VehiclesPreviewSection />
      <PlansSection />
      <DestinationsSection />
      <ModelCourseSection />
      <ReviewsSection />
      <HowItWorksSection />
      <CompanySection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
