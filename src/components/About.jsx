import { motion } from 'framer-motion';
import { DATA } from '../data';

const About = () => (
  <section id="about" className="py-24 grid md:grid-cols-2 gap-16">
    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} viewport={{ once: true }}>
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">{DATA.profile.professionalBio}</p>
      <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 className="font-bold text-purple-600 mb-2">Development Philosophy</h4>
        <p className="text-sm text-gray-600 italic">"{DATA.profile.philosophy}"</p>
      </div>
    </motion.div>
    <div className="grid grid-cols-2 gap-4">
      {DATA.profile.stats.map((stat, i) => (
        <div key={i} className="p-8 border border-gray-100 rounded-3xl flex flex-col justify-center items-center">
          <h3 className="text-5xl font-black text-purple-600">{stat.value}</h3>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default About;