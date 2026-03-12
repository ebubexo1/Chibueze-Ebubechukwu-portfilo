import { motion, useMotionValue, useTransform } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { DATA } from '../data';

const Hero = () => {
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 sm:pt-0 flex items-center bg-white dark:bg-zinc-950 overflow-hidden">
      
      {/* Background Grid Dots */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* LEFT: Text Content (Centers on mobile, Aligns left on desktop) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            <motion.span variants={itemVariants} className="text-purple-600 font-bold tracking-widest uppercase text-xs sm:text-sm">
              hi! 👋
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="mt-4 text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight dark:text-white">
              I'm <span className="text-purple-600">{DATA.profile.name}</span>,
              <span className="block text-gray-800 dark:text-zinc-200 text-2xl md:text-4xl mt-4 font-bold italic">
                a {DATA.profile.role.toLowerCase()}.
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="mt-6 text-sm md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {DATA.profile.bio}
            </motion.p>
            
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="px-8 py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 shadow-xl shadow-purple-200 dark:shadow-none transition-all text-center">
                Get In Touch
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/Ebube_Peter_Resume.pdf" download className="px-8 py-4 bg-zinc-100 dark:bg-zinc-900 dark:text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
                RESUME <HiDownload size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Image (Hidden on Mobile with 'hidden lg:flex') */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:w-2/5 relative justify-end perspective-1000"
            onMouseMove={handleMouse}
            onMouseLeave={() => { x.set(0); y.set(0); }}
          >
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[400px] aspect-[4/5]"
            >
              <img 
                src="/peter.jpeg" 
                alt={DATA.profile.name}
                className="w-full h-full object-cover shadow-2xl z-10 relative 
                           rounded-t-[40px] rounded-bl-[40px] rounded-br-[200px]" 
              />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 blur-[100px] -z-10" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;