import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { DATA } from '../data';

const Hero = () => (
  <section id="home" className="min-h-screen pt-32 sm:pt-40 pb-16 sm:pb-20 flex flex-col justify-center bg-white dark:bg-zinc-950">
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto px-6"
    >
      {/* Greeting */}
      <span className="text-purple-600 font-bold tracking-widest uppercase text-xs sm:text-sm block">
        {DATA.profile.greeting}
      </span>
      
      {/* Name and Role */}
      <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight break-words dark:text-white">
        I'm <span className="text-purple-600 break-words">{DATA.profile.name}</span>,<br />
        <span className="block mt-2">a {DATA.profile.role.toLowerCase()}.</span>
      </h1>
      
      {/* Bio */}
      <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
        {DATA.profile.bio}
      </p>
      
      {/* Action Buttons */}
      <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        
        {/* 1. SCROLL TO CONTACT: Uses an anchor tag with ID link */}
        <a 
          href="#contact" 
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 shadow-lg shadow-purple-200 dark:shadow-purple-900/30 transition-all text-sm sm:text-base text-center"
        >
          Get in Touch
        </a>

        {/* 2. DOWNLOAD RESUME: Points to the file in your PUBLIC folder */}
        <a 
          href="/Ebube_Peter_Resume.pdf" 
          download="Ebube_Peter_Resume.pdf"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-200 dark:border-zinc-700 dark:text-white font-bold rounded-full hover:border-purple-600 hover:text-purple-600 dark:hover:border-purple-500 dark:hover:text-purple-500 flex items-center justify-center gap-2 transition-all text-sm sm:text-base cursor-pointer"
        >
          Resume <HiDownload size={18} />
        </a>

      </div>
    </motion.div>
  </section>
);

export default Hero; 