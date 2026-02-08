import { motion } from 'framer-motion';
import { DATA } from '../data';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

const Projects = () => (
  <section id="projects" className="py-16 sm:py-24 px-4 sm:px-0">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 dark:text-white">Selected Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {DATA.projects.map((item, i) => (
        <motion.div 
          key={i} 
          whileHover={{ y: -10 }} 
          className="group overflow-hidden rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-2xl hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300"
        >
          {/* 1. IMAGE SECTION - WRAPPED IN LINK */}
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block relative aspect-video overflow-hidden bg-gray-100 dark:bg-zinc-800 cursor-pointer"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/5 transition-colors duration-500" />
          </a>

          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
              
              {/* 2. ARROW BUTTON - WRAPPED IN LINK */}
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors cursor-pointer"
              >
                <HiOutlineArrowUpRight size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
            
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 sm:mb-6 line-clamp-3">
              {item.desc}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 bg-gray-50 dark:bg-zinc-800 dark:text-gray-300 rounded-full"
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