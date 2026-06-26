import { motion } from 'framer-motion';
import {
  Code2,
  ShieldHalf,
  Network,
  Monitor,
  Wrench,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/portfolioData';

const iconMap = {
  languages: Code2,
  cybersecurity: ShieldHalf,
  networking: Network,
  os: Monitor,
  tools: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad px-5 sm:px-8 max-w-6xl mx-auto"
    >
      <SectionHeading
        hexCode="0x02 // skills"
        title="Technical Skills"
        subtitle="A foundation built across languages, security concepts, networking, and the tools used to apply them."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, gi) => {
          const Icon = iconMap[group.id] ?? Code2;
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              whileHover={{ y: -5 }}
              className={`glass rounded-2xl p-6 ${
                group.id === 'cybersecurity' || group.id === 'networking'
                  ? 'sm:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-ink text-[15px]">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.08 + ii * 0.03 }}
                    className="text-xs font-mono px-2.5 py-1.5 rounded-md bg-bg/60 border border-border text-ink-muted hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
