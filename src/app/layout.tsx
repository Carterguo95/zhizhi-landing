import type { Metadata } from "next";
import { Barlow_Condensed, Fragment_Mono, Noto_Serif_SC } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const displayFont = Noto_Serif_SC({
  variable: "--font-noto-serif",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const interfaceFont = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const dataFont = Fragment_Mono({
  variable: "--font-fragment-mono",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "知之 ZHIZHI | 有些问题还没说出口，知之先看见",
    template: "%s | ZHIZHI"
  },
  description: "知之结合你的个人命盘、当下时间和过去的记录，主动告诉你最近最值得留意什么、为什么，以及下一步可以怎么做。",
  keywords: ["知之", "ZHIZHI", "东方文化", "八字", "个人洞察", "决策辅助", "每日运势", "主动洞察"],
  alternates: {
    canonical: "https://zhizhi.one",
  },
  openGraph: {
    title: "知之 ZHIZHI | 你还没说出口，知之先看见",
    description: "从个人命盘到当下时机，知之帮你找到最近最值得留意的问题，再一步步把原因和选择问清楚。",
    url: "https://zhizhi.one",
    siteName: "ZHIZHI",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "知之 ZHIZHI | 有些问题还没说出口，知之先看见",
    description: "借助东方命理了解自己、看看时机，把眼前的选择想得更清楚。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${displayFont.variable} ${interfaceFont.variable} ${dataFont.variable} antialiased`}>
        <a className="skip-link" href="#main-content">跳到主要内容</a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
