import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '../data/portfolioData';

const GITHUB_USERNAME = profile.github.split('/').filter(Boolean).pop();

export default function GithubStats() {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API request failed');
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        });
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section-pad px-5 sm:px-8 max-w-6xl mx-auto">
      <SectionHeading
        hexCode="0x09 // github"
        title="GitHub Activity"
        subtitle="Live snapshot of public repositories and contribution graph."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-6 sm:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
              <Github size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-display font-semibold text-ink">
                @{GITHUB_USERNAME}
              </p>
              <p className="text-xs text-ink-muted font-mono">
                {status === 'ready' && 'connection established'}
                {status === 'loading' && 'fetching data...'}
                {status === 'error' && 'showing public profile'}
              </p>
            </div>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-dim transition-colors font-medium"
          >
            View Profile <ExternalLink size={14} />
          </a>
        </div>

        {status === 'ready' && stats && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            <StatBlock icon={BookOpen} label="Repositories" value={stats.repos} />
            <StatBlock icon={Star} label="Followers" value={stats.followers} />
            <StatBlock icon={GitFork} label="Following" value={stats.following} />
          </div>
        )}

        <div className="rounded-xl overflow-hidden border border-border bg-bg/40">
          <img
            src={`https://ghchart.rshah.org/FF4D4D/${GITHUB_USERNAME}`}
            alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
            className="w-full h-auto block"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function StatBlock({ icon: Icon, label, value }) {
  return (
    <div className="text-center py-3 rounded-xl bg-bg/40 border border-border">
      <Icon size={16} className="text-primary mx-auto mb-1.5" />
      <p className="font-display font-bold text-lg text-ink">{value}</p>
      <p className="text-[11px] font-mono text-ink-muted">{label}</p>
    </div>
  );
}
