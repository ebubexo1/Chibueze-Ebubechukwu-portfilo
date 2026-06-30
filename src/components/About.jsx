import { motion } from 'framer-motion';
import { DATA } from '../data';

const About = () => (
  <section id="about" className="py-24">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: -24 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600">About Me</span>
        <h2 className="text-3xl md:text-4xl font-black mt-3 mb-6 dark:text-white leading-tight">
          Building for the web,<br />
          <span className="text-gray-400 dark:text-zinc-500 font-light italic">one component at a time.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
          {DATA.profile.professionalBio}
        </p>
        <div className="p-5 bg-violet-50 dark:bg-violet-950/20 rounded-2xl border border-violet-100 dark:border-violet-900/30">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-500 block mb-2">Philosophy</span>
          <p className="text-sm text-gray-600 dark:text-gray-300 italic">"{DATA.profile.philosophy}"</p>
        </div>
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 24 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="grid grid-cols-2 gap-4"
      >
        {DATA.profile.stats.map((stat, i) => (
          <div 
            key={i} 
            className="p-8 border border-gray-100 dark:border-white/5 rounded-3xl flex flex-col justify-center items-center bg-gray-50/50 dark:bg-white/[0.02] hover:border-violet-200 dark:hover:border-violet-800/40 transition-colors"
          >
            <h3 className="text-5xl font-black text-violet-600">{stat.value}</h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2 text-center">{stat.label}</p>
          </div>
        ))}
        <div className="col-span-2 p-6 border border-gray-100 dark:border-white/5 rounded-3xl bg-gray-50/50 dark:bg-white/[0.02]">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-300 dark:text-gray-600 mb-3">Currently focused on</p>
          <div className="flex flex-wrap gap-2">
            {['React 19', 'Node.js', 'Full-Stack SaaS'].map(tag => (
              <span key={tag} className="text-xs px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
