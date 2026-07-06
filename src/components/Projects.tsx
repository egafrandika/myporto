import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from './icons'
import { projects } from '../data/portfolio'
import { ScrollReveal } from './ScrollReveal'

export function Projects() {
  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Featured Projects</span>
            <h2 id="projects-heading" className="section-title">
              Work I&apos;m proud of
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.article
                className="card group flex h-full flex-col overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-60 transition-opacity group-hover:opacity-100">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg"
                        style={{ backgroundColor: project.accent }}
                      >
                        {project.title.charAt(0)}
                      </div>
                      <div className="flex gap-2">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-background/20 px-2 py-1 text-xs text-text backdrop-blur-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-text transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.demo}
                      target={project.demo.startsWith('http') ? '_blank' : undefined}
                      rel={project.demo.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="btn-primary flex-1 justify-center text-sm py-2.5"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 justify-center text-sm py-2.5"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GitHubIcon size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
