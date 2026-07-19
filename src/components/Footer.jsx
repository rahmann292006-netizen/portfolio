import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, XIcon } from './SocialIcons'
import { socials } from '../data'

const socialIcons = [
  { href: socials.github, icon: GitHubIcon, label: 'GitHub' },
  { href: socials.linkedin, icon: LinkedInIcon, label: 'LinkedIn' },
  { href: socials.twitter, icon: XIcon, label: 'X' },
  { href: socials.email, icon: Mail, label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10 relative">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
              AR
            </div>
            <span className="text-sm text-zinc-400">Abdul Rahman</span>
          </div>

          <p className="text-sm text-zinc-500 text-center">
            Built with <span className="text-red-400">❤️</span> by Abdul Rahman
          </p>

          <div className="flex items-center gap-2">
            {socialIcons.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-[11px] text-zinc-600 mt-8">
          © {year} Abdul Rahman. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
