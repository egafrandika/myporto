import { type FormEvent, useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons'
import { personal } from '../data/portfolio'
import { ScrollReveal } from './ScrollReveal'

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: LinkedInIcon, label: 'LinkedIn', value: 'egafrandika', href: personal.linkedin },
    { icon: GitHubIcon, label: 'GitHub', value: 'egafrandika', href: personal.github },
    { icon: MapPin, label: 'Location', value: personal.location, href: undefined },
  ]

  return (
    <section id="contact" className="section-padding bg-surface/30" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Contact</span>
            <h2 id="contact-heading" className="section-title">
              Let&apos;s work together
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Have a project in mind or want to connect? I&apos;d love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="card flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={label !== 'Email' ? '_blank' : undefined}
                        rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium text-text transition-colors hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-text">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-8" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-text">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="input-field"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-text">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="input-field"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-text">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="input-field resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary mt-6 w-full sm:w-auto"
                aria-live="polite"
              >
                <Send size={18} />
                {submitted ? 'Opening email client...' : 'Send Message'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
