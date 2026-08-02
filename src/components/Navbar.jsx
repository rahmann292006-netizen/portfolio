import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navLinks } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3 shadow-lg shadow-black/40' : 'py-5 bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.6 }}
    >
      <nav className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group" aria-label="Home">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            λ
          </div>
          <span className="font-semibold text-white hidden sm:block tracking-tight">
            Abdul Rahman
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
          >
            <Download size={14} />
            Resume
          </a>

          <button
            type="button"
            className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[60px] bg-black/95 backdrop-blur-xl z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col p-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3.5 text-lg text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <li className="mt-4 px-4">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-black font-medium"
                  onClick={() => setOpen(false)}
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
