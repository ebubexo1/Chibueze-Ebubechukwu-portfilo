import { 
  SiJavascript, SiReact, SiTailwindcss, SiGithub, SiLinkedin,
  SiX, SiTiktok, SiInstagram, SiNodedotjs, SiMongodb,
  SiExpress, SiGit, SiVite, SiHtml5, SiCss3,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export const DATA = {
  profile: {
    name: "Chibueze Ebubechukwu Peter",
    shortName: "Ebube Peter",
    role: "Fullstack Developer",
    greeting: "Available for work",
    bio: "I craft intuitive, high-performance web experiences — where clean code meets thoughtful design.",
    professionalBio: "I am a fullstack developer with 2+ years of experience building production websites and web apps end-to-end — from pixel-perfect UIs to scalable Node.js APIs and MongoDB databases. I care deeply about the intersection of design and engineering, and I love turning complex problems into simple, beautiful solutions.",
    philosophy: "Simplicity is the ultimate sophistication.",
    location: "Nigeria",
    available: true,
    stats: [
      { label: "Years Exp.", value: "2+" },
      { label: "Projects", value: "10+" },
      { label: "Hackathons", value: "Several" },
    ],
    highlights: [
      { emoji: "🏆", title: "Hackathon Veteran", desc: "Participated in several hackathons — shipping full production-ready products under pressure and tight deadlines." },
      { emoji: "🌍", title: "Nigerian Market Focus", desc: "Building products tailored for African fintech and commerce — Paystack integration, booking systems, expense tracking." },
      { emoji: "🤝", title: "Open Source Contributor", desc: "Backend contributor to Afrisocial — a social media platform built for African communities." },
    ],
    timeline: [
      { year: "2024", title: "Started Building", desc: "Began building real production websites and web apps with React, learning component architecture and responsive design from scratch." },
      { year: "2025", title: "Full-Stack Expansion", desc: "Added Node.js, Express, and MongoDB to the toolkit — shipped first full-stack web apps with REST APIs, Auth, and CI/CD pipelines." },
      { year: "2026", title: "Hackathons & Collaboration", desc: "Participated in several hackathons, built Flowora (booking & expense SaaS), contributed backend fixes to Afrisocial, scaffolded multi-tenant SaaS architecture." }
    ]
  },
  navLinks: ["Home", "About", "Projects", "Skills", "Contact"],
  technologies: [
    { icon: SiHtml5,       name: "HTML",       color: "#E34F26" },
    { icon: SiCss3,        name: "CSS",        color: "#1572B6" },
    { icon: SiJavascript,  name: "JavaScript", color: "#F7DF1E" },
    { icon: SiReact,       name: "React",      color: "#61DAFB" },
    { icon: SiTailwindcss, name: "Tailwind",   color: "#06B6D4" },
    { icon: SiNodedotjs,   name: "Node.js",    color: "#339933" },
    { icon: SiExpress,     name: "Express",    color: "#888888" },
    { icon: SiMongodb,     name: "MongoDB",    color: "#47A248" },
    { icon: SiGit,         name: "Git",        color: "#F05032" },
    { icon: SiVite,        name: "Vite",       color: "#646CFF" },
    { icon: VscCode,       name: "VS Code",    color: "#007ACC" },
  ],
  projects: [
    { title: "Flowora", desc: "A business SaaS for online bookings, expense tracking, and business reports — helping businesses run smarter and get organised faster.", tags: ["React", "Node.js", "MongoDB", "Paystack"], image: "/img8.png", link: "https://floworax.vercel.app/", featured: true },
    { title: "Message-me", desc: "A sleek, real-time messaging interface built for seamless user interaction.", tags: ["React", "Tailwind", "Firebase"], image: "/img2.png", link: "https://npm-kappa-nine.vercel.app/" },
    { title: "Real-Estate", desc: "Eagle Altura Properties — a modern property listing platform with advanced filtering.", tags: ["React", "Tailwind", "Framer Motion"], image: "/img5.png", link: "https://eagle-alutra.vercel.app/" },
    { title: "Scaffolding", desc: "Industrial service portal for Ykefolds Integrated Service Limited.", tags: ["JavaScript", "CSS", "HTML"], image: "/img7.png", link: "https://scaffolding-22.vercel.app" },
    { title: "Ecommerce", desc: "Gozymasterpiece — a high-converting online storefront with a custom UI.", tags: ["React", "Tailwind", "Redux"], image: "/img4.png", link: "https://gozymasterpiece.vercel.app/" },
  ],
  skills: {
    Frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    Backend:  ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"],
    Tools:    ["Git", "GitHub", "VS Code", "Vite", "CI/CD"],
    Other:    ["UI/UX Design", "Performance", "Responsive Design", "PWA"],
  },
  socials: [
    { icon: SiGithub,    href: "https://github.com/ebubexo1", name: "GitHub" },
    { icon: SiLinkedin,  href: "https://www.linkedin.com/in/chibueze-ebubechukwu-peter-836a9739b/", name: "LinkedIn" },
    { icon: SiX,         href: "https://x.com/ebube_pete69438", name: "Twitter" },
    { icon: SiTiktok,    href: "https://www.tiktok.com/@velox.dev", name: "TikTok" },
    { icon: SiInstagram, href: "https://www.instagram.com/chibuezeebubepeter/", name: "Instagram" },
  ]
};
