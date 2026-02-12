import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />

      <Hero />
      <Experience />
      <Journey />
      <Skills />
      <Projects />
      <Vision />
      <Contact />

      <Footer />
    </main>
  );
}
