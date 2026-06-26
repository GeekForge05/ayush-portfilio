import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      className="section-pad px-5 sm:px-8 max-w-4xl mx-auto"
    >
      <SectionHeading hexCode="0x06 // education" title="Education" />

      <div className="grid sm:grid-cols-2 gap-5">
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-xl p-6 flex flex-col gap-3"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-ink leading-snug">
              {edu.degree}
            </h3>
            <p className="text-ink-muted text-sm">{edu.school}</p>
            <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
              {edu.duration && (
                <span className="font-mono text-xs text-ink-muted">
                  {edu.duration}
                </span>
              )}
              <span className="font-mono text-xs text-primary font-semibold">
                {edu.detail}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
