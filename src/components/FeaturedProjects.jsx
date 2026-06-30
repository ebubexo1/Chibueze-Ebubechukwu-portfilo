import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineArrowUpRight, HiArrowRight } from 'react-icons/hi2';
import { HiArrowRight as HiArrowRightSolid } from 'react-icons/hi';
import { DATA } from '../data';

const FeaturedProjects = () => {
  const featured = DATA.projects.slice(0, 3);

  return (
    <section className="py-24 border-t border-gray-100 dark:border-white/5">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600">Work</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 dark:text-white">Featured Projects</h2>
        </div>
        <Link 
          to="/projects" 
          className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:gap-2.5 transition-all"
        >
          View all <HiArrowRightSolid size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {featured.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-violet-200 dark:hover:border-violet-800/40 hover:shadow-xl hover:shadow-violet-100/50 dark:hover:shadow-violet-900/10 transition-all duration-300"
          >
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
              {item.featured && (
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-violet-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg">
                  Featured
                </span>
              )}
            </a>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-bold dark:text-white">{item.title}</h3>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-50 dark:bg-white/5 rounded-lg flex items-center justify-center text-gray-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 flex-shrink-0"
                >
                  <HiOutlineArrowUpRight size={14} />
                </a>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-2">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <Link 
        to="/projects" 
        className="sm:hidden mt-6 flex items-center justify-center gap-1.5 text-sm font-semibold text-violet-600 py-3 border border-violet-200 dark:border-violet-800/40 rounded-xl"
      >
        View all projects <HiArrowRightSolid size={15} />
      </Link>
    </section>
  );
};

export default FeaturedProjects;
