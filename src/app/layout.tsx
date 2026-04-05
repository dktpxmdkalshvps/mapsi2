import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "맵시TI — 나만의 패션 페르소나 찾기",
  description: "퍼스널컬러와 라이프스타일로 찾는 나만의 패션 스타일 테스트. 맵시TI로 당신만의 스타일 DNA를 발견하세요.",
  keywords: ["맵시TI", "패션", "퍼스널컬러", "스타일 테스트", "MBTI 패션"],
  openGraph: {
    title: "맵시TI — 나만의 패션 페르소나 찾기",
    description: "퍼스널컬러와 라이프스타일로 찾는 나만의 패션 스타일 테스트",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
