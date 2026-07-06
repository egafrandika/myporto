import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/portfolio'
import { ScrollReveal } from './ScrollReveal'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Testimonials</span>
            <h2 id="testimonials-heading" className="section-title">
              What colleagues say
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.1}>
              <motion.blockquote
                className="card relative flex h-full flex-col p-6"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Quote
                  size={32}
                  className="absolute top-6 right-6 text-primary/20"
                  aria-hidden="true"
                />
                <p className="flex-1 text-sm leading-relaxed text-muted">
                  &ldquo;{item.content}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-white">
                    {item.avatar}
                  </div>
                  <div>
                    <cite className="text-sm font-semibold text-text not-italic">
                      {item.name}
                    </cite>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
