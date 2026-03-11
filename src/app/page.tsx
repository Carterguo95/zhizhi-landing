import { HeroSection } from "@/components/HeroSection";
import { BentoGridFeatures } from "@/components/BentoGridFeatures";
import { TrustMetrics } from "@/components/TrustMetrics";
import { AIChatShowcase } from "@/components/AIChatShowcase";
import { FAQSection } from "@/components/FAQSection";
import { FooterCTA } from "@/components/FooterCTA";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ZHIZHI',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS',
    description: 'ZHIZHI 是一款将东西方术数论（如八字、紫微斗数）与本地优先架构结合的高隐私 iOS 应用。',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
      description: '核心内测席位免费获取中'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZHIZHI Team',
      description: '致力于重塑数字时代术数推演体验的极客团队'
    }
  };

  return (
    <main className="min-h-screen text-foreground antialiased selection:bg-accent/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <BentoGridFeatures />
      <TrustMetrics />
      <AIChatShowcase />
      <FAQSection />
      <FooterCTA />
    </main>
  );
}
