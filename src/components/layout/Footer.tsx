export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-serif tracking-tighter mb-2">Sahasra</span>
          <p className="text-neutral-500 text-sm font-light">Building the future, one chapter at a time.</p>
        </div>

        <div className="flex gap-8 text-neutral-500 text-xs uppercase tracking-[0.2em]">
          <a href="#hero" className="hover:text-sunny-400 transition-colors">Start Over</a>
          <a href="#" className="hover:text-sunny-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-sunny-400 transition-colors">Legal</a>
        </div>

        <div className="text-neutral-500 text-xs tracking-widest">
          © {new Date().getFullYear()} Sahasra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
