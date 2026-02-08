import { DATA } from '../data';

const Skills = () => (
  <section id="skills" className="py-24 border-t border-gray-50">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills & Arsenal</h2>
      <div className="space-y-12">
        {Object.entries(DATA.skills).map(([category, list]) => (
          <div key={category}>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">{category}</h4>
            <div className="flex flex-wrap gap-3">
              {list.map(skill => (
                <span key={skill} className="px-6 py-3 border border-gray-100 rounded-2xl text-sm font-medium hover:border-purple-600 hover:text-purple-600 transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;