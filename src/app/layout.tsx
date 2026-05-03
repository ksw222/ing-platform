import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "ING | 성분 기준 제품 매칭",
  description:
    "전성분 데이터를 정리하고, 사용자가 직접 정한 회피 기준에 맞는 제품을 먼저 보여주는 성분 기준 제품 매칭 서비스입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
