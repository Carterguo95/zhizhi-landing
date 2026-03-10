import { HeroSection } from "@/components/HeroSection";
import { BentoGridFeatures } from "@/components/BentoGridFeatures";
import { TrustMetrics } from "@/components/TrustMetrics";
import { AIChatShowcase } from "@/components/AIChatShowcase";
import { FooterCTA } from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground antialiased selection:bg-accent/30 selection:text-white">
      <HeroSection />
      <BentoGridFeatures />
      <TrustMetrics />
      <AIChatShowcase />
      <FooterCTA />
    </main>
  );
}
