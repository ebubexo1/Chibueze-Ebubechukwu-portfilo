import { motion } from 'framer-motion';
import { DATA } from '../data';

const Timeline = () => (
  <section className="py-24 border-t border-gray-100 dark:border-white/5">
    <div className="text-center mb-16">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600">Journey</span>
      <h2 className="text-3xl md:text-4xl font-black mt-2 dark:text-white">2 Years of Growth</h2>
    </div>

    <div className="relative max-w-2xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-300 via-violet-200 to-transparent dark:from-violet-800 dark:via-violet-900/40" />

      <div className="space-y-12">
        {DATA.profile.timeline.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative pl-10"
          >
            {/* Dot */}
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-violet-600 ring-4 ring-violet-100 dark:ring-violet-950/40" />

            <span className="text-[11px] font-black uppercase tracking-widest text-violet-500">{entry.year}</span>
            <h3 className="text-lg font-bold dark:text-white mt-1 mb-1.5">{entry.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">{entry.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
