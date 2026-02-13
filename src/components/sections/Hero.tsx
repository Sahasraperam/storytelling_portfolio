'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Download, ArrowRight, Github, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef(null);
  const textRef = useRef(null);
  const subRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a parallax effect where text moves slower than scroll
      gsap.to(textRef.current, {
        yPercent: 50,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(subRef.current, {
        yPercent: 100, // Moves faster
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10">

      {/* Background Ambience (Sunny Glow) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-sunny-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center px-4 z-20 flex flex-col items-center w-full mt-12 md:mt-0">

        {/* Availability Badge */}
        <div ref={subRef} className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 w-fit mx-auto backdrop-blur-sm shadow-xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunny-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sunny-400"></span>
          </span>
          <p className="text-sunny-400/90 uppercase tracking-[0.2em] text-[10px] font-bold">
            Available for Internships & Roles
          </p>
        </div>

        <div ref={textRef} className="flex flex-col items-center">
          <h1 className="text-5xl md:text-8xl font-serif mb-6 max-w-5xl mx-auto leading-[1.1] text-white">
            I am <span className="text-gradient">Sahasra Peram</span>.
          </h1>
          <p className="text-lg md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Structuring the abstract. Securing the invisible. <br className="hidden md:block" />
            <span className="text-white/90 font-normal mt-2 block md:inline">Cybersecurity Specialist & Full Stack Engineer.</span>
          </p>

          {/* Call To Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto px-4 sm:px-0">
            {/* Primary CTA */}
            <a
              href="#projects"
              className="w-full sm:w-auto group flex justify-center items-center gap-3 px-8 py-4 bg-sunny-400 text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-sunny-300 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,222,149,0.25)]"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA */}
            <a
              href="/sahasra_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group flex justify-center items-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4 text-sunny-400 group-hover:-translate-y-1 transition-transform" />
              Resume
            </a>
          </div>

          {/* Quick Socials */}
          <div className="flex gap-6">
            <a href="https://github.com/Sahasraperam" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-sunny-400 hover:border-sunny-400/50 hover:scale-110 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sahasra-peram/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-sunny-400 hover:border-sunny-400/50 hover:scale-110 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-neutral-500 uppercase tracking-[0.3em] text-[9px] font-bold">Scroll to Decrypt</span>
        <ChevronDown className="text-sunny-400/50 w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
