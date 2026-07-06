import { motion, type HTMLMotionProps } from 'framer-motion'
import { type ReactNode } from 'react'

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
}

export function ScrollReveal({ children, delay = 0, ...props }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
