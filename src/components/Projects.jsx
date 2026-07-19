import { motion } from 'framer-motion'
import { ExternalLink, FolderKanban } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { GitHubIcon } from './SocialIcons'
import { projects } from '../data'

const statusStyles = {
  Completed: 'bg-green-500/10 text-green-400 border-green-500/25',
  'In Development': 'bg-blue-500/10 text-blue-400 border-blue-500/25',
  Upcoming: 'bg-purple-500/10 text-purple-400 border-purple-500/25',
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 relative">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          subtitle="Selected work spanning AI products, ML pipelines, and classic learning projects."
        />

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="glass rounded-3xl overflow-hidden gradient-border group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Gradient header strip */}
              <div
                className={`h-28 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center border-b border-white/5`}
              >
                <div className="w-14 h-14 rounded-2xl glass-strong flex items-center justify-center group-hover:scale-105 transition-transform">
                  <FolderKanban size={24} className="text-white/80" />
                </div>
                <span
                  className={`absolute top-4 right-4 text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full border ${statusStyles[project.status] || statusStyles.Upcoming}`}
                >
                  {project.status}
                </span>
              </div>

              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p className="text-xs text-blue-400 font-medium mb-1 tracking-wide">
                  {project.subtitle}
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium glass hover:bg-white/10 text-white transition-colors"
                  >
                    <GitHubIcon size={14} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
