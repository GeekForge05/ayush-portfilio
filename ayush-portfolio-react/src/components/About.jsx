import { motion } from 'framer-motion';
import { ShieldCheck, Target, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { aboutParagraphs, aboutStats } from '../data/portfolioData';

const cardMeta = [
  { icon: ShieldCheck, label: 'Focus', value: 'Offensive Security' },
  { icon: Target, label: 'Goal', value: 'Red Team Operator' },
  { icon: Sparkles, label: 'Approach', value: 'Practical Learning' },
];

export default function About() {
  return (
    <section id="about" className="section-pad px-5 sm:px-8 max-w-6xl mx-auto">
      <SectionHeading hexCode="0x01 // about" title="About Me" />

      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3 flex flex-col gap-5">
          {aboutParagraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-ink-muted leading-relaxed text-[15px] sm:text-base"
            >
              {para}
            </motion.p>
          ))}

          <div className="grid grid-cols-3 gap-4 mt-4">
            {aboutStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-xl p-4 text-center"
              >
                <p className="font-display text-2xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs text-ink-muted font-mono mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          {cardMeta.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-5 flex items-center gap-4 border-l-2 border-l-primary"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-ink-muted">
                    {item.label}
                  </p>
                  <p className="font-display font-semibold text-ink">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
