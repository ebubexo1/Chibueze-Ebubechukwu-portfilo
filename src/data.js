import { 
  SiJavascript,
  SiReact, 
  SiTailwindcss, 
  SiGithub, 
  SiLinkedin, 
  SiX,
  SiTiktok,
  SiInstagram,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export const DATA = {
  profile: {
    name: "Chibueze Ebubechukwu Peter",
    shortName: "Ebube Peter",
    role: "Frontend Developer",
    greeting: "Available for work",
    bio: "I craft intuitive, high-performance web experiences — where clean code meets thoughtful design.",
    professionalBio: "I'm a frontend developer who cares deeply about the intersection of design and engineering. I build things that are fast, accessible, and a joy to use.",
    philosophy: "Simplicity is the ultimate sophistication.",
    stats: [
      { label: "Years Exp.", value: "2+" },
      { label: "Projects", value: "10+" }
    ],
    timeline: [
      { year: "2024", title: "Started Frontend Journey", desc: "Began building real projects with React, learning component architecture and responsive design." },
      { year: "2025", title: "Full-Stack Expansion", desc: "Added Node.js, Express, and MongoDB to the toolkit — shipped first full-stack apps." },
      { year: "2026", title: "Hackathons & Collaboration", desc: "Built PayTrack Lite for Enyata Buildathon, contributed backend fixes to Afrisocial, scaffolded multi-tenant SaaS architecture." }
    ]
  },
  navLinks: ["Home", "About", "Projects", "Skills", "Contact"],
  technologies: [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiReact, name: "React" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: VscCode, name: "VS Code" },
  ],
  projects: [
    { 
      title: "Flowora", 
      desc: "A business SaaS for bookings, Paystack payments, expense tracking, and reports — run your business and get paid faster.", 
      tags: ["React", "Node.js", "MongoDB", "Paystack"], 
      image: "/img-flowora.png", 
      link: "https://floworax.vercel.app/",
      featured: true
    },
    { 
      title: "Message-me", 
      desc: "A sleek, real-time messaging interface built for seamless user interaction.", 
      tags: ["React", "Tailwind", "Firebase"], 
      image: "/img2.png", 
      link: "https://message-me.pxxl.click" 
    },
    { 
      title: "Real-Estate", 
      desc: "Eagle Altura Properties — a modern property listing platform with advanced filtering.", 
      tags: ["React", "Tailwind", "Framer Motion"], 
      image: "/img5.png", 
      link: "https://eagle-alutra.vercel.app/" 
    },
    { 
      title: "Scaffolding", 
      desc: "Industrial service portal for Ykefolds Integrated Service Limited.", 
      tags: ["JavaScript", "CSS", "HTML"], 
      image: "/img7.png", 
      link: "https://scaffolding-22.vercel.app" 
    },
    { 
      title: "Ecommerce", 
      desc: "Gozymasterpiece — a high-converting online storefront with a custom UI.", 
      tags: ["React", "Tailwind", "Redux"], 
      image: "/img4.png", 
      link: "https://gozymasterpiece.vercel.app/" 
    },
  ],
  skills: {
    Frontend: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    Tools: ["VS Code", "Git", "GitHub", "Vite", "Figma"],
    Other: ["UI Design", "Performance", "Responsive Design"]
  },
  socials: [
    { icon: SiGithub, href: "https://github.com/ebubexo1", name: "GitHub" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/chibueze-ebubechukwu-peter-836a9739b/", name: "LinkedIn" },
    { icon: SiX, href: "https://x.com/ebube_pete69438", name: "Twitter" },
    { icon: SiTiktok, href: "http://www.tiktok.com/@am_peter6", name: "TikTok" },
    { icon: SiInstagram, href: "https://www.instagram.com/chibuezeebubepeter/", name: "Instagram" },
  ]
};
