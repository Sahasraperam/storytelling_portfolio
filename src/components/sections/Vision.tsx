'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="relative min-h-screen py-32 px-4 flex flex-col justify-center overflow-hidden z-10 pointer-events-none">
      <div className="max-w-5xl mx-auto text-center relative z-10 pointer-events-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gold-500 uppercase tracking-[0.6em] text-[10px] mb-12"
        >
          Chapter 5: The Vision
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-serif mb-16 leading-[1.1] text-white/90"
        >
          {Array.from("I am building AI-powered education systems and intelligent SaaS platforms.").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: i * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-bold rounded-full hover:bg-gold-500 transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Let&apos;s Build the Future
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:bg-black transition-colors">
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </motion.div>
      </div>

      {/* Extreme Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-gold-400/5 blur-[200px] rounded-full pointer-events-none" />
    </section>
  );
}
