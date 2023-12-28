import type { Metadata } from "next";
import localFont from "next/font/local";

import { clsx } from "clsx";

import "@/styles/global.css";
import "the-new-css-reset";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "rhappy",
  description: "rhappyのポートフォリオサイト",
};

// setting font
const myFont = localFont({
  src: "../assets/fonts/SourceHanSansK-VF.otf.woff2",
  fallback: ["sans-serif"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={clsx(myFont.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
