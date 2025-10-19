'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPhp,
  SiPython, SiMongodb, SiOpenai,
  SiGit, SiDocker, SiCodecrafters, SiVercel, SiFigma, SiLinux 
} from 'react-icons/si';
import { Database, BarChart3, Coffee, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Développement',
    skills: [
      { name: 'React Native', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Java', icon: Coffee },
      { name: 'PHP', icon: SiPhp },
    ],
  },
  {
    title: 'Data & IA',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'SQL', icon: Database },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Looker', icon: BarChart3 },
      { name: 'Claude', icon: Sparkles },
      { name: 'OpenAI', icon: SiOpenai },
    ],
  },
  {
    title: 'Outils & DevOps',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'VS Code', icon: SiCodecrafters },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Linux', icon: SiLinux },
      { name: 'Figma', icon: SiFigma },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="skills" className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-text mb-6">
            Mes
            <span className="block text-primary text-glow">compétences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-background p-8 rounded-3xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-medium text-primary mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.2 + skillIdx * 0.1 }}
                    className="flex items-center gap-4 text-textSecondary hover:text-primary transition-colors cursor-default group"
                  >
                    <skill.icon className="text-xl group-hover:scale-110 transition-transform" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}