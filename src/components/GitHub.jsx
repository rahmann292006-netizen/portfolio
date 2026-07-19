import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { GitBranch, GitCommit, Star, Users, Code2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { githubStats, topLanguages, recentRepos, socials } from '../data'

/**
 * Generate a deterministic contribution-graph style grid (placeholder).
 * Replace with a real GitHub contribution API or embed when ready.
 */
function useContributionCells() {
  return useMemo(() => {
    const cells = []
    // 53 weeks × 7 days ≈ year view
    for (let w = 0; w < 53; w++) {
      for (let d = 0; d < 7; d++) {
        // Pseudo-random intensity seeded by position (stable across renders)
        const seed = (w * 7 + d) * 17 + 31
        const level = seed % 11 === 0 ? 0 : (seed % 5)
        cells.push({ w, d, level })
      }
    }
    return cells
  }, [])
}

const levelColors = [
  'bg-zinc-800/80',
  'bg-blue-900/70',
  'bg-blue-700/70',
  'bg-blue-500/80',
  'bg-purple-500/90',
]

const statCards = [
  { key: 'repos', label: 'Repositories', icon: GitBranch },
  { key: 'contributions', label: 'Contributions', icon: GitCommit },
  { key: 'stars', label: 'Stars', icon: Star },
  { key: 'followers', label: 'Followers', icon: Users },
]

export default function GitHub() {
  const cells = useContributionCells()

  return (
    <section id="github" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          eyebrow="GitHub"
          title="Open Source Activity"
          subtitle="Placeholder stats and contribution graph — swap in live GitHub data when you deploy."
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
          {statCards.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.key}
                className="glass rounded-2xl p-5 gradient-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-2 text-zinc-500 mb-2">
                  <Icon size={14} />
                  <span className="text-[11px] uppercase tracking-wider">{stat.label}</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold gradient-text-blue">
                  {githubStats[stat.key]}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Contribution graph */}
          <motion.div
            className="lg:col-span-2 glass rounded-3xl p-5 md:p-6 gradient-border overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">Contribution Graph</h3>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                Placeholder
              </span>
            </div>
            <div
              className="grid gap-[3px] min-w-[520px]"
              style={{
                gridTemplateColumns: 'repeat(53, minmax(0, 1fr))',
                gridTemplateRows: 'repeat(7, 10px)',
                gridAutoFlow: 'column',
              }}
            >
              {cells.map((cell, idx) => (
                <div
                  key={idx}
                  className={`contrib-cell w-full h-[10px] ${levelColors[cell.level]}`}
                  title={`Week ${cell.w + 1}, Day ${cell.d + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5 mt-3 justify-end text-[10px] text-zinc-500">
              <span>Less</span>
              {levelColors.map((c, i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-sm ${c}`} />
              ))}
              <span>More</span>
            </div>
          </motion.div>

          {/* Top languages */}
          <motion.div
            className="glass rounded-3xl p-5 md:p-6 gradient-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Code2 size={16} className="text-purple-400" />
              <h3 className="text-sm font-semibold text-white">Top Languages</h3>
            </div>
            <div className="flex flex-col gap-4">
              {topLanguages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-zinc-300">{lang.name}</span>
                    <span className="text-zinc-500">{lang.percent}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: lang.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent repos */}
        <motion.div
          className="mt-5 glass rounded-3xl p-5 md:p-6 gradient-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-white mb-4">Recent Repositories</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {recentRepos.map((repo) => (
              <a
                key={repo.name}
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 hover:bg-white/[0.05] hover:border-white/15 transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300">
                    {repo.name}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-zinc-500">
                    <Star size={11} />
                    {repo.stars}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mb-2 line-clamp-2">{repo.description}</p>
                <span className="text-[10px] text-zinc-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  {repo.lang}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
