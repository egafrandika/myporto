import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './icons'
import { personal } from '../data/portfolio'

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_auto]">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-sm text-muted backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-xl font-medium text-primary sm:text-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            {personal.role}
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <button
              onClick={() => scrollTo('projects')}
              className="btn-primary"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-secondary"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            {[
              { href: personal.github, icon: GitHubIcon, label: 'GitHub' },
              { href: personal.linkedin, icon: LinkedInIcon, label: 'LinkedIn' },
              { href: personal.whatsappUrl, icon: WhatsAppIcon, label: 'WhatsApp' },
              { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                className="social-link"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="order-1 flex justify-center lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary opacity-30 blur-2xl" />
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-primary via-accent to-secondary shadow-glow">
              <div className="overflow-hidden rounded-[22px] border border-border/50 bg-surface">
                <img
                  src={personal.avatar}
                  alt={`${personal.name}, ${personal.role}`}
                  width={288}
                  height={288}
                  className="h-56 w-56 object-cover object-top sm:h-72 sm:w-72"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
            <motion.div
              className="absolute -right-4 -bottom-4 rounded-2xl border border-border bg-surface/90 px-4 py-3 shadow-card backdrop-blur-sm"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-xs text-muted">Based in</p>
              <p className="text-sm font-medium text-text">Indonesia 🇮🇩</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  )
}
