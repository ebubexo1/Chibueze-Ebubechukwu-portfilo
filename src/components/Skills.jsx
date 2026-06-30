import { motion } from 'framer-motion';
import { DATA } from '../data';

const Skills = () => (
  <section id="skills" className="py-24 border-t border-gray-100 dark:border-white/5">
    <div className="max-w-2xl mx-auto text-center mb-14">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600">Skills</span>
      <h2 className="text-3xl md:text-4xl font-black mt-2 dark:text-white">My Arsenal</h2>
    </div>

    <div className="max-w-3xl mx-auto space-y-10">
      {Object.entries(DATA.skills).map(([category, list], ci) => (
        <motion.div 
          key={category}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 16 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: ci * 0.1 }}
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{category}</span>
            <div className="flex-1 h-px bg-gray-100 dark:bg-white/5" />
          </div>
          <div className="flex flex-wrap gap-2.5">
            {list.map(skill => (
              <motion.span 
                key={skill} 
                whileHover={{ scale: 1.03, borderColor: '#7c3aed', color: '#7c3aed' }}
                className="px-5 py-2.5 border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 cursor-default transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
