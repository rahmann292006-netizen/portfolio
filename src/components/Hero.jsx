import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, FolderGit2, User } from 'lucide-react'
import meee from "../assets/meee.png";
const TYPING_TEXT = 'Building AI Solutions That Solve Real Problems.'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < TYPING_TEXT.length) {
          setDisplayed(TYPING_TEXT.slice(0, i + 1))
          i += 1
        } else {
          clearInterval(interval)
          setDone(true)
        }
      }, 38)
      return () => clearInterval(interval)
    }, 2000)

    return () => clearTimeout(startDelay)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="orb orb-blue top-1/4 -left-20" aria-hidden="true" />
      <div className="orb orb-purple bottom-1/4 -right-20" aria-hidden="true" />
      <div className="orb orb-cyan top-1/2 left-1/2 -translate-x-1/2" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-zinc-300 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to AI / ML Internships
            </motion.div>

            <motion.p
              className="text-blue-400 font-medium text-sm md:text-base mb-3 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.5 }}
            >
              Hi, I&apos;m Abdul Rahman
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.15] mb-5 min-h-[3.5em] sm:min-h-[2.8em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.5 }}
            >
              <span className={done ? 'gradient-text' : 'text-white'}>
                {displayed}
                {!done && <span className="typing-cursor" />}
              </span>
            </motion.h1>

            <motion.p
              className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.15, duration: 0.5 }}
            >
              Computer Science student passionate about Artificial Intelligence, Machine
              Learning, and building impactful AI products.
            </motion.p>

            <motion.p
              className="text-zinc-500 text-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.25, duration: 0.5 }}
            >
              AI Engineer · Machine Learning Enthusiast · Building AI Products
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.35, duration: 0.5 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
              >
                <FolderGit2 size={16} />
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-zinc-300 text-sm font-medium hover:border-white/30 hover:text-white transition-colors"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Photo placeholder */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent blur-2xl" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[2rem] glass-strong gradient-border overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
               <img
  src={meee}
  alt="Abdul Rahman"
  className="relative z-10 w-full h-full object-cover rounded-[2rem]"
/>
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-blue-400/40 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-purple-400/40 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-purple-400/40 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-blue-400/40 rounded-br-lg" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}
