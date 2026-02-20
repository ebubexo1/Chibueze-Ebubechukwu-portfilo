import { 
  SiJavascript,
  SiReact, 
  SiTailwindcss, 
  SiGithub, 
  SiLinkedin, 
  SiX,
  SiTiktok,
  SiInstagram,
  
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export const DATA = {
  profile: {
    name: "Chibueze Ebubechukwu Peter",
    role: "Frontend Developer",
    greeting: "hi! 👋",
    bio: "A frontend developer crafting intuitive, modern Ui. Blending aesthetics, functionality, and clean code.",
    professionalBio: "Based in the digital ether, I specialize in building high-performance web applications. My philosophy is simple: if it doesn't solve a problem or look beautiful, why build it?",
    philosophy: "Simplicity is the ultimate sophistication.",
    stats: [
      { label: "Years Exp.", value: "01+" },
      { label: "Projects", value: "10+" }
    ]
  },
  navLinks: ["Home", "About", "Projects", "Skills", "Contact"],
  technologies: [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiReact, name: "React" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: VscCode, name: "VS Code" }
  ],
  projects: [
    { title: "Message-me", desc: "A Message-me webpage.", tags: ["React", "Tailwind"], image: "/img1.png", link: "https://message-me.pxxl.click" },
    { title: "Real-Estate", desc: "Real estate webpage.", tags: ["JavaScript, react, taiwind",], image: "/img2.png", link: "https://real-est.pxxl.click" },
    { title: "Scaffolding", desc: "Ykefolds Integrated Service Limited.", tags: ["JavaScript"], image: "/img3.png", link: "https://scaffolding-22.vercel.app" }
  ],
  skills: {
    Frontend: ["React","JavaScript", "Tailwind CSS"],
    Tools: ["VS Code", "Git", "Github", "Vite"],
    Other: ["UI Design","Performance"]
  },
  socials: [
    { icon: SiGithub, href: "https://github.com/ebubexo1", name: "GitHub" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/chibueze-ebubechukwu-peter-836a9739b/", name: "LinkedIn" },
    { icon: SiX, href: "https://x.com/ebube_pete69438", name: "Twitter" },
    { icon: SiTiktok, href: "http://www.tiktok.com/@am_peter6", name: "Tiktok" },
    { icon: SiInstagram, href: "https://www.instagram.com/chibuezeebubepeter/", name: "Instagram" },
  ]
};



