import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <motion.div
      className={`flex flex-col ${alignClass} mb-12 md:mb-16`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-blue-400 mb-4">
          <span className="w-8 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
          {eyebrow}
          <span className="w-8 h-px bg-gradient-to-r from-purple-500 to-blue-500" />
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
