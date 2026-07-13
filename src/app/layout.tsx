import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "知之 ZHIZHI | 提前看见，此刻真正该问的问题",
    template: "%s | ZHIZHI"
  },
  description: "知之从个人命盘与当下时机出发，主动发现值得关注的问题，通过结构化洞察、追问和历史沉淀，帮助你理解自己、判断时机、选择行动。",
  keywords: ["知之", "ZHIZHI", "东方文化", "八字", "个人洞察", "决策辅助", "每日运势", "主动式AI"],
  alternates: {
    canonical: "https://zhizhi.one",
  },
  openGraph: {
    title: "知之 ZHIZHI | 主动看见此刻真正重要的问题",
    description: "从稳定画像到当下时机，知之通过主动洞察、结构化解释和持续沉淀，帮助你形成更清晰的判断。",
    url: "https://zhizhi.one",
    siteName: "ZHIZHI",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "知之 ZHIZHI | 提前看见，此刻真正该问的问题",
    description: "东方文化中的人生理解框架，也是帮助你理解自己、判断时机的决策辅助工具。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
