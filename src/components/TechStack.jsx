import { motion } from 'framer-motion';
import { DATA } from '../data';

const TechStack = () => (
  <section className="py-16 border-t border-gray-100 dark:border-white/5">
    <div className="max-w-xl mx-auto mb-10">
      <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm">
        <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/10">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-mono text-gray-400">~/ebube/stack</span>
        </div>
        <div className="px-5 py-4 bg-gray-950 dark:bg-black font-mono text-sm space-y-1.5">
          <p><span className="text-violet-400">$</span> <span className="text-green-400">cat</span> <span className="text-gray-300">tech-stack.json</span></p>
          <p className="text-gray-500 text-xs pl-2">▸ Frontend: React, JS, Tailwind, HTML, CSS</p>
          <p className="text-gray-500 text-xs pl-2">▸ Backend:  Node.js, Express, MongoDB</p>
          <p className="text-gray-500 text-xs pl-2">▸ Tools:    Git, Vite, Figma, VS Code</p>
          <p className="text-yellow-400 text-xs mt-1">→ 2+ years building production apps</p>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-5 md:gap-8">
      {DATA.technologies.map((tech, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} whileHover={{ y: -4, scale: 1.1 }} className="flex flex-col items-center gap-2 cursor-default group">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/[0.04] border border-gray-100 dark:border-white/10 flex items-center justify-center group-hover:border-violet-200 dark:group-hover:border-violet-800/40 transition-all duration-300 shadow-sm">
            <tech.icon size={22} style={{ color: tech.color }} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 group-hover:text-violet-500 transition-colors">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TechStack;
