import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad px-5 sm:px-8 max-w-4xl mx-auto"
    >
      <SectionHeading
        hexCode="0x04 // experience"
        title="Experience"
        subtitle="Internship work and virtual experience programs that bridged theory with applied practice."
      />

      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />

        <div className="flex flex-col gap-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-8 sm:-left-10 top-1 w-4 h-4 rounded-full bg-bg border-2 border-primary flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </span>

              <div className="glass rounded-xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-primary" />
                    <h3 className="font-display font-semibold text-ink">
                      {item.role}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-ink-muted px-2.5 py-1 rounded-full border border-border">
                    {item.duration}
                  </span>
                </div>
                <p className="text-primary text-sm font-medium mb-3">
                  {item.org}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-ink-muted text-sm flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 text-[10px]">
                        ▸
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
