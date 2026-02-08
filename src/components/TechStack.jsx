import { DATA } from '../data';

const TechStack = () => (
  <section className="py-12 border-y border-gray-100 dark:border-zinc-900">
    {/* grid-cols-2 forces 2 items per row. md:grid-cols-5 handles desktop. */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
      {DATA.technologies.map((tech, i) => (
        <div key={i} className="flex flex-col items-center justify-center gap-3 group">
          <tech.icon className="text-3xl sm:text-4xl group-hover:text-purple-600 transition-colors" />
          <span className="font-bold text-[10px] sm:text-xs uppercase tracking-widest dark:text-gray-300">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;