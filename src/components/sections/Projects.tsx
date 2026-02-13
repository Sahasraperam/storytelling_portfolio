'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Lock, Database, Search } from 'lucide-react';

const projects = [
  {
    title: 'Wallet Watch',
    role: 'Financial Analytics',
    description: 'A comprehensive financial tracking dashboard that visualizes income streams and spending patterns. It transforms raw transaction data into actionable financial intelligence.',
    tech: ['React.js', 'JavaScript', 'Tailwind'],
    github: 'https://github.com/Sahasraperam/WalletWatch',
    demo: '#',
    image: '/projects/wallet-watch.jpg',
    icon: <Database className="w-6 h-6 text-sunny-400" />
  },
  {
    title: 'Automate Job Applier',
    role: 'Automation Bot',
    description: 'A Python-based autonomous agent that navigates job portals. It utilizes Selenium and BeautifulSoup to filter listings and optimize the job search workflow.',
    tech: ['Python', 'Selenium', 'BeautifulSoup'],
    github: 'https://github.com/Sahasraperam/AutomateJobApplier',
    demo: '#',
    image: '/projects/automate-job.jpg',
    icon: <Search className="w-6 h-6 text-sunny-400" />
  },
  {
    title: 'Steganography Tool',
    role: 'Cybersecurity',
    description: 'A cryptographic security tool implementing AES encryption and LSB steganography to hide encrypted data within image files without visual distortion.',
    tech: ['Python', 'Cryptography', 'OpenCV'],
    github: 'https://github.com/Sahasraperam/Steganography',
    demo: '#',
    image: '/projects/steganography.jpg',
    icon: <Lock className="w-6 h-6 text-sunny-400" />
  }
];

export default function Projects() {
  const container = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        // Simple scale effect as they stack
        gsap.fromTo(card,
          { scale: 1 },
          {
            scale: 1 - (projects.length - index) * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top top+=100", // Start animation when card hits top area
              end: "bottom top",
              scrub: true,
              pin: true, // Stick the card
              pinSpacing: false, // Allow overlap
            }
          }
        );
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-screen py-32 px-4 max-w-6xl mx-auto z-10">
      <div className="text-center mb-32">
        <p className="text-sunny-400 uppercase tracking-[0.6em] text-[10px] mb-6">
          Chapter 3: The Builds
        </p>
        <h2 className="text-5xl md:text-7xl font-serif mb-8 text-white">
          Selected <span className="text-gradient">Works</span>
        </h2>
      </div>

      <div className="flex flex-col items-center pb-32">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={el => { cardsRef.current[index] = el; }}
            className="w-full max-w-4xl h-[60vh] md:h-[70vh] mb-12 sticky top-24"
          >
            <div className="glass w-full h-full rounded-[2rem] border-t border-sunny-400/20 shadow-2xl flex flex-col md:flex-row relative overflow-hidden group">

              {/* Text Side */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between relative z-10">
                {/* Decorative Number */}
                <span className="absolute top-4 right-8 text-[80px] md:text-[120px] font-serif text-sunny-400/5 font-bold leading-none select-none z-0">
                  0{index + 1}
                </span>

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-sunny-400/10 border border-sunny-400/20">
                      {project.icon}
                    </div>
                    <span className="text-sunny-300 uppercase tracking-widest text-xs">{project.role}</span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">
                    {project.title}
                  </h3>

                  <p className="text-neutral-300 text-base md:text-lg font-light leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-whale-900/50 border border-white/10 text-[10px] uppercase tracking-wider text-sunny-100">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sunny-400 hover:text-sunny-300 transition-colors uppercase text-[10px] tracking-widest font-bold"
                    >
                      <Github className="w-4 h-4" /> View Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-sunny-100 transition-colors uppercase text-[10px] tracking-widest font-bold"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 relative overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-whale-950/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000";
                  }}
                />

                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-whale-950/50 to-transparent pointer-events-none z-10" />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-sunny-400/0 via-sunny-400/0 to-sunny-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
