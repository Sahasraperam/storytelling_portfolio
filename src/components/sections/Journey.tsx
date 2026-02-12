'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const storySteps = [
  {
    year: '2019',
    title: 'The Spark',
    description: 'It started with a single line of code. Curious about how software was built, I dove into Python, discovering that logic could create magic.',
    category: 'Learning'
  },
  {
    year: '2021',
    title: 'The Shadows',
    description: 'Fascinated by the hidden layers of the web, I began exploring ethical hacking and cybersecurity, learning that to build securely, one must understand how things break.',
    category: 'Cybersecurity'
  },
  {
    year: '2023',
    title: 'The Architect',
    description: 'I started building full-stack applications, moving from scripts to scalable systems. Every project was a lesson in resilience and design.',
    category: 'Building'
  },
  {
    year: '2024',
    title: 'The Intelligence',
    description: 'Currently deep-diving into AI/ML, integrating large language models into SaaS products to solve real-world problems.',
    category: 'AI / SaaS'
  }
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section id="journey" ref={containerRef} className="relative h-[500vh] w-full bg-black/5">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 md:gap-32 px-12 md:px-24">
          <div className="min-w-[300px] md:min-w-[600px] flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-sunny-400/60 uppercase tracking-[0.6em] text-[10px] mb-4"
            >
              Chapter 4: The Spark
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-serif text-white/90"
            >
              The Genesis
            </motion.h2>
          </div>

          {storySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: false, margin: "-100px" }}
              className="min-w-[350px] md:min-w-[500px] group"
            >
              <div className="glass p-10 rounded-3xl relative overflow-hidden group-hover:bg-white/[0.07] transition-all duration-700">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-sunny-400/5 rounded-full blur-[80px] group-hover:bg-sunny-400/10 transition-colors" />

                <span className="text-sunny-400/40 font-serif text-6xl absolute top-6 right-8 opacity-20 pointer-events-none">
                  {step.year}
                </span>

                <div className="relative z-10">
                  <span className="text-sunny-400 uppercase tracking-widest text-[10px] mb-6 block font-bold">
                    {step.category}
                  </span>
                  <h3 className="text-3xl font-serif mb-6 text-white group-hover:text-sunny-200 transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 font-light leading-relaxed text-lg italic">
                    "{step.description}"
                  </p>
                </div>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-sunny-400/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
