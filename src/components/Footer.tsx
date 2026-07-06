import { Heart, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons'
import { personal } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold text-text">
            EF<span className="text-primary">.</span>
          </p>
          <p className="mt-1 flex items-center justify-center gap-1 text-sm text-muted sm:justify-start">
            Built with <Heart size={14} className="text-primary" aria-hidden="true" /> by{' '}
            {personal.name}
          </p>
          <p className="mt-1 text-xs text-muted">
            &copy; {year} {personal.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { href: personal.github, icon: GitHubIcon, label: 'GitHub' },
            { href: personal.linkedin, icon: LinkedInIcon, label: 'LinkedIn' },
            { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="social-link"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
