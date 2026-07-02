import { motion } from 'framer-motion';
import { MapPin, Zap } from 'lucide-react';
import { DATA } from '../data';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
});

const About = () => (
  <div className="py-24 space-y-20">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div {...fade()}>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600">About Me</span>
        <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 dark:text-white leading-tight tracking-tighter">
          Building the web,<br />
          <span className="text-gray-300 dark:text-zinc-600 font-light italic">one line at a time.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">{DATA.profile.professionalBio}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <MapPin size={14} className="text-violet-500 flex-shrink-0" />
          <span>Based in Nigeria — building for the African web</span>
        </div>
      </motion.div>
      <motion.div {...fade(0.1)} className="grid grid-cols-3 gap-3">
        {DATA.profile.stats.map((stat, i) => (
          <div key={i} className="p-5 border border-gray-100 dark:border-white/5 rounded-2xl flex flex-col items-center justify-center bg-gray-50/50 dark:bg-white/[0.02] hover:border-violet-200 dark:hover:border-violet-800/40 transition-colors text-center">
            <h3 className="text-3xl font-black text-violet-600">{stat.value}</h3>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
          </div>
        ))}
        <div className="col-span-3 p-5 border border-violet-100 dark:border-violet-900/20 rounded-2xl bg-violet-50/50 dark:bg-violet-950/10">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-violet-500 block mb-1.5">Philosophy</span>
          <p className="text-sm text-gray-600 dark:text-gray-300 italic">"{DATA.profile.philosophy}"</p>
        </div>
      </motion.div>
    </div>

    <motion.div {...fade(0.1)}>
      <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm max-w-2xl">
        <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/10">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-mono text-gray-400">~/ebube/whoami</span>
        </div>
        <div className="px-5 py-5 bg-gray-950 dark:bg-black font-mono text-sm space-y-2">
          <p><span className="text-violet-400">$</span> <span className="text-green-400">whoami</span></p>
          <div className="pl-2 space-y-1 text-xs">
            <p><span className="text-yellow-400">name</span>    <span className="text-gray-500">:</span> <span className="text-gray-200">Chibueze Ebubechukwu Peter</span></p>
            <p><span className="text-yellow-400">alias</span>   <span className="text-gray-500">:</span> <span className="text-gray-200">Ebube</span></p>
            <p><span className="text-yellow-400">role</span>    <span className="text-gray-500">:</span> <span className="text-violet-300">Fullstack Developer</span></p>
            <p><span className="text-yellow-400">location</span><span className="text-gray-500">:</span> <span className="text-gray-200">Nigeria 🇳🇬</span></p>
            <p><span className="text-yellow-400">exp</span>     <span className="text-gray-500">:</span> <span className="text-green-400">2+ years</span></p>
            <p><span className="text-yellow-400">focus</span>   <span className="text-gray-500">:</span> <span className="text-gray-200">["African fintech", "SaaS", "Open Source"]</span></p>
            <p><span className="text-yellow-400">status</span>  <span className="text-gray-500">:</span> <span className="text-green-400 animate-pulse">● available for work</span></p>
          </div>
          <p className="text-gray-600 text-xs pt-1">▌</p>
        </div>
      </div>
    </motion.div>

    <motion.div {...fade(0.1)}>
      <div className="flex items-center gap-4 mb-8">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Highlights</span>
        <div className="flex-1 h-px bg-gray-100 dark:bg-white/5" />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {DATA.profile.highlights.map((h, i) => (
          <motion.div key={i} {...fade(i * 0.1)} className="p-6 border border-gray-100 dark:border-white/5 rounded-2xl bg-gray-50/30 dark:bg-white/[0.02] hover:border-violet-200 dark:hover:border-violet-800/30 transition-all">
            <span className="text-3xl mb-4 block">{h.emoji}</span>
            <h3 className="text-sm font-bold dark:text-white mb-2">{h.title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div {...fade(0.1)}>
      <div className="flex items-center gap-4 mb-6">
        <Zap size={14} className="text-violet-500" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Currently focused on</span>
        <div className="flex-1 h-px bg-gray-100 dark:bg-white/5" />
      </div>
      <div className="flex flex-wrap gap-2.5">
        {['React 19', 'Node.js APIs', 'MongoDB', 'Full-Stack SaaS', 'African Fintech', 'Open Source'].map(tag => (
          <span key={tag} className="text-xs px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 font-medium hover:border-violet-300 hover:text-violet-600 transition-all cursor-default">{tag}</span>
        ))}
      </div>
    </motion.div>
  </div>
);

export default About;
