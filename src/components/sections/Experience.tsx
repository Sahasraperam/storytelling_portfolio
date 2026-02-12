'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Experience() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the items sliding in
      gsap.from(".exp-item", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={container} className="relative py-24 px-4 max-w-4xl mx-auto z-10">
      <div className="text-center mb-16">
        <p className="text-sunny-400 uppercase tracking-[0.6em] text-[10px] mb-4">Chapter 2: The Training</p>
        <h2 className="text-4xl md:text-5xl font-serif text-white">Experience</h2>
      </div>

      <div className="space-y-12 relative border-l border-white/10 ml-4 md:ml-0 md:pl-8">
        {/* Skill First Labs */}
        <div className="exp-item relative pl-8 md:pl-0">
          <div className="absolute left-[-5px] md:left-[-33px] top-2 w-3 h-3 rounded-full bg-sunny-400 box-content border-4 border-whale-800" />
          <span className="text-sunny-400 text-xs font-mono mb-2 block">Oct 2025 - Nov 2025</span>
          <h3 className="text-2xl font-serif text-white">Skill First Labs</h3>
          <p className="text-sm text-neutral-400 mb-4">Technical Intern (Hybrid)</p>
          <p className="text-neutral-300 leading-relaxed">
            Contributed to product development and implementation in a real-world environment, delivering high-quality technical solutions.
          </p>
        </div>

        {/* IBM Skills Build */}
        <div className="exp-item relative pl-8 md:pl-0">
          <div className="absolute left-[-5px] md:left-[-33px] top-2 w-3 h-3 rounded-full bg-sunny-400 box-content border-4 border-whale-800" />
          <span className="text-sunny-400 text-xs font-mono mb-2 block">Jan 2025 - Feb 2025</span>
          <h3 className="text-2xl font-serif text-white">IBM Skills Build</h3>
          <p className="text-sm text-neutral-400 mb-4">Cybersecurity Intern (Online)</p>
          <p className="text-neutral-300 leading-relaxed">
            Designed and implemented cybersecurity solutions focusing on threat awareness and security fundamentals under mentor guidance.
          </p>
        </div>
      </div>
    </section>
  )
}
