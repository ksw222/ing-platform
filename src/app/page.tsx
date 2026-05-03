import { CriteriaBarSection } from "@/features/landing/components/CriteriaBarSection";
import { HeroSection } from "@/features/landing/components/HeroSection";
import { HowItWorksSection } from "@/features/landing/components/HowItWorksSection";
import { LandingCriteriaProvider } from "@/features/landing/components/LandingCriteriaProvider";
import { LandingFooter } from "@/features/landing/components/LandingFooter";
import { ProductPreviewSection } from "@/features/landing/components/ProductPreviewSection";
import { WaitlistSection } from "@/features/landing/components/WaitlistSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LandingCriteriaProvider>
        <CriteriaBarSection />
        <ProductPreviewSection />
      </LandingCriteriaProvider>
      <HowItWorksSection />
      <WaitlistSection />
      <LandingFooter />
    </main>
  );
}
