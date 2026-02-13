'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicTransition() {
  const container = useRef<HTMLElement>(null);
  const text1 = useRef<HTMLParagraphElement>(null);
  const text2 = useRef<HTMLParagraphElement>(null);
  const text3 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        }
      });

      // Phrase 1
      tl.to(text1.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
        .to(text1.current, { opacity: 0, y: -30, duration: 1, ease: "power2.in" }, "+=0.5");

      // Phrase 2
      tl.to(text2.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
        .to(text2.current, { opacity: 0, y: -30, duration: 1, ease: "power2.in" }, "+=0.5");

      // Phrase 3
      tl.to(text3.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" })
        .to(text3.current, { opacity: 0, scale: 1.1, duration: 1, ease: "power2.in" }, "+=1");

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-sunny-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto px-4 h-32">

        {/* Phrase 1 - Bridging from the "Journey" section */}
        <p ref={text1} className="absolute text-3xl md:text-5xl font-serif text-neutral-400 opacity-0 translate-y-12 text-center w-full">
          From abstract logic...
        </p>

        {/* Phrase 2 */}
        <p ref={text2} className="absolute text-3xl md:text-5xl font-serif text-sunny-400 opacity-0 translate-y-12 text-center w-full">
          To secure ecosystems.
        </p>

        {/* Phrase 3 - Leading perfectly into Chapter 5: Digital Architectures */}
        <div ref={text3} className="absolute flex flex-col items-center opacity-0 translate-y-12 scale-95">
          <p className="text-sm md:text-base text-white font-bold tracking-[0.4em] uppercase text-center mb-8">
            Entering the Architecture
          </p>
          <div className="w-px h-24 bg-gradient-to-b from-sunny-400/50 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-sunny-400 animate-[shimmer_2s_infinite]" />
          </div>
        </div>

      </div>
    </section>
  );
}
