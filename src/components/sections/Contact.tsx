'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen py-32 px-4 flex flex-col justify-center max-w-7xl mx-auto z-10 pointer-events-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pointer-events-auto">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="text-sunny-400 uppercase tracking-[0.6em] text-[10px] mb-6"
            >
              Chapter 7: The Connection
            </motion.p>
            <h2 className="text-6xl md:text-8xl font-serif mb-8 text-white/90">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-neutral-400 text-xl font-light leading-relaxed italic">
              "Every great story is built through collaboration. Let's write the next chapter together."
            </p>
          </motion.div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-sunny-400/20 group-hover:border-sunny-400/50 transition-all duration-500">
                <Mail className="w-8 h-8 text-sunny-400" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Direct Signal</p>
                <span className="text-xl text-white font-serif">sahasra.peram.77@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Github className="w-6 h-6" />, label: "Github", href: "https://github.com/Sahasraperam" },
                { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/sahasra-peram-7813a4290/" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group"
                >
                  <div className="group-hover:scale-110 group-hover:text-sunny-400 transition-all">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden group"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-sunny-400/5 rounded-full blur-[80px] group-hover:bg-sunny-400/10 transition-colors" />

          <form
            action="https://formspree.io/f/xyzkpvoy" // Placeholder ID - User should replace
            method="POST"
            className="space-y-8 relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 ml-1 font-bold">Identity</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-sunny-400 focus:ring-1 focus:ring-sunny-400 transition-all duration-500 hover:bg-white/[0.07]"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 ml-1 font-bold">Frequency</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-sunny-400 focus:ring-1 focus:ring-sunny-400 transition-all duration-500 hover:bg-white/[0.07]"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 ml-1 font-bold">Transmission</label>
              <textarea
                rows={5}
                name="message"
                required
                placeholder="Tell me about your vision..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-sunny-400 focus:ring-1 focus:ring-sunny-400 transition-all duration-500 hover:bg-white/[0.07] resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full relative group overflow-hidden bg-white text-black font-bold py-6 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Send Mission Request
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Send className="w-4 h-4 text-white" />
              </div>
            </button>

            <div className="flex justify-center mt-6">
              <a
                href="/resume.pdf"
                download
                className="text-sunny-400 hover:text-sunny-300 transition-colors uppercase text-[10px] tracking-widest font-bold underline underline-offset-8"
              >
                Or download my formal identity (PDF Resume)
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
