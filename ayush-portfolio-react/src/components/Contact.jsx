import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '../data/portfolioData';

const socialLinks = [
  { label: 'Email', icon: Mail, href: `mailto:${profile.email}`, value: profile.email },
  { label: 'LinkedIn', icon: Linkedin, href: profile.linkedin, value: 'ayush-kumar-pandey' },
  { label: 'GitHub', icon: Github, href: profile.github, value: 'GeekForge05' },
  { label: 'Instagram', icon: Instagram, href: profile.instagram, value: '@ayush_x05__' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad px-5 sm:px-8 max-w-6xl mx-auto">
      <SectionHeading
        hexCode="0x0A // contact"
        title="Get In Touch"
        subtitle="Open to internships, entry-level cybersecurity roles, and collaboration opportunities."
      />

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {socialLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:border-primary/40 border border-transparent transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-mono text-ink-muted">{link.label}</p>
                  <p className="text-ink text-sm font-medium truncate">{link.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-mono text-ink-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="What would you like to discuss?"
              className="bg-bg/40 border border-border rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-primary/50 outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary-dim transition-colors"
          >
            {sent ? (
              <>
                <CheckCircle2 size={16} /> Opening your mail client…
              </>
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>
          <p className="text-[11px] text-ink-muted font-mono text-center">
            This opens your default email app addressed to {profile.email}
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-mono text-ink-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="bg-bg/40 border border-border rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-primary/50 outline-none transition-colors"
      />
    </div>
  );
}
