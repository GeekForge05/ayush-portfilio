import { motion } from 'framer-motion';
import { Folder, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad px-5 sm:px-8 max-w-6xl mx-auto"
    >
      <SectionHeading
        hexCode="0x03 // projects"
        title="Featured Projects"
        subtitle="Hands-on work spanning web development, security analysis, and lab-based networking practice."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass rounded-2xl p-6 flex flex-col gap-4 group relative overflow-hidden"
          >
            <div
              className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />

            <div className="flex items-center justify-between relative z-10">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <Folder size={20} className="text-primary" />
              </div>
              <ArrowUpRight
                size={18}
                className="text-ink-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>

            <h3 className="font-display font-semibold text-ink text-lg leading-snug relative z-10">
              {project.name}
            </h3>

            <p className="text-ink-muted text-sm leading-relaxed relative z-10">
              {project.description}
            </p>

            <ul className="flex flex-col gap-1.5 relative z-10">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-xs text-ink-muted"
                >
                  <CheckCircle2 size={13} className="text-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border relative z-10">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2 py-1 rounded bg-bg/60 border border-border text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
