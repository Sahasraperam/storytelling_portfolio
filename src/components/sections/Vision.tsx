'use client';

import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function Vision() {
  return (
    <section id="vision" className="relative min-h-screen py-32 px-4 flex flex-col justify-center items-center text-center max-w-5xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-12"
      >
        <p className="text-sunny-400 uppercase tracking-[0.6em] text-[10px] mb-6 font-bold">
          Chapter 6: The Vision
        </p>
        <h2 className="text-5xl md:text-8xl font-serif leading-tight text-white/90">
          <Typewriter
            options={{
              strings: ["Building Intelligence.", "Securing Systems.", "Designing the Future."],
              autoStart: true,
              loop: true,
              cursor: "_",
              wrapperClassName: "text-gradient",
            }}
          />
        </h2>

        <p className="text-neutral-400 text-xl font-light leading-relaxed max-w-3xl mx-auto italic">
          "Technology is the ultimate lever of progress. My mission is to ensure that as we build more complex and intelligent systems, they remain resilient, ethical, and secure."
        </p>

        <button className="relative px-12 py-6 rounded-2xl bg-sunny-400 text-black font-bold uppercase tracking-widest text-sm hover:bg-sunny-300 hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_0_40px_rgba(255,222,149,0.3)] group overflow-hidden">
          <span className="relative z-10">Initiate Collaboration</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </motion.div>
    </section>
  );
}
