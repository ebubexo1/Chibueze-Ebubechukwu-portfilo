import { motion } from 'framer-motion';
import { DATA } from '../data';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

const Projects = () => (
  <section id="projects" className="py-24 border-t border-gray-100 dark:border-white/5">
    <div className="flex items-end justify-between mb-12">
      <div>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600">Work</span>
        <h2 className="text-3xl md:text-4xl font-black mt-2 dark:text-white">Selected Projects</h2>
      </div>
      <span className="text-sm text-gray-400 hidden sm:block">{DATA.projects.length} projects</span>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {DATA.projects.map((item, i) => (
        <motion.div 
          key={i} 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          whileHover={{ y: -4 }}
          className="group overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-violet-200 dark:hover:border-violet-800/40 hover:shadow-xl hover:shadow-violet-100/50 dark:hover:shadow-violet-900/10 transition-all duration-300"
        >
          {/* Image */}
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block relative overflow-hidden bg-gray-50 dark:bg-white/5"
            style={{ aspectRatio: '16/9' }}
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold dark:text-white">{item.title}</h3>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 flex-shrink-0"
              >
                <HiOutlineArrowUpRight size={16} />
              </a>
            </div>
            
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
              {item.desc}
            </p>
            
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-gray-50 dark:bg-white/5 dark:text-gray-400 rounded-lg border border-gray-100 dark:border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
