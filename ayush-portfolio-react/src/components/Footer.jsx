import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Terminal } from 'lucide-react';
import { profile } from '../data/portfolioData';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="border-t border-border px-5 sm:px-8 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-semibold text-ink">
            <span className="flex items-center justify-center w-7 h-7 rounded-md bg-primary/10 border border-primary/30">
              <Terminal size={14} className="text-primary" />
            </span>
            {profile.name}
          </div>
          <p className="text-xs font-mono text-ink-muted text-center">
            Built with React, Tailwind CSS &amp; Framer Motion · © {new Date().getFullYear()}
          </p>
          <p className="text-xs text-ink-muted">{profile.location}</p>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={scrollTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary-dim transition-colors"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
