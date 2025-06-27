import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CodeExamples from "@/components/code-examples";
import CapabilitiesSection from "@/components/capabilities-section";
import SolutionsSection from "@/components/solutions-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <Navigation />
      <HeroSection />
      <CodeExamples />
      <CapabilitiesSection />
      <SolutionsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
