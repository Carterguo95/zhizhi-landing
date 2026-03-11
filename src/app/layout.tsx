import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GlobalStarfield } from "@/components/GlobalStarfield";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "知之ZHIZHI | AI 八字命盘推演与东方命理决策引擎APP",
    template: "%s | ZHIZHI"
  },
  description: "结合东方命理精髓与大师精调AI 引擎，提供极致准确的八字流年测算。为您从每日运势解析到长期生命决策，构筑高隐私、高精度的专属护航罗盘。",
  keywords: ["ZHIZHI", "AI八字", "东方命理", "命盘推演", "生命决策", "每日流年运势", "紫微斗数", "隐私算命", "本地计算"],
  alternates: {
    canonical: "https://zhizhi.app",
  },
  openGraph: {
    title: "ZHIZHI | 高精 AI 驱动的东方命理与八字决策引擎",
    description: "从每日气运到终生格局，大师精调AI 深度解析您的八字模型。不仅是测算，更是陪伴您长期决策的东方哲学罗盘。",
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
