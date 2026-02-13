'use client';

import { motion } from 'framer-motion';
import { Shield, Cpu, Code2, Rocket, Brain, Globe } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Full Stack',
    desc: 'The Architect',
    details: 'Forging robust structures with React.js, Next.js, and Flask.',
    stack: ['ReactJs', 'Flask', 'Next.js', 'TypeScript']
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI / ML',
    desc: 'The Predictor',
    details: 'Integrating LLMs and OpenCV for intelligent vision and automation.',
    stack: ['Python', 'OpenCV', 'PyTorch', 'TensorFlow']
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Cybersecurity',
    desc: 'The Defender',
    details: 'Securing systems with heavy focus on network and cloud security.',
    stack: ['C++', 'Java', 'Linux', 'Network Security']
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Data & Cloud',
    desc: 'The Efficient',
    details: 'Optimizing data pathways with MongoDB and Firebase integration.',
    stack: ['MongoDB', 'Firebase', 'SQL', 'GCP']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-32 px-4 flex flex-col justify-center max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sunny-400 uppercase tracking-[0.6em] text-[10px] mb-6 font-bold">
            Chapter 5: Digital Architectures
          </p>
          <h2 className="text-6xl md:text-8xl font-serif mb-8 text-white/90">
            Augmented <span className="text-gradient">Powers</span>
          </h2>
          <p className="text-neutral-400 text-xl font-light leading-relaxed italic max-w-xl">
            "I don't just write code. I build resilient ecosystems that balance power and security."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-8 rounded-3xl group relative overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-sunny-400/0 group-hover:bg-sunny-400/5 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 w-fit mb-6 group-hover:border-sunny-400/30 transition-colors">
                  <div className="text-sunny-400 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif mb-2 text-white group-hover:text-sunny-200 transition-colors">{skill.title}</h3>
                <p className="text-sunny-400 text-[10px] uppercase tracking-widest font-bold mb-3">{skill.desc}</p>
                <p className="text-neutral-500 text-sm font-light leading-relaxed mb-4">{skill.details}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.stack.map((item) => (
                    <span key={item} className="text-[9px] px-2 py-1 rounded bg-white/5 border border-white/10 text-neutral-400">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
