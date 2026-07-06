import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cloud,
  Code2,
  Database,
  Layers,
  Wrench,
} from 'lucide-react'
import { skills } from '../data/portfolio'
import { ScrollReveal } from './ScrollReveal'

const categories = [
  { key: 'frontend' as const, label: 'Frontend', icon: Code2, color: 'primary' },
  { key: 'backend' as const, label: 'Backend', icon: Layers, color: 'secondary' },
  { key: 'database' as const, label: 'Database', icon: Database, color: 'accent' },
  { key: 'cloud' as const, label: 'Cloud', icon: Cloud, color: 'primary' },
  { key: 'tools' as const, label: 'Tools', icon: Wrench, color: 'secondary' },
]

const colorMap = {
  primary: 'bg-primary/10 text-primary border-primary/20 hover:border-primary/40',
  secondary: 'bg-secondary/10 text-secondary border-secondary/20 hover:border-secondary/40',
  accent: 'bg-accent/10 text-accent border-accent/20 hover:border-accent/40',
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]['key']>('frontend')

  const active = categories.find((c) => c.key === activeCategory)!

  return (
    <section id="skills" className="section-padding bg-surface/30" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Skills</span>
            <h2 id="skills-heading" className="section-title">
              Technologies I work with
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = activeCategory === cat.key
              return (
                <button
                  key={cat.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? colorMap[cat.color as keyof typeof colorMap]
                      : 'border-border bg-surface/50 text-muted hover:text-text'
                  }`}
                >
                  <Icon size={16} />
                  {cat.label}
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div
            className="card mt-8 min-h-[200px] p-8"
            role="tabpanel"
            aria-label={`${active.label} skills`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
              >
                {skills[activeCategory].map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background/50 p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-glow-sm"
                  >
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary transition-transform group-hover:scale-150" />
                    <span className="text-sm font-medium text-text">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
