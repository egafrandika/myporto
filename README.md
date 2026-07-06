# Ega Frandika — Portfolio

A modern, premium personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Dark mode by default with optional light mode toggle
- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations and micro-interactions
- Sticky navigation with active section highlighting
- WCAG accessibility (skip link, ARIA labels, focus states, reduced motion)
- Sections: Hero, About, Skills, Projects, Experience, Testimonials, Contact

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

```bash
# Use Node.js 20+ (recommended: 22)
nvm use 22

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

Edit `src/data/portfolio.ts` to update your personal information, projects, experience, and skills.

Replace the avatar initials in the Hero section with your photo by adding an image to `public/` and updating `Hero.tsx`.

## License

MIT
