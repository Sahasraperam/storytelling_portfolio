import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahasra | A Cinematic Journey",
  description: "Experience the story of a developer building the future of AI and Cybersecurity.",
};

import LenisProvider from "@/components/providers/LenisProvider";
import Scene from "@/components/canvas/Scene";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-black text-white selection:bg-sunny-400/30 selection:text-sunny-100`}
      >
        <LenisProvider>
          <Scene />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
