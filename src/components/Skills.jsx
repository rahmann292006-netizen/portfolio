import { motion } from 'framer-motion'
import { Code2, Library, Sparkles, Wrench } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { skills } from '../data'

const categories = [
  {
    key: 'programming',
    title: 'Programming',
    icon: Code2,
    items: skills.programming,
    color: 'from-blue-500/20 to-cyan-500/20',
    badge: 'text-blue-400 border-blue-500/20 bg-blue-500/10',
  },
  {
    key: 'libraries',
    title: 'Libraries',
    icon: Library,
    items: skills.libraries,
    color: 'from-purple-500/20 to-pink-500/20',
    badge: 'text-purple-400 border-purple-500/20 bg-purple-500/10',
  },
  {
    key: 'upcoming',
    title: 'Upcoming',
    icon: Sparkles,
    items: skills.upcoming,
    color: 'from-violet-500/20 to-indigo-500/20',
    badge: 'text-violet-400 border-violet-500/20 bg-violet-500/10',
  },
  {
    key: 'tools',
    title: 'Tools',
    icon: Wrench,
    items: skills.tools,
    color: 'from-emerald-500/20 to-teal-500/20',
    badge: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 relative">
        <SectionHeading
          eyebrow="Skills"
          title="Tech Stack & Tools"
          subtitle="What I work with today — and what I'm leveling up next."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.key}
                className="glass rounded-3xl p-6 md:p-8 gradient-border group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} border border-white/10 flex items-center justify-center`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                    {cat.key === 'upcoming' && (
                      <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                        Learning roadmap
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-tag px-3 py-1.5 rounded-full text-xs font-medium border ${cat.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
