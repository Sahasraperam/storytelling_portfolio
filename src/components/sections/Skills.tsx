'use client';

import { motion } from 'framer-motion';
import { Shield, Cpu, Code2, Rocket, Brain, Globe } from 'lucide-react';

const powers = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'The Architect',
    skill: 'TypeScript / React / Next.js',
    description: 'Forging robust structures and intuitive interfaces that stand the test of time and scale.',
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'The Predictor',
    skill: 'AI / Machine Learning / LLMs',
    description: 'Bending the future to our will through neural pathways and intelligent data processing.',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'The Defender',
    skill: 'Cybersecurity / Pen-testing',
    description: 'Standing as a guardian against the tides of the dark web, ensuring every byte is secure.',
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'The Efficient',
    skill: 'Python / Rust / Backend',
    description: 'Optimizing the core of the machine for raw power and lightning-fast execution.',
    color: 'from-orange-500/20 to-amber-500/20'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'The Navigator',
    skill: 'Cloud / DevOps / AWS',
    description: 'Guiding applications across the vast clouds, ensuring they reach their destination safely.',
    color: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'The Creator',
    skill: 'SaaS / Product Strategy',
    description: 'Turning visions into reality, launching ships that sail the digital oceans.',
    color: 'from-rose-500/20 to-orange-500/20'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-32 px-4 flex flex-col justify-center max-w-7xl mx-auto z-10 pointer-events-none">
      <div className="text-center mb-32 pointer-events-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gold-500 uppercase tracking-[0.6em] text-[10px] mb-6"
        >
          Chapter 3: The Builder
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-serif mb-8 text-white/90"
        >
          Digital <span className="text-gradient">Architectures</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-neutral-500 max-w-2xl mx-auto font-light text-lg italic"
        >
          "I build intelligence. I build systems. I build the future."
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pointer-events-auto">
        {[
          { title: "Python", role: "The Architect", desc: "Forging robust backend systems and automation engines." },
          { title: "React", role: "The Builder", desc: "Crafting immersive, high-performance user experiences." },
          { title: "AI/ML", role: "The Predictor", desc: "Integrating intelligence into the core of digital products." },
          { title: "Cybersecurity", role: "The Defender", desc: "Developing secure-by-design systems to protect the future." }
        ].map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: -2 }}
            className="glass p-12 rounded-[2rem] border-white/5 group hover:border-gold-500/20 transition-all duration-700 cursor-none"
          >
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-3xl font-serif text-white group-hover:text-gold-200 transition-colors">
                {skill.title}
              </h3>
              <span className="text-gold-500 text-[10px] uppercase tracking-widest font-bold">
                Level: Master
              </span>
            </div>
            <p className="text-gold-400 font-serif text-xl mb-4 italic opacity-80">
              {skill.role}
            </p>
            <p className="text-neutral-400 font-light leading-relaxed">
              {skill.desc}
            </p>

            <div className="mt-8 flex gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`h-1 w-8 rounded-full ${i <= 4 ? 'bg-gold-500/30' : 'bg-white/5'}`} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
