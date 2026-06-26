import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderGit2 } from 'lucide-react';
import { profile, heroBootLines, heroBullets } from '../data/portfolioData';

/**
 * Signature element: a terminal "boot sequence" that types the
 * hero quote line by line, like a system log finishing initialization.
 * This stands in for the brief's "typing animation" requirement while
 * staying restrained — no matrix rain, no green-on-black cliché.
 */
function BootSequence() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedChars, setTypedChars] = useState(0);

  useEffect(() => {
    if (visibleLines >= heroBootLines.length) return;
    const currentLine = heroBootLines[visibleLines];

    if (typedChars < currentLine.length) {
      const t = setTimeout(() => setTypedChars((c) => c + 1), 55);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setTypedChars(0);
    }, 280);
    return () => clearTimeout(t);
  }, [typedChars, visibleLines]);

  return (
    <div className="font-mono text-left inline-block">
      {heroBootLines.map((line, i) => {
        const isCurrent = i === visibleLines;
        const isDone = i < visibleLines;
        if (!isCurrent && !isDone) return null;
        const text = isDone ? line : line.slice(0, typedChars);
        return (
          <div
            key={line}
            className="flex items-baseline gap-3 leading-[1.15]"
          >
            <span className="text-primary/50 text-base sm:text-lg select-none">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-ink">
              {text}
              {isCurrent && (
                <span className="inline-block w-[0.5ch] h-[0.85em] bg-primary ml-1 animate-blink align-middle" />
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center grid-overlay overflow-hidden px-5 sm:px-8 pt-28 pb-20"
    >
      {/* ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center gap-8">
        <span className="eyebrow px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
          system://identity.init
        </span>

        <BootSequence />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
            {profile.name}
          </h1>
          <p className="text-primary font-medium text-base sm:text-lg">
            {profile.title}
          </p>
          <p className="text-ink-muted text-sm sm:text-base">
            {profile.subtitle}
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {heroBullets.map((bullet, i) => (
            <motion.li
              key={bullet}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 + i * 0.12, duration: 0.4 }}
              className="glass px-4 py-2 rounded-full text-xs sm:text-sm font-mono text-ink-muted flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {bullet}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-2"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary-dim transition-colors shadow-lg shadow-primary/20"
          >
            <FolderGit2 size={16} />
            View Projects
          </button>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-ink font-medium text-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 text-ink-muted hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
