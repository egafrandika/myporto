import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolio'
import { ScrollReveal } from './ScrollReveal'

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-surface/30"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Experience</span>
            <h2 id="experience-heading" className="section-title">
              My professional journey
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative mt-12">
          <div
            className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-primary via-accent to-secondary md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          {experience.map((job, index) => (
            <ScrollReveal key={job.company} delay={index * 0.15}>
              <div
                className={`relative mb-12 flex flex-col md:mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden w-1/2 md:block" />

                <div
                  className={`w-full pl-16 md:w-1/2 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="card p-6 transition-all duration-300 hover:shadow-glow-sm">
                    <div
                      className={`flex items-start gap-3 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Briefcase size={18} />
                      </div>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="font-semibold text-text">{job.position}</h3>
                        <p className="text-sm font-medium text-primary">{job.company}</p>
                        <p className="mt-1 text-sm text-muted">
                          {job.period} · {job.duration}
                        </p>
                      </div>
                    </div>

                    <ul
                      className={`mt-4 space-y-2 ${
                        index % 2 === 0 ? 'md:text-left' : ''
                      }`}
                    >
                      {job.achievements.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className="absolute left-6 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2"
                  aria-hidden="true"
                >
                  <div className="h-3 w-3 rounded-full border-2 border-primary bg-background shadow-glow-sm" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
