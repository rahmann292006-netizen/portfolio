import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="max-w-3xl mx-auto px-5">
        <SectionHeading
          eyebrow="Resume"
          title="Download My Resume"
          subtitle="A concise overview of education, skills, projects, and experience for recruiters and hiring managers."
        />

        <motion.div
          className="glass rounded-3xl p-8 md:p-10 gradient-border text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

          <div className="relative">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-6">
              <FileText size={28} className="text-blue-400" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              Abdul Rahman — Resume
            </h3>

            <p className="text-sm text-zinc-400 mb-8 max-w-md mx-auto">
              AI Engineer · Machine Learning Enthusiast · Building AI Products
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
            >
              <Download size={16} />
              View Resume (PDF)
            </a>

            <p className="mt-5 text-[11px] text-zinc-600">
              Place your PDF at{' '}
              <code className="text-zinc-500">public/resume.pdf</code>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}