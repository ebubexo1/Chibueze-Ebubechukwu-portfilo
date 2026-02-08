import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { DATA } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Logic to toggle the 'dark' class on the <html> element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold z-[110]">
          <div className="w-10 h-10 rounded-full border-2 border-purple-600 flex items-center justify-center text-purple-600">/</div>
          <span className="dark:text-white uppercase tracking-tighter">Portfolio</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {DATA.navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button 
            onClick={() => setIsDark(!isDark)} 
            className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>

          {/* Hamburger Menu Icon */}
          <button 
            className="md:hidden text-2xl z-[110] dark:text-white p-1" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-zinc-950 z-[105] flex flex-col items-center justify-center gap-8 md:hidden">
          {DATA.navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black text-gray-900 dark:text-white hover:text-purple-600 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; // The missing piece!