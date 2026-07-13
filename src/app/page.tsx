import { FAQSection } from "@/components/FAQSection";
import { FooterCTA } from "@/components/FooterCTA";
import { HeroSection } from "@/components/HeroSection";
import { NarrativeFlow } from "@/components/NarrativeFlow";
import { ProductJourney } from "@/components/ProductJourney";
import { SiteNav } from "@/components/SiteNav";
import { TrustMetrics } from "@/components/TrustMetrics";

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "知之 ZHIZHI",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS",
        description: "知之是一款围绕个人命盘、每日时机、主动洞察、追问和历史沉淀组织起来的长期决策辅助产品。",
        offers: { "@type": "Offer", price: "0", priceCurrency: "CNY", description: "核心内测申请开放中" },
    };

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <SiteNav />
            <HeroSection />
            <NarrativeFlow />
            <ProductJourney />
            <TrustMetrics />
            <FAQSection />
            <FooterCTA />
        </main>
    );
}
