'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

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

      <div className="text-center px-4 z-20">
        <p ref={subRef} className="text-sunny-400 uppercase tracking-[0.3em] text-xs mb-8 font-medium">
          Chapter 1: The Architect
        </p>

        <div ref={textRef}>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 max-w-5xl mx-auto leading-[1.1]">
            I am <span className="text-gradient">Sahasra Peram</span>.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Structuring the abstract. Securing the invisible. <br />
            <span className="text-sunny-300/80">Cybersecurity Specialist & Full Stack Engineer.</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-sunny-400/60 uppercase tracking-[0.3em] text-[10px]">Scroll to Decrypt</span>
        <ChevronDown className="text-sunny-400 w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
}
