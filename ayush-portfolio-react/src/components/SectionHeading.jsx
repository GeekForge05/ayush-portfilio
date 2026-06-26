import { motion } from 'framer-motion';

/**
 * hexCode: a short hex-style label (e.g. "0x01") used as the section
 * eyebrow. Ties section ordering to the security theme meaningfully
 * (memory addresses / opcodes) rather than generic "01 / 02" numbering.
 */
export default function SectionHeading({ hexCode, title, subtitle, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''}`}
    >
      <span className="eyebrow">{hexCode}</span>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-ink-muted mt-3 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`h-px w-16 bg-gradient-to-r from-primary to-primary-dim mt-5 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
