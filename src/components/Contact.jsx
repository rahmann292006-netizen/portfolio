import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { GitHubIcon, LinkedInIcon, XIcon } from './SocialIcons'
import { socials } from '../data'

const channels = [
  {
    name: 'GitHub',
    href: socials.github,
    icon: GitHubIcon,
    description: 'Code, projects & open source',
    accent: 'hover:border-white/30 hover:shadow-white/5',
  },
  {
    name: 'LinkedIn',
    href: socials.linkedin,
    icon: LinkedInIcon,
    description: 'Professional network',
    accent: 'hover:border-blue-400/40 hover:shadow-blue-500/10',
  },
  {
    name: 'X (Twitter)',
    href: socials.twitter,
    icon: XIcon,
    description: 'Thoughts & learning updates',
    accent: 'hover:border-zinc-400/40 hover:shadow-zinc-400/5',
  },
  {
    name: 'Email',
    href: socials.email,
    icon: Mail,
    description: 'Direct inquiries & opportunities',
    accent: 'hover:border-purple-400/40 hover:shadow-purple-500/10',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Open to internships, collaborations, and conversations about AI products."
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {channels.map((channel, i) => {
            const Icon = channel.icon
            return (
              <motion.a
                key={channel.name}
                href={channel.href}
                target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={channel.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={`glass rounded-2xl p-5 md:p-6 flex items-center gap-4 gradient-border transition-all shadow-lg shadow-transparent ${channel.accent}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/15 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{channel.name}</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{channel.description}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
