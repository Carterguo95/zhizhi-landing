import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GlobalStarfield } from "@/components/GlobalStarfield";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ZHIZHI | 东方哲学与本地计算的智能罗盘",
    template: "%s | ZHIZHI"
  },
  description: "ZHIZHI 是一款将八字、紫微斗数等古典东方哲学体系与本地优先架构（Local-First）结合的高端 iOS 应用。极致隐私，精准推演。",
  keywords: ["ZHIZHI", "八字", "紫微斗数", "占星", "AI算命", "隐私保护", "本地计算", "命盘推演", "量子罗盘"],
  openGraph: {
    title: "ZHIZHI | 东方易学与AI结合的高端智能罗盘",
    description: "通过严密的传统术数模型结合前沿架构，保护您的灵魂资料库绝对私密。获取核心内测席位。",
    url: "https://zhizhi.app", // Adjust if actual domain is different
    siteName: "ZHIZHI",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZHIZHI | 本地优先的AI术数预测引擎",
    description: "东方哲学与本地计算的极简结合。立即申请核心内测名单体验沉浸式量子罗盘。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GlobalStarfield />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
