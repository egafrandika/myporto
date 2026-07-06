import { GraduationCap, Award, Globe } from 'lucide-react'
import { about } from '../data/portfolio'
import { ScrollReveal } from './ScrollReveal'

export function About() {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">About Me</span>
            <h2 id="about-heading" className="section-title">
              Building digital experiences that matter
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="card p-8">
              <p className="text-lg leading-relaxed text-muted">{about.intro}</p>
              <p className="mt-4 leading-relaxed text-muted">{about.summary}</p>
              <blockquote className="mt-8 border-l-2 border-primary pl-4">
                <p className="italic text-text">&ldquo;{about.quote.text}&rdquo;</p>
                <cite className="mt-2 block text-sm text-muted not-italic">
                  — {about.quote.author}
                </cite>
              </blockquote>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.2}>
              <div className="card flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Education</h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {about.education.degree}
                  </p>
                  <p className="text-sm text-muted">{about.education.school}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {about.education.highlight}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="card flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Certification</h3>
                  <p className="mt-1 text-sm text-muted">{about.certification}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="card flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Languages</h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {about.languages.map((lang) => (
                      <li
                        key={lang}
                        className="rounded-lg bg-surface px-3 py-1 text-sm text-muted"
                      >
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
