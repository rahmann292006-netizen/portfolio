import { motion } from 'framer-motion'
import { Target, BookOpen, Heart, Rocket, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { aboutPoints } from '../data'

const icons = [GraduationCap, BookOpen, BookOpen, Heart, Rocket]

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle="Aspiring AI Engineer on a mission to build products that make a real difference."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            className="glass rounded-3xl p-8 md:p-10 gradient-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
              <Target size={12} />
              Vision
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 leading-snug">
              From student to builder — crafting the future of AI products.
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              I&apos;m a Computer Science Engineering student deeply passionate about Artificial
              Intelligence and Machine Learning. I believe the best way to learn is by building —
              and documenting that journey in public.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My focus areas include AI for Fitness, Health, and Productivity. Long-term, I aim to
              build AI products used by millions — turning research into real-world impact as both
              an engineer and entrepreneur.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {aboutPoints.map((point, i) => {
              const Icon = icons[i] || Target
              return (
                <motion.div
                  key={point}
                  className="glass rounded-2xl p-5 flex gap-4 items-start hover:bg-white/[0.05] transition-colors group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Icon size={18} />
                  </div>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed pt-1.5">
                    {point}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
