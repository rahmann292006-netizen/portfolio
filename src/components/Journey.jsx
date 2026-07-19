import { motion } from 'framer-motion'
import { Check, CircleDot, Circle } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { journey } from '../data'

/** Status badge styles for timeline items */
const statusConfig = {
  completed: {
    label: 'Completed',
    icon: Check,
    node: 'bg-green-500 border-green-400 shadow-green-500/40',
    badge: 'bg-green-500/10 text-green-400 border-green-500/25',
    line: 'from-green-500/60 to-green-500/20',
  },
  current: {
    label: 'Current',
    icon: CircleDot,
    node: 'bg-blue-500 border-blue-400 shadow-blue-500/50 animate-pulse',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
    line: 'from-blue-500/40 to-purple-500/20',
  },
  upcoming: {
    label: 'Upcoming',
    icon: Circle,
    node: 'bg-zinc-800 border-zinc-600 shadow-none',
    badge: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20',
    line: 'from-zinc-700 to-zinc-800',
  },
}

export default function Journey() {
  return (
    <section id="journey" className="section-padding relative">
      <div className="max-w-3xl mx-auto px-5">
        <SectionHeading
          eyebrow="Learning Journey"
          title="My AI Roadmap"
          subtitle="A clear path from fundamentals to AI engineering — tracking progress in public."
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-green-500/50 via-blue-500/40 to-zinc-800"
            aria-hidden="true"
          />

          <ul className="flex flex-col gap-0">
            {journey.map((item, i) => {
              const config = statusConfig[item.status]
              const Icon = config.icon

              return (
                <motion.li
                  key={item.title}
                  className="relative flex gap-5 pb-8 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  {/* Timeline node */}
                  <div
                    className={`relative z-10 shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-lg ${config.node}`}
                  >
                    <Icon size={16} className="text-white" strokeWidth={2.5} />
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl p-5 flex-1 gradient-border hover:bg-white/[0.04] transition-colors">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-base md:text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <span
                        className={`text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full border ${config.badge}`}
                      >
                        {config.label}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
