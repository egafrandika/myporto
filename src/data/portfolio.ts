export const personal = {
  name: 'Ega Frandika',
  role: 'Frontend Software Engineer',
  tagline:
    'Crafting responsive, user-centric, and high-performance web applications with modern frameworks.',
  location: 'Bekasi, West Java, Indonesia',
  email: 'dikafran7@gmail.com',
  phone: '+62 858-0945-5280',
  whatsapp: '+6285809455280',
  whatsappUrl: 'https://wa.me/6285809455280',
  github: 'https://github.com/egafrandika',
  linkedin: 'https://www.linkedin.com/in/egafrandika/',
  initials: 'EF',
  avatar: '/avatar.png',
}

export const about = {
  intro: `Frontend Software Engineer with 3+ years of experience specializing in crafting responsive, user-centric, and high-performance web applications. Skilled in HTML, CSS, JavaScript, and modern frameworks such as Vue.js and React.js.`,
  summary: `I transform complex ideas into seamless digital experiences — building intuitive interfaces, ensuring cross-browser compatibility, and optimizing for speed and usability. Passionate about design-focused projects and staying current with the latest frontend technologies.`,
  education: {
    degree: 'Bachelor of Computer Science',
    school: 'President University',
    year: '2021',
    highlight:
      'Thesis: Real-time Mask Object Detection using Python and YOLOv3 (Darknet), integrating Raspberry Pi and Arduino hardware with 98% model accuracy.',
  },
  certification: 'Hactiv8 — Vue.js Software Engineer',
  languages: ['English (Fluent)', 'Bahasa Indonesia (Fluent)'],
  quote: {
    text: 'Easy to learn, hard to master.',
    author: 'Dota philosophy',
  },
}

export const skills = {
  frontend: ['Vue.js', 'React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Bootstrap'],
  backend: ['Node.js', 'PHP', 'Python', 'RESTful APIs'],
  database: ['MySQL', 'PostgreSQL', 'Redis'],
  cloud: ['Jenkins CI/CD', 'Docker', 'AWS Basics'],
  tools: ['Git', 'Phabricator', 'Vite', 'Webpack', 'Jest', 'Figma'],
}

export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  images?: string[]
  gradient: string
  accent: string
}

export const projects: Project[] = [
  {
    id: 'siconversi',
    title: 'siconversi',
    description:
      'Free online PDF and image conversion platform with 22+ tools — merge, split, compress PDFs, convert Office documents, and edit images with client-side privacy for select tools.',
    tech: ['React', 'TypeScript', 'Netlify', 'PDF.js', 'Tailwind CSS'],
    github: 'https://github.com/egafrandika',
    demo: 'https://siconversi-app.netlify.app/',
    images: ['/projects/siconversi-1.png', '/projects/siconversi-2.png'],
    gradient: 'from-blue-500/20 via-indigo-500/10 to-cyan-500/20',
    accent: '#06B6D4',
  },
  {
    id: 'idnchord',
    title: 'IDNChord',
    description:
      'Indonesian guitar chord platform with thousands of songs, interactive fret diagrams, transpose controls, online tuner, metronome, auto-scroll lyrics, and FM radio streaming.',
    tech: ['React', 'TypeScript', 'Netlify', 'Web Audio API', 'Tailwind CSS'],
    github: 'https://github.com/egafrandika',
    demo: 'https://idnchord.netlify.app/',
    images: ['/projects/idnchord-1.png', '/projects/idnchord-2.png'],
    gradient: 'from-violet-500/20 via-purple-500/10 to-fuchsia-500/20',
    accent: '#8B5CF6',
  },
  {
    id: 'fintopia-dashboard',
    title: 'Internal Operations Dashboard',
    description:
      'Enterprise dashboard for cross-division operations at Fintopia, featuring real-time data visualization, role-based access, and optimized performance for large datasets.',
    tech: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    github: 'https://github.com/egafrandika',
    demo: '#contact',
    images: ['/projects/dashboard-1.png', '/projects/dashboard-2.png'],
    gradient: 'from-indigo-500/20 via-purple-500/10 to-cyan-500/20',
    accent: '#6366F1',
  },
  {
    id: 'fintopia-website',
    title: 'Corporate Website & H5 Pages',
    description:
      'Enhanced official website and mobile H5 landing pages with improved usability, faster load times, and seamless cross-browser compatibility.',
    tech: ['React.js', 'JavaScript', 'Sass', 'Performance Optimization'],
    github: 'https://github.com/egafrandika',
    demo: '#contact',
    images: [
      '/projects/corporate-1.png',
      '/projects/corporate-2.png',
      '/projects/corporate-3.png',
    ],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-indigo-500/20',
    accent: '#06B6D4',
  },
  {
    id: 'attendance-system',
    title: 'Smart Attendance System',
    description:
      'Camera-based attendance system with face recognition and real-time geo-location validation, built for secure and accurate employee check-ins.',
    tech: ['jQuery', 'PHP', 'Python', 'Bootstrap'],
    github: 'https://github.com/egafrandika',
    demo: '#contact',
    gradient: 'from-violet-500/20 via-purple-500/10 to-pink-500/20',
    accent: '#8B5CF6',
  },
  {
    id: 'mask-detection',
    title: 'Real-time Mask Detection',
    description:
      'University thesis project using YOLOv3 (Darknet) for real-time mask object detection on embedded hardware, achieving 98% identification accuracy.',
    tech: ['Python', 'YOLOv3', 'Raspberry Pi', 'Arduino'],
    github: 'https://github.com/egafrandika',
    demo: '#contact',
    gradient: 'from-emerald-500/20 via-cyan-500/10 to-blue-500/20',
    accent: '#06B6D4',
  },
]

export const experience = [
  {
    company: 'PT Indonesia Fintopia Technology',
    position: 'Software Engineer',
    period: 'Jul 2022 — Present',
    duration: '3+ years',
    achievements: [
      'Developed and maintained internal platforms and user-facing applications using Vue.js and React.js.',
      'Enhanced official website, H5 pages, and internal dashboards across multiple divisions.',
      'Collaborated with Product, QA, and Backend teams to deliver high-quality features.',
      'Conducted code reviews and managed repositories via Phabricator (Differential & Diffusion).',
      'Implemented Jenkins CI/CD pipelines to automate build, test, and deployment processes.',
    ],
  },
  {
    company: 'PT BISA Indonesia',
    position: 'Developer',
    period: 'Dec 2021 — Apr 2022',
    duration: '5 months',
    achievements: [
      'Developed and maintained internal systems using Odoo ERP for daily operations.',
      'Built jQuery camera attendance system with face recognition for secure check-ins.',
      'Integrated real-time geo-location tracking to validate user coordinates.',
      'Designed responsive interfaces with Bootstrap across devices.',
    ],
  },
]

export const testimonials = [
  {
    name: 'Product Manager',
    role: 'Fintopia Technology',
    content:
      'Ega consistently delivers polished, performant frontend solutions. His attention to detail and ability to translate complex requirements into intuitive interfaces is exceptional.',
    avatar: 'PM',
  },
  {
    name: 'Senior Backend Engineer',
    role: 'Fintopia Technology',
    content:
      'Working with Ega on cross-functional features has been seamless. He communicates clearly, writes clean code, and always considers the end-user experience.',
    avatar: 'SE',
  },
  {
    name: 'Team Lead',
    role: 'BISA Indonesia',
    content:
      'Ega built our attendance system from scratch with impressive technical depth — face recognition, geo-tracking, and a clean UI that our team adopted immediately.',
    avatar: 'TL',
  },
]

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]
