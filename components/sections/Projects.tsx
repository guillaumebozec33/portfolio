// components/sections/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Job board',
        desc: "Plateforme de recherche d'emploi",
        tags: ['React.js', 'Docker', 'ExpressJS'],
        color: 'from-blue-500 to-cyan-500',
        image: "./images/job-board.png",
    },
    {
        title: 'Kotoba',
        desc: "Application mobile d'apprentissage du japonais",
        tags: ['React Native', 'ExpressJS', 'SQL'],
        color: 'from-purple-500 to-pink-500',
        image: "./images/kotoba.png",
    },
    {
        title: 'Ma Banque Facile',
        desc: 'Application mobile et site web permettant de suivre ses dépenses ainsi que les catégoriser',
        tags: ['Next.js', 'React Native', 'SQL'],
        color: 'from-green-500 to-teal-500',
        image: "./images/ma-banque-facile.png",
    },
    {
        title: 'SmartCity',
        desc: 'Application mobile permettant de localiser, noter et référencer tous les parcs bordelais selon une liste de critères',
        tags: ['Python', 'React Native', 'Supabase'],
        color: 'from-green-500 to-teal-500',
        image: undefined,
    },
];

export default function Projects() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const handleLinkClick = (url?: string) => {
        if (url) {
            window.open(url, '_blank');
        } else {
            alert('Feature coming soon');
        }
    };

    return (
        <section id="projects" className="py-32 px-6 lg:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-text mb-16">
                        Projets sélectionnés
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group relative bg-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                            >
                                <div className={`h-64 relative overflow-hidden ${
                                    project.image ? '' : `bg-gradient-to-br ${project.color}`
                                }`}>
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={`Screenshot de ${project.title}`}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <button
                                            onClick={() => handleLinkClick(project.github)}
                                            className="p-4 bg-background rounded-full hover:bg-primary transition-colors"
                                        >
                                            <Github size={24} className="text-text" />
                                        </button>
                                        <button
                                            onClick={() => handleLinkClick(project.demo)}
                                            className="p-4 bg-background rounded-full hover:bg-primary transition-colors"
                                        >
                                            <ExternalLink size={24} className="text-text" />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-textSecondary mb-6">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-2 bg-secondary/30 text-text text-sm rounded-full border border-primary/20"
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}