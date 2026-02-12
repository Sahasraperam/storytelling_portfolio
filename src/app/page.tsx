import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />

      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Vision />
      <Contact />

      <Footer />
    </main>
  );
}
