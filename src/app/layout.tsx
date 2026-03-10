import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GlobalStarfield } from "@/components/GlobalStarfield";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZHIZHI - AI Astrology Guide",
  description: "Navigate your destiny with AI intelligence.",
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
