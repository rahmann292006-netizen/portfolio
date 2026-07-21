import { motion } from 'framer-motion'
import { Award, BadgeCheck, Clock, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { certifications } from '../data'

const statusMeta = {
  Completed: {
    icon: BadgeCheck,
    className: 'bg-green-500/10 text-green-400 border-green-500/25',
  },
  'In Progress': {
    icon: Clock,
    className: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
  },
  Upcoming: {
    icon: Sparkles,
    className: 'bg-purple-500/10 text-purple-400 border-purple-500/25',
  },
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & Learning"
          subtitle="Formal certifications and courses that back up the skills on this portfolio."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => {
            const meta = statusMeta[cert.status] || statusMeta.Upcoming
            const StatusIcon = meta.icon

            return (
              <motion.article
                key={cert.title}
                className="glass rounded-3xl p-6 md:p-7 gradient-border group relative overflow-hidden"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:opacity-100 opacity-60 transition-opacity" />

                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                    <Award size={22} className="text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full border ${meta.className}`}
                      >
                        <StatusIcon size={10} />
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 mb-2">
                      {cert.issuer} · {cert.year}
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed">{cert.description}</p>
                    {cert.certificate && (
  <a
    href={cert.certificate}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
  >
    View Certificate →
  </a>
)}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
