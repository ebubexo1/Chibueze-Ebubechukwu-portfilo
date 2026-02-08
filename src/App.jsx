import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { DATA } from './data';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 sm:py-12 text-center text-gray-400 text-xs sm:text-sm border-t border-gray-50 dark:border-zinc-800 px-6">
        © {new Date().getFullYear()} {DATA?.profile?.name || 'Your Name'}. Built with React & Framer Motion.
      </footer>
    </div>
  );
}

export default App;