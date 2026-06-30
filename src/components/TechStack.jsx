import { DATA } from '../data';

const TechStack = () => (
  <section className="py-10 border-y border-gray-100 dark:border-white/5">
    <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 dark:text-gray-600 mb-8">
      Tech I work with
    </p>
    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
      {DATA.technologies.map((tech, i) => (
        <div 
          key={i} 
          className="flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-all duration-300 group cursor-default"
        >
          <tech.icon className="text-2xl group-hover:text-violet-600 transition-colors" />
          <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
