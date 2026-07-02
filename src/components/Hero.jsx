import { motion, useMotionValue, useTransform } from 'framer-motion';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { DATA } from '../data';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouse(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white dark:bg-[#0a0a0a] overflow-hidden">
      
      {/* Dot grid bg */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Gradient blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            {/* Available badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/40 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-green-700 dark:text-green-400">Available for work</span>
            </motion.div>

            <motion.h1 variants={item} className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter dark:text-white">
              I'm{' '}
              <span className="text-violet-600">Ebube</span>
              <span className="text-gray-300 dark:text-zinc-700">.</span>
              <span className="block text-gray-700 dark:text-zinc-300 text-2xl md:text-3xl lg:text-4xl mt-3 font-bold tracking-tight">
                Fullstack Developer
              </span>
            </motion.h1>
            
            <motion.p variants={item} className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              {DATA.profile.bio}
            </motion.p>
            
            <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/contact" 
                  className="px-7 py-3.5 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-colors text-sm flex items-center justify-center gap-2 shadow-lg shadow-violet-600/25"
                >
                  Get In Touch <HiArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.a 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                href="/Ebube_Peter_Resume.pdf" 
                download 
                className="px-7 py-3.5 bg-gray-50 dark:bg-white/5 dark:text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border border-gray-200 dark:border-white/10 text-sm"
              >
                Resume <HiDownload size={16} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="mt-14 flex items-center gap-8 justify-center lg:justify-start">
              {DATA.profile.stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl font-black text-violet-600">{stat.value}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
              <div className="w-px h-10 bg-gray-200 dark:bg-white/10" />
              <p className="text-xs text-gray-400 italic max-w-[140px] leading-relaxed">
                "{DATA.profile.philosophy}"
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:w-2/5 justify-end"
            onMouseMove={handleMouse}
            onMouseLeave={() => { x.set(0); y.set(0); }}
          >
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[360px] aspect-[4/5]"
            >
              <img 
                src="/peter.jpeg" 
                alt={DATA.profile.name}
                className="w-full h-full object-cover shadow-2xl z-10 relative rounded-[2.5rem] rounded-br-[5rem]"
              />
              {/* Decorative ring */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[2.5rem] rounded-br-[5rem] border-2 border-violet-200 dark:border-violet-800/40 -z-10" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-violet-500/15 blur-[60px] -z-10" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
