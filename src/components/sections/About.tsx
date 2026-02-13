'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 max-w-5xl mx-auto z-10">
      <div className="text-center mb-16">
        <p className="text-sunny-400 uppercase tracking-[0.6em] text-[10px] mb-4">Chapter 1.5: The Foundation</p>
        <h2 className="text-4xl md:text-5xl font-serif text-white">About Me</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-neutral-300 leading-relaxed space-y-4 font-light text-lg"
        >
          <p>
            Hi, I'm Sahasra Peram. I am a passionate Cybersecurity Specialist and Full Stack Engineer dedicated to building robust, secure, and highly efficient digital ecosystems.
          </p>
          <p>
            Currently, I bridge the gap between developing dynamic web applications and ensuring their underlying architectures remain impenetrable against modern threats. As a fresher in the tech industry, I am eager to leverage my skills in real-world environments.
          </p>
        </motion.div>

        {/* Education Section (Inspired by your Reference) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-sunny-400/5 rounded-full blur-[50px]" />
          <h3 className="text-sunny-400 uppercase tracking-widest text-xs font-bold mb-6">Education</h3>

          <div className="relative pl-6 border-l border-white/10">
            <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-sunny-400" />
            <h4 className="text-xl font-serif text-white mb-1">SRM Institute of Science and Technology</h4>
            <p className="text-sm text-neutral-400 mb-2">B.Tech in CSE (Cyber Security) • CGPA: 9.0</p>
            <p className="text-xs text-sunny-400/60 font-mono">2023 - 2027</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
