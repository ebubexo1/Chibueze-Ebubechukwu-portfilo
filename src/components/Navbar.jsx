import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Home, User, Briefcase, Wrench, Mail } from 'lucide-react';
import { DATA } from '../data';

const navIcons = { Home, About: User, Projects: Briefcase, Skills: Wrench, Contact: Mail };
const pathFor = (link) => (link === 'Home' ? '/' : `/${link.toLowerCase()}`);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-gray-100 dark:border-white/5'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-[68px] flex justify-between items-center">

          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-violet-600 flex items-center justify-center text-white text-xs font-black tracking-tight shadow-lg shadow-violet-600/30">
              EP
            </div>
            <span className="font-bold text-sm dark:text-white hidden sm:block tracking-tight">
              Ebube Peter
            </span>
          </Link>

          <div className="hidden md:flex items-center bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 rounded-2xl p-1 gap-0.5">
            {DATA.navLinks.map((link) => {
              const Icon = navIcons[link] || Home;
              const path = pathFor(link);
              const isActive = location.pathname === path;
              return (
                <Link
                  key={link}
                  to={path}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-white/10 text-violet-600 shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Icon size={13} />
                  {link}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-violet-600 hover:border-violet-300 dark:hover:border-violet-700 transition-all flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button
              className="md:hidden w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={17} />
            </button>
          </div>
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
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-300"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-4 space-y-1">
            {DATA.navLinks.map((link) => {
              const Icon = navIcons[link] || Home;
              const path = pathFor(link);
              const isActive = location.pathname === path;
              return (
                <Link
                  key={link}
                  to={path}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-violet-50 dark:bg-violet-950/40 text-violet-600'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Icon size={17} />
                  {link}
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
              <a href="mailto:ebubepeter919@gmail.com" className="text-xs text-gray-500 dark:text-gray-400">
                ebubepeter919@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
