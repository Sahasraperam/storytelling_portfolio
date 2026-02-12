'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (or wait for assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds of "drama"

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-whale-800 text-sunny-400"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="text-6xl md:text-8xl font-serif text-center"
            >
              SAHASRA
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-[1px] bg-sunny-400 mt-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 uppercase tracking-[0.3em] text-xs"
          >
            Initializing Story...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
