import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Home, User, Briefcase, Wrench, Mail } from 'lucide-react';
import { DATA } from '../data';

const navIcons = { Home, About: User, Projects: Briefcase, Skills: Wrench, Contact: Mail };
const pathFor = (link) => (link === 'Home' ? '/' : `/${link.toLowerCase()}`);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => { document.documentElement.classList.toggle('dark', isDark); }, [isDark]);
  useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [isOpen]);
  useEffect(() => { setIsOpen(false); window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-full px-4 flex justify-center">
        <div className="flex items-center gap-1 bg-white/90 dark:bg-[#141414]/90 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 rounded-full pl-2 pr-2 py-2 shadow-lg shadow-black/5">
          <div className="hidden md:flex items-center gap-1">
            {DATA.navLinks.map((link) => {
              const Icon = navIcons[link] || Home;
              const path = pathFor(link);
              const isActive = location.pathname === path;
              return (
                <Link key={link} to={path} title={link} className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${isActive ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'}`}>
                  <Icon size={17} />
                </Link>
              );
            })}
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-200 dark:bg-white/10 mx-1" />
          <button onClick={() => setIsDark(!isDark)} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-all" aria-label="Toggle Theme">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link to="/contact" className="hidden sm:flex items-center px-5 h-10 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold ml-1 hover:opacity-90 transition-opacity">
            Hire Me
          </Link>
          <button className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-gray-700 dark:text-white" onClick={() => setIsOpen(true)}>
            <Menu size={18} />
          </button>
        </div>
      </nav>
      <div className={`fixed inset-0 z-[200] md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-72 bg-white dark:bg-[#111] shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center text-white text-xs font-black">EP</div>
              <span className="font-bold text-sm dark:text-white">Ebube Peter</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center"><X size={16} /></button>
          </div>
          <div className="p-4 space-y-1">
            {DATA.navLinks.map((link) => {
              const Icon = navIcons[link] || Home;
              const path = pathFor(link);
              const isActive = location.pathname === path;
              return (
                <Link key={link} to={path} className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-violet-50 dark:bg-violet-950/40 text-violet-600' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'}`}>
                  <Icon size={17} />{link}
                </Link>
              );
            })}
          </div>
          <div className="absolute bottom-8 left-0 right-0 px-6">
            <div className="p-4 bg-violet-50 dark:bg-violet-950/20 rounded-2xl border border-violet-100 dark:border-violet-900/30 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">Available for work</span>
              </div>
              <a href="mailto:ebubepeter919@gmail.com" className="text-xs text-gray-500 dark:text-gray-400">ebubepeter919@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
