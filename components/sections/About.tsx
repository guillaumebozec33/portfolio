// components/sections/About.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, ChartNoAxesCombined, Zap } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    { icon: Code2, title: 'Clean Code', desc: 'Code maintenable, performant et structuré pour évoluer dans le temps' },
    { icon: ChartNoAxesCombined, title: 'Data & IA', desc: 'Analyse, visualisation et intégration de données pour mieux comprendre et anticiper' },
    { icon: Zap, title: 'Performance', desc: 'Optimisation et rapidité pour des applications fluides et efficaces' },
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
            À propos
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-text mb-8">
            Qui suis-je ?
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
            <div>
              <p className="text-lg text-textSecondary mb-6 leading-relaxed">
                Développeur passionné par le mobile, le web et la data, j’étudie à Epitech, où je développe mes compétences en programmation (WEB, JAVA, PYTHON...) et en analyse de données.
              </p>
              <p className="text-lg text-textSecondary mb-6 leading-relaxed">
               Mon objectif est de créer des applications performantes, intuitives et intelligentes, capables de transformer la donnée en informations utiles pour l’utilisateur. J’aime allier esthétique visuelle, architecture technique solide et analyse de données pour concevoir des projets à forte valeur ajoutée.

              </p>
              <p className="text-lg text-textSecondary leading-relaxed">
                Toujours en quête d’innovation, je m’intéresse aussi à l’IA locale, à la vision par ordinateur et aux objets connectés. Ces domaines me permettent de repousser les limites du développement et de donner vie à des projets concrets, mêlant technologie, performance et sens.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-surface rounded-2xl hover:bg-card transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-background transition-colors">
                    <feature.icon size={24} className="text-primary group-hover:text-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text mb-2">{feature.title}</h3>
                    <p className="text-textSecondary">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}