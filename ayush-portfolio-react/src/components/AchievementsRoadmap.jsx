import { motion } from 'framer-motion';
import { Trophy, Map } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { achievements, learningRoadmap } from '../data/portfolioData';

export default function AchievementsRoadmap() {
  return (
    <section className="section-pad px-5 sm:px-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeading hexCode="0x07 // achievements" title="Achievements" />
          <ul className="flex flex-col gap-4">
            {achievements.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Trophy size={14} className="text-primary" />
                </span>
                <span className="text-ink-muted text-sm leading-relaxed pt-1.5">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading
            hexCode="0x08 // roadmap"
            title="Current Learning Journey"
          />
          <div className="relative pl-7">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />
            <div className="flex flex-col gap-6">
              {learningRoadmap.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative flex items-center gap-3"
                >
                  <span className="absolute -left-7 w-3.5 h-3.5 rounded-full bg-bg border-2 border-primary" />
                  <Map size={14} className="text-primary shrink-0" />
                  <span className="text-ink font-medium text-sm">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
