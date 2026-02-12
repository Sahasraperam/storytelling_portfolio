'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Beginning', href: '#hero' },
  { name: 'Training', href: '#experience' },
  { name: 'Builds', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Powers', href: '#skills' },
  { name: 'Vision', href: '#vision' },
  { name: 'Connect', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-40 px-6 py-3 rounded-full transition-all duration-300",
        scrolled ? "glass shadow-2xl" : "bg-transparent"
      )}
    >
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-sunny-400 transition-colors font-medium"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
