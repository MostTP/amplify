import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/content";
import "./globals.css";

// Modern premium font combo
const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${site.fullTitle} | ${site.tag}`,
  description: `${site.fullTitle} — ${site.date} at ${site.location}. Equipping believers in broadcast, visual media, design, and digital ministry.`,
  openGraph: {
    title: site.fullTitle,
    description: site.tag,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${sora.variable}
          ${inter.variable}
          font-sans antialiased overflow-x-hidden
        `}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}