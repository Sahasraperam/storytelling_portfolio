'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Bot, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Aegis System',
    story: 'A mission to secure the digital frontier. Built an AI-powered threat detection system that monitors network traffic in real-time.',
    stack: ['Python', 'TensorFlow', 'Docker'],
    icon: <ShieldCheck className="w-6 h-6" />,
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
  },
  {
    title: 'Sentinel AI',
    story: 'Creating a digital companion. A SaaS platform that automates customer support using large language models and semantic search.',
    stack: ['Next.js', 'OpenAI', 'Pinecone'],
    icon: <Bot className="w-6 h-6" />,
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
  },
  {
    title: 'Nexus Hub',
    story: 'Connecting the dots. A distributed system architecture for processing millions of events per second with high reliability.',
    stack: ['Go', 'Kafka', 'Kubernetes'],
    icon: <Terminal className="w-6 h-6" />,
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-32 px-4 max-w-7xl mx-auto z-10 pointer-events-none">
      <div className="text-center mb-32 pointer-events-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gold-500 uppercase tracking-[0.6em] text-[10px] mb-6"
        >
          Chapter 4: The Missions
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-serif mb-8 text-white/90"
        >
          Mission <span className="text-gradient">Log</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pointer-events-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              y: -20,
              rotateX: 5,
              rotateY: 5,
            }}
            className="glass p-1 rounded-[2.5rem] relative group border-white/5 hover:border-gold-500/30 transition-all duration-700 cursor-none h-full overflow-hidden"
          >
            <div className="relative h-full p-8 rounded-[2.4rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex flex-col">
              {/* Backdrop Glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-gold-500/5 rounded-full blur-[80px] group-hover:bg-gold-500/10 transition-colors" />

              <div className="relative aspect-video mb-8 overflow-hidden rounded-2xl border border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gold-950/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-3 text-gold-400 mb-6">
                  {project.icon}
                  <span className="uppercase tracking-[0.3em] text-[9px] font-bold">Mission {index + 1}</span>
                </div>

                <h3 className="text-3xl font-serif text-white mb-6 group-hover:text-gold-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-400 font-light leading-relaxed italic mb-8">
                  "{project.story}"
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <a
                  href={project.github}
                  className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github className="w-3 h-3" /> System Specs
                </a>
                <a
                  href={project.link}
                  className="text-[10px] uppercase tracking-widest font-bold text-gold-500 hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  Execute <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
