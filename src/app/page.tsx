import { CriteriaDemoSection } from "@/features/landing/components/CriteriaDemoSection";
import { HeroSection } from "@/features/landing/components/HeroSection";
import { LandingCriteriaProvider } from "@/features/landing/components/LandingCriteriaProvider";
import { LandingFooter } from "@/features/landing/components/LandingFooter";
import { PainSection } from "@/features/landing/components/PainSection";
import { ProductMatchSection } from "@/features/landing/components/ProductMatchSection";
import { TrustSection } from "@/features/landing/components/TrustSection";
import { WaitlistSection } from "@/features/landing/components/WaitlistSection";
import { WorkflowSection } from "@/features/landing/components/WorkflowSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PainSection />
      <LandingCriteriaProvider>
        <CriteriaDemoSection />
        <ProductMatchSection />
      </LandingCriteriaProvider>
      <WorkflowSection />
      <TrustSection />
      <WaitlistSection />
      <LandingFooter />
    </main>
  );
}
