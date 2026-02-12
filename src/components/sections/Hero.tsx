'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10 pointer-events-none">
      <div className="text-center px-4 pointer-events-auto">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-gold-400 uppercase text-xs mb-8 font-medium"
        >
          Chapter 1: The Beginning
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-serif mb-12 max-w-5xl mx-auto leading-[1.1]"
        >
          Hi, I’m <span className="text-gradient">Sahasra</span>.<br />
          This is not just a portfolio.<br />
          This is my story.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12"
        >
          {["I build intelligence.", "I build systems.", "I build the future."].map((text, i) => (
            <span key={i} className="text-neutral-400 tracking-widest text-sm uppercase">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-neutral-600 uppercase tracking-[0.3em] text-[10px]">Begin Journey</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-gold-500/50 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
