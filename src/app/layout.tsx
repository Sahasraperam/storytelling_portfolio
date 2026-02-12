import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import Scene from "@/components/canvas/Scene";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Cursor from "@/components/ui/CustomCursor";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-whale-800 text-white selection:bg-sunny-400/30 selection:text-sunny-100`}
      >
        <LoadingScreen />
        <Cursor />
        <div className="bg-noise" />

        <LenisProvider>
          <Scene />
          <main className="relative z-10">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
