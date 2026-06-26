import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-pad px-5 sm:px-8 max-w-6xl mx-auto"
    >
      <SectionHeading
        hexCode="0x05 // certifications"
        title="Certifications"
        subtitle="Industry-recognized programs and competitions that validate hands-on learning."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-6 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award size={20} className="text-primary" />
              </div>
              <span className="font-mono text-xs text-ink-muted px-2.5 py-1 rounded-full border border-border">
                {cert.year}
              </span>
            </div>
            <h3 className="font-display font-semibold text-ink leading-snug">
              {cert.name}
            </h3>
            <p className="text-primary text-sm font-medium">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
